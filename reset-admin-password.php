<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

// Define the admin email
$adminEmail = 'rob.thomas@empuls3.com';

// Generate a secure random password
$newPassword = bin2hex(random_bytes(8)) . 'A1!'; // Creates a random password with uppercase, number, and special char

// Find the user by email
$user = User::where('email', $adminEmail)->first();

if (!$user) {
    echo "User with email {$adminEmail} not found. Creating new user...\n";
    
    // Create the user if they don't exist
    $user = new User();
    $user->name = 'Rob Thomas';
    $user->email = $adminEmail;
} else {
    echo "User found. Updating password...\n";
}

// Update the password with a simple, known value for testing
$user->password = Hash::make($newPassword);
$user->save();

// Make sure the user has the admin role
$adminRole = DB::table('roles')->where('name', 'admin')->first();
if (!$adminRole) {
    echo "Creating admin role...\n";
    $roleId = DB::table('roles')->insertGetId([
        'name' => 'admin',
        'guard_name' => 'web',
        'created_at' => now(),
        'updated_at' => now(),
    ]);
} else {
    $roleId = $adminRole->id;
}

// Assign the admin role to the user
$hasRole = DB::table('model_has_roles')
    ->where('role_id', $roleId)
    ->where('model_id', $user->id)
    ->where('model_type', User::class)
    ->exists();

if (!$hasRole) {
    echo "Assigning admin role to user...\n";
    DB::table('model_has_roles')->insert([
        'role_id' => $roleId,
        'model_id' => $user->id,
        'model_type' => User::class,
    ]);
}

echo "\n==============================================\n";
echo "Password reset successfully!\n";
echo "Email: {$adminEmail}\n";
echo "Password: {$newPassword}\n";
echo "==============================================\n";
echo "Please try logging in with these credentials.\n";
