import SiteLayout from '@/layouts/site-layout';
import { ServicesHeader } from '@/components/services/ServicesHeader';
import { ServicesOverview } from '@/components/services/ServicesOverview';
import { ServicesDevOps } from '@/components/services/ServicesDevOps';
import { ServicesConsulting } from '@/components/services/ServicesConsulting';
import { ServicesSupport } from '@/components/services/ServicesSupport';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { Head } from '@inertiajs/react';

export default function ServicesIndex() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Professional Services - Empuls3</title>
        <meta name="description" content="Experience personalized professional services from our boutique micro agency. Direct collaboration with senior specialists for implementation, optimization, and support without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique professional services, senior specialists, personalized support, implementation services, optimization, direct collaboration" />
      </Head>
      <ServicesHeader />
      <ServicesOverview />
      <ServicesDevOps />
      <ServicesConsulting />
      <ServicesSupport />
      <ServicesCTA />
    </SiteLayout>
  );
}
