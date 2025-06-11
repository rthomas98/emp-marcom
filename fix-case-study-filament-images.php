<?php

/**
 * Fix Case Study Images for Filament
 * 
 * This script updates case study image paths to ensure they work correctly with Filament's file upload component.
 * It preserves the image paths but formats them in a way that Filament can recognize and edit.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

// Log the start of the script execution
Log::info('Starting fix-case-study-filament-images.php script');

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

logAndDisplay('Fixing case study image paths for Filament compatibility...');

// Get all case studies
$caseStudies = CaseStudy::all();
$updatedCount = 0;

foreach ($caseStudies as $study) {
    $originalPath = $study->getRawOriginal('featured_image');
    $needsUpdate = false;
    $newPath = null;
    
    logAndDisplay("Processing case study ID {$study->id}: {$study->title}");
    logAndDisplay("  Original raw path: " . ($originalPath ?: 'null'));
    
    // If it's a full URL
    if (filter_var($originalPath, FILTER_VALIDATE_URL)) {
        // Extract just the filename
        $pattern = '/\/([^\/]+)$/';
        if (preg_match($pattern, $originalPath, $matches)) {
            $filename = $matches[1];
            $newPath = 'case-studies/featured/' . $filename;
            $needsUpdate = true;
            
            // Check if the file exists in the expected location
            if (!Storage::disk('public')->exists($newPath)) {
                logAndDisplay("  WARNING: File does not exist at {$newPath}. Will still update the path.");
            }
        }
    } 
    // If it's already in the correct format (case-studies/featured/filename.ext)
    else if (strpos($originalPath, 'case-studies/featured/') === 0) {
        logAndDisplay("  Path already in correct format: {$originalPath}");
        continue;
    }
    // If it has a different format
    else if (!empty($originalPath)) {
        // Extract just the filename
        $parts = explode('/', $originalPath);
        $filename = end($parts);
        if (!empty($filename)) {
            $newPath = 'case-studies/featured/' . $filename;
            $needsUpdate = true;
        }
    }
    
    if ($needsUpdate && $newPath) {
        logAndDisplay("  Updating path to: {$newPath}");
        
        // Update directly in the database to bypass any accessors/mutators
        $study->featured_image = $newPath;
        $study->save();
        $updatedCount++;
    } else {
        logAndDisplay("  No update needed or couldn't determine new path");
    }
}

logAndDisplay("Updated image paths for {$updatedCount} case studies");

// Clear all caches
logAndDisplay('Clearing application cache...');
Artisan::call('cache:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Clearing view cache...');
Artisan::call('view:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Script completed successfully!');
echo "Please check your admin panel to confirm the case study images are now editable.\n";
