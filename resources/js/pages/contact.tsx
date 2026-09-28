import { ContactFormAdvanced } from '@/components/contact/ContactFormAdvanced';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactSchedule } from '@/components/contact/ContactSchedule';
import SiteLayout from '@/layouts/site-layout';
import { generateLocalBusinessSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function Contact() {
    // Use comprehensive local business schema
    const contactSchema = generateLocalBusinessSchema();

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('Talk About Your App Idea or Project')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Tell Empuls3 about your app idea, a new website or web app, or a system you want to improve. Product Blueprint planning starts at $2,500. We normally reply within one business day by email.',
                    )}
                />
                <meta
                    name="keywords"
                    content="app development for founders, MVP planning Dallas, web app development Dallas, new website project DFW, software review Dallas, software rescue consultation, systems integration consultation, senior engineering support DFW"
                />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="Let’s Talk About Your Project | Empuls3" />
                <meta
                    property="og:description"
                    content="Talk with an experienced developer about your app idea, a new website or web app, software rescue, systems integration, or ongoing support."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/contact" />
                <meta property="og:image" content="https://www.empuls3.com/images/contact-cover.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Let’s Talk About Your Project | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Discuss your app idea, a new website or web app, software rescue, systems integration, or ongoing support with an experienced developer."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/contact-cover.jpg" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
            </Head>

            <main id="main-content">
                <ContactHeader />
                <ContactFormAdvanced />
                <ContactSchedule />
            </main>
        </SiteLayout>
    );
}
