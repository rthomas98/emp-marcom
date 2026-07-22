import { MvpApproach } from '@/components/solutions/MvpApproach';
import { MvpCTA } from '@/components/solutions/MvpCTA';
import { MvpFeatures } from '@/components/solutions/MvpFeatures';
import { MvpFinalCTA } from '@/components/solutions/MvpFinalCTA';
import { MvpHeader } from '@/components/solutions/MvpHeader';
import { MvpOverview } from '@/components/solutions/MvpOverview';
import { MvpProcess } from '@/components/solutions/MvpProcess';
import { MvpScalability } from '@/components/solutions/MvpScalability';
import { MvpTestimonials } from '@/components/solutions/MvpTestimonials';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function MvpProductDevelopment() {
    const pageTitle = 'MVP Product Development Dallas';
    const pageDescription =
        'MVP and product development for Dallas startups and established businesses. Senior-led discovery, product design, engineering, and launch support with a $25K minimum.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'MVP Product Development', url: 'https://www.empuls3.com/solutions/mvp-product-development' },
    ]);

    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="MVP development Dallas, Dallas startup developers, rapid prototyping DFW, product development Dallas, lean startup, minimum viable product"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/mvp-product-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/mvp-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta
                    name="twitter:description"
                    content="Senior-led MVP and product development for Dallas businesses, with a $25K minimum engagement."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/mvp-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "MVP & Product Development Services",
            "description": "Senior-led MVP and product development for Dallas businesses, from discovery and product design through engineering and launch support. $25K minimum engagement.",
            "url": "https://www.empuls3.com/solutions/mvp-product-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#mvp-header h1"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "MVP & Product Development Services",
              "description": "Plan, design, and build a focused product with senior specialists, clear milestones, and regular user feedback.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://www.empuls3.com",
                "logo": "https://www.empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Product Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "MVP & Product Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rapid MVP Development",
                      "description": "Quick validation of product ideas through lean MVP development, helping startups and enterprises test concepts with real users faster."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Scalable Product Architecture",
                      "description": "Building future-proof product architecture that can scale as your business grows, ensuring long-term success and reduced technical debt."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Iterative Development Process",
                      "description": "Agile, iterative approach to product development that incorporates user feedback and adapts to changing requirements throughout the development lifecycle."
                    }
                  }
                ]
              }
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does a micro agency approach benefit MVP development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You work directly with senior product and engineering specialists. The engagement begins with a defined business case, scope, assumptions, milestones, and a $25K minimum."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What MVP development services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive MVP development services including concept validation, prototype development, core feature implementation, user testing, iterative refinement, and scalable architecture planning—all delivered by senior developers with specialized expertise in lean startup methodologies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to develop an MVP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timing depends on product scope, integrations, compliance requirements, and the validation plan. We provide a milestone-based delivery schedule after discovery."
                  }
                }
              ]
            }
          }
        `}</script>
            </Head>
            <MvpHeader />
            <MvpOverview />
            <MvpProcess />
            <MvpScalability />
            <MvpApproach />
            <MvpFeatures />
            <MvpTestimonials />
            <MvpCTA />
            <MvpFinalCTA />
        </SiteLayout>
    );
}
