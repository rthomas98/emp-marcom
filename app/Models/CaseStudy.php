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
        'completion_date',
        'is_featured',
        'meta_title',
        'meta_description',
        'status', // draft, published
    ];
    
    protected $casts = [
        'is_featured' => 'boolean',
        'completion_date' => 'date',
    ];
    
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
