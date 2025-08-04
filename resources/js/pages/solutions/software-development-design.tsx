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
        <title>Your Software Is Costing You $50K+/Year in Lost Revenue | Empuls3</title>
        <meta name="description" content="Bad software costs Dallas businesses $50K+ yearly. Slow, buggy, doesn't work on mobile. We fix it in 90 days or less. Senior developers only. 40% cheaper than local agencies." />
        <meta name="keywords" content="custom software development Dallas, fix broken software, software redesign, enterprise software solutions, software modernization, legacy system replacement" />
        <link rel="canonical" href="https://empuls3.com/solutions/software-development-design" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Custom Software Development & Redesign Services",
            "description": "Fix broken software that's costing you money. Senior developers who modernize legacy systems, integrate disconnected tools, and build software that actually works.",
            "url": "https://empuls3.com/solutions/software-development-design",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#software-development-heading", "#custom-software-heading"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Custom Software Development Services",
              "description": "Fix software that's losing you $50K+ yearly. We modernize legacy systems, integrate tools, and build solutions that actually work. 90-day transformations.",
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
