<?php

/**
 * Import Case Studies from JSON
 * 
 * This script imports case studies from a JSON file into the database.
 * Run this script on your production server after uploading the JSON file.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;

// Log the start of the script execution
Log::info('Starting import-case-studies.php script');

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

// Get the JSON file
$jsonFile = $argv[1] ?? null;

if (!$jsonFile || !file_exists($jsonFile)) {
    logAndDisplay("Error: JSON file not found. Please provide the path to the JSON file.");
    logAndDisplay("Usage: php import-case-studies.php case-studies-export.json");
    exit(1);
}

logAndDisplay("Importing case studies from {$jsonFile}...");

// Read the JSON file
$jsonData = file_get_contents($jsonFile);
$caseStudies = json_decode($jsonData, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    logAndDisplay("Error decoding JSON: " . json_last_error_msg());
    exit(1);
}

$count = count($caseStudies);
logAndDisplay("Found {$count} case studies to import");

// Import each case study
$importedCount = 0;
foreach ($caseStudies as $studyData) {
    // Check if a case study with this slug already exists
    $existingStudy = CaseStudy::where('slug', $studyData['slug'])->first();
    
    if ($existingStudy) {
        logAndDisplay("Updating existing case study: {$studyData['title']}");
        $existingStudy->update($studyData);
    } else {
        logAndDisplay("Creating new case study: {$studyData['title']}");
        CaseStudy::create($studyData);
    }
    
    $importedCount++;
}

logAndDisplay("Successfully imported/updated {$importedCount} case studies");

// Clear all caches
logAndDisplay('Clearing application cache...');
Artisan::call('cache:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Clearing view cache...');
Artisan::call('view:clear');
logAndDisplay(Artisan::output());

logAndDisplay('Script completed successfully!');
echo "Please check your website to confirm the case studies now display correctly.\n";