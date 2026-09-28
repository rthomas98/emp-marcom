import { AboutCta } from '@/components/about/AboutCta';
import { AboutFounder } from '@/components/about/AboutFounder';
import { AboutHeader } from '@/components/about/AboutHeader';
import { AboutPrinciples } from '@/components/about/AboutPrinciples';
import { AboutProcess } from '@/components/about/AboutProcess';
import { AboutStory } from '@/components/about/AboutStory';
import { aboutHero } from '@/components/about/about-content';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

const config = leadPages.about;

// Same WebPage schema LeadPage produced for this page.
const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: aboutHero.heading,
    description: config.metaDescription,
    areaServed: 'Dallas–Fort Worth, Texas',
};

export default function About() {
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

            <AboutHeader eyebrow={config.eyebrow} heading={aboutHero.heading} introduction={aboutHero.introduction} />
            <AboutFounder />
            <AboutStory />
            <AboutPrinciples />
            <AboutProcess />
            <AboutCta />
        </SiteLayout>
    );
}
