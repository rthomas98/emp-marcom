<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CopyAllImagesToFeatured extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:copy-to-featured';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy specific images to featured directory as a quick fix';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Copying images to featured directory...');
        
        // Images that need to be in featured
        $requiredImages = [
            '01JVT0ETSAP37WDYT1PV7XSAMF.png',
            '01JVW8WBG2KAM4RPN1Q8DMZRY5.png',
            '01JVW0KGF99P5KPGG37RZCARAA.png',
        ];
        
        // Ensure featured directory exists
        $featuredPath = storage_path('app/public/case-studies/featured');
        if (!File::exists($featuredPath)) {
            File::makeDirectory($featuredPath, 0755, true);
            $this->info('Created featured directory');
        }
        
        $copied = 0;
        
        foreach ($requiredImages as $image) {
            $destFile = $featuredPath . '/' . $image;
            
            // Skip if already exists
            if (File::exists($destFile)) {
                $this->info("Already exists: {$image}");
                continue;
            }
            
            // Try to find the image in various locations
            $sourcePaths = [
                storage_path('app/public/case-studies/gallery/' . $image),
                storage_path('app/public/case-studies/featured/' . $image),
                base_path('case-studies/featured/' . $image),
                base_path('case-studies/gallery/' . $image),
                base_path('case-study-images/case-studies/featured/' . $image),
                base_path('case-study-images/case-studies/gallery/' . $image),
            ];
            
            $found = false;
            foreach ($sourcePaths as $sourcePath) {
                if (File::exists($sourcePath)) {
                    File::copy($sourcePath, $destFile);
                    $this->info("Copied {$image} from " . dirname($sourcePath));
                    $copied++;
                    $found = true;
                    break;
                }
            }
            
            if (!$found) {
                $this->error("Could not find source for: {$image}");
            }
        }
        
        $this->info("\nCopied {$copied} images to featured directory.");
        
        // List all files in featured directory
        $this->info("\nFiles in featured directory:");
        $files = File::files($featuredPath);
        foreach ($files as $file) {
            $this->info("  - " . $file->getFilename());
        }
        
        return Command::SUCCESS;
    }
}