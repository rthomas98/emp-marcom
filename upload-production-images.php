<?php

/**
 * Package case study images for production upload
 * This script creates a ZIP file with all case study images
 */

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

echo "Starting image packaging for production upload...\n";

// Create a temporary directory for the images
$tempDir = storage_path('app/temp/case-study-images');
if (!is_dir($tempDir)) {
    mkdir($tempDir, 0755, true);
}

// Create the directory structure
mkdir($tempDir . '/case-studies', 0755, true);
mkdir($tempDir . '/case-studies/featured', 0755, true);
mkdir($tempDir . '/case-studies/logos', 0755, true);
mkdir($tempDir . '/case-studies/gallery', 0755, true);

// Get all case studies
$caseStudies = DB::table('case_studies')->get();
$imagesCopied = 0;

foreach ($caseStudies as $caseStudy) {
    // Copy featured image
    if (!empty($caseStudy->featured_image)) {
        $featuredImage = $caseStudy->featured_image;
        
        // Extract just the filename
        if (filter_var($featuredImage, FILTER_VALIDATE_URL)) {
            $pathParts = explode('/', parse_url($featuredImage, PHP_URL_PATH));
            $filename = end($pathParts);
        } else {
            $pathParts = explode('/', $featuredImage);
            $filename = end($pathParts);
        }
        
        // Source path could be in various formats
        $possibleSourcePaths = [
            storage_path('app/public/case-studies/featured/' . $filename),
            public_path('storage/case-studies/featured/' . $filename),
            storage_path('app/public/' . $featuredImage),
            public_path('storage/' . $featuredImage),
        ];
        
        $copied = false;
        foreach ($possibleSourcePaths as $sourcePath) {
            if (file_exists($sourcePath)) {
                copy($sourcePath, $tempDir . '/case-studies/featured/' . $filename);
                echo "Copied featured image: {$filename}\n";
                $imagesCopied++;
                $copied = true;
                break;
            }
        }
        
        if (!$copied) {
            echo "WARNING: Could not find featured image: {$featuredImage}\n";
        }
    }
    
    // Copy logo
    if (!empty($caseStudy->logo)) {
        $logo = $caseStudy->logo;
        
        // Extract just the filename
        if (filter_var($logo, FILTER_VALIDATE_URL)) {
            $pathParts = explode('/', parse_url($logo, PHP_URL_PATH));
            $filename = end($pathParts);
        } else {
            $pathParts = explode('/', $logo);
            $filename = end($pathParts);
        }
        
        // Source path could be in various formats
        $possibleSourcePaths = [
            storage_path('app/public/case-studies/logos/' . $filename),
            public_path('storage/case-studies/logos/' . $filename),
            storage_path('app/public/' . $logo),
            public_path('storage/' . $logo),
        ];
        
        $copied = false;
        foreach ($possibleSourcePaths as $sourcePath) {
            if (file_exists($sourcePath)) {
                copy($sourcePath, $tempDir . '/case-studies/logos/' . $filename);
                echo "Copied logo: {$filename}\n";
                $imagesCopied++;
                $copied = true;
                break;
            }
        }
        
        if (!$copied) {
            echo "WARNING: Could not find logo: {$logo}\n";
        }
    }
    
    // Copy gallery images
    if (!empty($caseStudy->gallery_images)) {
        $gallery = json_decode($caseStudy->gallery_images, true);
        
        if (is_array($gallery)) {
            foreach ($gallery as $image) {
                if (isset($image['src'])) {
                    $src = $image['src'];
                    
                    // Extract just the filename
                    if (filter_var($src, FILTER_VALIDATE_URL)) {
                        $pathParts = explode('/', parse_url($src, PHP_URL_PATH));
                        $filename = end($pathParts);
                    } else {
                        $pathParts = explode('/', $src);
                        $filename = end($pathParts);
                    }
                    
                    // Source path could be in various formats
                    $possibleSourcePaths = [
                        storage_path('app/public/case-studies/gallery/' . $filename),
                        public_path('storage/case-studies/gallery/' . $filename),
                        storage_path('app/public/' . $src),
                        public_path('storage/' . $src),
                    ];
                    
                    $copied = false;
                    foreach ($possibleSourcePaths as $sourcePath) {
                        if (file_exists($sourcePath)) {
                            copy($sourcePath, $tempDir . '/case-studies/gallery/' . $filename);
                            echo "Copied gallery image: {$filename}\n";
                            $imagesCopied++;
                            $copied = true;
                            break;
                        }
                    }
                    
                    if (!$copied) {
                        echo "WARNING: Could not find gallery image: {$src}\n";
                    }
                }
            }
        }
    }
}

echo "Copied {$imagesCopied} images to temporary directory.\n";

// Create a ZIP file
$zipFile = storage_path('app/case-study-images.zip');
$zip = new ZipArchive();

if ($zip->open($zipFile, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($tempDir),
        RecursiveIteratorIterator::LEAVES_ONLY
    );
    
    foreach ($files as $name => $file) {
        if (!$file->isDir()) {
            $filePath = $file->getRealPath();
            $relativePath = substr($filePath, strlen($tempDir) + 1);
            
            $zip->addFile($filePath, $relativePath);
            echo "Added to ZIP: {$relativePath}\n";
        }
    }
    
    $zip->close();
    echo "Created ZIP file: {$zipFile}\n";
} else {
    echo "Failed to create ZIP file.\n";
}

// Clean up the temporary directory
function deleteDirectory($dir) {
    if (!file_exists($dir)) {
        return true;
    }
    
    if (!is_dir($dir)) {
        return unlink($dir);
    }
    
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }
        
        if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }
    }
    
    return rmdir($dir);
}

deleteDirectory($tempDir);
echo "Cleaned up temporary directory.\n";

echo "\n===== INSTRUCTIONS FOR PRODUCTION =====\n";
echo "1. Download the ZIP file from: " . storage_path('app/case-study-images.zip') . "\n";
echo "2. Upload the ZIP file to your production server\n";
echo "3. Extract the ZIP file on the production server\n";
echo "4. Copy the extracted files to the storage/app/public directory:\n";
echo "   cp -R case-studies /path/to/storage/app/public/\n";
echo "5. Run the fix-production-images.php script to update database paths and fix storage links:\n";
echo "   php fix-production-images.php\n";
echo "===== END INSTRUCTIONS =====\n";

echo "\nImage packaging completed successfully!\n";
