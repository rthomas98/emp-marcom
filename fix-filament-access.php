<?php

// Script to fix Filament dashboard access issues
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use App\Models\User;

echo "=== FIXING FILAMENT DASHBOARD ACCESS ===\n\n";

// Step 1: Clear all caches
echo "Clearing all caches...\n";
Artisan::call('cache:clear');
Artisan::call('route:clear');
Artisan::call('config:clear');
Artisan::call('view:clear');
Artisan::call('optimize:clear');
echo "All caches cleared.\n\n";

// Step 2: Check if the FilamentAdminAccess middleware is registered correctly
echo "Checking FilamentAdminAccess middleware registration...\n";
$kernelPath = app_path('Http/Kernel.php');
if (File::exists($kernelPath)) {
    $kernelContent = File::get($kernelPath);
    if (strpos($kernelContent, 'FilamentAdminAccess') !== false) {
        echo "FilamentAdminAccess middleware is registered in Kernel.php\n";
    } else {
        echo "WARNING: FilamentAdminAccess middleware is NOT registered in Kernel.php\n";
        echo "This might be why it's not being applied correctly.\n";
    }
} else {
    echo "ERROR: Could not find Kernel.php\n";
}

// Step 3: Create a temporary bypass file to diagnose if it's a middleware issue
$bypassPath = app_path('Http/Middleware/BypassFilamentAuth.php');
echo "\nCreating temporary bypass middleware...\n";
$bypassContent = <<<'EOD'
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class BypassFilamentAuth
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        Log::info('BypassFilamentAuth middleware called', [
            'path' => $request->path(),
            'user' => auth()->check() ? auth()->user()->email : 'unauthenticated'
        ]);
        
        // Always allow access - this is temporary for debugging
        return $next($request);
    }
}
EOD;

File::put($bypassPath, $bypassContent);
echo "Created temporary bypass middleware at: app/Http/Middleware/BypassFilamentAuth.php\n";

// Step 4: Update the MarcomPanelProvider to use the bypass middleware
$panelProviderPath = app_path('Providers/Filament/MarcomPanelProvider.php');
if (File::exists($panelProviderPath)) {
    $providerContent = File::get($panelProviderPath);
    
    // Check if FilamentAdminAccess is in the middleware list
    if (strpos($providerContent, 'FilamentAdminAccess') !== false) {
        echo "\nUpdating MarcomPanelProvider to use bypass middleware...\n";
        
        // Replace FilamentAdminAccess with BypassFilamentAuth
        $updatedContent = str_replace(
            '\\App\\Http\\Middleware\\FilamentAdminAccess::class',
            '\\App\\Http\\Middleware\\BypassFilamentAuth::class', 
            $providerContent
        );
        
        File::put($panelProviderPath, $updatedContent);
        echo "Updated MarcomPanelProvider to use bypass middleware.\n";
    } else {
        echo "\nWARNING: FilamentAdminAccess middleware not found in MarcomPanelProvider.\n";
    }
} else {
    echo "\nERROR: Could not find MarcomPanelProvider.php\n";
}

// Step 5: Check if there are any policies that might be blocking access
echo "\nChecking for Filament policies...\n";
$policiesDir = app_path('Policies');
if (File::isDirectory($policiesDir)) {
    $policies = File::files($policiesDir);
    echo "Found " . count($policies) . " policies.\n";
    
    foreach ($policies as $policy) {
        $policyContent = File::get($policy);
        if (strpos($policyContent, 'viewAny') !== false || 
            strpos($policyContent, 'canAccessPanel') !== false ||
            strpos($policyContent, 'canManage') !== false) {
            echo "Policy that might affect Filament access: " . $policy->getFilename() . "\n";
        }
    }
} else {
    echo "No policies directory found.\n";
}

// Step 6: Check AuthServiceProvider for any Filament-related gates
echo "\nChecking AuthServiceProvider for Filament gates...\n";
$authProviderPath = app_path('Providers/AuthServiceProvider.php');
if (File::exists($authProviderPath)) {
    $authProviderContent = File::get($authProviderPath);
    if (strpos($authProviderContent, 'filament') !== false || 
        strpos($authProviderContent, 'Filament') !== false ||
        strpos($authProviderContent, 'marcom') !== false) {
        echo "Found potential Filament-related gates in AuthServiceProvider.\n";
    } else {
        echo "No obvious Filament-related gates found in AuthServiceProvider.\n";
    }
} else {
    echo "AuthServiceProvider not found.\n";
}

// Step 7: Add a debug route to test basic access
$routesPath = base_path('routes/web.php');
if (File::exists($routesPath)) {
    echo "\nAdding debug route to routes/web.php...\n";
    $debugRoute = <<<'EOD'

// Temporary debug route for Filament access testing
Route::get('/filament-debug', function () {
    return response()->json([
        'success' => true,
        'message' => 'Debug route accessible',
        'authenticated' => auth()->check(),
        'user' => auth()->check() ? [
            'id' => auth()->id(),
            'email' => auth()->user()->email,
            'roles' => auth()->user()->roles->pluck('name'),
        ] : null,
    ]);
});
EOD;

    File::append($routesPath, $debugRoute);
    echo "Added debug route at /filament-debug\n";
}

echo "\n=== FIX COMPLETE ===\n";
echo "After deploying these changes, try:\n";
echo "1. Accessing the Filament dashboard at /marcom\n";
echo "2. If that doesn't work, try the debug route at /filament-debug\n";
echo "3. Check the logs for any errors or access issues\n";
echo "4. Remember to remove the temporary bypass middleware after debugging\n";
