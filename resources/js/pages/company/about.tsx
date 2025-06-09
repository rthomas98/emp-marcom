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

export default function About() {
  // Company information for structured data
  const companyInfo = {
    name: "Empuls3",
    foundingYear: "2009",
    founder: "Robert Thomas",
    description: "A specialized micro agency with a team of senior specialists dedicated to providing personalized technology solutions with direct collaboration and exceptional service.",
    url: "https://empuls3.com",
    logo: "https://empuls3.com/images/logo.png",
    address: {
      streetAddress: "123 Tech Lane",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77001",
      addressCountry: "US"
    }
  };

  // JSON-LD structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "url": companyInfo.url,
    "logo": companyInfo.logo,
    "foundingDate": companyInfo.foundingYear,
    "founder": {
      "@type": "Person",
      "name": companyInfo.founder
    },
    "description": companyInfo.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address.streetAddress,
      "addressLocality": companyInfo.address.addressLocality,
      "addressRegion": companyInfo.address.addressRegion,
      "postalCode": companyInfo.address.postalCode,
      "addressCountry": companyInfo.address.addressCountry
    }
  };

  return (
    <SiteLayout>
      <Head>
        <title>About Our Boutique Agency - Empuls3</title>
        <meta name="description" content="Learn about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Direct collaboration with senior specialists for personalized technology solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique technology firm, Robert Thomas, senior specialists, personalized technology solutions, direct collaboration, founded 2009" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="About Our Boutique Agency - Empuls3" />
        <meta property="og:description" content="Learn about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Direct collaboration with senior specialists for personalized technology solutions." />
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
          heading="About Our Boutique Agency"
          description="Founded in 2009 by Robert Thomas, Empuls3 is a specialized micro agency with a team of senior specialists dedicated to providing personalized technology solutions with direct collaboration and exceptional service."
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
