import SiteLayout from '@/layouts/site-layout';
import { Header9 } from '@/components/solutions/HubspotHeader';
import { HubspotOverview } from '@/components/solutions/HubspotOverview';
import { HubspotProcess } from '@/components/solutions/HubspotProcess';
import { HubspotFeatures } from '@/components/solutions/HubspotFeatures';
import { HubspotServices } from '@/components/solutions/HubspotServices';
import { HubspotReporting } from '@/components/solutions/HubspotReporting';
import { HubspotTraining } from '@/components/solutions/HubspotTraining';
import { HubspotTestimonial } from '@/components/solutions/HubspotTestimonial';
import { HubspotCTA } from '@/components/solutions/HubspotCTA';
import { Head } from '@inertiajs/react';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function HubspotCrmDevelopment() {
  const pageTitle = 'HubSpot CRM Development Dallas';
  const pageDescription = 'Fix HubSpot CRM in 30 days. Dallas businesses automate sales, track deals, close more. Expert HubSpot implementation serving DFW metroplex.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'HubSpot CRM Development', url: 'https://empuls3.com/solutions/hubspot-crm-development' }
  ]);
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="HubSpot development Dallas, Dallas CRM experts, CRM implementation DFW, sales automation, HubSpot integration Dallas, marketing automation Dallas" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/hubspot-crm-development" />
        <meta property="og:image" content="https://empuls3.com/images/hubspot-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Fix HubSpot CRM in 30 days. Dallas businesses automate sales and close more deals." />
        <meta name="twitter:image" content="https://empuls3.com/images/hubspot-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/hubspot-crm-development" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <Header9 />
      <HubspotOverview />
      <HubspotProcess />
      <HubspotFeatures />
      <HubspotServices />
      <HubspotReporting />
      <HubspotTraining />
      <HubspotTestimonial />
      <HubspotCTA />
    </SiteLayout>
  );
}
