<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\View;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $formData;
    protected $replyToEmail;
    protected $replyToName;

    /**
     * Create a new message instance.
     */
    public function __construct(array $formData)
    {
        $this->formData = $formData;
        $this->replyToEmail = $formData['email'] ?? null;
        
        // Log mail construction for debugging
        Log::info('ContactFormMail constructed', [
            'form_data' => $formData,
            'mail_from' => config('mail.from.address'),
            'mail_name' => config('mail.from.name'),
            'mail_driver' => config('mail.default')
        ]);
    }
    
    /**
     * Set the reply-to address for the mail message.
     *
     * @param string $address
     * @param string|null $name
     * @return $this
     */
    public function replyTo($address, $name = null)
    {
        $this->replyToEmail = $address;
        $this->replyToName = $name;
        return $this;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $replyTo = [];
        
        if ($this->replyToEmail) {
            $replyTo[] = new Address(
                $this->replyToEmail, 
                $this->replyToName ?? $this->formData['name'] ?? 'Contact Form Submitter'
            );
        }
        
        return new Envelope(
            from: new Address('info@empuls3.com', 'Empuls3'),
            subject: 'New Contact Form Submission - Empuls3',
            replyTo: $replyTo,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-form',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
    
    /**
     * Render the email as HTML string.
     *
     * @return string
     */
    public function render(): string
    {
        return View::make('emails.contact-form', ['formData' => $this->formData])->render();
    }
}
