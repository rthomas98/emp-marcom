<?php

// Laravel Cloud Queue Monitor
// This script checks the status of your queue and processes pending jobs

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

echo "=== LARAVEL CLOUD QUEUE MONITOR ===\n\n";

// Check queue configuration
$queueConnection = config('queue.default');
$queueDriver = config('queue.connections.' . $queueConnection . '.driver');
echo "Queue Connection: " . $queueConnection . "\n";
echo "Queue Driver: " . $queueDriver . "\n\n";

// Check for pending jobs
if ($queueDriver === 'database') {
    $pendingJobs = DB::table('jobs')->count();
    echo "Pending jobs in queue: " . $pendingJobs . "\n";
    
    if ($pendingJobs > 0) {
        echo "Found pending jobs. Attempting to process...\n";
        
        // Show job details
        $jobs = DB::table('jobs')
            ->select('id', 'queue', 'payload', 'attempts', 'created_at')
            ->orderBy('created_at', 'asc')
            ->limit(10)
            ->get();
        
        echo "Pending jobs details:\n";
        foreach ($jobs as $job) {
            $payload = json_decode($job->payload);
            $command = isset($payload->data->commandName) ? $payload->data->commandName : 'Unknown';
            $data = isset($payload->data->command) ? json_encode(unserialize($payload->data->command)) : 'No data';
            
            echo "- ID: {$job->id}, Queue: {$job->queue}, Command: {$command}\n";
            echo "  Created: {$job->created_at}, Attempts: {$job->attempts}\n";
            
            // Process specific job
            try {
                echo "  Processing job ID {$job->id}...\n";
                Artisan::call('queue:work', [
                    '--once' => true,
                    '--queue' => $job->queue
                ]);
                echo "  Result: " . Artisan::output() . "\n";
                
                // Check if job was processed
                $jobExists = DB::table('jobs')->where('id', $job->id)->exists();
                if (!$jobExists) {
                    echo "  ✓ Job ID {$job->id} processed successfully!\n";
                } else {
                    echo "  ✗ Job ID {$job->id} still in queue.\n";
                }
            } catch (\Exception $e) {
                echo "  Error processing job: " . $e->getMessage() . "\n";
                Log::error('Error processing job', [
                    'job_id' => $job->id,
                    'error' => $e->getMessage()
                ]);
            }
            
            echo "\n";
        }
    } else {
        echo "No pending jobs in the queue.\n";
    }
    
    // Check for failed jobs
    $failedJobs = DB::table('failed_jobs')->count();
    echo "\nFailed jobs: " . $failedJobs . "\n";
    
    if ($failedJobs > 0) {
        echo "Failed jobs details:\n";
        $jobs = DB::table('failed_jobs')
            ->select('id', 'uuid', 'connection', 'queue', 'exception', 'failed_at')
            ->orderBy('failed_at', 'desc')
            ->limit(5)
            ->get();
        
        foreach ($jobs as $job) {
            $exception = substr($job->exception, 0, 150) . '...';
            echo "- ID: {$job->id}, Queue: {$job->queue}\n";
            echo "  Failed at: {$job->failed_at}\n";
            echo "  Exception: {$exception}\n\n";
        }
        
        echo "To retry failed jobs, run: php artisan queue:retry all\n";
    }
} else {
    echo "Not using database queue driver. Cannot check queue status directly.\n";
}

echo "\n=== RECOMMENDATIONS ===\n\n";
echo "1. Enable the Laravel scheduler in Laravel Cloud dashboard\n";
echo "2. Make sure your RESEND_KEY is correctly set in environment variables\n";
echo "3. Consider disabling hibernation if immediate email processing is needed\n";
echo "4. If emails are still not sending, check the failed_jobs table and logs\n";
