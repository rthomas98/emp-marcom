import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateServiceSchema } from '@/utils/schema';
import { dallasKeywords, generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function DallasWebDevelopment() {
    const serviceInfo = {
        title: 'Professional Web Development',
        description:
            'We modernize business websites that are difficult to update, perform poorly, or no longer reflect the company. The result is a focused, accessible experience built around real customer journeys.',
        features: [
            'Responsive Web Design',
            'E-commerce Development',
            'Progressive Web Apps',
            'CMS Integration (WordPress, Drupal)',
            'Website Optimization & Speed',
            'SEO-Optimized Development',
        ],
        benefits: [
            'Business goals translated into a clear site plan',
            'Responsive experiences for desktop and mobile visitors',
            'Performance and accessibility considered from the start',
            'Flexible content management for internal teams',
            'Direct collaboration with designers and engineers',
            'A maintainable foundation for future campaigns',
        ],
        cta: 'Request a website review to identify the highest-impact usability, performance, and content improvements.',
    };

    // Schema markup
    const localBusinessSchema = generateLocalBusinessSchema();
    const serviceSchema = generateServiceSchema({
        name: 'Web Development Dallas',
        description: 'Professional web development services for Dallas businesses. Responsive design, e-commerce, and custom web applications.',
        url: 'https://www.empuls3.com/dallas/web-development',
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Dallas', url: 'https://www.empuls3.com/dallas' },
        { name: 'Web Development', url: 'https://www.empuls3.com/dallas/web-development' },
    ]);

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('Web Development Services')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Professional web development for Dallas businesses. Responsive design, e-commerce solutions, and custom web applications from local experts.',
                    )}
                />
                <meta name="keywords" content={dallasKeywords.webDevelopment.join(', ')} />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Web Development Dallas | Empuls3" />
                <meta
                    property="og:description"
                    content="Professional web development for Dallas businesses. Stunning designs, powerful functionality, local expertise."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/dallas/web-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/dallas-web-development.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Development Dallas | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Expert web development for Dallas businesses. Responsive design and e-commerce from local specialists."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/dallas-web-development.jpg" />

                {/* Schema Markup */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* FAQ Schema for Dallas Web Development */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a website cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website pricing depends on content, integrations, e-commerce requirements, accessibility, migration complexity, and ongoing support. We provide a written scope and price after discovery; new project engagements begin at $25,000."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timing depends on content readiness, integrations, approvals, migration complexity, and testing. We provide a milestone-based schedule after discovery."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide website maintenance for Dallas businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer comprehensive website maintenance packages for Dallas businesses, including updates, security monitoring, performance optimization, and content changes. Local support is available."
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
