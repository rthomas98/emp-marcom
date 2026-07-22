<?php

use App\Http\Middleware\RedirectToCanonicalHost;
use Illuminate\Http\Request;

it('permanently redirects indexed legacy paths to their current pages', function (string $legacyPath, string $currentPath) {
    $this->get($legacyPath)
        ->assertStatus(301)
        ->assertRedirect($currentPath);
})->with([
    ['/about-us', '/company/about'],
    ['/contact-us', '/contact'],
    ['/capabilities', '/solutions'],
    ['/request-proposal', '/contact'],
    ['/portfolio', '/case-studies'],
    ['/about', '/company/about'],
    ['/faq', '/company/faqs'],
    ['/resources', '/case-studies'],
    ['/careers', '/company/about'],
    ['/company/values', '/company/about'],
    ['/company/achievements', '/case-studies'],
    ['/company/case-studies', '/case-studies'],
    ['/company/partnerships', '/company/partners'],
    ['/industries/healthcare', '/industries'],
    ['/industries/finance', '/industries'],
    ['/industries/ecommerce', '/industries'],
    ['/industries/manufacturing', '/industries'],
    ['/industries/education', '/industries'],
    ['/industries/startups', '/industries'],
]);

it('redirects the production apex host to the canonical www host and preserves the query', function () {
    app()->detectEnvironment(fn () => 'production');

    try {
        $request = Request::create('https://empuls3.com/contact-us?source=google', 'GET');
        $response = (new RedirectToCanonicalHost)->handle($request, fn () => response('next'));

        expect($response->getStatusCode())->toBe(301)
            ->and($response->headers->get('Location'))->toBe('https://www.empuls3.com/contact?source=google');
    } finally {
        app()->detectEnvironment(fn () => 'testing');
    }
});

it('does not redirect the canonical host', function () {
    app()->detectEnvironment(fn () => 'production');

    try {
        $request = Request::create('https://www.empuls3.com/contact', 'GET');
        $response = (new RedirectToCanonicalHost)->handle($request, fn () => response('next'));

        expect($response->getStatusCode())->toBe(200)
            ->and($response->getContent())->toBe('next');
    } finally {
        app()->detectEnvironment(fn () => 'testing');
    }
});
