# Laravel Cloud Deployment Fix

Since you're using Laravel Cloud, here's exactly what you need to do:

## 1. Deploy the Fixes

The fixes are already in your code:
- **CSP Fix**: Updated `app/Http/Middleware/EnsureProductionSecurity.php`
- **Image Fix**: Updated `resources/js/pages/case-study.tsx`

## 2. Deploy to Laravel Cloud

```bash
# Commit the changes
git add -A
git commit -m "Fix CSP headers and case study image URLs"
git push origin main

# Laravel Cloud will automatically deploy from your GitHub repo
```

## 3. If CSP Issues Persist

Laravel Cloud might be setting its own security headers. If the issue persists after deployment:

### Option A: Environment Variables
Add these to your Laravel Cloud environment variables:

```
SECURITY_HEADER_CONTENT_SECURITY_POLICY="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.bunny.net; font-src 'self' https://fonts.gstatic.com https://fonts.bunny.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com;"
```

### Option B: Disable Laravel Cloud Security Headers
In your Laravel Cloud dashboard, look for security settings and temporarily disable CSP headers if available.

### Option C: Force Override in Middleware
Already implemented - the middleware now removes existing headers before setting new ones.

## 4. Clear Caches After Deployment

In Laravel Cloud dashboard, run these commands:
- `php artisan cache:clear`
- `php artisan config:clear`
- `php artisan view:clear`
- `php artisan optimize`

## 5. Verify the Fix

1. Visit https://www.empuls3.com/case-studies
2. Open browser DevTools (F12)
3. Check Console for CSP errors
4. Check Network tab for 404 errors

## Quick Checklist

- [ ] Code changes committed and pushed
- [ ] Laravel Cloud has deployed the latest version
- [ ] Caches cleared in Laravel Cloud
- [ ] No CSP errors in browser console
- [ ] Case study images loading correctly

## If Issues Still Persist

Contact Laravel Cloud support and ask:
1. "Are you setting Content-Security-Policy headers at the server level?"
2. "How can I override or disable server-level CSP headers?"

They might have a specific setting in their dashboard for this.