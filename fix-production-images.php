<?php

/**
 * Fix production image paths and storage links
 * This script should be run on the production server
 */

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;

echo "Starting production image fix...\n";

// 1. Check if storage link exists
echo "Checking storage link...\n";
if (!file_exists(public_path('storage'))) {
    echo "Storage link not found. Creating...\n";
    Artisan::call('storage:link');
    echo Artisan::output();
} else {
    echo "Storage link exists.\n";
}

// 2. Check permissions on storage directory
echo "Checking storage directory permissions...\n";
$storageDir = storage_path('app/public');
if (!is_writable($storageDir)) {
    echo "Storage directory is not writable. Fixing permissions...\n";
    chmod($storageDir, 0775);
    echo "Changed permissions on {$storageDir} to 0775\n";
} else {
    echo "Storage directory is writable.\n";
}

// 3. Create required directories if they don't exist
echo "Creating required directories...\n";
$directories = [
    'case-studies',
    'case-studies/featured',
    'case-studies/logos',
    'case-studies/gallery'
];

foreach ($directories as $dir) {
    if (!Storage::disk('public')->exists($dir)) {
        Storage::disk('public')->makeDirectory($dir);
        echo "Created directory: {$dir}\n";
    } else {
        echo "Directory exists: {$dir}\n";
    }
}

// 4. Fix image paths in the database
echo "Fixing image paths in the database...\n";

// Get all case studies
$caseStudies = DB::table('case_studies')->get();
$updated = 0;

foreach ($caseStudies as $caseStudy) {
    $changes = [];
    
    // Fix featured_image path
    if (!empty($caseStudy->featured_image)) {
        $featuredImage = $caseStudy->featured_image;
        
        // If it's a full URL, extract just the filename
        if (filter_var($featuredImage, FILTER_VALIDATE_URL)) {
            $pathParts = explode('/', parse_url($featuredImage, PHP_URL_PATH));
            $filename = end($pathParts);
            $newPath = 'case-studies/featured/' . $filename;
            $changes['featured_image'] = $newPath;
        }
        // If it starts with /storage/, remove that prefix
        elseif (str_starts_with($featuredImage, '/storage/')) {
            $newPath = substr($featuredImage, 9);
            $changes['featured_image'] = $newPath;
        }
        // If it doesn't include the expected directory, add it
        elseif (!str_contains($featuredImage, 'case-studies/featured/')) {
            $pathParts = explode('/', $featuredImage);
            $filename = end($pathParts);
            $newPath = 'case-studies/featured/' . $filename;
            $changes['featured_image'] = $newPath;
        }
    }
    
    // Fix logo path
    if (!empty($caseStudy->logo)) {
        $logo = $caseStudy->logo;
        
        // If it's a full URL, extract just the filename
        if (filter_var($logo, FILTER_VALIDATE_URL)) {
            $pathParts = explode('/', parse_url($logo, PHP_URL_PATH));
            $filename = end($pathParts);
            $newPath = 'case-studies/logos/' . $filename;
            $changes['logo'] = $newPath;
        }
        // If it starts with /storage/, remove that prefix
        elseif (str_starts_with($logo, '/storage/')) {
            $newPath = substr($logo, 9);
            $changes['logo'] = $newPath;
        }
        // If it doesn't include the expected directory, add it
        elseif (!str_contains($logo, 'case-studies/logos/')) {
            $pathParts = explode('/', $logo);
            $filename = end($pathParts);
            $newPath = 'case-studies/logos/' . $filename;
            $changes['logo'] = $newPath;
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
                    
                    // If it's a full URL, extract just the filename
                    if (filter_var($src, FILTER_VALIDATE_URL)) {
                        $pathParts = explode('/', parse_url($src, PHP_URL_PATH));
                        $filename = end($pathParts);
                        $newPath = 'case-studies/gallery/' . $filename;
                        $gallery[$key]['src'] = $newPath;
                        $updated_gallery = true;
                    }
                    // If it starts with /storage/, remove that prefix
                    elseif (str_starts_with($src, '/storage/')) {
                        $newPath = substr($src, 9);
                        $gallery[$key]['src'] = $newPath;
                        $updated_gallery = true;
                    }
                    // If it doesn't include the expected directory, add it
                    elseif (!str_contains($src, 'case-studies/gallery/')) {
                        $pathParts = explode('/', $src);
                        $filename = end($pathParts);
                        $newPath = 'case-studies/gallery/' . $filename;
                        $gallery[$key]['src'] = $newPath;
                        $updated_gallery = true;
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
    }
}

echo "Updated {$updated} case studies with fixed image paths.\n";

// 5. Clear all caches
echo "Clearing caches...\n";
Artisan::call('cache:clear');
Artisan::call('config:clear');
Artisan::call('route:clear');
Artisan::call('view:clear');
Artisan::call('filament:assets');
echo "All caches cleared.\n";

echo "Image fix script completed successfully!\n";
