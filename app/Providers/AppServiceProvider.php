<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force URL scheme based on APP_URL to fix file upload issues
        if (str_starts_with(config('app.url'), 'https://')) {
            URL::forceScheme('https');
        }
        
        // Ensure asset URLs are generated with the correct domain
        URL::macro('assetFrom', function (string $path) {
            return config('app.url') . '/' . ltrim($path, '/');
        });

        // Register model observers
        \App\Models\CaseStudy::observe(\App\Observers\CaseStudyObserver::class);
    }
}
