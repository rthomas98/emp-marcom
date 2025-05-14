import SiteLayout from '@/layouts/site-layout';
import { AppDevOpsHeader } from '@/components/services/AppDevOpsHeader';
import { AppDevOpsOverview } from '@/components/services/AppDevOpsOverview';
import { AppDevOpsPipeline } from '@/components/services/AppDevOpsPipeline';
import { AppDevOpsInfrastructure } from '@/components/services/AppDevOpsInfrastructure';
import { AppDevOpsFeatures } from '@/components/services/AppDevOpsFeatures';
import { AppDevOpsProcess } from '@/components/services/AppDevOpsProcess';
import { AppDevOpsTestimonial } from '@/components/services/AppDevOpsTestimonial';
import { AppDevOpsCTA } from '@/components/services/AppDevOpsCTA';
import { Head } from '@inertiajs/react';

export default function ApplicationDevopsServices() {
  return (
    <SiteLayout>
      <Head title="Application & DevOps Services - Empuls3" />
      <AppDevOpsHeader />
      <AppDevOpsOverview />
      <AppDevOpsPipeline />
      <AppDevOpsInfrastructure />
      <AppDevOpsFeatures />
      <AppDevOpsProcess />
      <AppDevOpsTestimonial />
      <AppDevOpsCTA />
    </SiteLayout>
  );
}
