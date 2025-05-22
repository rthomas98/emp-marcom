<?php

namespace App\Providers;

use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Support\ServiceProvider;

class FilamentServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Register custom JavaScript to fix file upload issues
        FilamentAsset::register([
            Js::make('fix-file-upload', __DIR__ . '/../../resources/js/fix-file-upload.js'),
        ]);
    }
}
