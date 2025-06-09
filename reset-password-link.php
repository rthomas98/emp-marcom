<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

// Email to send the password reset to
$email = 'rob.thomas@empuls3.com';

try {
    echo "Generating password reset link...\n";
    
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
    
    // Create the reset URL
    $resetUrl = url(route('password.reset', [
        'token' => $token,
        'email' => $user->email,
    ], false));
    
    echo "\n==========================================================\n";
    echo "PASSWORD RESET LINK:\n";
    echo "{$resetUrl}\n";
    echo "==========================================================\n\n";
    
    echo "Copy and paste this link into your browser to reset your password.\n";
    echo "This link will expire after 60 minutes for security reasons.\n";
    
    // Log the link generation
    Log::info("Generated password reset link for {$user->email}");
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    Log::error("Error generating reset link: " . $e->getMessage());
}
