<?php

namespace App\Observers;

use App\Models\CaseStudy;
use Illuminate\Support\Facades\Cache;

class CaseStudyObserver
{
    /**
     * Handle the CaseStudy "created" event.
     */
    public function created(CaseStudy $caseStudy): void
    {
        $this->clearCaseStudyCache();
    }

    /**
     * Handle the CaseStudy "updated" event.
     */
    public function updated(CaseStudy $caseStudy): void
    {
        $this->clearCaseStudyCache();
        $this->clearRelatedCache($caseStudy);
    }

    /**
     * Handle the CaseStudy "deleted" event.
     */
    public function deleted(CaseStudy $caseStudy): void
    {
        $this->clearCaseStudyCache();
        $this->clearRelatedCache($caseStudy);
    }

    /**
     * Clear the main case studies cache.
     */
    protected function clearCaseStudyCache(): void
    {
        Cache::forget('case-studies.published');
    }

    /**
     * Clear related case studies cache.
     */
    protected function clearRelatedCache(CaseStudy $caseStudy): void
    {
        // Clear all related case studies cache for this service type
        Cache::tags(['case-studies.related'])->flush();
        
        // Alternatively, if tags are not available:
        $caseStudies = CaseStudy::where('status', 'published')
            ->where('service_type', $caseStudy->service_type)
            ->pluck('id');
            
        foreach ($caseStudies as $id) {
            Cache::forget("case-studies.related.{$caseStudy->service_type}.{$id}");
        }
    }
}