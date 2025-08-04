# Sentry Error Tracking Setup Guide

This guide explains how to set up Sentry error tracking for the Empuls3 application.

## Installation

1. Install the Sentry Laravel SDK:
```bash
composer require sentry/sentry-laravel
```

2. Publish the Sentry configuration:
```bash
php artisan vendor:publish --provider="Sentry\Laravel\ServiceProvider"
```

## Configuration

1. Add your Sentry DSN to the `.env` file:
```env
SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_ENVIRONMENT=production
SENTRY_TRACES_SAMPLE_RATE=0.2
SENTRY_SEND_DEFAULT_PII=false
```

2. Optional configuration in `.env`:
```env
# Breadcrumbs configuration
SENTRY_BREADCRUMBS_SQL_QUERIES=true
SENTRY_BREADCRUMBS_SQL_BINDINGS=false
SENTRY_BREADCRUMBS_QUEUE_JOBS=true
SENTRY_BREADCRUMBS_CACHE=false
SENTRY_BREADCRUMBS_LOGS=true
SENTRY_BREADCRUMBS_FILES=true

# Release tracking (optional)
SENTRY_RELEASE=1.0.0
```

## Usage

### Manual Error Reporting

```php
use Sentry\Laravel\Facades\Sentry;

try {
    // Your code here
} catch (\Exception $e) {
    Sentry::captureException($e);
    
    // Or with additional context
    Sentry::withScope(function (Scope $scope) use ($e): void {
        $scope->setContext('custom', [
            'user_id' => auth()->id(),
            'action' => 'contact_form_submission'
        ]);
        Sentry::captureException($e);
    });
}
```

### Adding User Context

In `app/Http/Middleware/HandleInertiaRequests.php`, add:

```php
use Sentry\Laravel\Facades\Sentry;
use Sentry\State\Scope;

public function handle($request, Closure $next)
{
    if (auth()->check()) {
        Sentry::configureScope(function (Scope $scope): void {
            $scope->setUser([
                'id' => auth()->user()->id,
                'email' => auth()->user()->email,
            ]);
        });
    }

    return parent::handle($request, $next);
}
```

### Custom Breadcrumbs

```php
use Sentry\Laravel\Facades\Sentry;
use Sentry\Breadcrumb;

// Add a breadcrumb
Sentry::addBreadcrumb(new Breadcrumb(
    Breadcrumb::LEVEL_INFO,
    Breadcrumb::TYPE_DEFAULT,
    'contact_form',
    'Contact form submitted',
    ['email' => $request->email]
));
```

### Performance Monitoring

```php
use Sentry\Laravel\Facades\Sentry;

// Start a transaction
$transaction = Sentry::startTransaction([
    'name' => 'contact-form-submission',
    'op' => 'http.server'
]);

Sentry::getCurrentHub()->setSpan($transaction);

// Your code here

// Finish the transaction
$transaction->finish();
```

## Frontend Integration (React)

1. Install Sentry React SDK:
```bash
npm install @sentry/react
```

2. Initialize in `resources/js/app.tsx`:
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.VITE_APP_ENV,
    integrations: [
        new Sentry.BrowserTracing(),
        new Sentry.Replay(),
    ],
    tracesSampleRate: 0.2,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});
```

3. Add error boundary to your app:
```typescript
import { ErrorBoundary } from "@sentry/react";

function App() {
    return (
        <ErrorBoundary fallback={<ErrorFallback />} showDialog>
            {/* Your app content */}
        </ErrorBoundary>
    );
}
```

## Testing

1. Test error reporting:
```php
Route::get('/test-sentry', function () {
    throw new \Exception('Test Sentry error!');
});
```

2. Verify in Sentry dashboard that the error appears.

## Best Practices

1. **Don't log sensitive data**: The configuration already filters out passwords and sensitive fields.

2. **Use appropriate log levels**: 
   - `captureException()` for errors
   - `captureMessage()` for important events
   - Breadcrumbs for context

3. **Set up alerts**: Configure alerts in Sentry for critical errors.

4. **Monitor performance**: Use transactions to track slow operations.

5. **Regular cleanup**: Set up data retention policies in Sentry.

## Troubleshooting

1. **Errors not appearing**: Check that `SENTRY_DSN` is set correctly.

2. **Too many events**: Adjust `traces_sample_rate` in config.

3. **Missing context**: Ensure user context is set in middleware.

4. **Local development**: Sentry is disabled in local/testing environments by default.