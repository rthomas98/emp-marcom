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
        <title>Boutique Web & E-commerce Development - Empuls3</title>
        <meta name="description" content="Experience personalized web and e-commerce development from our boutique micro agency. Direct collaboration with senior developers for WordPress, e-commerce, and PWA solutions." />
        <meta name="keywords" content="micro agency, boutique web development, WordPress development, e-commerce solutions, senior developers, personalized web services, progressive web apps" />
        <link rel="canonical" href="https://empuls3.com/solutions/web-ecommerce-development" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Boutique Web & E-commerce Development Services",
            "description": "Experience personalized web and e-commerce development from our boutique micro agency. Direct collaboration with senior developers for WordPress, e-commerce, and PWA solutions.",
            "url": "https://empuls3.com/solutions/web-ecommerce-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#web-ecommerce-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Web & E-commerce Development Services",
              "description": "Personalized web and e-commerce development with direct access to senior developers. Our boutique approach combines custom WordPress solutions, robust e-commerce platforms, and innovative Progressive Web Apps.",
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
