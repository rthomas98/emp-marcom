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
      <Head>
        <title>Boutique Agency Partnerships - Empuls3</title>
        <meta name="description" content="Learn about Empuls3's strategic partnerships as a specialized micro agency. Direct collaboration with senior specialists and industry-leading partners to deliver personalized technology solutions." />
        <meta name="keywords" content="micro agency partnerships, boutique technology firm, strategic partners, senior specialists, personalized technology solutions, direct collaboration" />
      </Head>
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
