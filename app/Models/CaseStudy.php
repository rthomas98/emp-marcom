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
