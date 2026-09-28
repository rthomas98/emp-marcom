import { PartnersCta } from '@/components/partners/PartnersCta';
import { PartnersHero } from '@/components/partners/PartnersHero';
import { PartnersProcess } from '@/components/partners/PartnersProcess';
import { PartnersRelationships } from '@/components/partners/PartnersRelationships';
import { PartnersResponsibility } from '@/components/partners/PartnersResponsibility';
import { partnersHero } from '@/components/partners/partners-content';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const config = leadPages.partners;

// Same WebPage schema LeadPage produced for this page.
const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: partnersHero.heading,
    description: config.metaDescription,
    areaServed: 'Dallas–Fort Worth, Texas',
};

export default function Partners() {
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

            <PartnersHero eyebrow={config.eyebrow} heading={partnersHero.heading} introduction={partnersHero.introduction} />
            <PartnersRelationships />
            <PartnersProcess />
            <PartnersResponsibility />
            <PartnersCta />
        </SiteLayout>
    );
}
