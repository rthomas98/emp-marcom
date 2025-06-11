<?php

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CaseStudyController extends Controller
{
    /**
     * Display a listing of case studies.
     */
    public function index()
    {
        // Get all published case studies
        $caseStudies = CaseStudy::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->get();
            
        // Get featured case studies only if we have case studies
        $featuredCaseStudies = collect([]);
        
        if ($caseStudies->count() > 0) {
            $featuredCaseStudies = CaseStudy::where('status', 'published')
                ->where('is_featured', true)
                ->orderBy('created_at', 'desc')
                ->take(3)
                ->get();
        }
            
        return Inertia::render('CaseStudies/Index', [
            'caseStudies' => $caseStudies,
            'featuredCaseStudies' => $featuredCaseStudies,
        ]);
    }
    
    /**
     * Display the specified case study.
     */
    public function show(CaseStudy $caseStudy)
    {
        // Make sure only published case studies are viewable
        if ($caseStudy->status !== 'published') {
            abort(404);
        }
        
        // Get related case studies with the same service type
        $relatedCaseStudies = CaseStudy::where('status', 'published')
            ->where('id', '!=', $caseStudy->id)
            ->where('service_type', $caseStudy->service_type)
            ->take(3)
            ->get();
            
        return Inertia::render('CaseStudies/Show', [
            'caseStudy' => $caseStudy,
            'relatedCaseStudies' => $relatedCaseStudies,
        ]);
    }
    
    /**
     * Filter case studies by industry or service type.
     */
    public function filter(Request $request)
    {
        $query = CaseStudy::where('status', 'published');
        
        if ($request->has('industry')) {
            $query->where('industry', $request->industry);
        }
        
        if ($request->has('service_type')) {
            $query->where('service_type', $request->service_type);
        }
        
        $caseStudies = $query->orderBy('created_at', 'desc')->get();
        
        // Empty featured case studies when filtering
        $featuredCaseStudies = collect([]);
        
        return Inertia::render('CaseStudies/Index', [
            'caseStudies' => $caseStudies,
            'featuredCaseStudies' => $featuredCaseStudies,
            'filter' => [
                'industry' => $request->industry ?? null,
                'service_type' => $request->service_type ?? null,
            ],
        ]);
    }
}
