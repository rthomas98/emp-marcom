<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

// Email to send the test to
$email = 'rob.thomas@empuls3.com';

try {
    echo "Testing email configuration...\n";
    echo "Mail driver: " . config('mail.default') . "\n";
    echo "From address: " . config('mail.from.address') . "\n";
    echo "From name: " . config('mail.from.name') . "\n";
    
    if (config('mail.default') === 'resend') {
        echo "Resend API Key: " . substr(config('services.resend.key'), 0, 5) . "..." . substr(config('services.resend.key'), -5) . "\n";
    }
    
    echo "\nAttempting to send test email to {$email}...\n";
    
    // Send a simple test email
    Mail::raw('This is a test email to verify that the mail system is working correctly.', function ($message) use ($email) {
        $message->to($email)
                ->subject('Test Email from Empuls3');
    });
    
    echo "Test email sent successfully! Please check your inbox and spam folder.\n";
    Log::info("Test email sent to {$email}");
    
} catch (\Exception $e) {
    echo "Error sending email: " . $e->getMessage() . "\n";
    Log::error("Error sending test email: " . $e->getMessage());
    
    // More detailed error information
    echo "\nDetailed error information:\n";
    echo "Exception class: " . get_class($e) . "\n";
    echo "File: " . $e->getFile() . "\n";
    echo "Line: " . $e->getLine() . "\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
}
