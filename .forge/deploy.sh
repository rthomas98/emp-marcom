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

# Run migrations with --force flag to avoid confirmation prompts
echo "Running migrations..."
php artisan migrate --force

echo "Deployment completed successfully!"
