<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;

// Main Pages
Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::post('/contact/submit', [ContactController::class, 'submit'])
    ->middleware('throttle.contact')
    ->name('contact.submit');

// Solutions Pages
Route::prefix('solutions')->group(function () {
    Route::get('/', function () {
        return Inertia::render('solutions/index');
    })->name('solutions');
    
    Route::get('/software-development-design', function () {
        return Inertia::render('solutions/software-development-design');
    })->name('solutions.software-development-design');
    
    Route::get('/web-ecommerce-development', function () {
        return Inertia::render('solutions/web-ecommerce-development');
    })->name('solutions.web-ecommerce-development');
    
    Route::get('/backend-api-development', function () {
        return Inertia::render('solutions/backend-api-development');
    })->name('solutions.backend-api-development');
    
    Route::get('/frontend-development-uxui-design', function () {
        return Inertia::render('solutions/frontend-development-uxui-design');
    })->name('solutions.frontend-development-uxui-design');
    
    Route::get('/mvp-product-development', function () {
        return Inertia::render('solutions/mvp-product-development');
    })->name('solutions.mvp-product-development');
    
    Route::get('/mobile-cross-platform-development', function () {
        return Inertia::render('solutions/mobile-cross-platform-development');
    })->name('solutions.mobile-cross-platform-development');
    
    Route::get('/hubspot-crm-development', function () {
        return Inertia::render('solutions/hubspot-crm-development');
    })->name('solutions.hubspot-crm-development');
});

// Services Pages
Route::prefix('services')->group(function () {
    Route::get('/', function () {
        return Inertia::render('services/index');
    })->name('services');
    
    Route::get('/software-engineering-it-consulting', function () {
        return Inertia::render('services/software-engineering-it-consulting');
    })->name('services.software-engineering-it-consulting');
    
    Route::get('/application-devops-services', function () {
        return Inertia::render('services/application-devops-services');
    })->name('services.application-devops-services');
    
    Route::get('/managed-it-support-services', function () {
        return Inertia::render('services/managed-it-support-services');
    })->name('services.managed-it-support-services');
});

// Industries Pages
Route::prefix('industries')->group(function () {
    Route::get('/', function () {
        return Inertia::render('industries/index');
    })->name('industries');
});

// Company Pages
Route::prefix('company')->group(function () {
    Route::get('/about', function () {
        return Inertia::render('company/about');
    })->name('company.about');
    
    Route::get('/partners', function () {
        return Inertia::render('company/partners');
    })->name('company.partners');
    
    Route::get('/faqs', function () {
        return Inertia::render('company/faqs');
    })->name('company.faqs');
});

// Case Studies
Route::prefix('case-studies')->name('case-studies.')->group(function () {
    Route::get('/', function () {
        // Cache case studies for 1 hour
        $caseStudies = cache()->remember('case-studies.published', 3600, function () {
            return \App\Models\CaseStudy::where('status', 'published')
                ->orderBy('created_at', 'desc')
                ->get();
        });
            
        return Inertia::render('case-studies', [
            'caseStudies' => $caseStudies,
        ]);
    })->name('index');
    
    Route::get('/filter', [\App\Http\Controllers\CaseStudyController::class, 'filter'])->name('filter');
    
    // Original case study page
    Route::get('/{caseStudy:slug}', function (\App\Models\CaseStudy $caseStudy) {
        // Make sure only published case studies are viewable
        if ($caseStudy->status !== 'published') {
            abort(404);
        }
        
        // Cache related case studies based on service type
        $relatedCaseStudies = cache()->remember(
            "case-studies.related.{$caseStudy->service_type}.{$caseStudy->id}", 
            3600, 
            function () use ($caseStudy) {
                return \App\Models\CaseStudy::where('status', 'published')
                    ->where('id', '!=', $caseStudy->id)
                    ->where('service_type', $caseStudy->service_type)
                    ->take(3)
                    ->get();
            }
        );
            
        return Inertia::render('case-study', [
            'caseStudy' => $caseStudy,
            'relatedCaseStudies' => $relatedCaseStudies,
        ]);
    })->name('show');
    
    // Redirect detail route to main case study page
    Route::get('/{caseStudy:slug}/detail', function (\App\Models\CaseStudy $caseStudy) {
        return redirect()->route('case-studies.show', $caseStudy->slug);
    });
});

// Dallas Landing Pages
Route::prefix('dallas')->name('dallas.')->group(function () {
    Route::get('/software-development', function () {
        return Inertia::render('dallas/software-development');
    })->name('software-development');
    
    Route::get('/web-development', function () {
        return Inertia::render('dallas/web-development');
    })->name('web-development');
    
    Route::get('/it-consulting', function () {
        return Inertia::render('dallas/it-consulting');
    })->name('it-consulting');
    
    Route::get('/managed-it-services', function () {
        return Inertia::render('dallas/managed-it-services');
    })->name('managed-it-services');
    
    Route::get('/mobile-app-development', function () {
        return Inertia::render('dallas/mobile-app-development');
    })->name('mobile-app-development');
});

// Legal Pages
Route::prefix('legal')->name('legal.')->group(function () {
    Route::get('/privacy-policy', function () {
        return Inertia::render('legal/privacy-policy');
    })->name('privacy-policy');
    
    Route::get('/terms-of-service', function () {
        return Inertia::render('legal/terms-of-service');
    })->name('terms-of-service');
    
    Route::get('/cookie-policy', function () {
        return Inertia::render('legal/cookie-policy');
    })->name('cookie-policy');
    
    Route::get('/accessibility-statement', function () {
        return Inertia::render('legal/accessibility-statement');
    })->name('accessibility-statement');
    
    Route::get('/sitemap', function () {
        return Inertia::render('legal/sitemap');
    })->name('sitemap');
});

// Admin/Auth Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// CSRF token endpoint for simple contact form
Route::get('/csrf-token', function () {
    return response()->json([
        'token' => csrf_token()
    ]);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/debug.php';
