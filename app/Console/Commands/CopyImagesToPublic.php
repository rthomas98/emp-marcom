<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CopyImagesToPublic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:copy-to-public {--source=both : Source of images (s3, local, or both)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy images from storage to public directory for deployment';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting to copy images to public directory...');
        $source = $this->option('source');
        
        // Ensure the public directory exists
        $publicPath = public_path('storage/images/site-images');
        if (!File::isDirectory($publicPath)) {
            File::makeDirectory($publicPath, 0755, true);
        }
        
        $count = 0;
        
        // Try to copy from R2/S3 if requested
        if ($source === 's3' || $source === 'both') {
            $this->info('Copying images from S3/R2...');
            try {
                $images = Storage::disk('s3')->files('images/site-images');
                
                foreach ($images as $image) {
                    try {
                        $contents = Storage::disk('s3')->get($image);
                        $relativePath = str_replace('images/site-images/', '', $image);
                        $publicFilePath = $publicPath . '/' . $relativePath;
                        
                        File::put($publicFilePath, $contents);
                        $count++;
                        
                        $this->info("Copied from S3: {$image}");
                    } catch (\Exception $e) {
                        $this->warn("Failed to copy {$image} from S3: " . $e->getMessage());
                    }
                }
            } catch (\Exception $e) {
                $this->error('Error accessing S3/R2: ' . $e->getMessage());
            }
        }
        
        // Try to copy from local storage if requested or if S3 failed
        if ($source === 'local' || $source === 'both' || $count === 0) {
            $this->info('Copying images from local storage...');
            
            // Copy sample images from resources directory if they exist
            $resourcesPath = resource_path('images/site-images');
            if (File::isDirectory($resourcesPath)) {
                $localImages = File::files($resourcesPath);
                foreach ($localImages as $image) {
                    $filename = $image->getFilename();
                    $publicFilePath = $publicPath . '/' . $filename;
                    
                    File::copy($image->getPathname(), $publicFilePath);
                    $count++;
                    
                    $this->info("Copied from local: {$filename}");
                }
            } else {
                $this->warn('Local resources image directory not found');
            }
            
            // Also check storage/app/public directory
            $storagePath = storage_path('app/public/images/site-images');
            if (File::isDirectory($storagePath)) {
                $storageImages = File::files($storagePath);
                foreach ($storageImages as $image) {
                    $filename = $image->getFilename();
                    $publicFilePath = $publicPath . '/' . $filename;
                    
                    if (!File::exists($publicFilePath)) {
                        File::copy($image->getPathname(), $publicFilePath);
                        $count++;
                        
                        $this->info("Copied from storage: {$filename}");
                    }
                }
            }
        }
        
        // If we still don't have images, create placeholder images for case studies
        if ($count === 0) {
            $this->warn('No images found in S3 or local storage. Creating placeholder images...');
            
            // Get image paths from database
            try {
                $caseStudies = DB::table('case_studies')->get(['featured_image']);
                $imagePaths = [];
                
                foreach ($caseStudies as $study) {
                    if (!empty($study->featured_image)) {
                        $path = $study->featured_image;
                        
                        // Clean up the path
                        if (str_starts_with($path, '/storage/')) {
                            $path = substr($path, 9);
                        }
                        if (str_starts_with($path, '/')) {
                            $path = substr($path, 1);
                        }
                        
                        $imagePaths[] = $path;
                    }
                }
                
                // Create placeholder images
                foreach ($imagePaths as $path) {
                    $parts = explode('/', $path);
                    $filename = end($parts);
                    
                    $directory = dirname($publicPath . '/' . $filename);
                    if (!File::isDirectory($directory)) {
                        File::makeDirectory($directory, 0755, true);
                    }
                    
                    $publicFilePath = $publicPath . '/' . $filename;
                    
                    // Create a simple placeholder image
                    $this->createPlaceholderImage($publicFilePath);
                    $count++;
                    
                    $this->info("Created placeholder for: {$path}");
                }
            } catch (\Exception $e) {
                $this->error('Error creating placeholders: ' . $e->getMessage());
            }
        }
        
        $this->info("Completed processing {$count} images");
    }
    
    /**
     * Create a simple placeholder image
     */
    protected function createPlaceholderImage($path)
    {
        // Create a 600x400 placeholder image
        $image = imagecreatetruecolor(600, 400);
        
        // Colors
        $bgColor = imagecolorallocate($image, 240, 240, 240);
        $textColor = imagecolorallocate($image, 80, 80, 80);
        
        // Fill background
        imagefill($image, 0, 0, $bgColor);
        
        // Add text
        $text = 'Image Placeholder';
        $font = 5; // Built-in font
        
        // Center the text
        $textWidth = imagefontwidth($font) * strlen($text);
        $textHeight = imagefontheight($font);
        $centerX = (600 - $textWidth) / 2;
        $centerY = (400 - $textHeight) / 2;
        
        imagestring($image, $font, $centerX, $centerY, $text, $textColor);
        
        // Save the image
        imagepng($image, $path);
        imagedestroy($image);
    }
}
