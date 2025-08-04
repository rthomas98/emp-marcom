import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { CompanyHeader } from '@/components/company/CompanyHeader';
import { CompanyJourney } from '@/components/company/CompanyJourney';
import { CompanyVision } from '@/components/company/CompanyVision';
import { CompanyValues } from '@/components/company/CompanyValues';
import { CompanyAchievements } from '@/components/company/CompanyAchievements';
import { CompanyTeam } from '@/components/company/CompanyTeam';
import { CompanyContact } from '@/components/company/CompanyContact';
import { Head } from '@inertiajs/react';
import { generateLocalBusinessSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';

export default function About() {
  // Company information for structured data
  const companyInfo = {
    name: "Empuls3",
    foundingYear: "2009",
    founder: "Robert Thomas",
    description: "Dallas's premier remote software development and IT consulting agency. A specialized team of senior specialists serving Dallas-Fort Worth businesses remotely with personalized technology solutions.",
    url: "https://empuls3.com",
    logo: "https://empuls3.com/images/logo.png",
    address: {
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75201",
      addressCountry: "US"
    }
  };

  // Use comprehensive local business schema
  const organizationSchema = generateLocalBusinessSchema();

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('About Our Dallas Agency')}</title>
        <meta name="description" content={generateLocalDescription('Learn about Empuls3, Dallas\'s premier tech agency founded in 2009. Direct collaboration with senior specialists serving Dallas-Fort Worth businesses.')} />
        <meta name="keywords" content="micro agency, boutique technology firm, Robert Thomas, senior specialists, personalized technology solutions, direct collaboration, founded 2009" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="About Empuls3 Dallas - Premier Tech Agency Since 2009" />
        <meta property="og:description" content="Learn about Empuls3, Dallas's leading software development and IT consulting agency. Serving DFW businesses with senior specialists since 2009." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/company/about" />
        <meta property="og:image" content="https://empuls3.com/images/about-cover.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Our Boutique Agency - Empuls3" />
        <meta name="twitter:description" content="Learn about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas." />
        <meta name="twitter:image" content="https://empuls3.com/images/about-cover.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/company/about" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>
      
      <main id="main-content">
        <CompanyHeader 
          heading="About Our Remote Agency Serving Dallas"
          description="Founded in 2009 by Robert Thomas, Empuls3 is Dallas's premier remote software development and IT consulting agency. Our distributed team of senior specialists is dedicated to serving Dallas-Fort Worth businesses remotely with personalized technology solutions and exceptional service."
        />
        <CompanyJourney />
        <CompanyVision />
        <CompanyValues />
        <CompanyAchievements />
        <CompanyTeam />
        <CompanyContact />
      </main>
    </SiteLayout>
  );
}
