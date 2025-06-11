<?php

/**
 * Check and fix storage link and file permissions
 * This script should be run on the production server
 */

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;

echo "Starting storage link check...\n";

// Check if public/storage exists and is a symlink
$publicStoragePath = public_path('storage');
echo "Checking if public/storage exists and is a symlink...\n";

if (!file_exists($publicStoragePath)) {
    echo "public/storage does not exist. Creating symlink...\n";
    Artisan::call('storage:link');
    echo Artisan::output();
} elseif (!is_link($publicStoragePath)) {
    echo "public/storage exists but is not a symlink. Removing and recreating...\n";
    // Backup any files that might be in there
    if (is_dir($publicStoragePath)) {
        $backupDir = public_path('storage_backup_' . time());
        rename($publicStoragePath, $backupDir);
        echo "Backed up existing directory to {$backupDir}\n";
    } else {
        unlink($publicStoragePath);
    }
    
    Artisan::call('storage:link');
    echo Artisan::output();
} else {
    echo "public/storage exists and is a symlink.\n";
    
    // Check if the symlink points to the correct location
    $target = readlink($publicStoragePath);
    $expectedTarget = storage_path('app/public');
    
    // Normalize paths for comparison
    $target = realpath($target);
    $expectedTarget = realpath($expectedTarget);
    
    if ($target !== $expectedTarget) {
        echo "Symlink points to incorrect location: {$target}\n";
        echo "Expected: {$expectedTarget}\n";
        echo "Removing and recreating symlink...\n";
        
        unlink($publicStoragePath);
        Artisan::call('storage:link');
        echo Artisan::output();
    } else {
        echo "Symlink points to correct location: {$target}\n";
    }
}

// Check if storage/app/public exists and has correct permissions
$storagePublicPath = storage_path('app/public');
echo "\nChecking if storage/app/public exists and has correct permissions...\n";

if (!file_exists($storagePublicPath)) {
    echo "storage/app/public does not exist. Creating directory...\n";
    mkdir($storagePublicPath, 0775, true);
} else {
    echo "storage/app/public exists.\n";
}

// Check permissions
$permissions = substr(sprintf('%o', fileperms($storagePublicPath)), -4);
echo "Current permissions on storage/app/public: {$permissions}\n";

if ($permissions !== '0775') {
    echo "Setting permissions to 0775...\n";
    chmod($storagePublicPath, 0775);
    echo "Permissions set.\n";
} else {
    echo "Permissions are correct.\n";
}

// Check if case studies directories exist
$directories = [
    'case-studies',
    'case-studies/featured',
    'case-studies/logos',
    'case-studies/gallery'
];

echo "\nChecking if case studies directories exist...\n";

foreach ($directories as $dir) {
    $path = storage_path('app/public/' . $dir);
    
    if (!file_exists($path)) {
        echo "{$dir} does not exist. Creating...\n";
        mkdir($path, 0775, true);
    } else {
        echo "{$dir} exists.\n";
    }
    
    // Set permissions
    chmod($path, 0775);
}

// Check for case study image files
echo "\nChecking for case study image files...\n";

$featuredImages = glob(storage_path('app/public/case-studies/featured/*'));
$logoImages = glob(storage_path('app/public/case-studies/logos/*'));
$galleryImages = glob(storage_path('app/public/case-studies/gallery/*'));

echo "Found " . count($featuredImages) . " featured images.\n";
echo "Found " . count($logoImages) . " logo images.\n";
echo "Found " . count($galleryImages) . " gallery images.\n";

if (count($featuredImages) === 0 && count($logoImages) === 0 && count($galleryImages) === 0) {
    echo "\nWARNING: No image files found in case studies directories!\n";
    echo "Please make sure to upload the case study images to the server.\n";
    echo "You can use the upload-production-images.php script to package the images.\n";
}

// Test if images are accessible via the web
echo "\nTesting if images are accessible via the web...\n";

// Get the app URL
$appUrl = config('app.url');
echo "App URL: {$appUrl}\n";

// Check if any featured images exist
if (count($featuredImages) > 0) {
    $testImage = basename($featuredImages[0]);
    $testUrl = $appUrl . '/storage/case-studies/featured/' . $testImage;
    
    echo "Testing URL: {$testUrl}\n";
    echo "Please manually check if this URL is accessible in your browser.\n";
}

// Clear all caches
echo "\nClearing caches...\n";
Artisan::call('cache:clear');
Artisan::call('config:clear');
Artisan::call('route:clear');
Artisan::call('view:clear');
echo "All caches cleared.\n";

echo "\nStorage link check completed.\n";
echo "If you're still having issues with images, please ensure:\n";
echo "1. The web server has read access to the storage directory\n";
echo "2. The image files are actually in the correct directories\n";
echo "3. The image paths in the database match the actual file paths\n";
echo "4. There are no web server configuration issues blocking access to the storage directory\n";
