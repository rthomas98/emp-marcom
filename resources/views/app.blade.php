<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Empuls3" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @if (app()->environment('production'))
        <!-- Google tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7GYXH0ED2H"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }

          // Initialize GA4
          gtag('js', new Date());
          gtag('config', 'G-7GYXH0ED2H');

          // Track contact form submissions and CTA clicks
          // Use event delegation to handle dynamically loaded content (Inertia.js)
          document.addEventListener('submit', function(e) {
            var form = e.target;
            if (form && form.matches && form.matches('form[aria-labelledby="contact-form-title"]')) {
              // Recommended event for GA4 form submissions
              gtag('event', 'form_submit', {
                event_category: 'engagement',
                event_label: 'Contact form submission',
                value: 1
              });
            }
          });

          // Track CTA button clicks using event delegation
          document.addEventListener('click', function(e) {
            var target = e.target;
            // Traverse up the DOM tree to find the link element
            while (target && target.tagName !== 'A') {
              target = target.parentElement;
            }
            
            if (target && target.href && (target.href.includes('/contact') || target.pathname === '/contact')) {
              var buttonText = target.textContent.trim() || target.querySelector('span')?.textContent.trim() || 'CTA Button';
              gtag('event', 'button_click', {
                event_category: 'engagement',
                event_label: buttonText,
                value: 1
              });
            }
          });
        </script>
        @endif

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
