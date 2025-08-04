import SiteLayout from '@/layouts/site-layout';
import { MvpHeader } from '@/components/solutions/MvpHeader';
import { MvpOverview } from '@/components/solutions/MvpOverview';
import { MvpProcess } from '@/components/solutions/MvpProcess';
import { MvpScalability } from '@/components/solutions/MvpScalability';
import { MvpApproach } from '@/components/solutions/MvpApproach';
import { MvpFeatures } from '@/components/solutions/MvpFeatures';
import { MvpTestimonials } from '@/components/solutions/MvpTestimonials';
import { MvpCTA } from '@/components/solutions/MvpCTA';
import { MvpFinalCTA } from '@/components/solutions/MvpFinalCTA';
import { Head } from '@inertiajs/react';

export default function MvpProductDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Your Idea Is Dying in PowerPoint. We Build MVPs in 60 Days | Empuls3</title>
        <meta name="description" content="Stop wasting time on decks. Dallas startups launch MVPs in 60 days with us. Real product, real users, real feedback. $25K gets you to market. Senior developers only." />
        <meta name="keywords" content="MVP development Dallas, startup development, rapid prototyping, product development, lean startup, minimum viable product" />
        <link rel="canonical" href="https://empuls3.com/solutions/mvp-product-development" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "MVP & Product Development Services",
            "description": "Launch MVPs in 60 days, not 6 months. We build real products that get user feedback fast. $25K minimum, senior developers only, no BS.",
            "url": "https://empuls3.com/solutions/mvp-product-development",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#mvp-header h1"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "MVP & Product Development Services",
              "description": "Stop talking, start building. We launch MVPs in 60 days so you can get real user feedback. Senior developers, fixed price, guaranteed delivery.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://empuls3.com",
                "logo": "https://empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Product Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "MVP & Product Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rapid MVP Development",
                      "description": "Quick validation of product ideas through lean MVP development, helping startups and enterprises test concepts with real users faster."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Scalable Product Architecture",
                      "description": "Building future-proof product architecture that can scale as your business grows, ensuring long-term success and reduced technical debt."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Iterative Development Process",
                      "description": "Agile, iterative approach to product development that incorporates user feedback and adapts to changing requirements throughout the development lifecycle."
                    }
                  }
                ]
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewBody": "Spent 6 months on pitch decks. These guys built our MVP in 6 weeks. Got 500 users in first month. Raised $2M seed round. Should've called them sooner."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Michael Chen"
                  },
                  "reviewBody": "Competitors were eating our lunch. Built and launched MVP in 45 days. Now we're ahead. Fixed price, no surprises. Worth every penny."
                }
              ]
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does a micro agency approach benefit MVP development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Big agencies take 6 months and $200K. We do it in 60 days for $25-50K. You work directly with senior developers, not account managers. Remote = 40% cheaper. Launch fast or die slow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What MVP development services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive MVP development services including concept validation, prototype development, core feature implementation, user testing, iterative refinement, and scalable architecture planning—all delivered by senior developers with specialized expertise in lean startup methodologies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to develop an MVP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple MVPs: 30-45 days. Complex MVPs: 60-90 days. We've launched 50+ MVPs for Dallas startups. Most get first users within 2 weeks of launch. Stop planning, start shipping."
                  }
                }
              ]
            }
          }
        `}</script>
      </Head>
      <MvpHeader />
      <MvpOverview />
      <MvpProcess />
      <MvpScalability />
      <MvpApproach />
      <MvpFeatures />
      <MvpTestimonials />
      <MvpCTA />
      <MvpFinalCTA />
    </SiteLayout>
  );
}
