import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function FrontendDevelopmentUxUiDesign() {
    const pageTitle = 'Frontend Development & UX/UI Design Dallas';
    const pageDescription =
        'Frontend development and UX/UI design for Dallas businesses. Improve confusing workflows, mobile usability, accessibility, and maintainability with a senior-led team.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'Frontend Development & UX/UI Design', url: 'https://www.empuls3.com/solutions/frontend-development-uxui-design' },
    ]);

    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="UI UX design Dallas, Dallas frontend developers, interface redesign DFW, React development, mobile responsive design Dallas, user experience design"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/frontend-development-uxui-design" />
                <meta property="og:image" content="https://www.empuls3.com/images/frontend-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta
                    name="twitter:description"
                    content="Fix confusing interfaces costing Dallas businesses users. 30-day transformations by senior designers."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/frontend-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Front-End Development & UX/UI Design Services",
            "description": "Fix interfaces that drive users away. We redesign confusing UIs, make sites mobile-friendly, and build frontends that convert. 30-day transformations.",
            "url": "https://www.empuls3.com/solutions/frontend-development-uxui-design",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#frontend-header h1"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Front-End Development & UX/UI Design Services",
              "description": "Fix broken UIs losing you customers. We redesign confusing interfaces, optimize mobile experience, and build frontends that actually convert visitors.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://www.empuls3.com",
                "logo": "https://www.empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Front-End Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Front-End & UX/UI Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UX/UI Design",
                      "description": "User-centric design solutions that enhance usability and create engaging digital experiences across all devices."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Web Development",
                      "description": "Creating seamless, responsive interfaces that provide optimal viewing experiences across all devices and screen sizes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interactive Interface Development",
                      "description": "Building interactive web applications with modern frameworks that engage users and enhance functionality."
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
                  "name": "How does a micro agency approach benefit front-end development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You work directly with senior design and engineering specialists. Scope, milestones, usability goals, and acceptance criteria are defined before implementation begins."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What UX/UI design services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We improve navigation, task flows, responsive behavior, accessibility, design systems, and frontend maintainability. Timing depends on the scope and condition of the current product."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which front-end frameworks do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our senior developers are proficient in modern front-end frameworks including React, Angular, Vue.js, Next.js, and Svelte. We select the most appropriate technology based on your specific project requirements and performance goals."
                  }
                }
              ]
            }
          }
        `}</script>
            </Head>
            <FrontendHeader />
            <FrontendSolutions />
            <FrontendFeatures />
            <FrontendFrameworks />
            <FrontendProcess />
            <FrontendTestimonials />
            <FrontendCTA />
        </SiteLayout>
    );
}
