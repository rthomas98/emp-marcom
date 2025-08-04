# Laravel Cloud Image Fix Instructions

## The Problem
The case study images exist locally but aren't accessible in production because:
1. Laravel Cloud needs the storage symlink properly set up
2. The images need to be either in R2 or in the deployed public directory

## Solution Steps

### 1. First, commit and push the new commands:
```bash
git add -A
git commit -m "Add storage check and R2 upload commands"
git push origin main
```

### 2. After Laravel Cloud deploys, run these commands in the Laravel Cloud dashboard:

#### Check current storage setup:
```bash
php artisan storage:check
```

#### Create storage link (if needed):
```bash
php artisan storage:link --force
```

#### Upload images to R2:
```bash
php artisan case-studies:upload-to-r2
```

### 3. Alternative: Add images to Git (Quick Fix)

If R2 upload doesn't work, we can temporarily add the images to Git:

```bash
# Locally, copy images to public directory
mkdir -p public/storage/case-studies/featured
mkdir -p public/storage/case-studies/gallery

# Copy the specific images
cp storage/app/public/case-studies/featured/01JVW0KGF99P5KPGG37RZCARAA.png public/storage/case-studies/featured/
cp storage/app/public/case-studies/gallery/01JVT0ETSAP37WDYT1PV7XSAMF.png public/storage/case-studies/gallery/
cp storage/app/public/case-studies/gallery/01JVW8WBG2KAM4RPN1Q8DMZRY5.png public/storage/case-studies/gallery/

# Add to Git (temporarily)
git add public/storage/case-studies/
git commit -m "Add case study images temporarily"
git push origin main
```

### 4. Configure Laravel Cloud Build Commands

In your Laravel Cloud dashboard, make sure your build commands include:

```bash
php artisan storage:link --force
php artisan case-studies:upload-to-r2
```

## Verification

After running these commands, check:
1. https://www.empuls3.com/storage/case-studies/featured/01JVW0KGF99P5KPGG37RZCARAA.png
2. The case studies page should show all images

## Long-term Solution

Configure your Laravel Cloud deployment to:
1. Always run `php artisan storage:link --force` during deployment
2. Upload new images to R2 automatically
3. Or use a CDN service for image hosting