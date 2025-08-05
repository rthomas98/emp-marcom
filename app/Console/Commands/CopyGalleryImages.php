<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CopyGalleryImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:copy-gallery';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy gallery images from local storage';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Copying gallery images...');
        
        // Gallery images we need
        $galleryImages = [
            '01JVT0ETSAP37WDYT1PV7XSAMF.png',
            '01JVW8WBG2KAM4RPN1Q8DMZRY5.png',
        ];
        
        // Ensure gallery directory exists
        $galleryPath = storage_path('app/public/case-studies/gallery');
        if (!File::exists($galleryPath)) {
            File::makeDirectory($galleryPath, 0755, true);
            $this->info('Created gallery directory');
        }
        
        $copied = 0;
        
        // Try multiple source locations
        $sourcePaths = [
            base_path('case-studies/gallery'),
            base_path('case-study-images/case-studies/gallery'),
            storage_path('app/public/case-studies/gallery'), // In case they're already there
        ];
        
        foreach ($galleryImages as $image) {
            $found = false;
            
            foreach ($sourcePaths as $sourcePath) {
                $sourceFile = $sourcePath . '/' . $image;
                $destFile = $galleryPath . '/' . $image;
                
                if (File::exists($sourceFile) && !File::exists($destFile)) {
                    File::copy($sourceFile, $destFile);
                    $this->info("Copied: {$image} from {$sourcePath}");
                    $copied++;
                    $found = true;
                    break;
                }
            }
            
            if (!$found) {
                $this->warn("Could not find source for: {$image}");
            }
        }
        
        // Also copy ALL gallery images if found
        foreach ($sourcePaths as $sourcePath) {
            if (File::exists($sourcePath) && File::isDirectory($sourcePath)) {
                $files = File::files($sourcePath);
                
                foreach ($files as $file) {
                    $filename = $file->getFilename();
                    $destFile = $galleryPath . '/' . $filename;
                    
                    if (!File::exists($destFile)) {
                        File::copy($file->getPathname(), $destFile);
                        $this->info("Copied additional: {$filename}");
                        $copied++;
                    }
                }
            }
        }
        
        $this->info("Gallery copy complete! Copied {$copied} files.");
        
        // Verify the critical images
        $this->info("\nVerifying gallery images:");
        foreach ($galleryImages as $image) {
            $path = $galleryPath . '/' . $image;
            if (File::exists($path)) {
                $this->info("✅ {$image}");
            } else {
                $this->error("❌ {$image}");
            }
        }
        
        return Command::SUCCESS;
    }
}