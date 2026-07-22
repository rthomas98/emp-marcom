<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CaseStudy extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'client_name',
        'industry',
        'service_type',
        'challenge',
        'solution',
        'results',
        'testimonial',
        'testimonial_author',
        'testimonial_position',
        'featured_image',
        'logo',
        'website_url',
        'gallery_images',
        'completion_date',
        'is_featured',
        'meta_title',
        'meta_description',
        'status', // draft, published
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'completion_date' => 'date',
        'gallery_images' => 'array',
    ];

    // Gallery images accessor is defined below

    /**
     * Get the featured image URL
     */
    public function getFeaturedImageAttribute($value)
    {
        if (empty($value)) {
            return null;
        }

        // For Filament admin panel, we need to handle paths differently
        if (request()->is('marcom*')) {
            // Log the original value for debugging
            \Illuminate\Support\Facades\Log::info('Featured image in admin', ['value' => $value]);

            // If it's already a full URL, extract just the filename and return the expected path
            if (filter_var($value, FILTER_VALIDATE_URL)) {
                $pathParts = explode('/', parse_url($value, PHP_URL_PATH));
                $filename = end($pathParts);

                return 'case-studies/featured/'.$filename;
            }

            // If it starts with /storage/, remove that prefix
            if (str_starts_with($value, '/storage/')) {
                $value = substr($value, 9);
            }

            // If it starts with storage/, remove that prefix too
            if (str_starts_with($value, 'storage/')) {
                $value = substr($value, 8);
            }

            // If it doesn't include the expected directory, add it
            if (! str_contains($value, 'case-studies/featured/')) {
                $pathParts = explode('/', $value);
                $filename = end($pathParts);

                return 'case-studies/featured/'.$filename;
            }

            return $value;
        }

        return $this->mediaUrl($value);
    }

    /**
     * Get the logo URL
     */
    public function getLogoAttribute($value)
    {
        if (empty($value)) {
            return null;
        }

        // For Filament admin panel, we need to handle paths differently
        if (request()->is('marcom*')) {
            // If it's already a full URL, extract just the filename and return the expected path
            if (filter_var($value, FILTER_VALIDATE_URL)) {
                $pathParts = explode('/', parse_url($value, PHP_URL_PATH));
                $filename = end($pathParts);

                return 'case-studies/logos/'.$filename;
            }

            // If it starts with /storage/, remove that prefix
            if (str_starts_with($value, '/storage/')) {
                $value = substr($value, 9);
            }

            // If it starts with storage/, remove that prefix too
            if (str_starts_with($value, 'storage/')) {
                $value = substr($value, 8);
            }

            // If it doesn't include the expected directory, add it
            if (! str_contains($value, 'case-studies/logos/')) {
                $pathParts = explode('/', $value);
                $filename = end($pathParts);

                return 'case-studies/logos/'.$filename;
            }

            return $value;
        }

        return $this->mediaUrl($value);
    }

    /**
     * Process gallery images to ensure correct URLs
     */
    public function getGalleryImagesAttribute($value)
    {
        if (empty($value)) {
            return [];
        }

        $gallery = is_string($value) ? json_decode($value, true) : $value;

        if (! is_array($gallery)) {
            return [];
        }

        // For Filament admin panel, we need to handle paths differently
        if (request()->is('marcom*')) {
            foreach ($gallery as $key => $image) {
                if (isset($image['src'])) {
                    $src = $image['src'];

                    // If it's already a full URL, extract just the filename
                    if (filter_var($src, FILTER_VALIDATE_URL)) {
                        $pathParts = explode('/', parse_url($src, PHP_URL_PATH));
                        $filename = end($pathParts);
                        $gallery[$key]['src'] = 'case-studies/gallery/'.$filename;
                    }
                    // If it starts with /storage/, remove that prefix
                    elseif (str_starts_with($src, '/storage/')) {
                        $gallery[$key]['src'] = substr($src, 9);
                    }
                    // If it starts with storage/, remove that prefix too
                    elseif (str_starts_with($src, 'storage/')) {
                        $gallery[$key]['src'] = substr($src, 8);
                    }
                    // If it doesn't include the expected directory, add it
                    elseif (! str_contains($src, 'case-studies/gallery/')) {
                        $pathParts = explode('/', $src);
                        $filename = end($pathParts);
                        $gallery[$key]['src'] = 'case-studies/gallery/'.$filename;
                    }
                }
            }
        }
        // For public site, ensure full URLs
        else {
            foreach ($gallery as $key => $image) {
                if (isset($image['src'])) {
                    $src = $image['src'];

                    $gallery[$key]['src'] = $this->mediaUrl($src);
                }
            }
        }

        return $gallery;
    }

    /**
     * Resolve a case-study media path on the configured durable disk.
     */
    private function mediaUrl(string $value): string
    {
        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }

        $path = ltrim($value, '/');

        if (str_starts_with($path, 'storage/')) {
            $path = substr($path, 8);
        }

        // Some historical records reference versioned files in public/images.
        if (str_starts_with($path, 'images/') && File::exists(public_path($path))) {
            return url($path);
        }

        $disk = Storage::disk(config('filesystems.media', 'public'));

        if (config('filesystems.media_visibility') === 'private') {
            return $disk->temporaryUrl(
                $path,
                now()->addMinutes(config('filesystems.media_url_ttl', 1440))
            );
        }

        return $disk->url($path);
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
