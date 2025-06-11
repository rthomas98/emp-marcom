<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
    
    /**
     * Get the gallery images attribute with proper formatting
     * This ensures the gallery_images are always properly formatted even if stored as a string
     */
    public function getGalleryImagesAttribute($value)
    {
        // If the value is a string (JSON), decode it
        if (is_string($value) && !empty($value)) {
            try {
                $decoded = json_decode($value, true);
                return is_array($decoded) ? $decoded : [];
            } catch (\Exception $e) {
                return [];
            }
        }
        
        // If it's already an array, return it
        if (is_array($value)) {
            return $value;
        }
        
        // Default to empty array
        return [];
    }
    
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
            \Illuminate\Support\Facades\Log::info("Featured image in admin", ['value' => $value]);
            
            // If it's already a full URL, extract just the filename and return the expected path
            if (filter_var($value, FILTER_VALIDATE_URL)) {
                $pathParts = explode('/', parse_url($value, PHP_URL_PATH));
                $filename = end($pathParts);
                return 'case-studies/featured/' . $filename;
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
            if (!str_contains($value, 'case-studies/featured/')) {
                $pathParts = explode('/', $value);
                $filename = end($pathParts);
                return 'case-studies/featured/' . $filename;
            }
            
            return $value;
        }
        
        // For public site, return full URL
        
        // If it's already a full URL, return it
        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }
        
        // If it starts with /storage/, remove that prefix for storage
        if (str_starts_with($value, '/storage/')) {
            $value = substr($value, 9);
        }
        
        // If it starts with storage/, remove that prefix too
        if (str_starts_with($value, 'storage/')) {
            $value = substr($value, 8);
        }
        
        // If it starts with /, remove that prefix
        if (str_starts_with($value, '/')) {
            $value = substr($value, 1);
        }
        
        // Return the URL using Laravel's url helper
        return url('storage/' . $value);
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
                return 'case-studies/logos/' . $filename;
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
            if (!str_contains($value, 'case-studies/logos/')) {
                $pathParts = explode('/', $value);
                $filename = end($pathParts);
                return 'case-studies/logos/' . $filename;
            }
            
            return $value;
        }
        
        // For public site, return full URL
        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }
        
        // If it starts with /storage/, remove that prefix for storage
        if (str_starts_with($value, '/storage/')) {
            $value = substr($value, 9);
        }
        
        // If it starts with storage/, remove that prefix too
        if (str_starts_with($value, 'storage/')) {
            $value = substr($value, 8);
        }
        
        // If it starts with /, remove that prefix
        if (str_starts_with($value, '/')) {
            $value = substr($value, 1);
        }
        
        // Return the URL using Laravel's url helper
        return url('storage/' . $value);
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
        
        if (!is_array($gallery)) {
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
                        $gallery[$key]['src'] = 'case-studies/gallery/' . $filename;
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
                    elseif (!str_contains($src, 'case-studies/gallery/')) {
                        $pathParts = explode('/', $src);
                        $filename = end($pathParts);
                        $gallery[$key]['src'] = 'case-studies/gallery/' . $filename;
                    }
                }
            }
        }
        // For public site, ensure full URLs
        else {
            foreach ($gallery as $key => $image) {
                if (isset($image['src'])) {
                    $src = $image['src'];
                    
                    // If it's already a full URL, keep it
                    if (filter_var($src, FILTER_VALIDATE_URL)) {
                        continue;
                    }
                    
                    // If it starts with /storage/, remove that prefix
                    if (str_starts_with($src, '/storage/')) {
                        $src = substr($src, 9);
                    }
                    
                    // If it starts with storage/, remove that prefix too
                    if (str_starts_with($src, 'storage/')) {
                        $src = substr($src, 8);
                    }
                    
                    // If it starts with /, remove that prefix
                    if (str_starts_with($src, '/')) {
                        $src = substr($src, 1);
                    }
                    
                    // Set the full URL
                    $gallery[$key]['src'] = url('storage/' . $src);
                }
            }
        }
        
        return $gallery;
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
