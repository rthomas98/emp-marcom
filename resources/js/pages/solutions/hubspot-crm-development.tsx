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
        <title>Boutique HubSpot & CRM Development - Empuls3</title>
        <meta name="description" content="Experience personalized HubSpot and CRM development from our boutique micro agency. Direct collaboration with senior specialists for streamlined solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique HubSpot development, CRM solutions, senior specialists, personalized CRM services, HubSpot integration, automation" />
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
