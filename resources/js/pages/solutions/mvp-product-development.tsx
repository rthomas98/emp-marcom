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
      <Head>
        <title>Boutique MVP & Product Development - Empuls3</title>
        <meta name="description" content="Experience personalized MVP and product development from our boutique micro agency. Direct collaboration with senior developers for faster validation and scalable solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique MVP development, product development, senior developers, personalized development services, startup solutions, rapid prototyping" />
      </Head>
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
