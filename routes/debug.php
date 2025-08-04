<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Debug Routes
|--------------------------------------------------------------------------
|
| These routes are only available in local/development environments
| for debugging purposes. They are automatically disabled in production.
|
*/

if (app()->environment(['local', 'development'])) {
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
}