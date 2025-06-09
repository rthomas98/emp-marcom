<?php

namespace App\Filament\Pages\Auth;

use App\Notifications\CustomResetPassword;
use DanHarrin\LivewireRateLimiting\Exceptions\TooManyRequestsException;
use Exception;
use Filament\Facades\Filament;
use Filament\Notifications\Notification;
use Filament\Pages\Auth\PasswordReset\RequestPasswordReset as BaseRequestPasswordReset;
use Illuminate\Auth\Events\PasswordResetLinkSent;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;

class RequestPasswordReset extends BaseRequestPasswordReset
{
    public function request(): void
    {
        try {
            Log::info('Password reset request initiated');
            $this->rateLimit(2);
        } catch (TooManyRequestsException $exception) {
            Log::warning('Password reset rate limit exceeded', [
                'seconds_until_available' => $exception->secondsUntilAvailable,
            ]);
            $this->getRateLimitedNotification($exception)?->send();

            return;
        }

        $data = $this->form->getState();
        Log::info('Password reset request form data', ['email' => $data['email'] ?? 'not provided']);
        
        $status = Password::broker(Filament::getAuthPasswordBroker())->sendResetLink(
            $this->getCredentialsFromFormData($data),
            function (CanResetPassword $user, string $token): void {
                Log::info('Password reset callback triggered for user', [
                    'user_id' => $user->id ?? 'unknown',
                    'email' => $user->email ?? 'unknown',
                ]);
                
                if (! method_exists($user, 'notify')) {
                    $userClass = $user::class;
                    Log::error("User model does not have notify() method", ['class' => $userClass]);
                    throw new Exception("Model [{$userClass}] does not have a [notify()] method.");
                }

                try {
                    $notification = new CustomResetPassword($token);
                    $resetUrl = Filament::getPanel('marcom')->getResetPasswordUrl($token, $user);
                    $notification->url = $resetUrl;
                    
                    Log::info('Created password reset notification', [
                        'token_length' => strlen($token),
                        'reset_url' => $resetUrl,
                    ]);

                    $user->notify($notification);
                    Log::info('Password reset notification sent to user', ['email' => $user->email]);

                    if (class_exists(PasswordResetLinkSent::class)) {
                        event(new PasswordResetLinkSent($user));
                        Log::info('PasswordResetLinkSent event dispatched');
                    }
                } catch (\Exception $e) {
                    Log::error('Error sending password reset notification', [
                        'error' => $e->getMessage(),
                        'file' => $e->getFile(),
                        'line' => $e->getLine(),
                    ]);
                    throw $e;
                }
            },
        );

        Log::info('Password reset link status', ['status' => $status]);
        
        if ($status !== Password::RESET_LINK_SENT) {
            Log::warning('Password reset link failed', ['status' => $status]);
            $this->getFailureNotification($status)?->send();

            return;
        }

        Log::info('Password reset link sent successfully');
        $this->getSentNotification($status)?->send();

        $this->form->fill();
    }
}
