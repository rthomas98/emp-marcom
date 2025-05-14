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
      <Head title="Services Overview - Empuls3" />
      <ServicesHeader />
      <ServicesOverview />
      <ServicesDevOps />
      <ServicesConsulting />
      <ServicesSupport />
      <ServicesCTA />
    </SiteLayout>
  );
}
