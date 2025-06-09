#!/bin/bash

# Script to seed the admin user for Filament
echo "Creating Filament admin user for Rob Thomas..."

# Check if password is provided as environment variable
if [ -z "$ADMIN_PASSWORD" ]; then
    echo "Please enter a secure password for the admin user (min 12 characters):"
    read -s ADMIN_PASSWORD
    echo ""
    
    if [ -z "$ADMIN_PASSWORD" ]; then
        echo "Error: Password cannot be empty."
        exit 1
    fi
    
    if [ ${#ADMIN_PASSWORD} -lt 12 ]; then
        echo "Error: Password must be at least 12 characters long."
        exit 1
    fi
    
    # Export the password as an environment variable for the seeder
    export ADMIN_PASSWORD
fi

# Run the seeder
php artisan db:seed --class=AdminUserSeeder

echo ""
echo "Admin user seeded successfully!"
echo "-------------------------------------"
echo "Username: rob.thomas@empuls3.com"
echo "Role: admin"
echo "-------------------------------------"
echo "Please change your password after first login if you used a temporary one."
