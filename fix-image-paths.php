<?php

/**
 * Fix image paths in the database
 * This script should be run on the production server
 */

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

echo "Starting image path fix...\n";

// Get all case studies
$caseStudies = DB::table('case_studies')->get();
$updated = 0;

foreach ($caseStudies as $caseStudy) {
    $changes = [];
    
    // Fix featured_image path
    if (!empty($caseStudy->featured_image)) {
        $featuredImage = $caseStudy->featured_image;
        echo "Original featured image path: {$featuredImage}\n";
        
        // Make sure it's in the format: case-studies/featured/filename.ext
        if (!str_contains($featuredImage, 'case-studies/featured/')) {
            $pathParts = explode('/', $featuredImage);
            $filename = end($pathParts);
            $newPath = 'case-studies/featured/' . $filename;
            $changes['featured_image'] = $newPath;
            echo "Updated featured image path: {$newPath}\n";
        }
    }
    
    // Fix logo path
    if (!empty($caseStudy->logo)) {
        $logo = $caseStudy->logo;
        echo "Original logo path: {$logo}\n";
        
        // Make sure it's in the format: case-studies/logos/filename.ext
        if (!str_contains($logo, 'case-studies/logos/')) {
            $pathParts = explode('/', $logo);
            $filename = end($pathParts);
            $newPath = 'case-studies/logos/' . $filename;
            $changes['logo'] = $newPath;
            echo "Updated logo path: {$newPath}\n";
        }
    }
    
    // Fix gallery_images paths
    if (!empty($caseStudy->gallery_images)) {
        $gallery = json_decode($caseStudy->gallery_images, true);
        $updated_gallery = false;
        
        if (is_array($gallery)) {
            foreach ($gallery as $key => $image) {
                if (isset($image['src'])) {
                    $src = $image['src'];
                    echo "Original gallery image path: {$src}\n";
                    
                    // Make sure it's in the format: case-studies/gallery/filename.ext
                    if (!str_contains($src, 'case-studies/gallery/')) {
                        $pathParts = explode('/', $src);
                        $filename = end($pathParts);
                        $newPath = 'case-studies/gallery/' . $filename;
                        $gallery[$key]['src'] = $newPath;
                        $updated_gallery = true;
                        echo "Updated gallery image path: {$newPath}\n";
                    }
                }
            }
        }
        
        if ($updated_gallery) {
            $changes['gallery_images'] = json_encode($gallery);
        }
    }
    
    // Update the database if changes were made
    if (!empty($changes)) {
        DB::table('case_studies')
            ->where('id', $caseStudy->id)
            ->update($changes);
        
        echo "Updated case study ID {$caseStudy->id}: {$caseStudy->title}\n";
        $updated++;
    } else {
        echo "No changes needed for case study ID {$caseStudy->id}: {$caseStudy->title}\n";
    }
    
    echo "----------------------------------------\n";
}

echo "Updated {$updated} case studies with fixed image paths.\n";

// Check if images exist in the storage directory
$directories = [
    'case-studies/featured',
    'case-studies/logos',
    'case-studies/gallery'
];

echo "\nChecking if image files exist in storage...\n";

foreach ($directories as $dir) {
    $files = Storage::disk('public')->files($dir);
    echo "Found " . count($files) . " files in {$dir}\n";
    
    if (count($files) > 0) {
        echo "Sample files:\n";
        foreach (array_slice($files, 0, 5) as $file) {
            echo "- {$file}\n";
        }
    } else {
        echo "WARNING: No files found in {$dir}. Make sure to upload the images!\n";
    }
    
    echo "----------------------------------------\n";
}

echo "\nImage path fix completed.\n";
echo "If images are still not displaying, please check:\n";
echo "1. The storage link is properly set up (run php artisan storage:link)\n";
echo "2. The image files are actually in the storage/app/public directory\n";
echo "3. The web server has proper permissions to access the files\n";
echo "4. Clear the application cache (php artisan cache:clear)\n";
