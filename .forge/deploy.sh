#!/bin/bash

# Exit on error
set -e

# Print commands
set -x

# Install PHP dependencies
composer install --no-interaction --prefer-dist --optimize-autoloader

# Clear and cache routes, config, and views
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Install Node.js dependencies with legacy peer deps flag
npm ci --legacy-peer-deps

# Build assets
npm run build

# Restart queue workers
php artisan queue:restart

# Fix migration order issue - run specific migrations in the correct order
echo "Running migrations in the correct order..."
php artisan migrate:fresh --path=database/migrations/2025_05_20_144455_create_case_studies_table.php --force
php artisan migrate --path=database/migrations/2025_05_20_140300_add_sample_case_studies.php --force
php artisan migrate --path=database/migrations/2025_05_20_142900_add_gallery_images_to_case_studies.php --force
php artisan migrate --path=database/migrations/2025_05_21_180433_add_gallery_images_to_case_studies_table.php --force
php artisan migrate --force

echo "Deployment completed successfully!"
