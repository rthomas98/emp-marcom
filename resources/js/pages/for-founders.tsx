import { FounderBuild } from '@/components/founders/FounderBuild';
import { FounderCta } from '@/components/founders/FounderCta';
import { FounderFaq, founderFaqs } from '@/components/founders/FounderFaq';
import { FounderHero } from '@/components/founders/FounderHero';
import { FounderPath } from '@/components/founders/FounderPath';
import { FounderProof } from '@/components/founders/FounderProof';
import { FounderStages } from '@/components/founders/FounderStages';
import { IncubatorTeaser } from '@/components/founders/IncubatorTeaser';
import { BLUEPRINT_PRICE } from '@/components/founders/founder-content';
import { FounderIntro } from '@/components/home/FounderIntro';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { Head } from '@inertiajs/react';

const pageUrl = 'https://www.empuls3.com/for-founders';
const title = 'App Development for Nontechnical Founders | Empuls3';
const description =
    'Plan and build your first web or mobile app with an experienced developer. Product Blueprint planning starts at $2,500; the first release is scoped and estimated separately.';

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Product Blueprint and first-release development for founders',
    serviceType: 'Web and mobile app planning and development',
    description,
    url: pageUrl,
    areaServed: 'Dallas–Fort Worth, Texas',
    provider: { '@type': 'Organization', name: 'Empuls3', url: 'https://www.empuls3.com' },
    offers: {
        '@type': 'Offer',
        name: 'Product Blueprint',
        description: 'Paid planning engagement for a first release. Building the first release is estimated separately.',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 2500, priceCurrency: 'USD' },
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: founderFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empuls3.com' },
    { name: 'For Founders', url: pageUrl },
]);

export default function ForFounders() {
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
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>

            <FounderHero />
            <FounderStages />
            <FounderPath />
            <FounderBuild />
            <FounderProof />
            <FounderIntro />
            <FounderFaq />
            <IncubatorTeaser />
            <FounderCta
                heading="Tell us about your idea"
                body="A few sentences is enough: who it is for, the problem it solves, and where you are today. We normally reply within one business day by email."
                intent="product-planning"
                secondary={{ label: 'See Our Work', href: '/case-studies' }}
                note={`Product Blueprint planning starts at ${BLUEPRINT_PRICE}. Building the first release is estimated separately.`}
            />
        </SiteLayout>
    );
}
