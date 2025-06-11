<?php

// Script to check queue status in Laravel Cloud
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

echo "=== CHECKING QUEUE STATUS IN LARAVEL CLOUD ===\n\n";

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
        echo "WARNING: There are pending jobs in the queue. Queue worker may not be running!\n";
        
        // Show some details about pending jobs
        $jobs = DB::table('jobs')->select('queue', 'payload', 'attempts', 'created_at')->limit(5)->get();
        echo "Sample pending jobs:\n";
        foreach ($jobs as $job) {
            $payload = json_decode($job->payload);
            $command = isset($payload->data->commandName) ? $payload->data->commandName : 'Unknown';
            echo "- Queue: {$job->queue}, Command: {$command}, Attempts: {$job->attempts}, Created: {$job->created_at}\n";
        }
        
        // Check for email-related jobs specifically
        $emailJobs = 0;
        $jobs = DB::table('jobs')->get();
        foreach ($jobs as $job) {
            $payload = json_decode($job->payload);
            if (isset($payload->data->commandName) && 
                (strpos($payload->data->commandName, 'Mail') !== false || 
                 strpos($payload->data->commandName, 'Notification') !== false)) {
                $emailJobs++;
            }
        }
        
        echo "Email-related jobs in queue: " . $emailJobs . "\n";
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

echo "\n=== QUEUE CHECK COMPLETE ===\n";
echo "If you see pending jobs, make sure your Laravel Cloud environment has a queue worker configured.\n";
echo "You can configure a queue worker in the Laravel Cloud dashboard under your environment's 'Queue' tab.\n";
