import { ContactFormAdvanced } from '@/components/contact/ContactFormAdvanced';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfo } from '@/components/contact/ContactInfo';
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
                <title>{generateLocalTitle('Request a Software Review')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Tell Empuls3 what is breaking, disconnected, delayed, or consuming staff time. A senior specialist will respond within one business day.',
                    )}
                />
                <meta
                    name="keywords"
                    content="software review Dallas, software rescue consultation, systems integration consultation, senior engineering support DFW"
                />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="Request a Software Review | Empuls3" />
                <meta
                    property="og:description"
                    content="Talk with a senior specialist about software rescue, systems integration, or ongoing engineering support for your Dallas-Fort Worth business."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/contact" />
                <meta property="og:image" content="https://www.empuls3.com/images/contact-cover.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Request a Software Review | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Discuss software rescue, systems integration, or ongoing senior engineering support for your DFW business."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/contact-cover.jpg" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
            </Head>

            <main id="main-content">
                <ContactHeader />
                <ContactInfo />
                <ContactFormAdvanced />
                <ContactSchedule />
            </main>
        </SiteLayout>
    );
}
