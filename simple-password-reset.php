<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;

// Define the admin email and a simple password
$adminEmail = 'rob.thomas@empuls3.com';
$newPassword = 'Admin123!';

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
