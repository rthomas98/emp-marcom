<?php

/**
 * Script to create a Filament admin user
 * Run with: php create-admin-user.php
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

// User details
$name = 'Rob Thomas';
$email = 'rob.thomas@empuls3.com';
$password = 'G00dBoySpot!!1013'; // You should change this after first login

// Check if user already exists
$user = User::where('email', $email)->first();

if ($user) {
    echo "User {$email} already exists. Updating...\n";
    $user->name = $name;
    $user->password = Hash::make($password);
    $user->save();
} else {
    echo "Creating new user {$email}...\n";
    $user = User::create([
        'name' => $name,
        'email' => $email,
        'password' => Hash::make($password),
    ]);
}

// Ensure admin role exists
$adminRole = Role::firstOrCreate(['name' => 'admin']);

// Assign admin role to user
$user->syncRoles([$adminRole]);

echo "Success! User {$email} has been created/updated with admin role.\n";
echo "-------------------------------------\n";
echo "Username: {$email}\n";
echo "Password: {$password}\n";
echo "Role: admin\n";
echo "-------------------------------------\n";
echo "Please change your password after first login.\n";
