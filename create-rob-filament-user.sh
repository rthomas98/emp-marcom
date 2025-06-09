#!/bin/bash

# Script to create a Filament admin user for Rob Thomas
echo "Creating Filament admin user for Rob Thomas..."

# Run the command with predefined values
php artisan filament:create-user --name="Rob Thomas" --email="rob.thomas@empuls3.com" --password="SecurePassword123!" --role="admin"

echo ""
echo "User creation complete!"
echo "-------------------------------------"
echo "Username: rob.thomas@empuls3.com"
echo "Password: SecurePassword123!"
echo "Role: admin"
echo "-------------------------------------"
echo "Please change your password after first login."
