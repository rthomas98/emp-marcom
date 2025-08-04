<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\ContactFormService;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormMail;

class ContactFormServiceTest extends TestCase
{
    protected ContactFormService $service;

    protected function setUp(): void
    {
        parent::setUp();
        $this->service = new ContactFormService();
    }

    /**
     * Test bot detection with honeypot field.
     */
    public function test_bot_detection_honeypot()
    {
        $data = [
            'email' => 'test@example.com',
            'website' => 'http://spam.com' // Honeypot field filled
        ];

        $this->assertTrue($this->service->isBot($data));
    }

    /**
     * Test bot detection with quick submission.
     */
    public function test_bot_detection_timing()
    {
        $data = [
            'email' => 'test@example.com',
            'submit_time' => time() - 2 // Submitted in 2 seconds
        ];

        $this->assertTrue($this->service->isBot($data));
    }

    /**
     * Test legitimate submission passes bot detection.
     */
    public function test_legitimate_submission_passes_bot_detection()
    {
        $data = [
            'email' => 'test@example.com',
            'submit_time' => time() - 10, // 10 seconds
            'website' => '' // Honeypot empty
        ];

        $this->assertFalse($this->service->isBot($data));
    }

    /**
     * Test successful email sending.
     */
    public function test_successful_email_sending()
    {
        Mail::fake();

        $data = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'Test message',
            'projectType' => 'web-development'
        ];

        $result = $this->service->sendEmail($data);

        $this->assertTrue($result['success']);
        $this->assertArrayHasKey('method', $result);

        Mail::assertSent(ContactFormMail::class);
    }

    /**
     * Test logging of successful submission.
     */
    public function test_logging_successful_submission()
    {
        Log::shouldReceive('info')
            ->once()
            ->with('Contact form submitted successfully', \Mockery::any());

        $data = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'projectType' => 'web-development'
        ];

        $result = ['success' => true, 'method' => 'test'];

        $this->service->logSubmission($data, $result);
    }

    /**
     * Test logging of failed submission.
     */
    public function test_logging_failed_submission()
    {
        Log::shouldReceive('error')
            ->once()
            ->with('Contact form submission failed', \Mockery::any());

        $data = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'projectType' => 'web-development'
        ];

        $result = ['success' => false, 'error' => 'Test error'];

        $this->service->logSubmission($data, $result);
    }
}