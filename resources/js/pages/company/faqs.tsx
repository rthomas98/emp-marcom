import { FAQsCategories } from '@/components/company/FAQsCategories';
import { FAQsContact } from '@/components/company/FAQsContact';
import { FAQsHeader } from '@/components/company/FAQsHeader';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';

export default function Faqs() {
    // FAQ data for structured data
    const faqData = [
        {
            question: 'How much will this actually cost?',
            answer: 'New software and modernization projects start at $25,000. Focused assessments and ongoing support are scoped separately. After a discovery conversation, we provide a written scope with assumptions, pricing, and delivery expectations.',
        },
        {
            question: 'Why should I trust a remote agency?',
            answer: 'Empuls3 has operated since 2009. We use video calls, shared project tools, written decisions, and regular demonstrations so stakeholders can see progress and speak directly with the people doing the work.',
        },
        {
            question: 'What if my current developer disappears?',
            answer: 'We begin with a technical assessment of the code, infrastructure, documentation, access, and business risks. You receive a practical recovery plan that explains what can be retained, what needs attention, and what should happen first.',
        },
        {
            question: 'Do you work with my industry?',
            answer: "Probably. We've built software for Dallas healthcare, finance, energy, retail, and manufacturing companies. The tech is usually similar - it's understanding your business that matters. We'll tell you upfront if we're not a good fit.",
        },
        {
            question: 'How fast can you fix my problem?',
            answer: 'Timing depends on the condition of the system, access, scope, and operational risk. We define milestones and response expectations in writing before work begins, and we identify urgent stabilization work during discovery.',
        },
        {
            question: "What if it doesn't work out?",
            answer: 'We use a written scope, milestones, acceptance criteria, and regular demonstrations to surface concerns early. If priorities change, we document the impact and agree on the next step before changing the work.',
        },
    ];

    // JSON-LD structured data for FAQs
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <SiteLayout>
            <Head>
                <title>Software Consulting FAQs for Dallas Businesses</title>
                <meta
                    name="description"
                    content="Clear answers about Empuls3 software modernization, integrations, engineering support, pricing, delivery, and remote collaboration."
                />
                <meta
                    name="keywords"
                    content="micro agency FAQs, boutique technology firm, personalized solutions, senior specialists, direct collaboration, faster implementation times"
                />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="Boutique Agency FAQs - Empuls3" />
                <meta
                    property="og:description"
                    content="Frequently asked questions about Empuls3, a specialized micro agency. Learn about our personalized technology solutions."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/company/faqs" />
                <meta property="og:image" content="https://www.empuls3.com/images/faqs-cover.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Boutique Agency FAQs - Empuls3" />
                <meta name="twitter:description" content="Frequently asked questions about our specialized micro agency." />
                <meta name="twitter:image" content="https://www.empuls3.com/images/faqs-cover.jpg" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            <main id="main-content">
                <FAQsHeader />
                <FAQsCategories />
                <FAQsContact />
            </main>
        </SiteLayout>
    );
}
