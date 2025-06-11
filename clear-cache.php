<?php

// Script to clear all caches
require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Artisan;

echo "=== CLEARING ALL CACHES ===\n\n";

echo "Clearing application cache...\n";
Artisan::call('cache:clear');
echo Artisan::output();

echo "Clearing route cache...\n";
Artisan::call('route:clear');
echo Artisan::output();

echo "Clearing config cache...\n";
Artisan::call('config:clear');
echo Artisan::output();

echo "Clearing view cache...\n";
Artisan::call('view:clear');
echo Artisan::output();

echo "Optimizing...\n";
Artisan::call('optimize:clear');
echo Artisan::output();

echo "\n=== CACHE CLEARING COMPLETE ===\n";
echo "Please try accessing the dashboard again after deploying these changes.\n";
