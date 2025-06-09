import SiteLayout from '@/layouts/site-layout';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { Head } from '@inertiajs/react';

export default function FrontendDevelopmentUxUiDesign() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Front-End Development & UX/UI Design - Empuls3</title>
        <meta name="description" content="Experience personalized front-end development and UX/UI design from our boutique micro agency. Direct collaboration with senior designers for engaging interfaces without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique UX/UI design, front-end development, senior designers, personalized design services, responsive interfaces" />
        <link rel="canonical" href="https://empuls3.com/solutions/frontend-development-uxui-design" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Boutique Front-End Development & UX/UI Design Services",
            "description": "Experience personalized front-end development and UX/UI design from our boutique micro agency. Direct collaboration with senior designers for engaging interfaces without the overhead of larger firms.",
            "url": "https://empuls3.com/solutions/frontend-development-uxui-design",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#frontend-header h1"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Front-End Development & UX/UI Design Services",
              "description": "Personalized front-end development and UX/UI design with direct access to senior designers. Our boutique approach creates engaging interfaces and exceptional user experiences without the overhead of larger firms.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://empuls3.com",
                "logo": "https://empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Front-End Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Front-End & UX/UI Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UX/UI Design",
                      "description": "User-centric design solutions that enhance usability and create engaging digital experiences across all devices."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Web Development",
                      "description": "Creating seamless, responsive interfaces that provide optimal viewing experiences across all devices and screen sizes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interactive Interface Development",
                      "description": "Building interactive web applications with modern frameworks that engage users and enhance functionality."
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
                    "name": "David Wilson"
                  },
                  "reviewBody": "Working with a boutique agency made all the difference. We had direct access to senior designers who created an interface that perfectly aligned with our brand and user needs."
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
                    "name": "Emily Rodriguez"
                  },
                  "reviewBody": "Their responsive design expertise transformed our user experience. The personalized attention from senior designers was invaluable to our project's success."
                }
              ]
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does a micro agency approach benefit front-end development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our micro agency approach provides direct access to senior designers throughout your entire project, ensuring high-quality front-end solutions tailored to your specific needs without the overhead costs and communication barriers of larger agencies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What UX/UI design services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive UX/UI design services including user research, wireframing, prototyping, visual design, usability testing, and responsive interface development—all delivered by senior designers with specialized expertise."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which front-end frameworks do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our senior developers are proficient in modern front-end frameworks including React, Angular, Vue.js, Next.js, and Svelte. We select the most appropriate technology based on your specific project requirements and performance goals."
                  }
                }
              ]
            }
          }
        `}</script>
      </Head>
      <FrontendHeader />
      <FrontendSolutions />
      <FrontendFeatures />
      <FrontendFrameworks />
      <FrontendProcess />
      <FrontendTestimonials />
      <FrontendCTA />
    </SiteLayout>
  );
}
