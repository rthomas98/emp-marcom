<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class TestEmailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:test {email?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test email sending with current configuration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email') ?? 'robt84@gmail.com';
        
        $this->info("Sending test email to: {$email}");
        
        try {
            Mail::raw('This is a test email from Empuls3 contact form', function($message) use ($email) {
                $message->to($email)
                       ->subject('Test Email from Empuls3');
            });
            
            $this->info('Email sent successfully!');
            Log::info("Test email sent to {$email}");
        } catch (\Exception $e) {
            $this->error('Error sending email: ' . $e->getMessage());
            Log::error('Test email error: ' . $e->getMessage());
        }
    }
}
