import SiteLayout from '@/layouts/site-layout';
import { SoftwareDevelopmentHeader } from '@/components/solutions/SoftwareDevelopmentHeader';
import { CustomSoftwareSolutions } from '@/components/solutions/CustomSoftwareSolutions';
import { SoftwareDevelopmentProcess } from '@/components/solutions/SoftwareDevelopmentProcess';
import { ComprehensiveSoftwareSolutions } from '@/components/solutions/ComprehensiveSoftwareSolutions';
import { ScalableSoftwareSolutions } from '@/components/solutions/ScalableSoftwareSolutions';
import { ComprehensiveDevelopmentFeatures } from '@/components/solutions/ComprehensiveDevelopmentFeatures';
import { SoftwareSolutionsBenefits } from '@/components/solutions/SoftwareSolutionsBenefits';
import { SoftwareTestimonials } from '@/components/solutions/SoftwareTestimonials';
import { DevelopmentProcessOverview } from '@/components/solutions/DevelopmentProcessOverview';
import { SoftwareDevelopmentCTA } from '@/components/solutions/SoftwareDevelopmentCTA';
import { Head } from '@inertiajs/react';

export default function SoftwareDevelopmentDesign() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Software Development & Design - Empuls3</title>
        <meta name="description" content="Experience the micro agency advantage with Empuls3's boutique software development services. Direct access to senior developers, personalized attention, and enterprise-quality results." />
        <meta name="keywords" content="micro agency, boutique software development, senior developers, custom software solutions, personalized development, software design" />
        <link rel="canonical" href="https://empuls3.com/solutions/software-development-design" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Boutique Software Development & Design Services",
            "description": "Experience the micro agency advantage with Empuls3's boutique software development services. Direct access to senior developers, personalized attention, and enterprise-quality results.",
            "url": "https://empuls3.com/solutions/software-development-design",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#software-development-heading", "#custom-software-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Boutique Software Development Services",
              "description": "Personalized software development with direct access to senior developers. We transform your vision into reality through collaborative partnerships.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://empuls3.com"
              },
              "serviceType": "Software Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Software Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Scalable Software Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Software Development Process"
                    }
                  }
                ]
              }
            }
          }
        `}</script>
      </Head>
      <SoftwareDevelopmentHeader />
      <CustomSoftwareSolutions />
      <SoftwareDevelopmentProcess />
      <ComprehensiveSoftwareSolutions />
      <ScalableSoftwareSolutions />
      <ComprehensiveDevelopmentFeatures />
      <SoftwareSolutionsBenefits />
      <DevelopmentProcessOverview />
      <SoftwareTestimonials />
      <SoftwareDevelopmentCTA />
    </SiteLayout>
  );
}
