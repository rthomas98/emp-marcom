import SiteLayout from '@/layouts/site-layout';
import { MvpHeader } from '@/components/solutions/MvpHeader';
import { MvpOverview } from '@/components/solutions/MvpOverview';
import { MvpProcess } from '@/components/solutions/MvpProcess';
import { MvpScalability } from '@/components/solutions/MvpScalability';
import { MvpApproach } from '@/components/solutions/MvpApproach';
import { MvpFeatures } from '@/components/solutions/MvpFeatures';
import { MvpTestimonials } from '@/components/solutions/MvpTestimonials';
import { MvpCTA } from '@/components/solutions/MvpCTA';
import { MvpFinalCTA } from '@/components/solutions/MvpFinalCTA';
import { Head } from '@inertiajs/react';

export default function MvpProductDevelopment() {
  return (
    <SiteLayout>
      <Head title="MVP & Product Development - Empuls3" />
      <MvpHeader />
      <MvpOverview />
      <MvpProcess />
      <MvpScalability />
      <MvpApproach />
      <MvpFeatures />
      <MvpTestimonials />
      <MvpCTA />
      <MvpFinalCTA />
    </SiteLayout>
  );
}
