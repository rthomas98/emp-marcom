import { AppDevOpsCTA } from '@/components/services/AppDevOpsCTA';
import { AppDevOpsFeatures } from '@/components/services/AppDevOpsFeatures';
import { AppDevOpsHeader } from '@/components/services/AppDevOpsHeader';
import { AppDevOpsInfrastructure } from '@/components/services/AppDevOpsInfrastructure';
import { AppDevOpsOverview } from '@/components/services/AppDevOpsOverview';
import { AppDevOpsPipeline } from '@/components/services/AppDevOpsPipeline';
import { AppDevOpsProcess } from '@/components/services/AppDevOpsProcess';
import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.devops;

export default function ApplicationDevopsServices() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo config={config} section="services" name="Application Delivery & DevOps" path="/services/application-devops-services" />
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
