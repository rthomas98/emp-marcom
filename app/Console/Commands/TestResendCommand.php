<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Resend\Laravel\Facades\Resend;

class TestResendCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'resend:test {email?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test Resend email sending with current configuration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email') ?? 'robt84@gmail.com';
        
        $this->info("Testing Resend email sending to: {$email}");
        
        try {
            // Log configuration details
            $this->info("Resend API Key: " . substr(config('resend.api_key'), 0, 10) . '...');
            $this->info("Mail From Address: " . config('mail.from.address'));
            $this->info("Mail From Name: " . config('mail.from.name'));
            
            // Send test email using Resend Facade
            $response = Resend::emails()->send([
                'from' => 'Empuls3 <onboarding@resend.dev>', // Use Resend's default domain for testing
                'to' => [$email],
                'subject' => 'Test Email from Empuls3 Contact Form',
                'html' => '<h1>Test Email</h1><p>This is a test email from the Empuls3 contact form using Resend.</p>',
            ]);
            
            if ($response && isset($response->id)) {
                $this->info('Email sent successfully!');
                $this->info('Resend ID: ' . $response->id);
                Log::info("Test Resend email sent to {$email}", ['resend_id' => $response->id]);
            } else {
                $this->error('Email sending failed. No response ID received.');
                Log::error("Test Resend email failed - no response ID", ['response' => $response]);
            }
        } catch (\Exception $e) {
            $this->error('Error sending email: ' . $e->getMessage());
            Log::error('Test Resend email error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
        }
    }
}
