<?php

// Laravel Cloud specific mail diagnostics
// Run this on your Laravel Cloud environment

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

// Email to test with
$email = 'rob.thomas@empuls3.com';

try {
    echo "=== LARAVEL CLOUD EMAIL DIAGNOSTICS ===\n\n";
    
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
            echo "ERROR: Resend API key is not set in Laravel Cloud!\n";
        } else {
            $maskedKey = substr($resendKey, 0, 5) . '...' . substr($resendKey, -5);
            echo "Resend API Key: " . $maskedKey . "\n";
        }
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
    }
    
    // Check Laravel Cloud specific settings
    echo "\n=== LARAVEL CLOUD SPECIFIC CHECKS ===\n\n";
    
    // Check if we're actually running in Laravel Cloud
    if (isset($_ENV['LARAVEL_VAPOR'])) {
        echo "Confirmed running in Laravel Cloud environment.\n";
    } else {
        echo "Not running in Laravel Cloud environment. This script should be run in production.\n";
    }
    
    // Send a test email with detailed logging
    echo "\n=== SENDING TEST EMAIL ===\n\n";
    
    try {
        Log::info('Starting Laravel Cloud mail diagnostic test', ['to' => $email]);
        
        Mail::raw('This is a test email from the Laravel Cloud mail diagnostics script at ' . now(), function ($message) use ($email) {
            $message->to($email)
                    ->subject('Laravel Cloud Mail Diagnostics Test');
            
            Log::info('Mail message created', [
                'to' => $email,
                'subject' => 'Laravel Cloud Mail Diagnostics Test'
            ]);
        });
        
        echo "Test email sent to {$email}. Please check your inbox and spam folder.\n";
        Log::info('Test email sent from Laravel Cloud', ['to' => $email]);
    } catch (\Exception $e) {
        echo "Error sending test email: " . $e->getMessage() . "\n";
        Log::error('Error sending test email from Laravel Cloud', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
    }
    
    // Try to manually process queued jobs
    echo "\n=== MANUALLY PROCESSING QUEUE ===\n\n";
    
    try {
        echo "Attempting to process queued jobs...\n";
        Artisan::call('queue:work', ['--once' => true]);
        echo "Queue work command output:\n" . Artisan::output() . "\n";
    } catch (\Exception $e) {
        echo "Error processing queue: " . $e->getMessage() . "\n";
    }
    
    echo "\n=== DIAGNOSTICS COMPLETE ===\n";
    echo "If you're still having issues, check the following:\n";
    echo "1. Verify your Resend API key is correct in Laravel Cloud environment variables\n";
    echo "2. Check Laravel Cloud logs for any errors\n";
    echo "3. Make sure outbound connections to Resend API are allowed\n";
    echo "4. Verify that Laravel Cloud is processing your queued jobs\n";
    
} catch (\Exception $e) {
    echo "Error in diagnostics: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line: " . $e->getLine() . ")\n";
}
