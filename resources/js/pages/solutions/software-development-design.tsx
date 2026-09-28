import { ComprehensiveDevelopmentFeatures } from '@/components/solutions/ComprehensiveDevelopmentFeatures';
import { ComprehensiveSoftwareSolutions } from '@/components/solutions/ComprehensiveSoftwareSolutions';
import { CustomSoftwareSolutions } from '@/components/solutions/CustomSoftwareSolutions';
import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { DevelopmentProcessOverview } from '@/components/solutions/DevelopmentProcessOverview';
import { ScalableSoftwareSolutions } from '@/components/solutions/ScalableSoftwareSolutions';
import { SoftwareDevelopmentCTA } from '@/components/solutions/SoftwareDevelopmentCTA';
import { SoftwareDevelopmentHeader } from '@/components/solutions/SoftwareDevelopmentHeader';
import { SoftwareDevelopmentProcess } from '@/components/solutions/SoftwareDevelopmentProcess';
import { SoftwareSolutionsBenefits } from '@/components/solutions/SoftwareSolutionsBenefits';
import { SoftwareTestimonials } from '@/components/solutions/SoftwareTestimonials';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.softwareRescue;
const title = 'Custom Software Development & Modernization Dallas | Empuls3';
const description =
    'Custom software development and modernization for DFW businesses: new applications, plus repair of fragile or undocumented systems, by a senior developer.';

export default function SoftwareDevelopmentDesign() {
    return (
        <SiteLayout title={title}>
            <DetailPageSeo
                config={config}
                section="solutions"
                name="Software Development"
                path="/solutions/software-development-design"
                title={title}
                description={description}
                serviceType="Custom software development and modernization"
            />
            <SoftwareDevelopmentHeader />
            <CustomSoftwareSolutions />
            <SoftwareDevelopmentProcess />
            <ComprehensiveSoftwareSolutions />
            <ScalableSoftwareSolutions />
            <ComprehensiveDevelopmentFeatures />
            <SoftwareSolutionsBenefits />
            <DevelopmentProcessOverview />
            <SoftwareTestimonials />
            <SoftwareDevelopmentCTA />
        </SiteLayout>
    );
}
