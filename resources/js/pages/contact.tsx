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
                <title>{generateLocalTitle('Contact Empuls3 in Dallas')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Contact Empuls3, a remote agency serving Dallas. Get direct access to senior specialists for personalized technology solutions. Serving Dallas, Fort Worth, and DFW metroplex remotely.',
                    )}
                />
                <meta
                    name="keywords"
                    content="contact Empuls3 Dallas, Dallas software company contact, Dallas IT consulting contact, DFW technology agency, Dallas tech support, Dallas web development contact"
                />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="Contact Empuls3 in Dallas" />
                <meta
                    property="og:description"
                    content="Talk with a senior specialist about software rescue, systems integration, or ongoing engineering support for your Dallas-Fort Worth business."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/contact" />
                <meta property="og:image" content="https://www.empuls3.com/images/contact-cover.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Our Boutique Agency - Empuls3" />
                <meta name="twitter:description" content="Get in touch with our specialized micro agency for personalized solutions." />
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
