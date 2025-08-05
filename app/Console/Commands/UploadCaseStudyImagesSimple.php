<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class UploadCaseStudyImagesSimple extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:upload-simple';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Simple upload of case study images to production storage';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Copying case study images to production storage...');
        
        // Images we need to copy
        $images = [
            'case-studies/featured/01JVW0KGF99P5KPGG37RZCARAA.png',
            'case-studies/gallery/01JVT0ETSAP37WDYT1PV7XSAMF.png',
            'case-studies/gallery/01JVW8WBG2KAM4RPN1Q8DMZRY5.png',
        ];
        
        // Also copy all images from local if they exist
        $directories = [
            'case-studies/featured',
            'case-studies/gallery',
            'case-studies/logos',
        ];
        
        $copied = 0;
        
        // First, try to copy from the case-studies directory in the project root
        $projectCaseStudiesPath = base_path('case-studies');
        if (File::exists($projectCaseStudiesPath)) {
            $this->info("Found case-studies directory in project root!");
            
            foreach ($directories as $dir) {
                $sourcePath = base_path($dir);
                $destPath = storage_path('app/public/' . $dir);
                
                if (File::exists($sourcePath)) {
                    // Create destination directory
                    if (!File::exists($destPath)) {
                        File::makeDirectory($destPath, 0755, true);
                    }
                    
                    $files = File::files($sourcePath);
                    foreach ($files as $file) {
                        $filename = $file->getFilename();
                        $destFile = $destPath . '/' . $filename;
                        
                        if (!File::exists($destFile)) {
                            File::copy($file->getPathname(), $destFile);
                            $this->info("Copied: {$dir}/{$filename}");
                            $copied++;
                        }
                    }
                }
            }
        }
        
        // Also check the case-study-images directory
        $caseStudyImagesPath = base_path('case-study-images/case-studies');
        if (File::exists($caseStudyImagesPath)) {
            $this->info("Found case-study-images directory!");
            
            foreach ($directories as $dir) {
                $dirName = basename($dir);
                $sourcePath = $caseStudyImagesPath . '/' . $dirName;
                $destPath = storage_path('app/public/' . $dir);
                
                if (File::exists($sourcePath)) {
                    // Create destination directory
                    if (!File::exists($destPath)) {
                        File::makeDirectory($destPath, 0755, true);
                    }
                    
                    $files = File::files($sourcePath);
                    foreach ($files as $file) {
                        $filename = $file->getFilename();
                        $destFile = $destPath . '/' . $filename;
                        
                        if (!File::exists($destFile)) {
                            File::copy($file->getPathname(), $destFile);
                            $this->info("Copied: {$dir}/{$filename}");
                            $copied++;
                        }
                    }
                }
            }
        }
        
        $this->info("Upload complete! Copied {$copied} files.");
        
        // Check if the critical images now exist
        $this->info("\nVerifying critical images:");
        foreach ($images as $image) {
            $path = storage_path('app/public/' . $image);
            if (File::exists($path)) {
                $this->info("✅ {$image}");
            } else {
                $this->error("❌ {$image}");
            }
        }
        
        return Command::SUCCESS;
    }
}