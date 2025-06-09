<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FilamentAdminAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Allow access to login page and authentication routes
        if ($request->is('*/login') || $request->is('*/forgot-password') || $request->is('*/reset-password/*') || $request->is('*/password-reset/*')) {
            return $next($request);
        }
        
        $user = Auth::user();

        // Check if user is authenticated and has admin access
        if ($user && ($user->hasRole('admin') || $user->email === 'rob.thomas@empuls3.com')) {
            return $next($request);
        }

        // If not authenticated, redirect to login
        if (!$user) {
            return redirect()->route('filament.marcom.auth.login');
        }
        
        // If authenticated but not authorized, show 403
        abort(403, 'Unauthorized access to admin panel.');
    }
}
