import { ProcessTransparency } from '@/components/common/ProcessTransparency';
import { StatsBar } from '@/components/common/StatsBar';
import { TrustSignals } from '@/components/common/TrustSignals';
import { Features } from '@/components/home/Features';
import { FounderIntro } from '@/components/home/FounderIntro';
import { Header } from '@/components/home/Header';
import { HomeComponentWrapper } from '@/components/home/HomeComponentWrapper';
import { NewProject } from '@/components/home/NewProject';
import { Partners } from '@/components/home/Partners';
import { Services } from '@/components/home/Services';
import { Testimonials } from '@/components/home/Testimonials';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/utils/schema';
import { dallasKeywords } from '@/utils/seo';
import { Head } from '@inertiajs/react';

const pageTitle = 'Websites and Software Built Around Your Business | Empuls3';
const pageDescription =
    'Empuls3 designs and builds websites, web apps, and business systems for Dallas–Fort Worth businesses, and improves, connects, and supports the ones you already use. Work directly with a senior developer.';

const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
        {
            '@type': 'Service',
            serviceType: 'New Website and Web Application Development',
            provider: { '@type': 'Organization', name: 'Empuls3' },
            description: 'We plan, design, and build new websites, web applications, and business systems, and support them after launch.',
            url: 'https://www.empuls3.com/solutions/web-ecommerce-development',
        },
        {
            '@type': 'Service',
            serviceType: 'Software Improvement and Modernization',
            provider: { '@type': 'Organization', name: 'Empuls3' },
            description: 'We fix, stabilize, and modernize websites and software your business already uses.',
            url: 'https://www.empuls3.com/solutions/software-development-design',
        },
        {
            '@type': 'Service',
            serviceType: 'CRM, API, and Workflow Integration',
            provider: { '@type': 'Organization', name: 'Empuls3' },
            description: 'We connect business systems, data, and workflows so information moves between them without re-entry.',
            url: 'https://www.empuls3.com/solutions/backend-api-development',
        },
        {
            '@type': 'Service',
            serviceType: 'Ongoing Senior Developer Support',
            provider: { '@type': 'Organization', name: 'Empuls3' },
            description: 'We provide ongoing support, fixes, and improvements from a senior developer after launch.',
            url: 'https://www.empuls3.com/services/software-engineering-it-consulting',
        },
    ],
};

export default function Home() {
    const localBusinessSchema = { ...generateLocalBusinessSchema(), description: pageDescription };
    const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: 'https://www.empuls3.com' }]);

    return (
        <SiteLayout title={pageTitle}>
            <Head>
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content={dallasKeywords.general
                        .concat(['web app development Dallas', 'Dallas systems integration', 'software modernization Dallas', 'senior developer DFW'])
                        .join(', ')}
                />
                {/* Open Graph Tags for better social sharing */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com" />
                <meta property="og:image" content="/images/empuls3-og-image.jpg" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content="/images/empuls3-og-image.jpg" />
                {/* Local Business Schema */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* Structured Data for Services */}
                <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
            </Head>
            {/* Journey: promise, recognizable needs, approved work, direct access and founder, process, one project CTA. */}
            <HomeComponentWrapper>
                <Header />
                <StatsBar />
                <TrustSignals />
                <NewProject />
                <Features />
                <Partners />
                <Testimonials />
                <Services />
                <FounderIntro />
                <ProcessTransparency />
            </HomeComponentWrapper>
        </SiteLayout>
    );
}
