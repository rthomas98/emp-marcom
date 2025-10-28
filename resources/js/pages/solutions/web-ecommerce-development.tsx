import SiteLayout from '@/layouts/site-layout';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { Head } from '@inertiajs/react';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function WebEcommerceDevelopment() {
  const pageTitle = 'Web & E-commerce Development Dallas';
  const pageDescription = 'Fix slow websites and cart abandonment costing Dallas businesses $10K+ monthly. We optimize WordPress, Shopify, and custom sites in 30 days or less. Serving DFW metroplex.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'Web & E-commerce Development', url: 'https://empuls3.com/solutions/web-ecommerce-development' }
  ]);
  
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="ecommerce development Dallas, Dallas web developers, fix slow website, WordPress optimization Dallas, Shopify development DFW, website redesign, conversion optimization" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/web-ecommerce-development" />
        <meta property="og:image" content="https://empuls3.com/images/web-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Fix slow websites costing Dallas businesses $10K+ monthly. 30-day transformations by expert developers." />
        <meta name="twitter:image" content="https://empuls3.com/images/web-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/web-ecommerce-development" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Web & E-commerce Development Services",
            "description": "Fix websites that kill sales. We optimize slow sites, reduce cart abandonment, and build e-commerce that converts. WordPress, Shopify, custom solutions.",
            "url": "https://empuls3.com/solutions/web-ecommerce-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#web-ecommerce-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Web & E-commerce Development Services",
              "description": "Fix broken websites losing you $10K+ monthly. We optimize speed, fix checkout flows, and build sites that convert. 30-day transformations guaranteed.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://empuls3.com"
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
