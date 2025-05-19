import SiteLayout from '@/layouts/site-layout';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { Head } from '@inertiajs/react';

export default function FrontendDevelopmentUxUiDesign() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Front-End Development & UX/UI Design - Empuls3</title>
        <meta name="description" content="Experience personalized front-end development and UX/UI design from our boutique micro agency. Direct collaboration with senior designers for engaging interfaces without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique UX/UI design, front-end development, senior designers, personalized design services, responsive interfaces" />
      </Head>
      <FrontendHeader />
      <FrontendSolutions />
      <FrontendFeatures />
      <FrontendFrameworks />
      <FrontendProcess />
      <FrontendTestimonials />
      <FrontendCTA />
    </SiteLayout>
  );
}
