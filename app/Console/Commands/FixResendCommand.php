<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FixResendCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'resend:fix';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix Resend configuration and test email sending';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info("Checking Resend configuration...");
        
        // Check environment variables
        $apiKey = env('RESEND_KEY');
        $fromEmail = env('MAIL_FROM_ADDRESS');
        $fromName = env('MAIL_FROM_NAME');
        
        if (empty($apiKey)) {
            $this->error("RESEND_KEY is not set in your .env file");
            return 1;
        }
        
        $this->info("API Key found: " . substr($apiKey, 0, 10) . '...');
        $this->info("From Email: {$fromEmail}");
        $this->info("From Name: {$fromName}");
        
        // Test the API key with a direct API call
        $this->info("Testing API key with direct API call...");
        
        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json'
            ])->post('https://api.resend.com/emails', [
                'from' => "{$fromName} <{$fromEmail}>",
                'to' => [$fromEmail],
                'subject' => 'Test Email from Empuls3 Contact Form',
                'html' => '<h1>Test Email</h1><p>This is a test email from the Empuls3 contact form using direct Resend API.</p>',
            ]);
            
            $this->info("API Response Status: " . $response->status());
            $this->info("API Response Body: " . $response->body());
            
            $responseData = $response->json();
            
            if ($response->successful() && isset($responseData['id'])) {
                $this->info("Email sent successfully!");
                $this->info("Resend ID: " . $responseData['id']);
                
                // Update the configuration recommendations
                $this->info("\n✅ Your Resend configuration is working correctly!");
                $this->info("Make sure your ContactController.php is using the correct configuration:");
                $this->info("- Use 'from' => \"{$fromName} <{$fromEmail}>\"");
                $this->info("- Use 'to' => ['{$fromEmail}']");
                
                return 0;
            } else {
                $this->error("Email sending failed with API.");
                $this->error("Error: " . ($responseData['message'] ?? 'Unknown error'));
                
                if (isset($responseData['name']) && $responseData['name'] === 'unauthorized') {
                    $this->warn("\n⚠️ Your API key appears to be invalid. Please check your RESEND_KEY in .env");
                } elseif (isset($responseData['message']) && strpos($responseData['message'], 'verify a domain') !== false) {
                    $this->warn("\n⚠️ Domain verification issue. Please make sure your domain is verified in Resend.");
                    $this->info("Until your domain is fully verified, try using:");
                    $this->info("- 'from' => \"Empuls3 <onboarding@resend.dev>\"");
                }
                
                return 1;
            }
        } catch (\Exception $e) {
            $this->error("Exception: " . $e->getMessage());
            Log::error('Resend test error: ' . $e->getMessage(), ['trace' => $e->getTraceAsString()]);
            return 1;
        }
    }
}
