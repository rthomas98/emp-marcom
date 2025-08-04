import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactFormAdvanced } from '@/components/contact/ContactFormAdvanced';
import { ContactSchedule } from '@/components/contact/ContactSchedule';
import { Head } from '@inertiajs/react';
import { dallasBusinessInfo, generateLocalBusinessSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';

export default function Contact() {
  // Contact information for structured data
  const contactInfo = {
    name: "Empuls3",
    description: "Dallas's premier remote software development and IT consulting agency. Founded in 2009, serving Dallas-Fort Worth businesses remotely with personalized technology solutions.",
    email: dallasBusinessInfo.email,
    telephone: dallasBusinessInfo.telephone,
    address: {
      addressLocality: dallasBusinessInfo.addressLocality,
      addressRegion: dallasBusinessInfo.addressRegion,
      postalCode: dallasBusinessInfo.postalCode,
      addressCountry: dallasBusinessInfo.addressCountry
    },
    openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00"
  };

  // Use comprehensive local business schema
  const contactSchema = generateLocalBusinessSchema();

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('Contact Our Dallas Office')}</title>
        <meta name="description" content={generateLocalDescription('Contact Empuls3, a remote agency serving Dallas. Get direct access to senior specialists for personalized technology solutions. Serving Dallas, Fort Worth, and DFW metroplex remotely.')} />
        <meta name="keywords" content="contact Empuls3 Dallas, Dallas software company contact, Dallas IT consulting contact, DFW technology agency, Dallas tech support, Dallas web development contact" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Contact Empuls3 Dallas - Premier Tech Agency" />
        <meta property="og:description" content="Contact our Dallas office for personalized technology solutions. Serving Dallas-Fort Worth businesses with senior specialists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/contact" />
        <meta property="og:image" content="https://empuls3.com/images/contact-cover.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Our Boutique Agency - Empuls3" />
        <meta name="twitter:description" content="Get in touch with our specialized micro agency for personalized solutions." />
        <meta name="twitter:image" content="https://empuls3.com/images/contact-cover.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/contact" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
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
