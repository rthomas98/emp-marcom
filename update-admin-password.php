<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

// Define the admin email
$adminEmail = 'rob.thomas@empuls3.com';

// Get password from environment variable or generate a secure one
$newPassword = getenv('ADMIN_PASSWORD');

if (empty($newPassword)) {
    // Generate a secure random password if not provided
    $newPassword = bin2hex(random_bytes(12));
    echo "Generated a secure random password.\n";
}

// Find the user by email
$user = User::where('email', $adminEmail)->first();

if (!$user) {
    // Create the user if they don't exist
    $user = new User();
    $user->name = 'Rob Thomas';
    $user->email = $adminEmail;
    echo "Creating new user {$adminEmail}...\n";
} else {
    echo "Updating existing user {$adminEmail}...\n";
}

// Update the password
$user->password = Hash::make($newPassword);
$user->save();

// Make sure the user has the admin role
$adminRole = Role::firstOrCreate(['name' => 'admin']);
$user->syncRoles([$adminRole]);

echo "User setup completed successfully for {$adminEmail}.\n";
echo "User has the following roles: " . implode(', ', $user->getRoleNames()->toArray()) . "\n";

if (empty(getenv('ADMIN_PASSWORD'))) {
    echo "\nIMPORTANT: Your generated password is: {$newPassword}\n";
    echo "Please save this password securely and change it after first login.\n";
}
