<?php

// Script to debug Filament dashboard access
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Spatie\Permission\Models\Role;

echo "=== DEBUGGING FILAMENT DASHBOARD ACCESS ===\n\n";

// Check environment
echo "Environment: " . app()->environment() . "\n\n";

// Get the user
$email = 'rob.thomas@empuls3.com';
$user = User::where('email', $email)->first();

if (!$user) {
    echo "ERROR: User with email {$email} not found in the database.\n";
    exit;
}

echo "User found: " . $user->name . " (ID: " . $user->id . ")\n";

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

// Manually test the middleware logic
echo "\nTesting FilamentAdminAccess middleware logic...\n";

// Get the middleware class
$middlewarePath = __DIR__ . '/app/Http/Middleware/FilamentAdminAccess.php';
if (!file_exists($middlewarePath)) {
    echo "ERROR: FilamentAdminAccess middleware file not found!\n";
    exit;
}

// Test if the user would pass the role check
$hasAdminRole = $user->hasRole('admin');
echo "User has 'admin' role: " . ($hasAdminRole ? "Yes" : "No") . "\n";

// Check if the email matches the hardcoded value
$emailMatches = ($user->email === 'rob.thomas@empuls3.com');
echo "Email matches hardcoded value: " . ($emailMatches ? "Yes" : "No") . "\n";

// Check if the user would pass the middleware check
$wouldPass = ($hasAdminRole || $emailMatches);
echo "User would pass middleware check: " . ($wouldPass ? "Yes" : "No") . "\n";

// Check if there are any permission caching issues
echo "\nChecking for permission caching issues...\n";
echo "Clearing permission cache...\n";

// Clear permission cache
app(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
echo "Permission cache cleared.\n";

// Check if the user would pass the role check after cache clear
$hasAdminRoleAfterClear = $user->hasRole('admin');
echo "User has 'admin' role after cache clear: " . ($hasAdminRoleAfterClear ? "Yes" : "No") . "\n";

// Check database directly
echo "\nChecking database directly for role assignment...\n";
$roleAssignment = DB::table('model_has_roles')
    ->where('model_id', $user->id)
    ->where('model_type', get_class($user))
    ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
    ->where('roles.name', 'admin')
    ->first();

echo "Direct database role assignment: " . ($roleAssignment ? "Found" : "Not found") . "\n";

// Add debug logging for production
Log::info('Debugging Filament access', [
    'user_id' => $user->id,
    'user_email' => $user->email,
    'has_admin_role' => $hasAdminRole,
    'email_matches' => $emailMatches,
    'would_pass_middleware' => $wouldPass,
    'direct_db_role_assignment' => (bool)$roleAssignment
]);

echo "\n=== DEBUGGING COMPLETE ===\n";
echo "If the user should pass the middleware check but is still getting a 403 error, try:\n";
echo "1. Checking for any other middleware in the stack that might be blocking access\n";
echo "2. Verifying that the FilamentAdminAccess middleware is properly registered\n";
echo "3. Checking for any route caching issues (run php artisan route:clear)\n";
echo "4. Examining the Laravel logs for any additional errors\n";
echo "5. Temporarily disabling the FilamentAdminAccess middleware to isolate the issue\n";
