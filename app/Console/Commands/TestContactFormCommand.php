<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormMail;

class TestContactFormCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'contact:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test the contact form with the exact data from the user submission';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info("Testing contact form with exact user data...");
        
        // Sample form data from the user's submission
        $formData = [
            'name' => 'Maia Orr',
            'email' => 'rahahesylu@mailinator.com',
            'phone' => '+1 (917) 872-3027',
            'company' => 'Cameron Reyes Traders',
            'message' => '',
            'formType' => 'project',
            'projectType' => 'web-development',
            'projectDescription' => 'Distinctio Cumque m',
            'requirements' => 'Quia qui consequuntu',
            'budget' => 'over-100k',
            'timeline' => '1-month'
        ];
        
        $this->info("Form data to be used:");
        $this->table(
            ['Field', 'Value'],
            collect($formData)->map(function ($value, $key) {
                return [$key, is_string($value) ? $value : json_encode($value)];
            })->toArray()
        );
        
        try {
            // Prepare email content using the existing template
            $mail = new ContactFormMail($formData);
            $emailContent = $mail->render();
            
            $this->info("Email content generated successfully");
            
            // Domain is verified, so we can use the domain email
            $fromEmail = 'info@empuls3.com';
            $fromName = 'Empuls3';
            
            // Company email address as the recipient
            $recipients = ['info@empuls3.com'];
            
            $this->info("Sending email via direct Resend API call...");
            
            // Use direct HTTP API call to Resend
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('resend.api_key'),
                'Content-Type' => 'application/json'
            ])->post('https://api.resend.com/emails', [
                'from' => "{$fromName} <{$fromEmail}>",
                'to' => $recipients,
                'reply_to' => $formData['email'],
                'subject' => 'New Contact Form Submission - Empuls3',
                'html' => $emailContent,
            ]);
            
            $this->info("API Response Status: " . $response->status());
            
            $responseData = $response->json();
            
            if ($response->successful() && isset($responseData['id'])) {
                $this->info("Email sent successfully!");
                $this->info("Resend ID: " . $responseData['id']);
                
                // Log successful submission
                Log::info('Test contact form submitted successfully', [
                    'name' => $formData['name'],
                    'email' => $formData['email'],
                    'resend_id' => $responseData['id']
                ]);
                
                return 0;
            } else {
                $this->error("Email sending failed.");
                $this->error("Response: " . json_encode($responseData));
                
                // Log error
                Log::error('Test contact form error', [
                    'error' => $responseData['message'] ?? 'Unknown error',
                    'response' => $responseData
                ]);
                
                return 1;
            }
        } catch (\Exception $e) {
            $this->error("Exception: " . $e->getMessage());
            Log::error('Test contact form exception', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return 1;
        }
    }
}
