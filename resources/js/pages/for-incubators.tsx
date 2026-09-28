import { FounderCta } from '@/components/founders/FounderCta';
import { FounderIntro } from '@/components/home/FounderIntro';
import { IncubatorHero } from '@/components/incubators/IncubatorHero';
import { IncubatorOffers } from '@/components/incubators/IncubatorOffers';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { Head } from '@inertiajs/react';

const pageUrl = 'https://www.empuls3.com/for-incubators';
const title = 'Technical Support for Incubators and Founder Programs | Empuls3';
const description =
    'Workshops, scheduled technical office hours, and separately scoped development support for founders in incubators, accelerators, and founder programs.';

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Technical support for incubators and founder programs',
    description,
    url: pageUrl,
    provider: { '@type': 'Organization', name: 'Empuls3', url: 'https://www.empuls3.com' },
};

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empuls3.com' },
    { name: 'For Incubators', url: pageUrl },
]);

export default function ForIncubators() {
    return (
        <SiteLayout title={title}>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>

            <IncubatorHero />
            <IncubatorOffers />
            <FounderIntro />
            <FounderCta
                heading="Tell us about your program"
                body="Share what kind of program you run, the stage of your founders, and the support you have in mind. We will reply by email to talk through what is possible."
                intent="consultation"
                primaryLabel="Discuss Your Program"
                secondary={{ label: 'For Founders', href: '/for-founders' }}
            />
        </SiteLayout>
    );
}
