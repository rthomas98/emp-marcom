<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Throwable;

class SyncCaseStudyMedia extends Command
{
    protected $signature = 'case-studies:sync-media {--force : Replace files that already exist}';

    protected $description = 'Sync versioned case-study media to the configured durable media disk';

    public function handle(): int
    {
        $diskName = config('filesystems.media', 'public');
        $disk = Storage::disk($diskName);
        $directories = ['featured', 'gallery', 'logos'];
        $uploaded = 0;
        $skipped = 0;
        $failed = 0;

        $this->info("Syncing case-study media to the [{$diskName}] disk...");

        foreach ($directories as $directory) {
            $sourceDirectory = base_path("case-studies/{$directory}");

            if (! File::isDirectory($sourceDirectory)) {
                $this->warn("Source directory is missing: {$sourceDirectory}");
                $failed++;

                continue;
            }

            foreach (File::files($sourceDirectory) as $file) {
                $path = "case-studies/{$directory}/{$file->getFilename()}";

                if (! $this->option('force') && $disk->exists($path)) {
                    $skipped++;

                    continue;
                }

                try {
                    if (! $disk->put($path, File::get($file->getPathname()))) {
                        throw new \RuntimeException('The filesystem returned an unsuccessful result.');
                    }

                    $uploaded++;
                } catch (Throwable $exception) {
                    $this->error("Failed to upload {$path}: {$exception->getMessage()}");
                    $failed++;
                }
            }
        }

        $this->info("Uploaded: {$uploaded}; skipped: {$skipped}; failed: {$failed}");

        return $failed === 0 ? self::SUCCESS : self::FAILURE;
    }
}
