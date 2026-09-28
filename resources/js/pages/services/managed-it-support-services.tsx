import { ManagedITCTA } from '@/components/services/ManagedITCTA';
import { ManagedITHeader } from '@/components/services/ManagedITHeader';
import { ManagedITOverview } from '@/components/services/ManagedITOverview';
import { ManagedITServices } from '@/components/services/ManagedITServices';
import { ManagedITSolutions } from '@/components/services/ManagedITSolutions';
import { ManagedITSupport } from '@/components/services/ManagedITSupport';
import { ManagedITTeams } from '@/components/services/ManagedITTeams';
import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.managedIt;

export default function ManagedItSupportServices() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo config={config} section="services" name="Managed IT Services" path="/services/managed-it-support-services" />
            <ManagedITHeader />
            <ManagedITOverview />
            <ManagedITTeams />
            <ManagedITSupport />
            <ManagedITServices />
            <ManagedITSolutions />
            <ManagedITCTA />
        </SiteLayout>
    );
}
