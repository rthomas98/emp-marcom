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
      <Head title="Front-End Development & UX/UI Design - Empuls3" />
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
