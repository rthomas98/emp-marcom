import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactFormAdvanced } from '@/components/contact/ContactFormAdvanced';
import { ContactSchedule } from '@/components/contact/ContactSchedule';
import { Head } from '@inertiajs/react';

export default function Contact() {
  // Contact information for structured data
  const contactInfo = {
    name: "Empuls3",
    description: "A specialized micro agency founded in 2009 by Robert Thomas, providing personalized technology solutions with direct access to senior specialists.",
    email: "hello@empuls3.com",
    telephone: "+1-555-123-4567",
    address: {
      streetAddress: "123 Tech Avenue",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94103",
      addressCountry: "US"
    },
    openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00"
  };

  // JSON-LD structured data for Contact Page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": contactInfo.name,
    "description": contactInfo.description,
    "email": contactInfo.email,
    "telephone": contactInfo.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.streetAddress,
      "addressLocality": contactInfo.address.addressLocality,
      "addressRegion": contactInfo.address.addressRegion,
      "postalCode": contactInfo.address.postalCode,
      "addressCountry": contactInfo.address.addressCountry
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <SiteLayout>
      <Head>
        <title>Contact Our Boutique Agency - Empuls3</title>
        <meta name="description" content="Contact Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Get direct access to senior specialists for personalized technology solutions with faster implementation times." />
        <meta name="keywords" content="contact micro agency, boutique technology firm, personalized solutions, senior specialists, direct collaboration, faster implementation times" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Contact Our Boutique Agency - Empuls3" />
        <meta property="og:description" content="Contact our specialized micro agency for personalized technology solutions with direct access to senior specialists." />
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
