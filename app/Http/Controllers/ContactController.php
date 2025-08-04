<?php

namespace App\Http\Controllers;

use App\Services\ContactFormService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * The contact form service instance.
     *
     * @var \App\Services\ContactFormService
     */
    protected $contactFormService;

    /**
     * Create a new controller instance.
     *
     * @param  \App\Services\ContactFormService  $contactFormService
     * @return void
     */
    public function __construct(ContactFormService $contactFormService)
    {
        $this->contactFormService = $contactFormService;
    }

    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function submit(Request $request)
    {
        // Log incoming request
        Log::info('Contact form submission received', [
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent()
        ]);

        // Check for bot submissions
        if ($this->contactFormService->isBot($request->all())) {
            // Return fake success to fool bots
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);
        }

        // Validate the request
        $validator = $this->validateContactForm($request);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Send the email
        $result = $this->contactFormService->sendEmail($request->all());

        // Log the submission
        $this->contactFormService->logSubmission($request->all(), $result);

        if ($result['success']) {
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Sorry, there was an error sending your message. Please try again later.'
        ], 500);
    }

    /**
     * Validate the contact form data.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateContactForm(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
            'message' => 'nullable|string|max:5000',
            'formType' => 'nullable|string|max:255',
            'projectType' => 'required|string|max:255',
            'projectDescription' => 'nullable|string|max:5000',
            'requirements' => 'nullable|string|max:5000',
            'budget' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:255',
            'submit_time' => 'nullable|numeric',
            'website' => 'nullable|string' // Honeypot field
        ], [
            'name.required' => 'Please provide your name.',
            'email.required' => 'Please provide your email address.',
            'email.email' => 'Please provide a valid email address.',
            'projectType.required' => 'Please select a project type.'
        ]);
    }
}