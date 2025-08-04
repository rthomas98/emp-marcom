import SiteLayout from '@/layouts/site-layout';
import { AppDevOpsHeader } from '@/components/services/AppDevOpsHeader';
import { AppDevOpsOverview } from '@/components/services/AppDevOpsOverview';
import { AppDevOpsPipeline } from '@/components/services/AppDevOpsPipeline';
import { AppDevOpsInfrastructure } from '@/components/services/AppDevOpsInfrastructure';
import { AppDevOpsFeatures } from '@/components/services/AppDevOpsFeatures';
import { AppDevOpsProcess } from '@/components/services/AppDevOpsProcess';
import { AppDevOpsCTA } from '@/components/services/AppDevOpsCTA';
import { Head } from '@inertiajs/react';

export default function ApplicationDevopsServices() {
  return (
    <SiteLayout>
      <Head>
        <title>Fix Your Deployments - DevOps That Works | Empuls3 Dallas</title>
        <meta name="description" content="Tired of deployments that break production? We fix your CI/CD pipeline, stop the 3am emergencies, and make deployments boring again. Dallas DevOps experts, remote service, real results." />
        <meta name="keywords" content="Dallas DevOps, fix deployments, CI/CD pipeline repair, cloud infrastructure Dallas, DevOps emergency help, production fixes, deployment automation Dallas" />
      </Head>
      <AppDevOpsHeader />
      <AppDevOpsOverview />
      <AppDevOpsPipeline />
      <AppDevOpsInfrastructure />
      <AppDevOpsFeatures />
      <AppDevOpsProcess />
      <AppDevOpsCTA />
    </SiteLayout>
  );
}
