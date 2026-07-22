import { MobileCTA } from '@/components/solutions/MobileCTA';
import { MobileExperience } from '@/components/solutions/MobileExperience';
import { MobileFeatures } from '@/components/solutions/MobileFeatures';
import { MobileFinalCTA } from '@/components/solutions/MobileFinalCTA';
import { MobileHeader } from '@/components/solutions/MobileHeader';
import { MobileOverview } from '@/components/solutions/MobileOverview';
import { MobileProcess } from '@/components/solutions/MobileProcess';
import { MobilePWA } from '@/components/solutions/MobilePWA';
import { MobileSolutions } from '@/components/solutions/MobileSolutions';
import { MobileTestimonials } from '@/components/solutions/MobileTestimonials';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function MobileCrossPlatformDevelopment() {
    const pageTitle = 'Mobile App Development Dallas';
    const pageDescription =
        'Cross-platform mobile product development for Dallas businesses. Plan, design, build, test, and launch maintainable iOS and Android experiences with senior specialists.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'Mobile App Development', url: 'https://www.empuls3.com/solutions/mobile-cross-platform-development' },
    ]);

    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="mobile app development Dallas, Dallas mobile developers, React Native development DFW, cross-platform apps, iOS Android development Dallas"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/mobile-cross-platform-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/mobile-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta name="twitter:description" content="Senior-led cross-platform mobile product development for Dallas businesses." />
                <meta name="twitter:image" content="https://www.empuls3.com/images/mobile-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>
            <MobileHeader />
            <MobileOverview />
            <MobilePWA />
            <MobileSolutions />
            <MobileProcess />
            <MobileExperience />
            <MobileFeatures />
            <MobileTestimonials />
            <MobileCTA />
            <MobileFinalCTA />
        </SiteLayout>
    );
}
