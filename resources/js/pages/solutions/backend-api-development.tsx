import SiteLayout from '@/layouts/site-layout';
import { BackendAPIHeader } from '@/components/solutions/BackendAPIHeader';
import { BackendSolutions } from '@/components/solutions/BackendSolutions';
import { DatabaseManagement } from '@/components/solutions/DatabaseManagement';
import { BackendFeatures } from '@/components/solutions/BackendFeatures';
import { BackendTestimonials } from '@/components/solutions/BackendTestimonials';
import { BackendCTA } from '@/components/solutions/BackendCTA';
import { Head } from '@inertiajs/react';

export default function BackendApiDevelopment() {
  return (
    <SiteLayout>
      <Head title="Back-End & API Development - Empuls3" />
      <BackendAPIHeader />
      <BackendSolutions />
      <DatabaseManagement />
      <BackendFeatures />
      <BackendTestimonials />
      <BackendCTA />
    </SiteLayout>
  );
}
