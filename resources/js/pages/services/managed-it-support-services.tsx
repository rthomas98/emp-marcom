import SiteLayout from '@/layouts/site-layout';
import { ManagedITHeader } from '@/components/services/ManagedITHeader';
import { ManagedITOverview } from '@/components/services/ManagedITOverview';
import { ManagedITTeams } from '@/components/services/ManagedITTeams';
import { ManagedITSupport } from '@/components/services/ManagedITSupport';
import { ManagedITServices } from '@/components/services/ManagedITServices';
import { ManagedITSolutions } from '@/components/services/ManagedITSolutions';
import { ManagedITCTA } from '@/components/services/ManagedITCTA';
import { Head } from '@inertiajs/react';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, generateServiceMetaTags } from '@/utils/seo';

export default function ManagedItSupportServices() {
  const serviceSchema = generateServiceSchema({
    name: 'Managed IT Services Dallas',
    description: '24/7 managed IT support and services for Dallas businesses. Expert technical support from senior specialists.',
    url: 'https://empuls3.com/services/managed-it-support-services',
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 52
    }
  });
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Services', url: 'https://empuls3.com/services' },
    { name: 'Managed IT Services', url: 'https://empuls3.com/services/managed-it-support-services' }
  ]);
  
  const metaTags = generateServiceMetaTags(
    'managedIT',
    'Managed IT & Support Services',
    '24/7 managed IT services for Dallas businesses. Expert support, proactive monitoring, and strategic IT management from local specialists.'
  );
  return (
    <SiteLayout>
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/services/managed-it-support-services" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta name="twitter:description" content={metaTags.twitterDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/services/managed-it-support-services" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <ManagedITHeader />
      <ManagedITOverview />
      <ManagedITTeams />
      <ManagedITSupport />
      <ManagedITServices />
      <ManagedITSolutions />
      <ManagedITCTA />
    </SiteLayout>
  );
}
