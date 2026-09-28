import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { MvpApproach } from '@/components/solutions/MvpApproach';
import { MvpFeatures } from '@/components/solutions/MvpFeatures';
import { MvpFinalCTA } from '@/components/solutions/MvpFinalCTA';
import { MvpHeader } from '@/components/solutions/MvpHeader';
import { MvpOverview } from '@/components/solutions/MvpOverview';
import { MvpProcess } from '@/components/solutions/MvpProcess';
import { MvpScalability } from '@/components/solutions/MvpScalability';
import { MvpTestimonials } from '@/components/solutions/MvpTestimonials';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.mvp;

export default function MvpProductDevelopment() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo config={config} section="solutions" name="MVP Product Development" path="/solutions/mvp-product-development" />
            <MvpHeader />
            <MvpOverview />
            <MvpProcess />
            <MvpScalability />
            <MvpApproach />
            <MvpFeatures />
            <MvpTestimonials />
            <MvpFinalCTA />
        </SiteLayout>
    );
}
