<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sentry DSN
    |--------------------------------------------------------------------------
    |
    | The DSN (Data Source Name) for your Sentry project.
    | You can find this in your Sentry project settings.
    |
    */

    'dsn' => env('SENTRY_DSN'),

    /*
    |--------------------------------------------------------------------------
    | Environment
    |--------------------------------------------------------------------------
    |
    | Set the environment for Sentry reporting.
    |
    */

    'environment' => env('SENTRY_ENVIRONMENT', env('APP_ENV', 'production')),

    /*
    |--------------------------------------------------------------------------
    | Release Version
    |--------------------------------------------------------------------------
    |
    | You can set a release version for better tracking in Sentry.
    |
    */

    'release' => env('SENTRY_RELEASE', null),

    /*
    |--------------------------------------------------------------------------
    | Sample Rate
    |--------------------------------------------------------------------------
    |
    | This option controls the percentage of errors that should be sent to Sentry.
    | Set to 1.0 to send 100% of errors, 0.25 to send 25%, etc.
    |
    */

    'traces_sample_rate' => env('SENTRY_TRACES_SAMPLE_RATE', 1.0),

    /*
    |--------------------------------------------------------------------------
    | Send Default PII
    |--------------------------------------------------------------------------
    |
    | If this flag is enabled, certain personally identifiable information (PII)
    | is added by active integrations.
    |
    */

    'send_default_pii' => env('SENTRY_SEND_DEFAULT_PII', false),

    /*
    |--------------------------------------------------------------------------
    | Breadcrumbs
    |--------------------------------------------------------------------------
    |
    | Configuration for breadcrumbs (events leading up to an error).
    |
    */

    'breadcrumbs' => [
        'sql_queries' => env('SENTRY_BREADCRUMBS_SQL_QUERIES', true),
        'sql_bindings' => env('SENTRY_BREADCRUMBS_SQL_BINDINGS', false),
        'queue_jobs' => env('SENTRY_BREADCRUMBS_QUEUE_JOBS', true),
        'cache' => env('SENTRY_BREADCRUMBS_CACHE', false),
        'logs' => env('SENTRY_BREADCRUMBS_LOGS', true),
        'files' => env('SENTRY_BREADCRUMBS_FILES', true),
    ],

    /*
    |--------------------------------------------------------------------------
    | Before Send Callback
    |--------------------------------------------------------------------------
    |
    | Use this to filter or modify events before they are sent to Sentry.
    |
    */

    'before_send' => function (\Sentry\Event $event, ?\Sentry\EventHint $hint): ?\Sentry\Event {
        // Don't report 404 errors
        if ($hint !== null) {
            $exception = $hint->getOriginalException();
            if ($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
                return null;
            }
        }

        // Remove sensitive data
        $request = $event->getRequest();
        if ($request !== null) {
            // Remove password fields
            $data = $request->getData();
            if (is_array($data)) {
                unset($data['password'], $data['password_confirmation']);
                $request->setData($data);
            }
        }

        return $event;
    },

    /*
    |--------------------------------------------------------------------------
    | Ignored Errors
    |--------------------------------------------------------------------------
    |
    | List of error classes that should not be reported to Sentry.
    |
    */

    'ignore_exceptions' => [
        \Symfony\Component\HttpKernel\Exception\NotFoundHttpException::class,
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Validation\ValidationException::class,
        \Illuminate\Session\TokenMismatchException::class,
    ],

];