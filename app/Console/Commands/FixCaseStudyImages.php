<?php

namespace App\Console\Commands;

use App\Models\CaseStudy;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class FixCaseStudyImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:fix-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix case study images by checking actual file locations';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Checking and fixing case study images...');
        
        $caseStudies = CaseStudy::all();
        $fixed = 0;
        
        foreach ($caseStudies as $caseStudy) {
            $this->info("\nChecking: {$caseStudy->title}");
            
            // Check featured image
            $featuredImage = $caseStudy->getRawOriginal('featured_image');
            if ($featuredImage) {
                $filename = basename($featuredImage);
                $this->info("Featured image: {$featuredImage}");
                
                // Check if file exists in the path specified
                $correctPath = null;
                
                // Check possible locations
                $locations = [
                    'case-studies/featured/' . $filename,
                    'case-studies/gallery/' . $filename,
                    'case-studies/logos/' . $filename,
                ];
                
                foreach ($locations as $location) {
                    $fullPath = storage_path('app/public/' . $location);
                    if (File::exists($fullPath)) {
                        $correctPath = $location;
                        $this->info("  Found at: {$location}");
                        break;
                    }
                }
                
                // Update if path is wrong
                if ($correctPath && $correctPath !== $featuredImage) {
                    $this->warn("  Fixing featured image path: {$featuredImage} -> {$correctPath}");
                    $caseStudy->update([
                        'featured_image' => $correctPath
                    ]);
                    $fixed++;
                }
            }
            
            // Check gallery images
            $gallery = $caseStudy->getRawOriginal('gallery_images');
            if ($gallery) {
                $galleryArray = json_decode($gallery, true);
                $galleryUpdated = false;
                
                if (is_array($galleryArray)) {
                    foreach ($galleryArray as $key => $image) {
                        if (isset($image['src'])) {
                            $filename = basename($image['src']);
                            $currentPath = $image['src'];
                            
                            // Check possible locations
                            $correctPath = null;
                            foreach ($locations as $location) {
                                $fullPath = storage_path('app/public/' . $location);
                                if (File::exists($fullPath)) {
                                    $correctPath = $location;
                                    break;
                                }
                            }
                            
                            if ($correctPath && $correctPath !== $currentPath) {
                                $this->warn("  Fixing gallery image path: {$currentPath} -> {$correctPath}");
                                $galleryArray[$key]['src'] = $correctPath;
                                $galleryUpdated = true;
                            }
                        }
                    }
                    
                    if ($galleryUpdated) {
                        $caseStudy->update([
                            'gallery_images' => $galleryArray
                        ]);
                        $fixed++;
                    }
                }
            }
        }
        
        $this->info("\nFixed {$fixed} case studies.");
        
        // Clear caches
        $this->call('cache:clear');
        $this->call('view:clear');
        
        return Command::SUCCESS;
    }
}