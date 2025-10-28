import SiteLayout from '@/layouts/site-layout';
import { BackendAPIHeader } from '@/components/solutions/BackendAPIHeader';
import { BackendSolutions } from '@/components/solutions/BackendSolutions';
import { DatabaseManagement } from '@/components/solutions/DatabaseManagement';
import { BackendFeatures } from '@/components/solutions/BackendFeatures';
import { BackendTestimonials } from '@/components/solutions/BackendTestimonials';
import { BackendCTA } from '@/components/solutions/BackendCTA';
import { Head } from '@inertiajs/react';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function BackendApiDevelopment() {
  const pageTitle = 'Backend API Development Dallas';
  const pageDescription = 'Fix broken APIs costing Dallas businesses $5K+ monthly. We connect systems that don\'t talk, automate manual processes in 30 days. Senior developers serving DFW metroplex.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'Backend API Development', url: 'https://empuls3.com/solutions/backend-api-development' }
  ]);
  
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="API development Dallas, Dallas backend developers, fix broken integrations, database optimization Dallas, system integration DFW, API security" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/backend-api-development" />
        <meta property="og:image" content="https://empuls3.com/images/backend-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Fix broken APIs costing Dallas businesses $5K+ monthly. 30-day transformations by senior developers." />
        <meta name="twitter:image" content="https://empuls3.com/images/backend-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/backend-api-development" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Back-End & API Development Services",
            "description": "Fix broken APIs costing you $5K+ monthly. We connect systems that don't talk, automate manual processes, and build backends that scale. 30-day fixes.",
            "url": "https://empuls3.com/solutions/backend-api-development",
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
                "url": "https://empuls3.com",
                "logo": "https://empuls3.com/images/logos/empuls3-logo.svg"
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
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewBody": "They fixed our API nightmare in 3 weeks. Systems finally talk to each other. Saved us 20 hours/week of manual data entry. Worth every penny."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Michael Chen"
                  },
                  "reviewBody": "Database was crashing daily. They fixed it in 2 days. Now it's 10x faster and hasn't crashed once in 6 months. These guys know their stuff."
                }
              ]
            },
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "isPartOf": {
                "@id": "https://empuls3.com/solutions/backend-api-development"
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
                    "text": "We're remote, so no office overhead - you save 40%. You work directly with senior developers who've fixed 100+ broken APIs. No juniors, no learning on your dime, just results in 30 days or less."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What database management services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We fix slow databases, optimize queries, migrate data without downtime, and implement proper security. Most database issues we fix in 2-5 days. If it's still broken after a week, you don't pay."
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
