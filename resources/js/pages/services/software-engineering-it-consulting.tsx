import SiteLayout from '@/layouts/site-layout';
import { EngineeringHeader } from '@/components/services/EngineeringHeader';
import { EngineeringStrategies } from '@/components/services/EngineeringStrategies';
import { EngineeringArchitecture } from '@/components/services/EngineeringArchitecture';
import { EngineeringSolutions } from '@/components/services/EngineeringSolutions';
import { EngineeringExpertise } from '@/components/services/EngineeringExpertise';
import { EngineeringCloud } from '@/components/services/EngineeringCloud';
import { EngineeringSecurity } from '@/components/services/EngineeringSecurity';
import { EngineeringPerformance } from '@/components/services/EngineeringPerformance';
import { EngineeringCTA } from '@/components/services/EngineeringCTA';
import { Head } from '@inertiajs/react';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, generateServiceMetaTags, dallasKeywords } from '@/utils/seo';

export default function SoftwareEngineeringItConsulting() {
  const serviceSchema = generateServiceSchema({
    name: 'Software Engineering & IT Consulting Dallas',
    description: 'Expert software engineering and IT consulting services for Dallas businesses. Strategic technology solutions from senior specialists.',
    url: 'https://empuls3.com/services/software-engineering-it-consulting',
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 47
    }
  });
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Services', url: 'https://empuls3.com/services' },
    { name: 'Software Engineering & IT Consulting', url: 'https://empuls3.com/services/software-engineering-it-consulting' }
  ]);
  
  const metaTags = generateServiceMetaTags(
    'itConsulting',
    'Software Engineering & IT Consulting',
    'Expert software engineering and IT consulting services for Dallas businesses. Transform your technology with local expertise.'
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
        <meta property="og:url" content="https://empuls3.com/services/software-engineering-it-consulting" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta name="twitter:description" content={metaTags.twitterDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/services/software-engineering-it-consulting" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <EngineeringHeader />
      <EngineeringStrategies />
      <EngineeringArchitecture />
      <EngineeringSolutions />
      <EngineeringExpertise />
      <EngineeringCloud />
      <EngineeringSecurity />
      <EngineeringPerformance />
      <EngineeringCTA />
    </SiteLayout>
  );
}
