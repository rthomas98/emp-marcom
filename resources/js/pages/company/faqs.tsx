import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { FAQsHeader } from '@/components/company/FAQsHeader';
import { FAQsCategories } from '@/components/company/FAQsCategories';
import { FAQsContact } from '@/components/company/FAQsContact';
import { Head } from '@inertiajs/react';

export default function Faqs() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "What is a micro agency?",
      answer: "A micro agency is a specialized boutique firm that provides personalized solutions with direct access to senior specialists, offering faster implementation times and more dedicated attention than larger agencies."
    },
    {
      question: "When was Empuls3 founded?",
      answer: "Empuls3 was founded in 2009 by Robert Thomas as a specialized micro agency dedicated to empowering businesses with personalized technology solutions."
    },
    {
      question: "What makes Empuls3 different from larger agencies?",
      answer: "Unlike larger firms where projects are handed off to junior staff, our boutique team provides personalized solutions with direct access to senior specialists, helping clients thrive with faster implementation times."
    }
  ];

  // JSON-LD structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <SiteLayout>
      <Head>
        <title>Boutique Agency FAQs - Empuls3</title>
        <meta name="description" content="Frequently asked questions about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Learn about our personalized technology solutions and direct access to senior specialists." />
        <meta name="keywords" content="micro agency FAQs, boutique technology firm, personalized solutions, senior specialists, direct collaboration, faster implementation times" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Boutique Agency FAQs - Empuls3" />
        <meta property="og:description" content="Frequently asked questions about Empuls3, a specialized micro agency. Learn about our personalized technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/company/faqs" />
        <meta property="og:image" content="https://empuls3.com/images/faqs-cover.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boutique Agency FAQs - Empuls3" />
        <meta name="twitter:description" content="Frequently asked questions about our specialized micro agency." />
        <meta name="twitter:image" content="https://empuls3.com/images/faqs-cover.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/company/faqs" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Head>
      
      <main id="main-content">
        <FAQsHeader />
        <FAQsCategories />
        <FAQsContact />
      </main>
    </SiteLayout>
  );
}
