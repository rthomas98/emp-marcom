#!/bin/bash

# Script to run Laravel queue worker
echo "Starting Laravel queue worker..."
php artisan queue:work --tries=3 --timeout=60 &
echo "Queue worker started with PID: $!"
echo "You can stop it later by finding and killing the process"
echo "To check for running queue workers: ps aux | grep queue:work"
