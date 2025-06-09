<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

// Define the admin email
$adminEmail = 'rob.thomas@empuls3.com';

// Generate a secure random password
$newPassword = bin2hex(random_bytes(8)) . 'A1!'; // Creates a random password with uppercase, number, and special char

// Find the user by email
$user = User::where('email', $adminEmail)->first();

if (!$user) {
    echo "User with email {$adminEmail} not found.\n";
    exit(1);
}

// Update the password
$user->password = Hash::make($newPassword);
$user->save();

echo "\n==============================================\n";
echo "Password reset successfully!\n";
echo "Email: {$adminEmail}\n";
echo "Password: {$newPassword}\n";
echo "==============================================\n";
echo "Please try logging in with these credentials.\n";
