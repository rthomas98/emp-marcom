<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectToCanonicalHost
{
    /**
     * Redirect the legacy apex domain to the canonical www host in production.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! app()->environment('production') || $request->getHost() !== 'empuls3.com') {
            return $next($request);
        }

        $legacyPaths = [
            '/about-us' => '/company/about',
            '/contact-us' => '/contact',
            '/capabilities' => '/solutions',
            '/request-proposal' => '/contact',
            '/portfolio' => '/case-studies',
        ];

        $path = '/'.ltrim($request->path(), '/');
        $targetPath = $legacyPaths[rtrim($path, '/')] ?? $path;
        $canonicalUrl = rtrim(config('app.canonical_url'), '/').$targetPath;

        if ($request->getQueryString()) {
            $canonicalUrl .= '?'.$request->getQueryString();
        }

        return redirect()->away($canonicalUrl, 301);
    }
}
