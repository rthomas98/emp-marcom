import { FAQsCategories } from '@/components/company/FAQsCategories';
import { FAQsContact } from '@/components/company/FAQsContact';
import { FAQsHeader } from '@/components/company/FAQsHeader';
import { faqPageSchema } from '@/components/company/faqs-content';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { Head } from '@inertiajs/react';

const title = 'Software & Engineering FAQs | Empuls3';
const description =
    'Answers for founders planning a first app, plus new website and app projects, inherited systems, project size, security, ownership, remote delivery, and ongoing engineering support.';

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.empuls3.com' },
    { name: 'FAQs', url: 'https://www.empuls3.com/company/faqs' },
]);

export default function Faqs() {
    return (
        <SiteLayout title={title}>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/company/faqs" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>

            <FAQsHeader />
            <FAQsCategories />
            <FAQsContact />
        </SiteLayout>
    );
}
