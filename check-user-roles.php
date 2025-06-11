<?php

// Script to check user roles and permissions
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

// Email to check
$email = 'rob.thomas@empuls3.com';

echo "=== CHECKING USER ROLES AND PERMISSIONS ===\n\n";

// Check if user exists
$user = User::where('email', $email)->first();
if (!$user) {
    echo "ERROR: User with email {$email} not found in the database.\n";
    exit;
}

echo "User found: " . $user->name . " (ID: " . $user->id . ")\n\n";

// Check user roles
echo "User roles:\n";
$roles = $user->roles;
if ($roles->isEmpty()) {
    echo "- No roles assigned\n";
} else {
    foreach ($roles as $role) {
        echo "- {$role->name}\n";
    }
}

// Check available roles in the system
echo "\nAvailable roles in the system:\n";
$allRoles = Role::all();
foreach ($allRoles as $role) {
    echo "- {$role->name}\n";
}

// Check if admin role exists
$adminRole = Role::where('name', 'admin')->first();
if (!$adminRole) {
    echo "\nWARNING: 'admin' role does not exist in the system!\n";
    
    // Create admin role if it doesn't exist
    echo "Creating 'admin' role...\n";
    $adminRole = Role::create(['name' => 'admin']);
    echo "'admin' role created successfully.\n";
}

// Assign admin role to user if they don't have it
if (!$user->hasRole('admin')) {
    echo "\nAssigning 'admin' role to user {$user->name}...\n";
    $user->assignRole('admin');
    echo "'admin' role assigned successfully.\n";
} else {
    echo "\nUser already has 'admin' role.\n";
}

// Check middleware configuration
echo "\nChecking FilamentAdminAccess middleware configuration...\n";
$middlewarePath = __DIR__ . '/app/Http/Middleware/FilamentAdminAccess.php';
if (file_exists($middlewarePath)) {
    $middlewareContent = file_get_contents($middlewarePath);
    echo "FilamentAdminAccess middleware exists.\n";
    
    // Check if the middleware is correctly configured
    if (strpos($middlewareContent, '$user->hasRole(\'admin\')') !== false) {
        echo "Middleware is checking for 'admin' role.\n";
    } else {
        echo "WARNING: Middleware may not be checking for 'admin' role correctly.\n";
    }
    
    // Check if the middleware allows the specific email
    if (strpos($middlewareContent, $email) !== false) {
        echo "Middleware has hardcoded access for {$email}.\n";
    } else {
        echo "WARNING: Middleware does not have hardcoded access for {$email}.\n";
    }
} else {
    echo "WARNING: FilamentAdminAccess middleware file not found!\n";
}

echo "\n=== CHECK COMPLETE ===\n";
echo "If you're still having issues accessing the dashboard, please check:\n";
echo "1. Make sure your user has the 'admin' role\n";
echo "2. Verify the FilamentAdminAccess middleware is correctly configured\n";
echo "3. Clear your browser cache and cookies\n";
echo "4. Try logging out and logging back in\n";
