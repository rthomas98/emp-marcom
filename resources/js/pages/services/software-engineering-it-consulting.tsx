import { EngineeringArchitecture } from '@/components/services/EngineeringArchitecture';
import { EngineeringCloud } from '@/components/services/EngineeringCloud';
import { EngineeringCTA } from '@/components/services/EngineeringCTA';
import { EngineeringExpertise } from '@/components/services/EngineeringExpertise';
import { EngineeringHeader } from '@/components/services/EngineeringHeader';
import { EngineeringPerformance } from '@/components/services/EngineeringPerformance';
import { EngineeringSecurity } from '@/components/services/EngineeringSecurity';
import { EngineeringSolutions } from '@/components/services/EngineeringSolutions';
import { EngineeringStrategies } from '@/components/services/EngineeringStrategies';
import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.engineeringSupport;

export default function SoftwareEngineeringItConsulting() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo
                config={config}
                section="services"
                name="Software Engineering & IT Consulting"
                path="/services/software-engineering-it-consulting"
            />
            <EngineeringHeader />
            <EngineeringStrategies />
            <EngineeringArchitecture />
            <EngineeringSolutions />
            <EngineeringExpertise />
            <EngineeringCloud />
            <EngineeringSecurity />
            <EngineeringPerformance />
            <EngineeringCTA />
        </SiteLayout>
    );
}
