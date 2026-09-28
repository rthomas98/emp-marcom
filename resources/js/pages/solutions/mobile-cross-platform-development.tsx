import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { MobileExperience } from '@/components/solutions/MobileExperience';
import { MobileFeatures } from '@/components/solutions/MobileFeatures';
import { MobileFinalCTA } from '@/components/solutions/MobileFinalCTA';
import { MobileHeader } from '@/components/solutions/MobileHeader';
import { MobileOverview } from '@/components/solutions/MobileOverview';
import { MobileProcess } from '@/components/solutions/MobileProcess';
import { MobilePWA } from '@/components/solutions/MobilePWA';
import { MobileSolutions } from '@/components/solutions/MobileSolutions';
import { MobileTestimonials } from '@/components/solutions/MobileTestimonials';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.mobile;

export default function MobileCrossPlatformDevelopment() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo config={config} section="solutions" name="Mobile App Development" path="/solutions/mobile-cross-platform-development" />
            <MobileHeader />
            <MobileOverview />
            <MobilePWA />
            <MobileSolutions />
            <MobileProcess />
            <MobileExperience />
            <MobileFeatures />
            <MobileTestimonials />
            <MobileFinalCTA />
        </SiteLayout>
    );
}
