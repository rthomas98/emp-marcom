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
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function SoftwareDevelopmentDesign() {
  const pageTitle = 'Custom Software Development Dallas';
  const pageDescription = 'Fix broken software costing Dallas businesses $50K+ yearly. Senior developers modernize legacy systems in 90 days or less. Serving DFW metroplex with custom software solutions.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'Software Development', url: 'https://empuls3.com/solutions/software-development-design' }
  ]);
  
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="custom software development Dallas, Dallas software engineers, fix broken software, enterprise software Dallas, software modernization Dallas, legacy system replacement DFW" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/software-development-design" />
        <meta property="og:image" content="https://empuls3.com/images/software-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Fix broken software costing Dallas businesses $50K+ yearly. 90-day transformations by senior developers." />
        <meta name="twitter:image" content="https://empuls3.com/images/software-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/software-development-design" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
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
