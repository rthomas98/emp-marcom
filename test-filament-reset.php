<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

// Email to send the password reset to
$email = 'rob.thomas@empuls3.com';

try {
    echo "Testing Filament password reset email...\n";
    
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
    
    // Create the reset URL that would normally be in the email
    $resetUrl = url(route('password.reset', [
        'token' => $token,
        'email' => $user->email,
    ], false));
    
    echo "Reset URL would be: {$resetUrl}\n";
    
    // Send the notification directly
    echo "Sending password reset notification directly...\n";
    $notification = new ResetPassword($token);
    
    // Log the notification being sent
    Log::info("Sending password reset notification to {$user->email}");
    
    // Send the notification with debugging
    try {
        Notification::route('mail', $user->email)
            ->notify($notification);
        echo "Password reset notification sent successfully!\n";
    } catch (\Exception $e) {
        echo "Error sending notification: " . $e->getMessage() . "\n";
        Log::error("Error sending notification: " . $e->getMessage());
    }
    
    echo "\nPlease check your inbox AND spam folder for the password reset email.\n";
    echo "If you still don't receive it, here's a direct reset link you can use:\n";
    echo "{$resetUrl}\n";
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    Log::error("Error in test script: " . $e->getMessage());
}
