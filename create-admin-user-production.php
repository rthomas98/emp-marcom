<?php
/**
 * Production-safe script to create a Filament admin user
 * 
 * This script can be run directly in production without triggering Laravel's production warnings
 * Run with: php create-admin-user-production.php
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

// Function to get secure input without echoing to screen
function getSecureInput($prompt) {
    echo $prompt;
    
    // Start output buffering
    ob_start();
    $input = trim(fgets(STDIN));
    // Discard output buffer
    ob_end_clean();
    
    echo "\n";
    return $input;
}

// Get admin user details
$name = 'Rob Thomas';
$email = 'rob.thomas@empuls3.com';

// Get password from environment variable or prompt
$password = getenv('ADMIN_PASSWORD');
if (!$password) {
    echo "ADMIN_PASSWORD environment variable not set.\n";
    echo "Please enter a secure password (min 12 characters):\n";
    system('stty -echo');
    $password = trim(fgets(STDIN));
    system('stty echo');
    echo "\n";
    
    if (empty($password)) {
        echo "Error: Password cannot be empty.\n";
        exit(1);
    }
    
    if (strlen($password) < 12) {
        echo "Error: Password must be at least 12 characters long.\n";
        exit(1);
    }
}

try {
    // Create admin role if it doesn't exist
    if (!Role::where('name', 'admin')->exists()) {
        echo "Creating admin role...\n";
        Role::create(['name' => 'admin']);
    }
    
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
    
    // Assign admin role to user
    $user->syncRoles(['admin']);
    
    echo "Success! User {$email} has been created/updated with admin role.\n";
    echo "-------------------------------------\n";
    echo "Username: {$email}\n";
    echo "Role: admin\n";
    echo "-------------------------------------\n";
    echo "Please change your password after first login if you used a temporary one.\n";
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    exit(1);
}
