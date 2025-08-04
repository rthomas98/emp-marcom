# Immediate Fixes for CSP and Image Issues

## Quick Fix #1: Update Your Server Configuration

### For Nginx
Add this to your server block in nginx configuration:

```nginx
location / {
    # Remove any existing CSP headers
    more_clear_headers 'Content-Security-Policy';
    
    # Add the comprehensive CSP
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;" always;
    
    try_files $uri $uri/ /index.php?$query_string;
}
```

### For Apache (.htaccess in public folder)
```apache
<IfModule mod_headers.c>
    # Remove any existing CSP headers
    Header unset Content-Security-Policy
    
    # Set the comprehensive CSP
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;"
</IfModule>
```

## Quick Fix #2: Images (Already Applied)

I've already fixed the image issue in the code. Now you need to:

1. **Rebuild your assets:**
```bash
npm run build
```

2. **Clear all caches:**
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan optimize
```

3. **Ensure storage link exists:**
```bash
php artisan storage:link
```

## Quick Fix #3: Temporary CSP Workaround

If you can't access server config immediately, add this to your `resources/views/app.blade.php` file in the `<head>` section:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;">
```

## Verification Steps

1. **Check CSP headers:**
   - Open Chrome DevTools
   - Go to Network tab
   - Reload the page
   - Click on the main document request
   - Check Response Headers for Content-Security-Policy

2. **Check images:**
   - The images should now load correctly
   - URLs should be in format: `/storage/case-studies/gallery/filename.png`

## Root Causes

1. **CSP Issue**: Your production server (nginx/Apache) is setting its own CSP headers that override Laravel's headers
2. **Image Issue**: The frontend was incorrectly trying to construct URLs when the Laravel model already provided full URLs

## Deployed the Fix?

Run this deployment sequence:

```bash
git pull
npm install
npm run build
php artisan migrate --force
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

Then restart your web server:
```bash
# For nginx
sudo nginx -s reload

# For Apache
sudo service apache2 reload
```