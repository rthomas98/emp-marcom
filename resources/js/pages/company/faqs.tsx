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
      question: "How much will this actually cost?",
      answer: "Projects start at $25K. Most Dallas businesses spend $50-150K for custom software, $5-25K for websites, and $5-10K/month for managed IT. We're 40% cheaper than Dallas agencies because we work remotely. We'll give you a fixed price after a 30-minute call."
    },
    {
      question: "Why should I trust a remote agency?",
      answer: "Because we've been doing this since 2009 and saved Dallas businesses over $10M. We use Zoom, Slack, and modern tools to stay connected. Plus, no office means lower costs for you. If you need face-to-face, we can meet at your office."
    },
    {
      question: "What if my current developer disappears?",
      answer: "It happens all the time. We've rescued 50+ Dallas projects from vanished developers. We'll review your code, tell you exactly what's salvageable, and get you back on track. Usually takes 2-4 weeks to fix someone else's mess."
    },
    {
      question: "Do you work with my industry?",
      answer: "Probably. We've built software for Dallas healthcare, finance, energy, retail, and manufacturing companies. The tech is usually similar - it's understanding your business that matters. We'll tell you upfront if we're not a good fit."
    },
    {
      question: "How fast can you fix my problem?",
      answer: "Emergency fixes: same day. Small projects: 2-4 weeks. Custom software: 2-4 months. We move fast because we use senior developers who've done this before, not juniors learning on your dime."
    },
    {
      question: "What if it doesn't work out?",
      answer: "We offer a 30-day money-back guarantee on new projects. If we can't fix your problem or you're not happy, you don't pay. Simple as that. We'd rather lose money than have an unhappy client."
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
        <title>Straight Answers About Costs, Timelines & Results | Empuls3 Dallas</title>
        <meta name="description" content="No BS answers to your questions. How much it costs, how long it takes, and why Dallas businesses trust us. Real prices, real timelines, real talk." />
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
