<?php

/**
 * Fix Case Study Image Paths
 * 
 * This script updates case study image paths to use relative paths instead of absolute URLs
 * with the development domain, which prevents images from loading in production.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Log;

// Log the start of the script execution
Log::info('Starting fix-case-study-images.php script');

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

logAndDisplay('Fixing case study image paths...');

// Get all case studies
$caseStudies = CaseStudy::all();
$updatedCount = 0;

foreach ($caseStudies as $study) {
    $originalPath = $study->featured_image;
    $needsUpdate = false;
    
    // Check if the path contains a domain
    if (strpos($originalPath, 'http://') === 0 || strpos($originalPath, 'https://') === 0) {
        // Extract just the path part after /storage/
        $pattern = '/\/storage\/(.*)/i';
        if (preg_match($pattern, $originalPath, $matches)) {
            $newPath = $matches[1];
            $needsUpdate = true;
        } else {
            logAndDisplay("WARNING: Could not extract path from {$originalPath}");
            continue;
        }
    } 
    // Check if the path starts with /storage/
    elseif (strpos($originalPath, '/storage/') === 0) {
        $newPath = substr($originalPath, 9); // Remove the /storage/ prefix
        $needsUpdate = true;
    }
    
    if ($needsUpdate) {
        logAndDisplay("Updating case study ID {$study->id}: {$study->title}");
        logAndDisplay("  Original path: {$originalPath}");
        logAndDisplay("  New path: {$newPath}");
        
        $study->featured_image = $newPath;
        $study->save();
        $updatedCount++;
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
echo "Please check your website to confirm the case studies now display correctly.\n";
