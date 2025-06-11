<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

class CustomResetPasswordNotification extends ResetPassword
{
    /**
     * Build the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        Log::info('CustomResetPassword toMail method called', [
            'notifiable_email' => $notifiable->email ?? 'unknown',
            'notifiable_name' => $notifiable->name ?? 'unknown'
        ]);

        $resetUrl = $this->resetUrl($notifiable);
        
        Log::info('Reset URL generated', [
            'reset_url' => $resetUrl
        ]);

        return (new MailMessage)
            ->subject(Lang::get('Reset Password Notification'))
            ->line(Lang::get('You are receiving this email because we received a password reset request for your account.'))
            ->action(Lang::get('Reset Password'), $resetUrl)
            ->line(Lang::get('This password reset link will expire in :count minutes.', ['count' => config('auth.passwords.'.config('auth.defaults.passwords').'.expire')]))
            ->line(Lang::get('If you did not request a password reset, no further action is required.'));
    }

    /**
     * Get the reset URL for the given notifiable.
     *
     * @param  mixed  $notifiable
     * @return string
     */
    protected function resetUrl($notifiable)
    {
        $email = $notifiable->email ?? $notifiable->getEmailForPasswordReset();
        
        $url = url(route('password.reset', [
            'token' => $this->token,
            'email' => $email,
        ], false));
        
        Log::info('Reset URL generated in resetUrl method', [
            'url' => $url
        ]);
        
        return $url;
    }
}
