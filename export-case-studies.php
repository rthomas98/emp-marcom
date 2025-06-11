<?php

/**
 * Export Case Studies to JSON
 * 
 * This script exports all case studies from the local database to a JSON file
 * that can be imported into the production database.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Log;

// Log the start of the script execution
Log::info('Starting export-case-studies.php script');

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

logAndDisplay('Exporting case studies to JSON...');

// Get all case studies
$caseStudies = CaseStudy::all();
$count = $caseStudies->count();

logAndDisplay("Found {$count} case studies to export");

if ($count === 0) {
    logAndDisplay("No case studies found to export!");
    exit(1);
}

// Convert to array and fix image paths to be relative
$exportData = [];
foreach ($caseStudies as $study) {
    $studyData = $study->toArray();
    
    // Fix featured image path if it's an absolute URL
    if (strpos($studyData['featured_image'], 'http://') === 0 || strpos($studyData['featured_image'], 'https://') === 0) {
        $pattern = '/\/storage\/(.*)/i';
        if (preg_match($pattern, $studyData['featured_image'], $matches)) {
            $studyData['featured_image'] = $matches[1];
        }
    } elseif (strpos($studyData['featured_image'], '/storage/') === 0) {
        $studyData['featured_image'] = substr($studyData['featured_image'], 9);
    }
    
    // Fix logo path if it exists and is an absolute URL
    if (!empty($studyData['logo'])) {
        if (strpos($studyData['logo'], 'http://') === 0 || strpos($studyData['logo'], 'https://') === 0) {
            $pattern = '/\/storage\/(.*)/i';
            if (preg_match($pattern, $studyData['logo'], $matches)) {
                $studyData['logo'] = $matches[1];
            }
        } elseif (strpos($studyData['logo'], '/storage/') === 0) {
            $studyData['logo'] = substr($studyData['logo'], 9);
        }
    }
    
    // Remove the ID to allow auto-increment in production
    unset($studyData['id']);
    
    $exportData[] = $studyData;
}

// Create the JSON file
$jsonData = json_encode($exportData, JSON_PRETTY_PRINT);
$filename = 'case-studies-export-' . date('Y-m-d') . '.json';
file_put_contents($filename, $jsonData);

logAndDisplay("Successfully exported {$count} case studies to {$filename}");

// Create the import script
$importScriptName = 'import-case-studies.php';
$importScript = <<<'EOT'
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
EOT;

file_put_contents($importScriptName, $importScript);
logAndDisplay("Created import script: {$importScriptName}");

logAndDisplay("\nINSTRUCTIONS:");
logAndDisplay("1. Upload both {$filename} and {$importScriptName} to your production server");
logAndDisplay("2. Run the import script on your production server:");
logAndDisplay("   php {$importScriptName} {$filename}");
logAndDisplay("3. Verify that your case studies appear in the production admin panel");
logAndDisplay("4. Check that they display correctly on your public website");
