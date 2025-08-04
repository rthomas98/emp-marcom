<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CheckStorageSetup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check storage setup and case study images';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Checking storage setup...');
        
        // Check if storage link exists
        $storagePath = public_path('storage');
        if (File::exists($storagePath)) {
            if (is_link($storagePath)) {
                $this->info('✅ Storage symlink exists');
                $target = readlink($storagePath);
                $this->info("   Points to: {$target}");
            } else {
                $this->warn('⚠️  /public/storage exists but is not a symlink');
            }
        } else {
            $this->error('❌ Storage symlink does not exist');
            $this->info('   Run: php artisan storage:link');
        }
        
        // Check specific case study images
        $this->info("\nChecking case study images...");
        
        $testImages = [
            'case-studies/featured/01JVW0KGF99P5KPGG37RZCARAA.png',
            'case-studies/gallery/01JVT0ETSAP37WDYT1PV7XSAMF.png',
            'case-studies/gallery/01JVW8WBG2KAM4RPN1Q8DMZRY5.png'
        ];
        
        foreach ($testImages as $image) {
            // Check in storage/app/public
            $storagePath = storage_path('app/public/' . $image);
            $storageExists = File::exists($storagePath);
            
            // Check in public/storage
            $publicPath = public_path('storage/' . $image);
            $publicExists = File::exists($publicPath);
            
            // Check in R2
            $r2Exists = false;
            try {
                $r2Exists = Storage::disk('s3')->exists($image);
            } catch (\Exception $e) {
                // R2 not configured or accessible
            }
            
            $this->info("\n{$image}:");
            $this->info("  Storage: " . ($storageExists ? '✅' : '❌'));
            $this->info("  Public:  " . ($publicExists ? '✅' : '❌'));
            $this->info("  R2/S3:   " . ($r2Exists ? '✅' : '❌'));
        }
        
        // Check R2 configuration
        $this->info("\nChecking R2/S3 configuration...");
        try {
            $files = Storage::disk('s3')->files('case-studies/featured');
            $this->info('✅ R2/S3 connection successful');
            $this->info('   Files in case-studies/featured: ' . count($files));
        } catch (\Exception $e) {
            $this->error('❌ R2/S3 connection failed: ' . $e->getMessage());
        }
        
        return Command::SUCCESS;
    }
}