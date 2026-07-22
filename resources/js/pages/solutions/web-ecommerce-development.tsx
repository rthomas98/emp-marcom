import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function WebEcommerceDevelopment() {
    const pageTitle = 'Web & E-commerce Development Dallas';
    const pageDescription =
        'Website and e-commerce modernization for Dallas businesses. Improve performance, usability, content operations, and maintainability across WordPress, Shopify, and custom platforms.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'Web & E-commerce Development', url: 'https://www.empuls3.com/solutions/web-ecommerce-development' },
    ]);

    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="ecommerce development Dallas, Dallas web developers, fix slow website, WordPress optimization Dallas, Shopify development DFW, website redesign, conversion optimization"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/web-ecommerce-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/web-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta name="twitter:description" content="Website and e-commerce modernization for Dallas businesses, led by senior specialists." />
                <meta name="twitter:image" content="https://www.empuls3.com/images/web-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Web & E-commerce Development Services",
            "description": "Fix websites that kill sales. We optimize slow sites, reduce cart abandonment, and build e-commerce that converts. WordPress, Shopify, custom solutions.",
            "url": "https://www.empuls3.com/solutions/web-ecommerce-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#web-ecommerce-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Web & E-commerce Development Services",
              "description": "Improve website speed, checkout flows, accessibility, content operations, and maintainability with senior specialists.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://www.empuls3.com"
              },
              "serviceType": "Web Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web & E-commerce Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "WordPress Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Platform Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Progressive Web App Development"
                    }
                  }
                ]
              }
            }
          }
        `}</script>
            </Head>
            <WebEcommerceHeader />
            <WordPressSolutions />
            <EcommercePlatforms />
            <ProgressiveWebApps />
            <WebEcommerceFeatures />
            <WebEcommerceTestimonials />
            <WebEcommerceCTA />
        </SiteLayout>
    );
}
