#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# Run migrations
echo "Running database migrations..."
php artisan migrate --force

# Clear caches
echo "Clearing application cache..."
php artisan optimize:clear

# Run the admin user setup script
echo "Setting up admin user..."
php update-admin-password.php

# Copy images to public storage
echo "Copying images to public storage..."
php artisan images:copy-to-public

# Set proper permissions
echo "Setting proper permissions..."
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Optimize the application
echo "Optimizing application..."
php artisan optimize

echo "Deployment completed successfully!"
