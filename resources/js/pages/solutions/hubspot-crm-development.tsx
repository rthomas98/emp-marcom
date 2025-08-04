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

export default function HubspotCrmDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Your Sales Team Hates Your CRM. HubSpot Fixed in 30 Days | Empuls3</title>
        <meta name="description" content="CRM is a mess? Sales team using spreadsheets? Losing deals? We fix HubSpot in 30 days. Automate follow-ups, track deals, close more. Dallas CRM experts." />
        <meta name="keywords" content="HubSpot development Dallas, CRM implementation, sales automation, HubSpot integration, CRM optimization, marketing automation" />
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
