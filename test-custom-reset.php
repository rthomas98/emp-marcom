<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;

// Email to send the password reset to
$email = 'rob.thomas@empuls3.com';

try {
    echo "Testing custom password reset notification...\n";
    
    // Find the user
    $user = User::where('email', $email)->first();
    
    if (!$user) {
        echo "User with email {$email} not found.\n";
        exit(1);
    }
    
    echo "Found user: {$user->name} ({$user->email})\n";
    
    // Log that we're sending a password reset
    Log::info("Manually sending password reset email to {$email}");
    
    // Send the password reset notification
    $status = Password::sendResetLink(['email' => $email]);
    
    if ($status === Password::RESET_LINK_SENT) {
        echo "Password reset link sent successfully!\n";
        Log::info("Password reset link sent successfully to {$email}");
    } else {
        echo "Failed to send password reset link: {$status}\n";
        Log::error("Failed to send password reset link to {$email}: {$status}");
    }
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    Log::error("Error in test script: " . $e->getMessage());
}
