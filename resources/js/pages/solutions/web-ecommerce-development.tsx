import SiteLayout from '@/layouts/site-layout';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { Head } from '@inertiajs/react';

export default function WebEcommerceDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Your Website Is Killing Sales. We Fix It in 30 Days | Empuls3</title>
        <meta name="description" content="Slow site? Cart abandonment? Can't update content? Dallas businesses lose $10K+ monthly from bad websites. We fix WordPress, Shopify, and custom sites in 30 days or less." />
        <meta name="keywords" content="ecommerce development Dallas, fix slow website, WordPress optimization, Shopify development, website redesign, conversion optimization" />
        <link rel="canonical" href="https://empuls3.com/solutions/web-ecommerce-development" />
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
