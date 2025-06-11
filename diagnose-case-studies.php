<?php

/**
 * Diagnose Case Studies Issues
 * 
 * This script examines the case studies in the database and checks for any issues
 * that might prevent them from displaying properly.
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

// Log the start of the script execution
Log::info('Starting diagnose-case-studies.php script');

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

// Check if case_studies table exists
logAndDisplay('Checking if case_studies table exists...');
if (!Schema::hasTable('case_studies')) {
    logAndDisplay('ERROR: case_studies table does not exist!');
    exit(1);
}
logAndDisplay('case_studies table exists.');

// Check table structure
logAndDisplay('Checking case_studies table structure...');
$columns = Schema::getColumnListing('case_studies');
logAndDisplay('Columns in case_studies table: ' . implode(', ', $columns));

// Check for required columns
$requiredColumns = ['id', 'title', 'slug', 'client_name', 'industry', 'service_type', 'featured_image', 'status'];
$missingColumns = array_diff($requiredColumns, $columns);
if (!empty($missingColumns)) {
    logAndDisplay('WARNING: Missing required columns: ' . implode(', ', $missingColumns));
}

// Count all case studies
logAndDisplay('Counting all case studies...');
$totalCount = CaseStudy::count();
logAndDisplay("Total case studies in database: {$totalCount}");

// Count published case studies
logAndDisplay('Counting published case studies...');
$publishedCount = CaseStudy::where('status', 'published')->count();
logAndDisplay("Published case studies: {$publishedCount}");

// Count featured case studies
logAndDisplay('Counting featured case studies...');
$featuredCount = CaseStudy::where('status', 'published')->where('is_featured', true)->count();
logAndDisplay("Featured case studies: {$featuredCount}");

// List all case studies with details
logAndDisplay("\nListing all case studies:");
$allCaseStudies = CaseStudy::all();
$i = 1;
foreach ($allCaseStudies as $study) {
    logAndDisplay("\n{$i}. Case Study Details:");
    logAndDisplay("   ID: {$study->id}");
    logAndDisplay("   Title: {$study->title}");
    logAndDisplay("   Slug: {$study->slug}");
    logAndDisplay("   Client: {$study->client_name}");
    logAndDisplay("   Status: {$study->status}");
    logAndDisplay("   Featured: " . ($study->is_featured ? 'Yes' : 'No'));
    logAndDisplay("   Industry: {$study->industry}");
    logAndDisplay("   Service Type: {$study->service_type}");
    logAndDisplay("   Featured Image: {$study->featured_image}");
    $i++;
}

// Check for any potential issues
logAndDisplay("\nChecking for potential issues...");

// Check for duplicate slugs - PostgreSQL compatible version
$duplicateSlugs = DB::table('case_studies')
    ->select('slug', DB::raw('COUNT(*) as slug_count'))
    ->groupBy('slug')
    ->having(DB::raw('COUNT(*)'), '>', 1)
    ->get();

if (count($duplicateSlugs) > 0) {
    logAndDisplay("WARNING: Found duplicate slugs:");
    foreach ($duplicateSlugs as $dup) {
        logAndDisplay("   {$dup->slug}: {$dup->count} occurrences");
    }
} else {
    logAndDisplay("No duplicate slugs found.");
}

// Check for missing required fields
$missingFields = CaseStudy::where('title', '')
    ->orWhere('title', null)
    ->orWhere('slug', '')
    ->orWhere('slug', null)
    ->orWhere('client_name', '')
    ->orWhere('client_name', null)
    ->orWhere('industry', '')
    ->orWhere('industry', null)
    ->orWhere('service_type', '')
    ->orWhere('service_type', null)
    ->orWhere('featured_image', '')
    ->orWhere('featured_image', null)
    ->get();

if (count($missingFields) > 0) {
    logAndDisplay("WARNING: Found case studies with missing required fields:");
    foreach ($missingFields as $study) {
        logAndDisplay("   ID {$study->id}: {$study->title} is missing required fields");
    }
} else {
    logAndDisplay("No case studies with missing required fields found.");
}

// Check for invalid status values
$validStatuses = ['draft', 'published'];
$invalidStatuses = CaseStudy::whereNotIn('status', $validStatuses)->get();

if (count($invalidStatuses) > 0) {
    logAndDisplay("WARNING: Found case studies with invalid status values:");
    foreach ($invalidStatuses as $study) {
        logAndDisplay("   ID {$study->id}: {$study->title} has invalid status '{$study->status}'");
    }
} else {
    logAndDisplay("No case studies with invalid status values found.");
}

// Test the CaseStudy model's query that's used in the controller
logAndDisplay("\nTesting the query used in CaseStudyController::index...");
$testQuery = CaseStudy::where('status', 'published')
    ->orderBy('created_at', 'desc')
    ->get();
logAndDisplay("Query returned {$testQuery->count()} case studies");

if ($testQuery->count() > 0) {
    logAndDisplay("First case study in query results:");
    logAndDisplay("   ID: {$testQuery[0]->id}");
    logAndDisplay("   Title: {$testQuery[0]->title}");
    logAndDisplay("   Status: {$testQuery[0]->status}");
} else {
    logAndDisplay("WARNING: No case studies returned by the controller's query!");
    logAndDisplay("This explains why no case studies are showing on the website.");
}

logAndDisplay("\nDiagnostic script completed.");
echo "Check the output above for any warnings or errors that might explain why your case studies aren't showing.\n";
