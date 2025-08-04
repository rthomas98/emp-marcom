<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            if ($this->shouldReportToSentry($e) && config('sentry.dsn')) {
                app('sentry')->captureException($e);
            }
        });
    }

    /**
     * Determine if the exception should be reported to Sentry.
     *
     * @param  \Throwable  $e
     * @return bool
     */
    protected function shouldReportToSentry(Throwable $e): bool
    {
        // Check if exception is in ignore list
        $ignoredExceptions = config('sentry.ignore_exceptions', []);
        
        foreach ($ignoredExceptions as $ignoredException) {
            if ($e instanceof $ignoredException) {
                return false;
            }
        }

        // Check if exception should be reported based on environment
        if (app()->environment('local', 'testing')) {
            return false;
        }

        return true;
    }
}