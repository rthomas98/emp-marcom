<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CopyAllCaseStudyImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:copy-all-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy ALL case study images from repository to storage';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Copying ALL case study images to storage...');
        
        // Directories to copy
        $directories = [
            'featured',
            'gallery',
            'logos',
            'content-images'
        ];
        
        $totalCopied = 0;
        
        // Base paths to check for source images
        $sourceBases = [
            base_path('case-studies'),
            base_path('case-study-images/case-studies'),
            storage_path('app/public/case-studies'), // In case some are already there
        ];
        
        foreach ($directories as $dir) {
            $this->info("\nProcessing {$dir} directory...");
            
            // Ensure destination directory exists
            $destPath = storage_path('app/public/case-studies/' . $dir);
            if (!File::exists($destPath)) {
                File::makeDirectory($destPath, 0755, true);
                $this->info("Created directory: {$dir}");
            }
            
            $dirCopied = 0;
            
            // Try each source base
            foreach ($sourceBases as $sourceBase) {
                $sourcePath = $sourceBase . '/' . $dir;
                
                if (File::exists($sourcePath) && File::isDirectory($sourcePath)) {
                    $files = File::files($sourcePath);
                    
                    foreach ($files as $file) {
                        $filename = $file->getFilename();
                        $destFile = $destPath . '/' . $filename;
                        
                        if (!File::exists($destFile)) {
                            File::copy($file->getPathname(), $destFile);
                            $this->info("  Copied: {$filename}");
                            $dirCopied++;
                            $totalCopied++;
                        }
                    }
                }
            }
            
            $this->info("Copied {$dirCopied} files to {$dir}");
        }
        
        // List all missing gallery images from the error
        $requiredGalleryImages = [
            '01JVW0KGFG43A3R2NASM2QFK7W.png',
            '01JVW0KGFFR28H9R5V04G8VP50.png',
            '01JVW0KGFG43A3R2NASM2QFK7V.png',
        ];
        
        $this->info("\nChecking for specific required gallery images...");
        $galleryPath = storage_path('app/public/case-studies/gallery');
        
        foreach ($requiredGalleryImages as $image) {
            $imagePath = $galleryPath . '/' . $image;
            if (File::exists($imagePath)) {
                $this->info("✅ {$image}");
            } else {
                $this->error("❌ {$image} - NOT FOUND");
            }
        }
        
        // Check for the logo
        $logoPath = storage_path('app/public/case-studies/logos/01JVW0KGFCT524VS4DFJ3YXC1H.svg');
        if (File::exists($logoPath)) {
            $this->info("✅ Logo: 01JVW0KGFCT524VS4DFJ3YXC1H.svg");
        } else {
            $this->error("❌ Logo: 01JVW0KGFCT524VS4DFJ3YXC1H.svg - NOT FOUND");
        }
        
        $this->info("\nTotal files copied: {$totalCopied}");
        
        // Final check - list what's in each directory
        $this->info("\nFinal directory contents:");
        foreach ($directories as $dir) {
            $path = storage_path('app/public/case-studies/' . $dir);
            $count = count(File::files($path));
            $this->info("  {$dir}: {$count} files");
        }
        
        return Command::SUCCESS;
    }
}