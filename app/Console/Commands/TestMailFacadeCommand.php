<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormMail;

class TestMailFacadeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test sending email using Laravel Mail facade with Resend driver';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info("Testing email sending with Laravel Mail facade...");
        
        // Sample form data from the user's submission
        $formData = [
            'name' => 'Maia Orr',
            'email' => 'rahahesylu@mailinator.com',
            'phone' => '+1 (917) 872-3027',
            'company' => 'Cameron Reyes Traders',
            'message' => 'This is a test message',
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
            // Create the mail instance
            $mail = new ContactFormMail($formData);
            
            // Send the email using Laravel's Mail facade
            Mail::to('info@empuls3.com')
                ->send($mail);
            
            $this->info("Email sent successfully using Mail facade!");
            
            // Log successful submission
            Log::info('Test email sent successfully using Mail facade', [
                'name' => $formData['name'],
                'email' => $formData['email']
            ]);
            
            return 0;
        } catch (\Exception $e) {
            $this->error("Exception: " . $e->getMessage());
            Log::error('Test email error using Mail facade', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return 1;
        }
    }
}
