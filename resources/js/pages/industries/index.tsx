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
      <Head title="Industries Overview - Empuls3" />
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
