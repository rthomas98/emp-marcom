<?php

/**
 * Upload Case Study Images
 * 
 * This script prepares case study images for upload to production by:
 * 1. Locating the image files in your local storage
 * 2. Creating a directory structure that matches what's expected in production
 * 3. Copying the images to this directory structure
 * 4. Creating a ZIP archive for easy upload
 */

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Models\CaseStudy;

// Function to display and log messages
function logAndDisplay($message) {
    echo $message . "\n";
    Log::info($message);
}

logAndDisplay('Starting case study image preparation...');

// Get all case studies to find the image files
$caseStudies = CaseStudy::all();
$imageFiles = [];

foreach ($caseStudies as $study) {
    $imagePath = $study->featured_image;
    
    // Extract just the filename
    $parts = explode('/', $imagePath);
    $filename = end($parts);
    
    logAndDisplay("Found image for case study '{$study->title}': {$filename}");
    $imageFiles[] = [
        'title' => $study->title,
        'filename' => $filename,
        'path' => $imagePath
    ];
}

if (empty($imageFiles)) {
    logAndDisplay("No case study images found!");
    exit(1);
}

// Create a temporary directory to organize the files
$tempDir = __DIR__ . '/case-study-images';
if (!is_dir($tempDir)) {
    mkdir($tempDir, 0755, true);
    logAndDisplay("Created temporary directory: {$tempDir}");
}

// Create the directory structure
$featuredDir = $tempDir . '/case-studies/featured';
if (!is_dir($featuredDir)) {
    mkdir($featuredDir, 0755, true);
    logAndDisplay("Created directory structure: {$featuredDir}");
}

// Copy the images to the temporary directory
$copiedCount = 0;
foreach ($imageFiles as $image) {
    // Try different possible source locations
    $possiblePaths = [
        __DIR__ . '/storage/app/public/case-studies/featured/' . $image['filename'],
        __DIR__ . '/storage/app/public/' . $image['path'],
        __DIR__ . '/public/storage/case-studies/featured/' . $image['filename'],
        __DIR__ . '/public/storage/' . $image['path']
    ];
    
    $copied = false;
    foreach ($possiblePaths as $sourcePath) {
        if (file_exists($sourcePath)) {
            $destPath = $featuredDir . '/' . $image['filename'];
            copy($sourcePath, $destPath);
            logAndDisplay("Copied image for '{$image['title']}' from {$sourcePath} to {$destPath}");
            $copiedCount++;
            $copied = true;
            break;
        }
    }
    
    if (!$copied) {
        logAndDisplay("WARNING: Could not find image file for '{$image['title']}'. Tried:");
        foreach ($possiblePaths as $path) {
            logAndDisplay("  - {$path}");
        }
    }
}

logAndDisplay("Copied {$copiedCount} of " . count($imageFiles) . " case study images");

// Create a ZIP archive
$zipFile = __DIR__ . '/case-study-images.zip';
$zip = new ZipArchive();
if ($zip->open($zipFile, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
    
    // Add the directory structure to the ZIP
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($tempDir),
        RecursiveIteratorIterator::LEAVES_ONLY
    );
    
    foreach ($files as $name => $file) {
        if (!$file->isDir()) {
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($tempDir) + 1);
            
            $zip->addFile($filePath, $relativePath);
            logAndDisplay("Added to ZIP: {$relativePath}");
        }
    }
    
    $zip->close();
    logAndDisplay("Created ZIP archive: {$zipFile}");
} else {
    logAndDisplay("Failed to create ZIP archive!");
}

// Create instructions for uploading and extracting the ZIP
$instructionsFile = __DIR__ . '/case-study-images-upload-instructions.txt';
$instructions = <<<EOT
CASE STUDY IMAGES UPLOAD INSTRUCTIONS
====================================

Follow these steps to upload the case study images to your production server:

1. Upload the ZIP file 'case-study-images.zip' to your production server
   (Use SFTP, Laravel Cloud dashboard, or any other method)

2. SSH into your production server

3. Extract the ZIP file:
   unzip case-study-images.zip

4. Copy the images to the storage directory:
   cp -r case-study-images/* storage/app/public/

5. Make sure the storage link is created:
   php artisan storage:link

6. Set proper permissions:
   chmod -R 775 storage/app/public/case-studies

7. Clear the cache:
   php artisan cache:clear
   php artisan view:clear

8. Visit your website to verify that the case study images are now displaying correctly

If you still have issues, check:
- File permissions
- Web server logs for 404 errors
- That the image paths in the database match the actual file locations
EOT;

file_put_contents($instructionsFile, $instructions);
logAndDisplay("Created instructions file: {$instructionsFile}");

logAndDisplay("\nAll done! Follow the instructions in {$instructionsFile} to upload the images to production.");
