import SiteLayout from '@/layouts/site-layout';
import { IndustriesHeader } from '@/components/industries/IndustriesHeader';
import { IndustriesHealthcare } from '@/components/industries/IndustriesHealthcare';
import { IndustriesFinance } from '@/components/industries/IndustriesFinance';
import { IndustriesEcommerce } from '@/components/industries/IndustriesEcommerce';
import { IndustriesManufacturing } from '@/components/industries/IndustriesManufacturing';
import { IndustriesTechnology } from '@/components/industries/IndustriesTechnology';
import { IndustriesEducation } from '@/components/industries/IndustriesEducation';
import { IndustriesStartups } from '@/components/industries/IndustriesStartups';
import { IndustriesFAQ } from '@/components/industries/IndustriesFAQ';
import { IndustriesCTA } from '@/components/industries/IndustriesCTA';
import { Head } from '@inertiajs/react';

export default function IndustriesOverview() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Industry Solutions - Empuls3</title>
        <meta name="description" content="Experience personalized industry solutions from our boutique micro agency. Direct collaboration with senior specialists for tailored technology services across healthcare, finance, e-commerce, and more." />
        <meta name="keywords" content="micro agency, boutique industry solutions, senior specialists, personalized technology services, healthcare IT, fintech solutions, e-commerce development, manufacturing technology" />
      </Head>
      <IndustriesHeader />
      <IndustriesHealthcare />
      <IndustriesFinance />
      <IndustriesEcommerce />
      <IndustriesManufacturing />
      <IndustriesTechnology />
      <IndustriesEducation />
      <IndustriesStartups />
      <IndustriesFAQ />
      <IndustriesCTA />
    </SiteLayout>
  );
}
