<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Http;
use Resend\Laravel\Facades\Resend;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Log all incoming request data for debugging
        Log::info('Contact form submission received', [
            'all_data' => $request->all(),
            'headers' => $request->headers->all()
        ]);
        // Check honeypot field - if it's filled, it's likely a bot
        if ($request->filled('website')) {
            // Silently fail but return success to fool bots
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);
        }
        
        // Validate form data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
            'message' => 'nullable|string', // Allow empty message since we have other fields
            'formType' => 'nullable|string|max:255',
            'projectType' => 'required|string|max:255',
            'projectDescription' => 'nullable|string',
            'requirements' => 'nullable|string',
            'budget' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:255',
            'submit_time' => 'nullable|numeric' // Make timestamp optional for compatibility
        ]);
        
        // Check if form was submitted too quickly (likely a bot)
        $submitTime = (int)$request->input('submit_time', 0);
        $currentTime = time();
        
        // Only check timing if submit_time was provided and is greater than 0
        if ($submitTime > 0 && ($currentTime - $submitTime) < 3) { // Less than 3 seconds to fill the form
            // Silently fail but return success
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);
        }

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // Log attempt to send email
            Log::info('Attempting to send contact form email', [
                'to' => config('mail.from.address'),
                'from' => config('mail.from.address'),
                'name' => $request->name,
                'email' => $request->email
            ]);
            
            // Prepare email content using the existing template
            $emailContent = (new ContactFormMail($request->all()))->render();
            
            // Use the Resend facade directly as recommended in the documentation
            // This approach has better error handling and reliability
            $fromEmail = 'info@empuls3.com'; // Using your verified domain email
            $fromName = 'Empuls3';
            
            // Company email address as the recipient
            $recipients = ['info@empuls3.com'];
            
            // Try multiple approaches to ensure delivery
            $emailSent = false;
            $responseObj = null;
            $responseData = [];
            
            // First attempt: Use Laravel's Mail facade (most reliable method)
            try {
                Log::info('Attempting to send email using Mail facade');
                
                // Create mail instance
                $mail = new ContactFormMail($request->all());
                
                // Send using Laravel's Mail facade with correct reply-to syntax
                // The correct method is to set the reply-to in the Mailable class
                $mail->replyTo($request->email);
                Mail::to($recipients)->send($mail);
                
                Log::info('Email sent successfully using Mail facade', [
                    'to' => $recipients,
                    'from' => $fromEmail
                ]);
                
                $emailSent = true;
                $responseObj = (object)['id' => 'mail_' . time()];
                $responseData = ['id' => $responseObj->id];
            } catch (\Exception $e) {
                Log::error('Error sending email with Mail facade', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                
                // Second attempt: Use Resend Facade directly
                try {
                    Log::info('Attempting to send email using Resend Facade');
                    
                    $response = Resend::emails()->send([
                        'from' => "{$fromName} <{$fromEmail}>",
                        'to' => $recipients,
                        'reply_to' => $request->email,
                        'subject' => 'New Contact Form Submission - Empuls3',
                        'html' => $emailContent,
                        'text' => strip_tags($emailContent), // Add plain text version for better deliverability
                    ]);
                    
                    $responseObj = $response;
                    $responseData = ['id' => $response->id ?? null];
                    $emailSent = true;
                    
                    Log::info('Email sent using Resend Facade', [
                        'resend_id' => $responseObj->id ?? null,
                        'to' => $recipients
                    ]);
                } catch (\Exception $e2) {
                    Log::error('Error sending email with Resend Facade', [
                        'error' => $e2->getMessage(),
                        'trace' => $e2->getTraceAsString()
                    ]);
                    
                    // Final attempt: Direct API call
                    try {
                        Log::info('Attempting to send email using direct HTTP API call');
                        
                        $response = Http::withHeaders([
                            'Authorization' => 'Bearer ' . config('resend.api_key'),
                            'Content-Type' => 'application/json'
                        ])->post('https://api.resend.com/emails', [
                            'from' => "{$fromName} <{$fromEmail}>",
                            'to' => $recipients,
                            'reply_to' => $request->email,
                            'subject' => 'New Contact Form Submission - Empuls3',
                            'html' => $emailContent,
                            'text' => strip_tags($emailContent), // Add plain text version
                        ]);
                        
                        $responseData = $response->json();
                        $responseObj = (object)['id' => $responseData['id'] ?? null];
                        $emailSent = true;
                        
                        Log::info('Email sent using HTTP API call', [
                            'resend_id' => $responseObj->id ?? null,
                            'to' => $recipients
                        ]);
                    } catch (\Exception $e3) {
                        Log::error('All email sending methods failed', [
                            'final_error' => $e3->getMessage()
                        ]);
                    }
                }
            }
            
            // Log the Resend response for debugging
            Log::info('Resend API response', [
                'response_id' => $responseObj->id ?? null,
                'response' => $responseData
            ]);
            
            // Log successful submission with Resend response ID
            Log::info('Contact form submitted successfully', [
                'name' => $request->name,
                'email' => $request->email,
                'projectType' => $request->projectType,
                'formType' => $request->formType ?? 'general',
                'resend_id' => $responseObj->id ?? null
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);
        } catch (\Exception $e) {
            // Log error
            Log::error('Contact form error', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ], 500);
        }
    }
}
