import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateServiceSchema } from '@/utils/schema';
import { dallasKeywords, generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function DallasMobileAppDevelopment() {
    const serviceInfo = {
        title: 'Mobile App Development',
        description:
            'We help Dallas businesses evaluate, design, and build mobile products when an app is the right way to serve customers or support a field team.',
        features: [
            'Native iOS Development',
            'Native Android Development',
            'Cross-Platform Apps (React Native)',
            'Progressive Web Apps',
            'App Store Optimization',
            'Push Notifications & Analytics',
        ],
        benefits: [
            'Product planning tied to a clear business case',
            'Native and cross-platform architecture guidance',
            'Testing on real devices as well as simulators',
            'App Store and Play Store release support',
            'Analytics and observability built into delivery',
            'A maintainable handoff and support plan',
        ],
        cta: 'Schedule a product review to determine whether a mobile app fits the problem, audience, budget, and long-term operating plan.',
    };

    // Schema markup
    const localBusinessSchema = generateLocalBusinessSchema();
    const serviceSchema = generateServiceSchema({
        name: 'Mobile App Development Dallas',
        description: 'Expert mobile app development for Dallas businesses. iOS, Android, and cross-platform apps from local specialists.',
        url: 'https://www.empuls3.com/dallas/mobile-app-development',
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Dallas', url: 'https://www.empuls3.com/dallas' },
        { name: 'Mobile App Development', url: 'https://www.empuls3.com/dallas/mobile-app-development' },
    ]);

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('Mobile App Development')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Expert mobile app development for Dallas businesses. Native iOS, Android, and cross-platform apps from local developers.',
                    )}
                />
                <meta name="keywords" content={dallasKeywords.mobile.join(', ')} />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Mobile App Development Dallas | Empuls3" />
                <meta
                    property="og:description"
                    content="Custom mobile app development for Dallas businesses. iOS, Android, and cross-platform solutions from local experts."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/dallas/mobile-app-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/dallas-mobile-development.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mobile App Development Dallas | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Expert mobile app development for Dallas. iOS, Android, and cross-platform apps from local developers."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/dallas-mobile-development.jpg" />

                {/* Schema Markup */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* FAQ Schema for Dallas Mobile Development */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does mobile app development cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mobile app pricing depends on product scope, platforms, integrations, compliance, design complexity, and launch support. New project engagements begin at $25,000, with a written scope provided after discovery."
                }
              },
              {
                "@type": "Question",
                "name": "Should I build native or cross-platform apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Native apps (separate iOS/Android) offer best performance and platform-specific features. Cross-platform apps (React Native) reduce costs and development time. We help Dallas businesses choose based on budget, timeline, and feature requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a mobile app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timing depends on product scope, platforms, integrations, compliance, testing, and app-store requirements. We provide milestones and a delivery schedule after discovery."
                }
              }
            ]
          }
        `}</script>
            </Head>

            <DallasLandingPage service={serviceInfo} />
        </SiteLayout>
    );
}
