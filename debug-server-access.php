<?php

// Script to debug server-level access issues
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

echo "=== DEBUGGING SERVER ACCESS ISSUES ===\n\n";

// Check environment
echo "Environment: " . app()->environment() . "\n";
echo "Base URL: " . config('app.url') . "\n";
echo "Filament Path: " . config('filament.path', 'marcom') . "\n\n";

// Check if we're running in Laravel Cloud
echo "Laravel Cloud Environment: " . (isset($_ENV['LARAVEL_VAPOR']) ? "Yes" : "No") . "\n";
if (isset($_ENV['LARAVEL_VAPOR'])) {
    echo "Laravel Cloud Environment ID: " . ($_ENV['LARAVEL_VAPOR'] ?? 'Unknown') . "\n";
}

// Check for .htaccess files that might be causing issues
echo "\nChecking for .htaccess files...\n";
$htaccessFiles = [
    __DIR__ . '/.htaccess',
    __DIR__ . '/public/.htaccess',
];

foreach ($htaccessFiles as $file) {
    if (File::exists($file)) {
        echo "Found .htaccess file: " . $file . "\n";
        echo "Contents:\n";
        echo File::get($file) . "\n\n";
    } else {
        echo "No .htaccess file at: " . $file . "\n";
    }
}

// Check for nginx configuration
echo "\nChecking for nginx configuration...\n";
$nginxConfigFile = __DIR__ . '/nginx.conf';
if (File::exists($nginxConfigFile)) {
    echo "Found nginx.conf file\n";
    echo "Contents:\n";
    echo File::get($nginxConfigFile) . "\n\n";
} else {
    echo "No nginx.conf file found\n";
}

// Check routes
echo "\nChecking Filament routes...\n";
$routes = Route::getRoutes();
$filamentRoutes = [];

foreach ($routes as $route) {
    $uri = $route->uri();
    if (strpos($uri, 'marcom') === 0 || strpos($uri, 'filament') === 0) {
        $filamentRoutes[] = [
            'uri' => $uri,
            'methods' => implode('|', $route->methods()),
            'name' => $route->getName(),
            'middleware' => implode('|', $route->middleware()),
        ];
    }
}

if (count($filamentRoutes) > 0) {
    echo "Found " . count($filamentRoutes) . " Filament routes\n";
    echo "Sample routes:\n";
    $sampleCount = min(5, count($filamentRoutes));
    for ($i = 0; $i < $sampleCount; $i++) {
        $route = $filamentRoutes[$i];
        echo "- {$route['methods']} {$route['uri']} (name: {$route['name']}, middleware: {$route['middleware']})\n";
    }
} else {
    echo "No Filament routes found. This might indicate a registration issue.\n";
}

// Check middleware stack
echo "\nChecking middleware stack...\n";
$kernel = app(\Illuminate\Contracts\Http\Kernel::class);
$middlewareGroups = $kernel->getMiddlewareGroups();
$routeMiddleware = $kernel->getRouteMiddleware();

echo "Middleware Groups:\n";
foreach ($middlewareGroups as $name => $middlewares) {
    echo "- Group '{$name}': " . implode(', ', $middlewares) . "\n";
}

echo "\nRoute Middleware:\n";
foreach ($routeMiddleware as $name => $class) {
    echo "- '{$name}': {$class}\n";
}

// Create a test endpoint to verify basic access
echo "\nCreating a test endpoint to verify basic access...\n";
try {
    Route::get('/marcom-access-test', function () {
        return response()->json([
            'success' => true,
            'message' => 'If you can see this, basic routing is working',
            'timestamp' => now()->toIso8601String(),
            'authenticated' => auth()->check(),
            'user' => auth()->check() ? auth()->user()->email : null,
        ]);
    })->name('marcom-access-test');
    
    echo "Test endpoint created at: /marcom-access-test\n";
    echo "Try accessing this endpoint to verify basic routing is working.\n";
} catch (\Exception $e) {
    echo "Error creating test endpoint: " . $e->getMessage() . "\n";
}

// Log all this information
Log::info('Server access debug information', [
    'environment' => app()->environment(),
    'base_url' => config('app.url'),
    'filament_path' => config('filament.path', 'marcom'),
    'laravel_cloud' => isset($_ENV['LARAVEL_VAPOR']),
    'filament_routes_count' => count($filamentRoutes),
]);

echo "\n=== DEBUGGING COMPLETE ===\n";
echo "If you're still having issues, try:\n";
echo "1. Checking if there are any server-level access controls (e.g., IP restrictions)\n";
echo "2. Verifying that your domain is correctly configured in Laravel Cloud\n";
echo "3. Checking for any firewall or security group settings that might be blocking access\n";
echo "4. Examining the server logs for any 403 errors\n";
echo "5. Temporarily disabling any security plugins or middleware\n";
