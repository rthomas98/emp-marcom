# Empuls3 Deployment Guide

This guide provides instructions for deploying the Empuls3 Laravel application with proper image handling.

## Quick Deployment

For a quick deployment with all steps automated, run:

```bash
./deploy.sh
```

This script will:
- Pull the latest changes
- Install dependencies
- Clear caches
- Run migrations
- Create storage symlinks
- Copy images to public storage
- Optimize the application

## Manual Deployment Steps

If you prefer to run the steps manually or need to troubleshoot specific parts:

### 1. Pull Latest Changes

```bash
git pull
```

### 2. Install Dependencies

```bash
composer install --no-interaction --prefer-dist --optimize-autoloader
npm install
npm run build
```

### 3. Update Environment Configuration

Make sure your `.env` file has:

```
FILESYSTEM_DISK=public
```

### 4. Create Storage Link (if not already created)

```bash
php artisan storage:link
```

### 5. Copy Images to Public Storage

```bash
php artisan images:copy-to-public
```

This command will:
- Try to copy images from Cloudflare R2 (if configured)
- Fall back to local images in resources/images/site-images
- Create placeholder images if needed

### 6. Clear Caches

```bash
php artisan optimize:clear
php artisan optimize
```

## Troubleshooting

### Broken Images

If images are still broken after deployment:

1. Check that the storage symlink exists:
   ```bash
   ls -la public/storage
   ```
   It should point to `../storage/app/public`

2. Verify images exist in the public directory:
   ```bash
   ls -la public/storage/images/site-images
   ```

3. Check file permissions:
   ```bash
   chmod -R 775 storage
   chmod -R 775 public/storage
   ```

4. If using Cloudflare R2, ensure AWS credentials are properly configured in `.env`:
   ```
   AWS_ACCESS_KEY_ID=your-key
   AWS_SECRET_ACCESS_KEY=your-secret
   AWS_DEFAULT_REGION=auto
   AWS_BUCKET=your-bucket
   AWS_ENDPOINT=https://your-endpoint.r2.cloudflarestorage.com
   AWS_USE_PATH_STYLE_ENDPOINT=true
   ```

### S3/R2 Connection Issues

If you encounter S3/R2 connection issues:

1. Install the AWS S3 adapter if not already installed:
   ```bash
   composer require league/flysystem-aws-s3-v3
   ```

2. Run the image copy command with local source only:
   ```bash
   php artisan images:copy-to-public --source=local
   ```

## Image Path Structure

Case study images should follow this path structure:

- Database path: `images/site-images/filename.png`
- Actual file location: `public/storage/images/site-images/filename.png`
- URL in browser: `/storage/images/site-images/filename.png`

The `CaseStudy` model has an accessor that handles these paths automatically.
