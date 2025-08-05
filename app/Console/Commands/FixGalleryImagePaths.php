<?php

namespace App\Console\Commands;

use App\Models\CaseStudy;
use Illuminate\Console\Command;

class FixGalleryImagePaths extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:fix-gallery-paths';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix gallery images that have incorrect paths';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Fixing gallery image paths...');
        
        // Images that should be in gallery, not featured
        $galleryImages = [
            '01JVT0ETSAP37WDYT1PV7XSAMF.png',
            '01JVW8WBG2KAM4RPN1Q8DMZRY5.png',
        ];
        
        $caseStudies = CaseStudy::all();
        $fixed = 0;
        
        foreach ($caseStudies as $caseStudy) {
            $gallery = $caseStudy->getRawOriginal('gallery_images');
            $needsUpdate = false;
            
            if ($gallery) {
                $galleryArray = json_decode($gallery, true);
                
                if (is_array($galleryArray)) {
                    foreach ($galleryArray as $key => $image) {
                        if (isset($image['src'])) {
                            $filename = basename($image['src']);
                            
                            // Check if this is one of our gallery images
                            if (in_array($filename, $galleryImages)) {
                                // Fix the path to use gallery instead of featured
                                $correctPath = 'case-studies/gallery/' . $filename;
                                
                                if ($image['src'] !== $correctPath) {
                                    $this->info("Fixing: {$image['src']} -> {$correctPath}");
                                    $galleryArray[$key]['src'] = $correctPath;
                                    $needsUpdate = true;
                                }
                            }
                        }
                    }
                    
                    if ($needsUpdate) {
                        $caseStudy->update([
                            'gallery_images' => $galleryArray
                        ]);
                        $fixed++;
                        $this->info("Updated case study: {$caseStudy->title}");
                    }
                }
            }
        }
        
        $this->info("Fixed {$fixed} case studies.");
        
        // Clear all caches
        $this->call('cache:clear');
        $this->call('view:clear');
        
        return Command::SUCCESS;
    }
}