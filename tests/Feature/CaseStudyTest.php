<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\CaseStudy;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

class CaseStudyTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test case studies index page.
     */
    public function test_case_studies_index_page()
    {
        // Create some published case studies
        $publishedStudies = CaseStudy::factory()->count(3)->create([
            'status' => 'published'
        ]);

        // Create a draft case study (should not appear)
        CaseStudy::factory()->create([
            'status' => 'draft'
        ]);

        $response = $this->get('/case-studies');

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('case-studies')
                ->has('caseStudies', 3)
            );
    }

    /**
     * Test individual case study page.
     */
    public function test_individual_case_study_page()
    {
        $caseStudy = CaseStudy::factory()->create([
            'status' => 'published',
            'service_type' => 'web-development'
        ]);

        // Create related case studies
        CaseStudy::factory()->count(2)->create([
            'status' => 'published',
            'service_type' => 'web-development'
        ]);

        $response = $this->get("/case-studies/{$caseStudy->slug}");

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('case-study')
                ->has('caseStudy')
                ->has('relatedCaseStudies', 2)
            );
    }

    /**
     * Test draft case study is not accessible.
     */
    public function test_draft_case_study_not_accessible()
    {
        $caseStudy = CaseStudy::factory()->create([
            'status' => 'draft'
        ]);

        $response = $this->get("/case-studies/{$caseStudy->slug}");

        $response->assertStatus(404);
    }

    /**
     * Test case study caching.
     */
    public function test_case_study_caching()
    {
        Cache::flush();

        // Create case studies
        CaseStudy::factory()->count(5)->create([
            'status' => 'published'
        ]);

        // First request should cache the results
        $response1 = $this->get('/case-studies');
        $response1->assertStatus(200);

        // Verify cache was set
        $this->assertNotNull(Cache::get('case-studies.published'));

        // Create a new case study
        $newStudy = CaseStudy::factory()->create([
            'status' => 'published'
        ]);

        // Cache should be cleared by observer
        $this->assertNull(Cache::get('case-studies.published'));
    }

    /**
     * Test related case studies caching.
     */
    public function test_related_case_studies_caching()
    {
        Cache::flush();

        $caseStudy = CaseStudy::factory()->create([
            'status' => 'published',
            'service_type' => 'web-development'
        ]);

        CaseStudy::factory()->count(3)->create([
            'status' => 'published',
            'service_type' => 'web-development'
        ]);

        // First request should cache the results
        $response = $this->get("/case-studies/{$caseStudy->slug}");
        $response->assertStatus(200);

        // Verify cache was set
        $cacheKey = "case-studies.related.{$caseStudy->service_type}.{$caseStudy->id}";
        $this->assertNotNull(Cache::get($cacheKey));
    }

    /**
     * Test case study filtering.
     */
    public function test_case_study_filtering()
    {
        CaseStudy::factory()->count(3)->create([
            'status' => 'published',
            'service_type' => 'web-development'
        ]);

        CaseStudy::factory()->count(2)->create([
            'status' => 'published',
            'service_type' => 'mobile-development'
        ]);

        $response = $this->get('/case-studies/filter?service_type=web-development');

        $response->assertStatus(200)
            ->assertJsonCount(3, 'data');
    }
}