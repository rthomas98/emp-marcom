import { BackendAPIHeader } from '@/components/solutions/BackendAPIHeader';
import { BackendCTA } from '@/components/solutions/BackendCTA';
import { BackendFeatures } from '@/components/solutions/BackendFeatures';
import { BackendSolutions } from '@/components/solutions/BackendSolutions';
import { BackendTestimonials } from '@/components/solutions/BackendTestimonials';
import { DatabaseManagement } from '@/components/solutions/DatabaseManagement';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function BackendApiDevelopment() {
    const pageTitle = 'Backend API Development Dallas';
    const pageDescription =
        'Backend and API development for Dallas businesses. Connect disconnected systems, automate manual workflows, and improve reliability with senior engineers.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'Backend API Development', url: 'https://www.empuls3.com/solutions/backend-api-development' },
    ]);

    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="API development Dallas, Dallas backend developers, fix broken integrations, database optimization Dallas, system integration DFW, API security"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/backend-api-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/backend-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta
                    name="twitter:description"
                    content="Connect systems, automate workflows, and improve backend reliability with senior engineers serving Dallas businesses."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/backend-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Back-End & API Development Services",
            "description": "Connect disconnected systems, automate manual processes, and build maintainable backends and APIs with senior engineers.",
            "url": "https://www.empuls3.com/solutions/backend-api-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#backend-api-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Back-End & API Development Services",
              "description": "Fix broken backends and APIs. We connect disconnected systems, automate manual data entry, and build scalable solutions that actually work.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://www.empuls3.com",
                "logo": "https://www.empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Back-End Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Back-End & API Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "API Development & Integration",
                      "description": "Custom API development and seamless integration services for connecting disparate systems and enhancing application functionality."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Database Management",
                      "description": "Personalized database management solutions with senior expertise for optimal performance and reliability."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Server-Side Logic Development",
                      "description": "Tailored server-side operations built by senior developers for scalable business growth."
                    }
                  }
                ]
              }
            },
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "isPartOf": {
                "@id": "https://www.empuls3.com/solutions/backend-api-development"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["#backend-api-heading", "#backend-solutions-heading", "#database-management-heading", "#backend-features-heading"]
              }
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does a micro agency approach benefit backend development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You work directly with senior engineers. We document current systems, data flows, risks, ownership, and acceptance criteria before implementing a reliable integration plan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What database management services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We assess slow databases, optimize queries, plan migrations, and improve security and observability. Timing and downtime requirements are defined for each system before changes begin."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure API security and reliability?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement industry best practices for API security including authentication, authorization, encryption, rate limiting, and comprehensive testing protocols. Our senior developers build reliable APIs with proper error handling, versioning, and documentation."
                  }
                }
              ]
            }
          }
        `}</script>
            </Head>
            <BackendAPIHeader />
            <BackendSolutions />
            <DatabaseManagement />
            <BackendFeatures />
            <BackendTestimonials />
            <BackendCTA />
        </SiteLayout>
    );
}
