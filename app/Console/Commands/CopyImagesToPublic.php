<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CopyImagesToPublic extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:copy-to-public';

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
        
        // Ensure the public directory exists
        $publicPath = public_path('storage/images/site-images');
        if (!File::isDirectory($publicPath)) {
            File::makeDirectory($publicPath, 0755, true);
        }
        
        // Copy images from storage to public
        $images = Storage::disk('s3')->files('images/site-images');
        $count = 0;
        
        foreach ($images as $image) {
            try {
                $contents = Storage::disk('s3')->get($image);
                $relativePath = str_replace('images/site-images/', '', $image);
                $publicFilePath = $publicPath . '/' . $relativePath;
                
                File::put($publicFilePath, $contents);
                $count++;
                
                $this->info("Copied: {$image} to public directory");
            } catch (\Exception $e) {
                $this->error("Failed to copy {$image}: " . $e->getMessage());
            }
        }
        
        $this->info("Completed copying {$count} images to public directory");
    }
}
