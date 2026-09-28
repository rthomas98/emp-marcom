import { SituationsApproach } from '@/components/industries/SituationsApproach';
import { SituationsContext } from '@/components/industries/SituationsContext';
import { SituationsCta } from '@/components/industries/SituationsCta';
import { SituationsHero } from '@/components/industries/SituationsHero';
import { SituationsNavigator } from '@/components/industries/SituationsNavigator';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const config = leadPages.industries;

// Same WebPage schema LeadPage produced for this page.
const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.heading,
    description: config.metaDescription,
    areaServed: 'Dallas–Fort Worth, Texas',
};

export default function IndustriesPage() {
    return (
        <SiteLayout title={config.title}>
            <Head>
                <meta name="description" content={config.metaDescription} />
                <meta property="og:title" content={config.title} />
                <meta property="og:description" content={config.metaDescription} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={config.title} />
                <meta name="twitter:description" content={config.metaDescription} />
                <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
            </Head>

            <SituationsHero heading={config.heading} />
            <SituationsNavigator />
            <SituationsContext />
            <SituationsApproach />
            <SituationsCta />
        </SiteLayout>
    );
}
