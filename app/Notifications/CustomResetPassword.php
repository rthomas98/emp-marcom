<?php

namespace App\Notifications;

use Filament\Facades\Filament;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;

class CustomResetPassword extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * The password reset token.
     *
     * @var string
     */
    public $token;
    
    /**
     * The reset URL.
     *
     * @var string
     */
    public string $url;

    /**
     * Create a notification instance.
     *
     * @param  string  $token
     * @return void
     */
    public function __construct($token)
    {
        $this->token = $token;
        Log::info('CustomResetPassword notification created', ['token_length' => strlen($token)]);
    }

    /**
     * Get the notification's channels.
     *
     * @param  mixed  $notifiable
     * @return array|string
     */
    public function via($notifiable)
    {
        Log::info('CustomResetPassword via method called', ['notifiable_email' => $notifiable->email ?? 'unknown']);
        return ['mail'];
    }

    /**
     * Build the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        try {
            Log::info('CustomResetPassword toMail method called', [
                'notifiable_email' => $notifiable->email ?? 'unknown',
                'notifiable_name' => $notifiable->name ?? 'unknown'
            ]);
            
            $resetUrl = $this->resetUrl($notifiable);
            Log::info('Reset URL generated', ['reset_url' => $resetUrl]);
            
            $mailMessage = (new MailMessage)
                ->subject('Empuls3 - Reset Password')
                ->greeting('Hello ' . $notifiable->name . ',')
                ->line('You are receiving this email because we received a password reset request for your Empuls3 admin account.')
                ->action('Reset Password', $resetUrl)
                ->line('This password reset link will expire in ' . config('auth.passwords.' . config('auth.defaults.passwords') . '.expire') . ' minutes.')
                ->line('If you did not request a password reset, no further action is required.');
            
            Log::info('MailMessage created successfully');
            return $mailMessage;
        } catch (\Exception $e) {
            Log::error('Error in CustomResetPassword toMail method', [
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);
            throw $e;
        }
    }
    
    /**
     * Get the reset URL for the given notifiable.
     *
     * @param  mixed  $notifiable
     * @return string
     */
    protected function resetUrl($notifiable): string
    {
        try {
            // If url is already set, use it directly
            if (isset($this->url)) {
                Log::info('Using pre-set URL', ['url' => $this->url]);
                return $this->url;
            }
            
            // Otherwise generate the URL using Filament
            $url = Filament::getPanel('marcom')->getResetPasswordUrl($this->token, $notifiable);
            Log::info('Reset URL generated in resetUrl method', ['url' => $url]);
            return $url;
        } catch (\Exception $e) {
            Log::error('Error generating reset URL', [
                'error' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine()
            ]);
            throw $e;
        }
    }
}
