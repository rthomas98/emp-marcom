import SiteLayout from '@/layouts/site-layout';
import { MobileHeader } from '@/components/solutions/MobileHeader';
import { MobileOverview } from '@/components/solutions/MobileOverview';
import { MobilePWA } from '@/components/solutions/MobilePWA';
import { MobileSolutions } from '@/components/solutions/MobileSolutions';
import { MobileProcess } from '@/components/solutions/MobileProcess';
import { MobileExperience } from '@/components/solutions/MobileExperience';
import { MobileFeatures } from '@/components/solutions/MobileFeatures';
import { MobileTestimonials } from '@/components/solutions/MobileTestimonials';
import { MobileCTA } from '@/components/solutions/MobileCTA';
import { MobileFinalCTA } from '@/components/solutions/MobileFinalCTA';
import { Head } from '@inertiajs/react';

export default function MobileCrossPlatformDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Mobile & Cross-Platform Development - Empuls3</title>
        <meta name="description" content="Experience personalized mobile and cross-platform development from our boutique micro agency. Direct collaboration with senior developers for native-like apps without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique mobile development, cross-platform solutions, React Native, PWA, senior developers, personalized development services" />
      </Head>
      <MobileHeader />
      <MobileOverview />
      <MobilePWA />
      <MobileSolutions />
      <MobileProcess />
      <MobileExperience />
      <MobileFeatures />
      <MobileTestimonials />
      <MobileCTA />
      <MobileFinalCTA />
    </SiteLayout>
  );
}
