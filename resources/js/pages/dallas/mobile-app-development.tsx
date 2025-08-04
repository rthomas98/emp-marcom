import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function DallasMobileAppDevelopment() {
  const serviceInfo = {
    title: "Mobile App Development",
    description: "Your competitors have apps. You don't. You're losing customers every day. We build iOS and Android apps that people actually use - not the garbage that crashes, drains batteries, and gets deleted after one use.",
    features: [
      "Native iOS Development",
      "Native Android Development", 
      "Cross-Platform Apps (React Native)",
      "Progressive Web Apps",
      "App Store Optimization",
      "Push Notifications & Analytics"
    ],
    benefits: [
      "Remote team = faster delivery at 40% less cost",
      "We know what Dallas users actually want",
      "Real device testing (not just simulators)",
      "We handle the App Store nightmare for you",
      "24/7 support when Apple breaks something",
      "50+ apps that Dallas people actually use"
    ],
    cta: "Stop losing mobile customers to competitors. Get a free app strategy session and find out exactly what it'll take to dominate mobile in Dallas."
  };

  // Schema markup
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: 'Mobile App Development Dallas',
    description: 'Expert mobile app development for Dallas businesses. iOS, Android, and cross-platform apps from local specialists.',
    url: 'https://empuls3.com/dallas/mobile-app-development',
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 54
    }
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Dallas', url: 'https://empuls3.com/dallas' },
    { name: 'Mobile App Development', url: 'https://empuls3.com/dallas/mobile-app-development' }
  ]);

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('Mobile App Development')}</title>
        <meta name="description" content={generateLocalDescription('Expert mobile app development for Dallas businesses. Native iOS, Android, and cross-platform apps from local developers.')} />
        <meta name="keywords" content={dallasKeywords.mobile.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Mobile App Development Dallas | Empuls3" />
        <meta property="og:description" content="Custom mobile app development for Dallas businesses. iOS, Android, and cross-platform solutions from local experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/dallas/mobile-app-development" />
        <meta property="og:image" content="https://empuls3.com/images/dallas-mobile-development.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Dallas | Empuls3" />
        <meta name="twitter:description" content="Expert mobile app development for Dallas. iOS, Android, and cross-platform apps from local developers." />
        <meta name="twitter:image" content="https://empuls3.com/images/dallas-mobile-development.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/dallas/mobile-app-development" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* FAQ Schema for Dallas Mobile Development */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does mobile app development cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mobile app development in Dallas ranges from $25,000 for simple apps to $250,000+ for complex enterprise applications. Factors include features, platforms (iOS/Android/both), and design complexity. We provide detailed quotes after understanding your requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Should I build native or cross-platform apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Native apps (separate iOS/Android) offer best performance and platform-specific features. Cross-platform apps (React Native) reduce costs and development time. We help Dallas businesses choose based on budget, timeline, and feature requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a mobile app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simple mobile apps take 3-4 months, while complex apps may require 6-9 months. This includes design, development, testing, and app store submission. Our Dallas team uses agile development for faster delivery with regular updates."
                }
              }
            ]
          }
        `}</script>
      </Head>
      
      <DallasLandingPage service={serviceInfo} />
    </SiteLayout>
  );
}