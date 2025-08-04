<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use App\Services\ContactFormService;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test successful contact form submission.
     */
    public function test_contact_form_submission_success()
    {
        Mail::fake();

        $response = $this->postJson('/contact/submit', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '555-123-4567',
            'company' => 'Test Company',
            'message' => 'This is a test message',
            'projectType' => 'web-development',
            'projectDescription' => 'Test project',
            'budget' => '10000-25000',
            'timeline' => '1-3-months',
            'submit_time' => time() - 10, // 10 seconds ago
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Thank you for your message. We\'ll get back to you soon!'
            ]);

        Mail::assertSent(ContactFormMail::class, function ($mail) {
            return $mail->hasTo('info@empuls3.com');
        });
    }

    /**
     * Test contact form validation errors.
     */
    public function test_contact_form_validation_errors()
    {
        $response = $this->postJson('/contact/submit', [
            // Missing required fields
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'projectType']);
    }

    /**
     * Test honeypot protection.
     */
    public function test_honeypot_protection()
    {
        Mail::fake();

        $response = $this->postJson('/contact/submit', [
            'name' => 'Bot User',
            'email' => 'bot@example.com',
            'projectType' => 'web-development',
            'website' => 'http://spam-site.com', // Honeypot field filled
            'submit_time' => time() - 10,
        ]);

        // Should return success to fool bots
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        // But no email should be sent
        Mail::assertNothingSent();
    }

    /**
     * Test submission time protection.
     */
    public function test_submission_time_protection()
    {
        Mail::fake();

        $response = $this->postJson('/contact/submit', [
            'name' => 'Quick Bot',
            'email' => 'quick@example.com',
            'projectType' => 'web-development',
            'submit_time' => time() - 1, // Only 1 second ago
        ]);

        // Should return success to fool bots
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        // But no email should be sent
        Mail::assertNothingSent();
    }

    /**
     * Test rate limiting.
     */
    public function test_rate_limiting()
    {
        Mail::fake();

        // Make 3 successful requests (the limit)
        for ($i = 0; $i < 3; $i++) {
            $response = $this->postJson('/contact/submit', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'projectType' => 'web-development',
                'submit_time' => time() - 10,
            ]);

            $response->assertStatus(200);
        }

        // The 4th request should be rate limited
        $response = $this->postJson('/contact/submit', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'projectType' => 'web-development',
            'submit_time' => time() - 10,
        ]);

        $response->assertStatus(429)
            ->assertJson([
                'success' => false,
                'message' => 'Too many contact form submissions. Please try again later.'
            ])
            ->assertHeader('Retry-After')
            ->assertHeader('X-RateLimit-Limit', 3)
            ->assertHeader('X-RateLimit-Remaining', 0);
    }

    /**
     * Test email validation.
     */
    public function test_email_validation()
    {
        $response = $this->postJson('/contact/submit', [
            'name' => 'Test User',
            'email' => 'invalid-email',
            'projectType' => 'web-development',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    /**
     * Test ContactFormService bot detection.
     */
    public function test_contact_form_service_bot_detection()
    {
        $service = new ContactFormService();

        // Test honeypot detection
        $this->assertTrue($service->isBot(['website' => 'spam']));
        
        // Test timing detection
        $this->assertTrue($service->isBot(['submit_time' => time() - 1]));
        
        // Test legitimate submission
        $this->assertFalse($service->isBot([
            'submit_time' => time() - 10,
            'website' => ''
        ]));
    }
}