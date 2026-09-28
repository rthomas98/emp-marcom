import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.frontend;

export default function FrontendDevelopmentUxUiDesign() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo
                config={config}
                section="solutions"
                name="Frontend Development & UX/UI Design"
                path="/solutions/frontend-development-uxui-design"
            />
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
