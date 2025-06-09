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

Route::post('/contact/submit', [ContactController::class, 'submit'])->name('contact.submit');

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
        // Get all published case studies
        $caseStudies = \App\Models\CaseStudy::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->get();
            
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
        
        // Get related case studies with the same service type
        $relatedCaseStudies = \App\Models\CaseStudy::where('status', 'published')
            ->where('id', '!=', $caseStudy->id)
            ->where('service_type', $caseStudy->service_type)
            ->take(3)
            ->get();
            
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

// Test route for email
Route::get('/test-mail', function () {
    try {
        \Illuminate\Support\Facades\Mail::raw('Test email from Empuls3 contact form', function($message) {
            $message->to('robt84@gmail.com')
                   ->subject('Test Email');
        });
        return 'Email sent successfully!';
    } catch (\Exception $e) {
        return 'Error sending email: ' . $e->getMessage();
    }
});

// Debug route for contact form submissions
Route::post('/debug-contact', function (\Illuminate\Http\Request $request) {
    // Log all request data
    \Illuminate\Support\Facades\Log::info('Debug contact form submission received', [
        'all_data' => $request->all(),
        'headers' => $request->headers->all()
    ]);
    
    // Return success response
    return response()->json([
        'success' => true,
        'message' => 'Debug data received and logged',
        'data' => $request->all()
    ]);
});

// CSRF token endpoint for simple contact form
Route::get('/csrf-token', function () {
    return response()->json([
        'token' => csrf_token()
    ]);
});

// Direct email test route
Route::get('/direct-email-test', function () {
    try {
        // Sample form data
        $formData = [
            'name' => 'Direct Test User',
            'email' => 'test@example.com',
            'phone' => '555-555-5555',
            'company' => 'Test Company',
            'message' => 'This is a direct test message',
            'formType' => 'test',
            'projectType' => 'web-development',
            'projectDescription' => 'Test project description',
            'requirements' => 'Test requirements',
            'budget' => 'test-budget',
            'timeline' => 'test-timeline',
            'submit_time' => time()
        ];
        
        // Log attempt
        \Illuminate\Support\Facades\Log::info('Direct email test initiated');
        
        // Create mail instance
        $mail = new \App\Mail\ContactFormMail($formData);
        
        // Send using Laravel's Mail facade
        \Illuminate\Support\Facades\Mail::to('info@empuls3.com')
            ->send($mail);
        
        // Log success
        \Illuminate\Support\Facades\Log::info('Direct email test succeeded');
        
        return response()->json([
            'success' => true,
            'message' => 'Email sent successfully! Check your inbox at info@empuls3.com'
        ]);
    } catch (\Exception $e) {
        // Log error
        \Illuminate\Support\Facades\Log::error('Direct email test failed', [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
        
        return response()->json([
            'success' => false,
            'message' => 'Error sending email: ' . $e->getMessage()
        ], 500);
    }
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
