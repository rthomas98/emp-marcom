<?php

// Script to test password reset functionality in Laravel Cloud
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\DB;
use App\Models\User;

// Email to test with - change this to your email
$email = 'rob.thomas@empuls3.com';

echo "=== TESTING PASSWORD RESET IN LARAVEL CLOUD ===\n\n";

// Check environment
echo "Environment: " . app()->environment() . "\n";

// Check mail configuration
echo "Mail Driver: " . config('mail.default') . "\n";
echo "From Address: " . config('mail.from.address') . "\n";
echo "From Name: " . config('mail.from.name') . "\n";

// Check if the user exists
$user = User::where('email', $email)->first();
if (!$user) {
    echo "ERROR: User with email {$email} not found in the database.\n";
    exit;
}

echo "User found: " . $user->name . " (ID: " . $user->id . ")\n\n";

// Check queue configuration
$queueConnection = config('queue.default');
$queueDriver = config('queue.connections.' . $queueConnection . '.driver');
echo "Queue Connection: " . $queueConnection . "\n";
echo "Queue Driver: " . $queueDriver . "\n\n";

// Test sending password reset
echo "Sending password reset notification to {$email}...\n";

try {
    Log::info("Manually sending password reset email to {$email}");
    
    // Use the Password facade to send the reset link
    $status = Password::sendResetLink(['email' => $email]);
    
    if ($status === Password::RESET_LINK_SENT) {
        echo "Password reset link sent successfully!\n";
        Log::info("Password reset link sent successfully to {$email}");
    } else {
        echo "Error sending password reset link: " . $status . "\n";
        Log::error("Error sending password reset link", ['status' => $status, 'email' => $email]);
    }
    
    // If using queue, check for pending jobs
    if ($queueDriver === 'database') {
        echo "\nChecking queue for pending jobs...\n";
        
        // Wait a moment for job to be queued
        sleep(2);
        
        $pendingJobs = DB::table('jobs')->count();
        echo "Pending jobs in queue: " . $pendingJobs . "\n";
        
        if ($pendingJobs > 0) {
            echo "There are pending jobs in the queue. Attempting to process one job...\n";
            
            // Try to process one job
            \Illuminate\Support\Facades\Artisan::call('queue:work', ['--once' => true]);
            echo "Queue work output: " . \Illuminate\Support\Facades\Artisan::output() . "\n";
            
            // Check if job was processed
            $remainingJobs = DB::table('jobs')->count();
            if ($remainingJobs < $pendingJobs) {
                echo "Successfully processed a job from the queue.\n";
            } else {
                echo "Failed to process job from queue. Check queue worker configuration.\n";
            }
        }
    }
    
} catch (\Exception $e) {
    echo "Exception: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line: " . $e->getLine() . ")\n";
    Log::error("Exception during password reset test", [
        'error' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine()
    ]);
}

echo "\n=== TEST COMPLETE ===\n";
echo "Check your email inbox (and spam folder) for the password reset email.\n";
echo "If you don't receive the email, check the Laravel logs for errors.\n";
echo "In Laravel Cloud, make sure your queue worker is configured properly.\n";
