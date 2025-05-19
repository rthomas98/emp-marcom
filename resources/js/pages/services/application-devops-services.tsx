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
      <Head>
        <title>Boutique Application & DevOps Services - Empuls3</title>
        <meta name="description" content="Experience personalized application and DevOps services from our boutique micro agency. Direct collaboration with senior specialists for streamlined CI/CD pipelines without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique DevOps, application services, senior DevOps specialists, personalized CI/CD, cloud infrastructure, containerization" />
      </Head>
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
