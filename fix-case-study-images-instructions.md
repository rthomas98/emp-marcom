# Fixing Case Study Images in Production

The case studies are now showing up in production, but the images are broken because the image files need to be transferred from your local environment to production.

## Step 1: Locate the Image Files Locally

The image files should be in your local storage directory at:
```
/Users/robthomas/Herd/empuls3/storage/app/public/case-studies/featured/
```

The specific files we need are:
- 01JVW0KGF99P5KPGG37RZCARAA.png
- 01JVSY8R759PZST5NM8EXHHNCZ.png
- 01JVW8TPWVNMY76X9FGDGJBXJR.png

## Step 2: Create a ZIP Archive of the Images

1. Create a directory to organize the files:
```bash
mkdir -p /Users/robthomas/Herd/empuls3/case-study-images/case-studies/featured
```

2. Copy the images to this directory:
```bash
cp /Users/robthomas/Herd/empuls3/storage/app/public/case-studies/featured/*.png /Users/robthomas/Herd/empuls3/case-study-images/case-studies/featured/
```

3. Create a ZIP archive:
```bash
cd /Users/robthomas/Herd/empuls3
zip -r case-study-images.zip case-study-images/
```

## Step 3: Upload the Images to Production

### Option 1: Using Laravel Cloud Dashboard

1. Go to the Laravel Cloud dashboard
2. Navigate to your project
3. Use the file manager to upload the ZIP file
4. SSH into your server and extract the ZIP file:
```bash
unzip case-study-images.zip
cp -r case-study-images/* storage/app/public/
```

### Option 2: Using SFTP

If you have SFTP access to your production server:

1. Connect to your production server using SFTP
2. Upload the ZIP file to your server
3. SSH into your server and extract the ZIP file:
```bash
unzip case-study-images.zip
cp -r case-study-images/* storage/app/public/
```

### Option 3: Using the Laravel Storage Facade

Create a script to upload the images:

```php
<?php
// upload-case-study-images.php

// Bootstrap Laravel
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Storage;

// Source directory
$sourceDir = 'case-studies/featured/';
$files = [
    '01JVW0KGF99P5KPGG37RZCARAA.png',
    '01JVSY8R759PZST5NM8EXHHNCZ.png',
    '01JVW8TPWVNMY76X9FGDGJBXJR.png'
];

// Create the directory if it doesn't exist
if (!Storage::disk('public')->exists($sourceDir)) {
    Storage::disk('public')->makeDirectory($sourceDir);
    echo "Created directory: {$sourceDir}\n";
}

// Upload each file
foreach ($files as $file) {
    $sourcePath = __DIR__ . '/storage/app/public/' . $sourceDir . $file;
    
    if (file_exists($sourcePath)) {
        $fileContents = file_get_contents($sourcePath);
        Storage::disk('public')->put($sourceDir . $file, $fileContents);
        echo "Uploaded: {$file}\n";
    } else {
        echo "File not found: {$sourcePath}\n";
    }
}

echo "Done uploading case study images.\n";
```

## Step 4: Verify the Symbolic Link

Make sure the symbolic link between `public/storage` and `storage/app/public` is set up correctly:

```bash
php artisan storage:link
```

## Step 5: Verify the Images

After uploading the images, check your website to confirm they're displaying correctly.

## Troubleshooting

If images still don't appear:

1. Check file permissions:
```bash
chmod -R 775 storage/app/public/case-studies
```

2. Verify the paths in the database:
```bash
php artisan tinker
App\Models\CaseStudy::all()->pluck('featured_image');
```

3. Check if the files exist on the server:
```bash
ls -la storage/app/public/case-studies/featured/
```

4. Check the web server logs for any 404 errors related to the images.
