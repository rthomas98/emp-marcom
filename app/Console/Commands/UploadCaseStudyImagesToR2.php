<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class UploadCaseStudyImagesToR2 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'case-studies:upload-to-r2';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upload case study images from local storage to R2';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Uploading case study images to R2...');
        
        // Define the directories to upload
        $directories = [
            'case-studies/featured',
            'case-studies/gallery',
            'case-studies/logos',
            'case-studies/content-images'
        ];
        
        $uploaded = 0;
        $skipped = 0;
        
        foreach ($directories as $directory) {
            $localPath = storage_path('app/public/' . $directory);
            
            if (!File::exists($localPath)) {
                $this->warn("Directory does not exist: {$localPath}");
                continue;
            }
            
            $files = File::files($localPath);
            
            foreach ($files as $file) {
                $filename = $file->getFilename();
                $relativePath = $directory . '/' . $filename;
                
                // Check if file already exists in R2
                if (Storage::disk('s3')->exists($relativePath)) {
                    $this->info("Skipping (already exists): {$relativePath}");
                    $skipped++;
                    continue;
                }
                
                // Read file contents
                $contents = File::get($file->getPathname());
                
                // Upload to R2
                try {
                    Storage::disk('s3')->put($relativePath, $contents, 'public');
                    $this->info("Uploaded: {$relativePath}");
                    $uploaded++;
                } catch (\Exception $e) {
                    $this->error("Failed to upload {$relativePath}: " . $e->getMessage());
                }
            }
        }
        
        $this->info("Upload complete! Uploaded: {$uploaded}, Skipped: {$skipped}");
        
        // Also ensure files exist in local public storage for serving
        $this->info("\nCopying to public storage directory...");
        
        foreach ($directories as $directory) {
            $sourcePath = storage_path('app/public/' . $directory);
            $destPath = public_path('storage/' . $directory);
            
            if (!File::exists($sourcePath)) {
                continue;
            }
            
            // Create destination directory if it doesn't exist
            if (!File::exists($destPath)) {
                File::makeDirectory($destPath, 0755, true);
            }
            
            $files = File::files($sourcePath);
            
            foreach ($files as $file) {
                $filename = $file->getFilename();
                $destFile = $destPath . '/' . $filename;
                
                if (!File::exists($destFile)) {
                    File::copy($file->getPathname(), $destFile);
                    $this->info("Copied to public: {$directory}/{$filename}");
                }
            }
        }
        
        $this->info("\nAll done! Images should now be accessible.");
        
        return Command::SUCCESS;
    }
}