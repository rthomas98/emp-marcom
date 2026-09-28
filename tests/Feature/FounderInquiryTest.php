<?php

namespace Tests\Feature;

use App\Mail\ContactFormMail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class FounderInquiryTest extends TestCase
{
    use RefreshDatabase;

    public function test_founder_details_reach_the_inquiry_email(): void
    {
        Mail::fake();
        $this->postJson('/contact/submit', [
            'name' => 'Founder',
            'email' => 'founder@example.com',
            'projectType' => 'product-planning',
            'message' => 'Help plan a member application.',
            'projectStage' => 'validating',
            'intendedUsers' => 'Independent business owners',
            'submit_time' => time() - 10,
        ])->assertOk()->assertJson(['success' => true]);

        Mail::assertSent(ContactFormMail::class, function ($mail) {
            $html = $mail->render();
            return $mail->hasTo('info@empuls3.com')
                && str_contains($html, 'Talking to potential customers')
                && str_contains($html, 'Independent business owners');
        });
    }

    public function test_invalid_founder_details_do_not_send_email(): void
    {
        Mail::fake();
        $this->postJson('/contact/submit', [
            'name' => 'Founder',
            'email' => 'founder@example.com',
            'projectType' => 'product-planning',
            'projectStage' => 'invalid-stage',
            'intendedUsers' => str_repeat('x', 1001),
            'submit_time' => time() - 10,
        ])->assertUnprocessable()->assertJsonValidationErrors(['projectStage', 'intendedUsers']);
        Mail::assertNothingSent();
    }
}
