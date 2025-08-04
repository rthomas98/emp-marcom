<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CaseStudy>
 */
class CaseStudyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(4);
        $serviceTypes = [
            'web-development',
            'mobile-development',
            'custom-software',
            'e-commerce',
            'api-development',
            'ui-ux-design'
        ];

        $industries = [
            'Technology',
            'Healthcare',
            'Finance',
            'E-commerce',
            'Education',
            'Real Estate'
        ];

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'client_name' => $this->faker->company(),
            'industry' => $this->faker->randomElement($industries),
            'service_type' => $this->faker->randomElement($serviceTypes),
            'challenge' => $this->faker->paragraph(3),
            'solution' => $this->faker->paragraph(5),
            'results' => $this->faker->paragraph(4),
            'testimonial' => $this->faker->paragraph(2),
            'testimonial_author' => $this->faker->name(),
            'testimonial_position' => $this->faker->jobTitle(),
            'featured_image' => 'images/site-images/placeholder.jpg',
            'logo' => 'images/logos/placeholder.png',
            'website_url' => $this->faker->url(),
            'gallery_images' => [
                'images/site-images/gallery-1.jpg',
                'images/site-images/gallery-2.jpg',
                'images/site-images/gallery-3.jpg',
            ],
            'completion_date' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'is_featured' => $this->faker->boolean(20), // 20% chance of being featured
            'meta_title' => $title . ' | Case Study',
            'meta_description' => $this->faker->sentence(10),
            'status' => $this->faker->randomElement(['draft', 'published']),
        ];
    }

    /**
     * Indicate that the case study is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
        ]);
    }

    /**
     * Indicate that the case study is a draft.
     */
    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'draft',
        ]);
    }

    /**
     * Indicate that the case study is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}