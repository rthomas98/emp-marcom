# CSP and Images Fix Guide

## Issues Identified

1. **Content Security Policy (CSP) Errors**
   - The CSP is blocking fonts.bunny.net and googletagmanager.com
   - The middleware has the correct CSP but it's being overridden

2. **404 Errors for Case Study Images**
   - Images exist in storage but URLs are incorrect
   - Images are looking in root instead of /storage/case-studies/

## Solutions

### 1. Fix CSP Headers

The CSP headers in your production server (likely nginx or Apache) are overriding the Laravel middleware headers. You need to:

**For Nginx:**
Add to your site configuration:
```nginx
# Remove any existing CSP headers first
more_clear_headers 'Content-Security-Policy';

# Or if using standard nginx without headers-more module:
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;" always;
```

**For Apache (.htaccess):**
```apache
# Remove any existing CSP headers
Header unset Content-Security-Policy
# Set the correct CSP
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;"
```

### 2. Fix Case Study Images

The images are being referenced incorrectly. The issue is in how the paths are being generated.

Run these commands to verify and fix:

```bash
# 1. Ensure storage link exists
php artisan storage:link

# 2. Check that images are in the correct location
ls -la storage/app/public/case-studies/featured/
ls -la storage/app/public/case-studies/gallery/

# 3. Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### 3. Update Case Study Model

The issue appears to be that the image URLs are not including the `/storage/` prefix. Check the CaseStudy model accessors.

### 4. Alternative Quick Fix for CSP

If you can't modify server configuration immediately, you can try:

1. **Use meta tag approach** - Add this to your app.blade.php:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https:; connect-src 'self';">
```

2. **Disable CSP temporarily** in production to test:
Comment out the CSP line in `EnsureProductionSecurity.php`:
```php
// $response->headers->set('Content-Security-Policy', $csp);
```

## Verification Steps

1. Check browser console for CSP errors
2. Check network tab for 404s on images
3. Inspect response headers to see which CSP is being applied
4. Check image URLs in the rendered HTML

## Root Cause

The issue is that your production server (nginx/Apache) is setting its own CSP headers that are more restrictive than your Laravel middleware. Server headers typically override application headers.

For the images, the issue is that the URLs are missing the `/storage/` prefix when being generated.