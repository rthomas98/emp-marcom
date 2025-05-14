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
  return (
    <SiteLayout>
      <Head title="Partners - Empuls3" />
      <PartnersHeader />
      <PartnersOverview />
      <PartnersLogos />
      <PartnersStrategic />
      <PartnersFeature />
      <PartnersCase />
      <PartnersHighlight />
      <PartnersCallToAction />
    </SiteLayout>
  );
}
