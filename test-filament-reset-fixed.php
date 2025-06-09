<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use App\Notifications\CustomResetPassword;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;

// Email to send the password reset to
$email = 'rob.thomas@empuls3.com';

try {
    echo "Testing custom Filament password reset notification...\n";
    
    // Find the user
    $user = User::where('email', $email)->first();
    
    if (!$user) {
        echo "User with email {$email} not found.\n";
        exit(1);
    }
    
    echo "Found user: {$user->name} ({$user->email})\n";
    
    // Generate a password reset token
    $token = Password::createToken($user);
    echo "Generated password reset token\n";
    
    // Create a custom notification
    $notification = new CustomResetPassword($token);
    $notification->url = Filament::getPanel('marcom')->getResetPasswordUrl($token, $user);
    
    echo "Reset URL: {$notification->url}\n";
    
    // Send the notification directly
    echo "Sending custom password reset notification...\n";
    $user->notify($notification);
    
    echo "Password reset notification sent successfully!\n";
    echo "Please check your inbox AND spam folder for the password reset email.\n";
    
    // Log the notification being sent
    Log::info("Sent custom password reset notification to {$user->email}");
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line: " . $e->getLine() . ")\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
    Log::error("Error in test script: " . $e->getMessage());
}
