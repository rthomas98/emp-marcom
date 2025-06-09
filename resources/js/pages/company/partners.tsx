import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { PartnersHeader } from '@/components/company/PartnersHeader';
import { PartnersOverview } from '@/components/company/PartnersOverview';
import { PartnersStrategic } from '@/components/company/PartnersStrategic';
import { PartnersLogos } from '@/components/company/PartnersLogos';
import { PartnersFeature } from '@/components/company/PartnersFeature';
import { PartnersCase } from '@/components/company/PartnersCase';
import { PartnersHighlight } from '@/components/company/PartnersHighlight';
import { PartnersCallToAction } from '@/components/company/PartnersCallToAction';
import { Head } from '@inertiajs/react';

export default function Partners() {
  // Partners information for structured data
  const partnershipInfo = {
    name: "Empuls3 Strategic Partnerships",
    description: "Empuls3's strategic partnerships as a specialized micro agency, collaborating with industry-leading partners to deliver personalized technology solutions.",
    url: "https://empuls3.com/company/partners",
    partners: [
      {
        name: "Technology Partner",
        description: "Leading technology solutions provider"
      },
      {
        name: "Strategic Partner",
        description: "Strategic business solutions partner"
      }
    ]
  };

  // JSON-LD structured data for Partners
  const partnershipsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Empuls3",
    "url": "https://empuls3.com",
    "subOrganization": partnershipInfo.partners.map(partner => ({
      "@type": "Organization",
      "name": partner.name,
      "description": partner.description
    })),
    "description": partnershipInfo.description
  };

  return (
    <SiteLayout>
      <Head>
        <title>Boutique Agency Partnerships - Empuls3</title>
        <meta name="description" content="Learn about Empuls3's strategic partnerships as a specialized micro agency. Direct collaboration with senior specialists and industry-leading partners to deliver personalized technology solutions." />
        <meta name="keywords" content="micro agency partnerships, boutique technology firm, strategic partners, senior specialists, personalized technology solutions, direct collaboration" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Boutique Agency Partnerships - Empuls3" />
        <meta property="og:description" content="Learn about Empuls3's strategic partnerships as a specialized micro agency, collaborating with industry-leading partners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/company/partners" />
        <meta property="og:image" content="https://empuls3.com/images/partners-cover.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boutique Agency Partnerships - Empuls3" />
        <meta name="twitter:description" content="Learn about Empuls3's strategic partnerships and collaborations." />
        <meta name="twitter:image" content="https://empuls3.com/images/partners-cover.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/company/partners" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(partnershipsSchema)}
        </script>
      </Head>
      
      <main id="main-content">
        <PartnersHeader />
        <PartnersOverview />
        <PartnersLogos />
        <PartnersStrategic />
        <PartnersFeature />
        <PartnersCase />
        <PartnersHighlight />
        <PartnersCallToAction />
      </main>
    </SiteLayout>
  );
}
