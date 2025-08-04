<?php

namespace App\Services;

use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;
use Resend\Laravel\Facades\Resend;

class ContactFormService
{
    /**
     * The recipient email addresses.
     *
     * @var array
     */
    protected $recipients = ['info@empuls3.com'];

    /**
     * The sender email configuration.
     *
     * @var array
     */
    protected $sender = [
        'email' => 'info@empuls3.com',
        'name' => 'Empuls3'
    ];

    /**
     * Send the contact form email.
     *
     * @param array $data
     * @return array
     */
    public function sendEmail(array $data): array
    {
        try {
            $emailContent = (new ContactFormMail($data))->render();
            
            // Try primary method first
            if ($this->sendWithMailFacade($data, $emailContent)) {
                return ['success' => true, 'method' => 'mail_facade'];
            }

            // Fallback to Resend if Mail facade fails
            if ($this->sendWithResend($data, $emailContent)) {
                return ['success' => true, 'method' => 'resend'];
            }

            // Final fallback to HTTP API
            if ($this->sendWithHttpApi($data, $emailContent)) {
                return ['success' => true, 'method' => 'http_api'];
            }

            return ['success' => false, 'error' => 'All email methods failed'];
        } catch (\Exception $e) {
            Log::error('Contact form service error', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    /**
     * Validate bot protection measures.
     *
     * @param array $data
     * @return bool
     */
    public function isBot(array $data): bool
    {
        // Check honeypot field
        if (!empty($data['website'])) {
            Log::warning('Honeypot triggered', ['email' => $data['email'] ?? 'unknown']);
            return true;
        }

        // Check submission time
        if (isset($data['submit_time']) && $data['submit_time'] > 0) {
            $timeTaken = time() - (int)$data['submit_time'];
            if ($timeTaken < 3) {
                Log::warning('Form submitted too quickly', [
                    'email' => $data['email'] ?? 'unknown',
                    'time_taken' => $timeTaken
                ]);
                return true;
            }
        }

        return false;
    }

    /**
     * Log the contact form submission.
     *
     * @param array $data
     * @param array $result
     * @return void
     */
    public function logSubmission(array $data, array $result): void
    {
        $logData = [
            'name' => $data['name'] ?? 'unknown',
            'email' => $data['email'] ?? 'unknown',
            'projectType' => $data['projectType'] ?? 'unknown',
            'formType' => $data['formType'] ?? 'general',
            'success' => $result['success'],
            'method' => $result['method'] ?? 'none'
        ];

        if ($result['success']) {
            Log::info('Contact form submitted successfully', $logData);
        } else {
            Log::error('Contact form submission failed', array_merge($logData, [
                'error' => $result['error'] ?? 'Unknown error'
            ]));
        }
    }

    /**
     * Send email using Laravel's Mail facade.
     *
     * @param array $data
     * @param string $emailContent
     * @return bool
     */
    protected function sendWithMailFacade(array $data, string $emailContent): bool
    {
        try {
            Log::info('Attempting to send email using Mail facade');
            
            $mail = new ContactFormMail($data);
            $mail->replyTo($data['email']);
            
            Mail::to($this->recipients)->send($mail);
            
            Log::info('Email sent successfully using Mail facade', [
                'to' => $this->recipients,
                'from' => $this->sender['email']
            ]);
            
            return true;
        } catch (\Exception $e) {
            Log::error('Error sending email with Mail facade', [
                'error' => $e->getMessage()
            ]);
            return false;
        }
    }

    /**
     * Send email using Resend service.
     *
     * @param array $data
     * @param string $emailContent
     * @return bool
     */
    protected function sendWithResend(array $data, string $emailContent): bool
    {
        try {
            Log::info('Attempting to send email using Resend');
            
            $response = Resend::emails()->send([
                'from' => "{$this->sender['name']} <{$this->sender['email']}>",
                'to' => $this->recipients,
                'reply_to' => $data['email'],
                'subject' => 'New Contact Form Submission - Empuls3',
                'html' => $emailContent,
                'text' => strip_tags($emailContent),
            ]);
            
            Log::info('Email sent using Resend', [
                'resend_id' => $response->id ?? null,
                'to' => $this->recipients
            ]);
            
            return true;
        } catch (\Exception $e) {
            Log::error('Error sending email with Resend', [
                'error' => $e->getMessage()
            ]);
            return false;
        }
    }

    /**
     * Send email using direct HTTP API call.
     *
     * @param array $data
     * @param string $emailContent
     * @return bool
     */
    protected function sendWithHttpApi(array $data, string $emailContent): bool
    {
        try {
            Log::info('Attempting to send email using direct HTTP API');
            
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('resend.api_key'),
                'Content-Type' => 'application/json'
            ])->post('https://api.resend.com/emails', [
                'from' => "{$this->sender['name']} <{$this->sender['email']}>",
                'to' => $this->recipients,
                'reply_to' => $data['email'],
                'subject' => 'New Contact Form Submission - Empuls3',
                'html' => $emailContent,
                'text' => strip_tags($emailContent),
            ]);
            
            if ($response->successful()) {
                $responseData = $response->json();
                Log::info('Email sent using HTTP API', [
                    'resend_id' => $responseData['id'] ?? null,
                    'to' => $this->recipients
                ]);
                return true;
            }
            
            return false;
        } catch (\Exception $e) {
            Log::error('Error sending email with HTTP API', [
                'error' => $e->getMessage()
            ]);
            return false;
        }
    }
}