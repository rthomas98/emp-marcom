<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;

$email = 'rob.thomas@empuls3.com';

try {
    echo "Attempting to send test email to {$email}...\n";
    
    Mail::raw('This is a test email to verify that the email system is working properly.', function (Message $message) use ($email) {
        $message->to($email)
                ->subject('Test Email from Empuls3');
    });
    
    echo "Email sent successfully! Please check your inbox.\n";
    echo "If you don't receive the email, check your spam folder.\n";
} catch (\Exception $e) {
    echo "Error sending email: " . $e->getMessage() . "\n";
}
