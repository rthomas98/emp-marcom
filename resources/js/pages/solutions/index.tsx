import { BackendAPI } from '@/components/solutions/BackendAPI';
import { CallToAction } from '@/components/solutions/CallToAction';
import { FrontendDevelopment } from '@/components/solutions/FrontendDevelopment';
import { HubspotSolutions } from '@/components/solutions/HubspotSolutions';
import { MobileCrossPlatform } from '@/components/solutions/MobileCrossPlatform';
import { ProductDevelopment } from '@/components/solutions/ProductDevelopment';
import { SolutionsHeader } from '@/components/solutions/SolutionsHeader';
import { SolutionsOverview } from '@/components/solutions/SolutionsOverview';
import { WebEcommerce } from '@/components/solutions/WebEcommerce';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { Head } from '@inertiajs/react';

const SITE_URL = 'https://www.empuls3.com';
const PAGE_URL = `${SITE_URL}/solutions`;

const title = 'Software Development Solutions for DFW Businesses | Empuls3';
const description =
    'Custom software, websites, online stores, APIs, mobile apps, and HubSpot work for DFW businesses. New builds or fixes to the systems you already use.';

const detailPages = [
    { name: 'Custom Software Development', path: '/solutions/software-development-design' },
    { name: 'Web & E-commerce Development', path: '/solutions/web-ecommerce-development' },
    { name: 'Backend & API Development', path: '/solutions/backend-api-development' },
    { name: 'Frontend Development & UX/UI Design', path: '/solutions/frontend-development-uxui-design' },
    { name: 'MVP & Product Development', path: '/solutions/mvp-product-development' },
    { name: 'Mobile & Cross-Platform Development', path: '/solutions/mobile-cross-platform-development' },
    { name: 'HubSpot & CRM Development', path: '/solutions/hubspot-crm-development' },
];

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Solutions', url: PAGE_URL },
]);

const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Empuls3 Software Development Solutions',
    itemListElement: detailPages.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: page.name,
        url: `${SITE_URL}${page.path}`,
    })),
};

export default function SolutionsPage() {
    return (
        <SiteLayout title={title}>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
            </Head>

            <SolutionsHeader />
            <SolutionsOverview />
            <WebEcommerce />
            <BackendAPI />
            <FrontendDevelopment />
            <ProductDevelopment />
            <MobileCrossPlatform />
            <HubspotSolutions />
            <CallToAction />
        </SiteLayout>
    );
}
