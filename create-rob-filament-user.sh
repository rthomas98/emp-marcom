#!/bin/bash

# Script to create a Filament admin user for Rob Thomas
echo "Creating Filament admin user for Rob Thomas..."

# Check if password is provided as environment variable
if [ -z "$ADMIN_PASSWORD" ]; then
    echo "Please enter a secure password for the admin user:"
    read -s ADMIN_PASSWORD
    echo ""
    
    if [ -z "$ADMIN_PASSWORD" ]; then
        echo "Error: Password cannot be empty."
        exit 1
    fi
fi

# Run the PHP script to create the user
php create-admin-user.php

echo "Please change your password after first login."
