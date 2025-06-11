<?php

/**
 * Fix Case Studies in Production
 * 
 * This script removes sample case studies and clears all relevant caches.
 * It should be run on the production server to ensure sample case studies
 * are removed from the public website.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

// Log the start of the script execution
Log::info('Starting fix-case-studies-production.php script');

// Check if we're in production
if (!app()->environment('production')) {
    echo "This script should only be run in production environment.\n";
    Log::warning('Script attempted to run in non-production environment');
    exit(1);
}

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

// 1. Remove sample case studies by their slugs
logAndDisplay('Removing sample case studies...');

$sampleSlugs = [
    'mobile-banking-app',
    'ecommerce-platform-redesign',
    'healthcare-management-system'
];

$deletedCount = 0;
foreach ($sampleSlugs as $slug) {
    $deleted = CaseStudy::where('slug', $slug)->delete();
    $deletedCount += $deleted;
    logAndDisplay("- Deleted {$deleted} case studies with slug '{$slug}'");
}

logAndDisplay("Total sample case studies removed: {$deletedCount}");

// 2. Clear all caches
logAndDisplay('Clearing application cache...');
Artisan::call('cache:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Clearing config cache...');
Artisan::call('config:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Clearing route cache...');
Artisan::call('route:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Clearing view cache...');
Artisan::call('view:clear');
logAndDisplay(Artisan::output());

// 3. Clear any specific cache keys related to case studies
logAndDisplay('Clearing any specific case study caches...');
Cache::forget('case_studies_all');
Cache::forget('case_studies_featured');
Cache::forget('case_studies_published');

// 4. Optimize the application
logAndDisplay('Optimizing application...');
Artisan::call('optimize');
logAndDisplay(Artisan::output());

logAndDisplay('Script completed successfully!');
echo "Please check your website to confirm the sample case studies have been removed.\n";
