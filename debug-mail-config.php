<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Transport\LogTransport;

// Email to test with
$email = 'rob.thomas@empuls3.com';

try {
    echo "=== MAIL CONFIGURATION DIAGNOSTICS ===\n\n";
    
    // Check mail configuration
    echo "Mail Driver: " . config('mail.default') . "\n";
    echo "From Address: " . config('mail.from.address') . "\n";
    echo "From Name: " . config('mail.from.name') . "\n";
    
    // Check Resend API key if using Resend
    if (config('mail.default') === 'resend') {
        $resendKey = config('services.resend.key');
        $maskedKey = substr($resendKey, 0, 5) . '...' . substr($resendKey, -5);
        echo "Resend API Key: " . $maskedKey . "\n";
        
        // Check if key is properly formatted
        if (!preg_match('/^re_[a-zA-Z0-9]+$/', $resendKey)) {
            echo "WARNING: Resend API key format doesn't match expected pattern (should start with 're_')\n";
        }
    }
    
    // Check mail transport instance
    $mailer = app('mail.manager')->mailer();
    $transport = $mailer->getSymfonyTransport();
    echo "Transport Class: " . get_class($transport) . "\n";
    
    if ($transport instanceof LogTransport) {
        echo "WARNING: Using LogTransport - emails are being written to log file, not actually sent!\n";
    }
    
    // Check if queue is being used for mail
    $queueConnection = config('queue.default');
    $queueEnabled = config('queue.connections.' . $queueConnection . '.driver') !== 'sync';
    echo "Queue Connection: " . $queueConnection . "\n";
    echo "Queue Enabled: " . ($queueEnabled ? 'Yes' : 'No') . "\n";
    
    if ($queueEnabled) {
        echo "NOTE: Emails are being queued. Make sure queue worker is running.\n";
        echo "Run 'php artisan queue:work' to process queued emails.\n";
    }
    
    echo "\n=== SENDING TEST EMAIL ===\n\n";
    
    // Send a test email with detailed logging
    Log::info('Starting mail diagnostic test', ['to' => $email]);
    
    try {
        Mail::raw('This is a test email from the mail diagnostics script at ' . now(), function ($message) use ($email) {
            $message->to($email)
                    ->subject('Mail Diagnostics Test');
            
            Log::info('Mail message created', [
                'to' => $email,
                'subject' => 'Mail Diagnostics Test'
            ]);
        });
        
        echo "Test email sent to {$email}. Please check your inbox and spam folder.\n";
        Log::info('Test email sent', ['to' => $email]);
    } catch (\Exception $e) {
        echo "Error sending test email: " . $e->getMessage() . "\n";
        Log::error('Error sending test email', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
    }
    
    echo "\n=== CHECKING MAIL LOGS ===\n\n";
    
    // Check Laravel logs for recent mail-related entries
    $logPath = storage_path('logs/laravel.log');
    if (file_exists($logPath)) {
        $logContent = shell_exec("tail -n 50 {$logPath} | grep -i mail");
        echo "Recent mail-related log entries:\n";
        echo $logContent ? $logContent : "No recent mail-related log entries found.\n";
    } else {
        echo "Log file not found at {$logPath}\n";
    }
    
    echo "\n=== DIAGNOSTICS COMPLETE ===\n";
    
} catch (\Exception $e) {
    echo "Error in diagnostics: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line: " . $e->getLine() . ")\n";
}
