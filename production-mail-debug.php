<?php

// This script should be uploaded to your production server and run there
// It will diagnose common issues with email delivery in production

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\DB;
use Illuminate\Mail\Transport\LogTransport;

// Email to test with
$email = 'rob.thomas@empuls3.com';

try {
    echo "=== PRODUCTION EMAIL DIAGNOSTICS ===\n\n";
    
    // Check environment
    echo "Environment: " . app()->environment() . "\n";
    
    // Check mail configuration
    echo "Mail Driver: " . config('mail.default') . "\n";
    echo "From Address: " . config('mail.from.address') . "\n";
    echo "From Name: " . config('mail.from.name') . "\n";
    
    // Check Resend API key if using Resend
    if (config('mail.default') === 'resend') {
        $resendKey = config('services.resend.key');
        if (!$resendKey) {
            echo "ERROR: Resend API key is not set in production!\n";
        } else {
            $maskedKey = substr($resendKey, 0, 5) . '...' . substr($resendKey, -5);
            echo "Resend API Key: " . $maskedKey . "\n";
            
            // Check if key is properly formatted
            if (!preg_match('/^re_[a-zA-Z0-9]+$/', $resendKey)) {
                echo "WARNING: Resend API key format doesn't match expected pattern (should start with 're_')\n";
            }
        }
    }
    
    // Check mail transport instance
    $mailer = app('mail.manager')->mailer();
    $transport = $mailer->getSymfonyTransport();
    echo "Transport Class: " . get_class($transport) . "\n";
    
    if ($transport instanceof LogTransport) {
        echo "WARNING: Using LogTransport - emails are being written to log file, not actually sent!\n";
    }
    
    // Check queue configuration
    $queueConnection = config('queue.default');
    $queueDriver = config('queue.connections.' . $queueConnection . '.driver');
    echo "Queue Connection: " . $queueConnection . "\n";
    echo "Queue Driver: " . $queueDriver . "\n";
    
    // Check if queue is running
    echo "\n=== QUEUE STATUS ===\n\n";
    
    if ($queueDriver === 'database') {
        // Check for pending jobs
        $pendingJobs = DB::table('jobs')->count();
        echo "Pending jobs in queue: " . $pendingJobs . "\n";
        
        if ($pendingJobs > 0) {
            echo "WARNING: There are pending jobs in the queue. Queue worker may not be running!\n";
            echo "Run 'php artisan queue:work' to process queued emails.\n";
            
            // Show some details about pending jobs
            $jobs = DB::table('jobs')->select('queue', 'payload', 'attempts', 'created_at')->limit(5)->get();
            echo "Sample pending jobs:\n";
            foreach ($jobs as $job) {
                $payload = json_decode($job->payload);
                $command = isset($payload->data->commandName) ? $payload->data->commandName : 'Unknown';
                echo "- Queue: {$job->queue}, Command: {$command}, Attempts: {$job->attempts}, Created: {$job->created_at}\n";
            }
        } else {
            echo "No pending jobs in the queue. This is good if no emails have been requested recently.\n";
        }
        
        // Check for failed jobs
        $failedJobs = DB::table('failed_jobs')->count();
        echo "Failed jobs: " . $failedJobs . "\n";
        
        if ($failedJobs > 0) {
            echo "WARNING: There are failed jobs! Check 'failed_jobs' table for details.\n";
            $jobs = DB::table('failed_jobs')->select('queue', 'exception', 'failed_at')->limit(5)->get();
            echo "Sample failed jobs:\n";
            foreach ($jobs as $job) {
                $exception = substr($job->exception, 0, 100) . '...';
                echo "- Queue: {$job->queue}, Failed at: {$job->failed_at}, Exception: {$exception}\n";
            }
        }
    } else {
        echo "Using non-database queue driver. Cannot check queue status directly.\n";
    }
    
    // Check server connectivity to Resend API
    echo "\n=== RESEND API CONNECTIVITY ===\n\n";
    
    $ch = curl_init('https://api.resend.com/api/ping');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . config('services.resend.key'),
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    echo "Resend API connectivity test: ";
    if ($error) {
        echo "FAILED - " . $error . "\n";
        echo "This indicates network connectivity issues to the Resend API.\n";
    } else {
        echo "HTTP Status: " . $httpCode . "\n";
        echo "Response: " . $response . "\n";
        
        if ($httpCode >= 200 && $httpCode < 300) {
            echo "Resend API is accessible from this server.\n";
        } else {
            echo "WARNING: Resend API returned an error. Check your API key and network settings.\n";
        }
    }
    
    // Check for outbound email restrictions
    echo "\n=== SERVER EMAIL RESTRICTIONS ===\n\n";
    echo "Some hosting providers restrict outbound email ports or require specific configurations.\n";
    echo "Check with your hosting provider if they have any email restrictions.\n";
    
    // Send a test email with detailed logging
    echo "\n=== SENDING TEST EMAIL ===\n\n";
    
    try {
        Log::info('Starting production mail diagnostic test', ['to' => $email]);
        
        Mail::raw('This is a test email from the production mail diagnostics script at ' . now(), function ($message) use ($email) {
            $message->to($email)
                    ->subject('Production Mail Diagnostics Test');
            
            Log::info('Mail message created', [
                'to' => $email,
                'subject' => 'Production Mail Diagnostics Test'
            ]);
        });
        
        echo "Test email sent to {$email}. Please check your inbox and spam folder.\n";
        Log::info('Test email sent from production', ['to' => $email]);
    } catch (\Exception $e) {
        echo "Error sending test email: " . $e->getMessage() . "\n";
        Log::error('Error sending test email from production', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
    }
    
    echo "\n=== CHECKING MAIL LOGS ===\n\n";
    
    // Check Laravel logs for recent mail-related entries
    $logPath = storage_path('logs/laravel.log');
    if (file_exists($logPath)) {
        $logContent = shell_exec("tail -n 50 {$logPath} | grep -i 'mail\|email\|resend'");
        echo "Recent mail-related log entries:\n";
        echo $logContent ? $logContent : "No recent mail-related log entries found.\n";
    } else {
        echo "Log file not found at {$logPath}\n";
    }
    
    echo "\n=== DIAGNOSTICS COMPLETE ===\n";
    echo "If you're still having issues, check the following:\n";
    echo "1. Make sure a queue worker is running (use Supervisor in production)\n";
    echo "2. Check if your hosting provider blocks outgoing SMTP connections\n";
    echo "3. Verify your Resend API key is correct in production\n";
    echo "4. Check if there are any firewall rules blocking outgoing connections\n";
    echo "5. Ensure your server's IP is not blacklisted by email providers\n";
    
} catch (\Exception $e) {
    echo "Error in diagnostics: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line: " . $e->getLine() . ")\n";
}
