#!/bin/bash

# Deployment script for Empuls3 Laravel application
echo "Starting deployment process..."

# Pull latest changes
echo "Pulling latest changes from Git..."
git pull

# Install dependencies
echo "Installing PHP dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader

# Clear caches
echo "Clearing application caches..."
php artisan clear-compiled
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Run migrations
echo "Running database migrations..."
php artisan migrate --force

# Create storage link if it doesn't exist
echo "Creating storage link..."
php artisan storage:link

# Copy images from R2 to public storage
echo "Copying images from R2 to public storage..."
php artisan images:copy-to-public

# Optimize
echo "Optimizing application..."
php artisan optimize

echo "Deployment completed successfully!"
