<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Log;

// Email to send the password reset to
$email = 'rob.thomas@empuls3.com';

// Find the user
$user = User::where('email', $email)->first();

if (!$user) {
    echo "User with email {$email} not found.\n";
    exit(1);
}

try {
    echo "Attempting to send password reset email to {$email}...\n";
    
    // Log the attempt
    Log::info("Manually sending password reset email to {$email}");
    
    // Send the password reset notification
    $status = Password::sendResetLink(['email' => $email]);
    
    if ($status === Password::RESET_LINK_SENT) {
        echo "Password reset link sent successfully!\n";
        echo "Please check your inbox and spam folder for the email.\n";
        Log::info("Password reset link sent successfully to {$email}");
    } else {
        echo "Error sending password reset link: {$status}\n";
        Log::error("Error sending password reset link to {$email}: {$status}");
    }
} catch (\Exception $e) {
    echo "Exception: " . $e->getMessage() . "\n";
    Log::error("Exception sending password reset email: " . $e->getMessage());
}
