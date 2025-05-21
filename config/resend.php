<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Resend API Key
    |--------------------------------------------------------------------------
    |
    | This is the API key for Resend. You can find this in your Resend
    | dashboard at https://resend.com/api-keys
    |
    */
    'api_key' => env('RESEND_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Resend Webhook Secret
    |--------------------------------------------------------------------------
    |
    | This is the webhook secret for Resend. You can find this in your Resend
    | dashboard at https://resend.com/webhooks
    |
    */
    'webhook_secret' => env('RESEND_WEBHOOK_SECRET'),
];
