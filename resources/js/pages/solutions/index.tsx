import SiteLayout from '@/layouts/site-layout';
import { SolutionsHeader } from '@/components/solutions/SolutionsHeader';
import { SolutionsOverview } from '@/components/solutions/SolutionsOverview';
import { WebEcommerce } from '@/components/solutions/WebEcommerce';
import { BackendAPI } from '@/components/solutions/BackendAPI';
import { FrontendDevelopment } from '@/components/solutions/FrontendDevelopment';
import { ProductDevelopment } from '@/components/solutions/ProductDevelopment';
import { MobileCrossPlatform } from '@/components/solutions/MobileCrossPlatform';
import { HubspotSolutions } from '@/components/solutions/HubspotSolutions';
import { CallToAction } from '@/components/solutions/CallToAction';
import { Head } from '@inertiajs/react';

export default function SolutionsPage() {
  return (
    <SiteLayout title="Solutions & Services - Empuls3">
      <Head>
        <meta name="description" content="Empuls3 is a specialized micro agency delivering personalized software development solutions with the direct attention of senior developers that larger firms can't match." />
        <meta name="keywords" content="micro agency, boutique development firm, personalized software development, senior developers, custom applications, web development, mobile apps, API integration, direct client collaboration" />
        {/* Open Graph Tags for better social sharing */}
        <meta property="og:title" content="Solutions & Services - Empuls3" />
        <meta property="og:description" content="Specialized software development solutions with direct senior developer attention that larger firms can't match." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions" />
        <meta property="og:image" content="/images/empuls3-solutions-og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions & Services - Empuls3" />
        <meta name="twitter:description" content="Specialized software development solutions with direct senior developer attention that larger firms can't match." />
        <meta name="twitter:image" content="/images/empuls3-solutions-og-image.jpg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/solutions" />
        {/* Structured Data for Services */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Boutique Development Solutions | Empuls3",
            "description": "Discover Empuls3's specialized development solutions with personalized attention. Our senior team delivers exceptional quality and faster turnaround times.",
            "url": "https://empuls3.com/solutions",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#solutions-heading", "#solutions-overview-heading", "#web-ecommerce-heading", "#mobile-overview-heading"]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://empuls3.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Solutions",
                  "item": "https://empuls3.com/solutions"
                }
              ]
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Web & E-commerce Development",
                  "description": "Custom WordPress solutions, e-commerce platforms, and Progressive Web Apps that deliver seamless online experiences.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Empuls3"
                  },
                  "url": "https://empuls3.com/solutions/web-ecommerce-development"
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Mobile Development",
                  "description": "Cross-platform mobile applications with native-like experiences on both iOS and Android.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Empuls3"
                  },
                  "url": "https://empuls3.com/solutions/mobile-development"
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "API & System Integration",
                  "description": "Seamless connection of systems and applications, delivering enterprise-quality integration without the overhead of larger firms.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Empuls3"
                  },
                  "url": "https://empuls3.com/solutions/backend-api-development"
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "Frontend Development & UX/UI Design",
                  "description": "Beautiful, intuitive interfaces that users love, built with modern frontend technologies and best practices.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Empuls3"
                  },
                  "url": "https://empuls3.com/solutions/frontend-development-ux-ui-design"
                }
              ]
            }
          }
        `}</script>
      </Head>
      <a 
        href="#solutions-overview" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      <SolutionsHeader />
      <SolutionsOverview />
      <WebEcommerce />
      <BackendAPI />
      <FrontendDevelopment />
      <ProductDevelopment />
      <MobileCrossPlatform />
      <HubspotSolutions />
      <CallToAction />
    </SiteLayout>
  );
}
