<?php

namespace App\Console\Commands;

use App\Models\CaseStudy;
use Illuminate\Console\Command;

class FixCaseStudyImagePaths extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:fix-image-paths';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix escaped slashes in case study gallery image paths';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Fixing case study image paths...');
        
        $caseStudies = CaseStudy::all();
        $fixed = 0;
        
        foreach ($caseStudies as $caseStudy) {
            $gallery = $caseStudy->getRawOriginal('gallery_images');
            
            if ($gallery) {
                // Decode the JSON
                $galleryArray = json_decode($gallery, true);
                
                if (is_array($galleryArray)) {
                    $needsUpdate = false;
                    
                    // Check each image in the gallery
                    foreach ($galleryArray as $key => $image) {
                        if (isset($image['src']) && str_contains($image['src'], '\\/')) {
                            // Remove escaped slashes
                            $galleryArray[$key]['src'] = str_replace('\\/', '/', $image['src']);
                            $needsUpdate = true;
                            $this->info("Fixed path for: {$image['src']} -> {$galleryArray[$key]['src']}");
                        }
                    }
                    
                    if ($needsUpdate) {
                        // Update the database with fixed paths
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
        
        // Clear caches
        $this->call('cache:clear');
        $this->info('Cache cleared.');
        
        return Command::SUCCESS;
    }
}