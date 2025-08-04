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
        <title>No Mobile App = Losing 60% of Users. Fixed in 90 Days | Empuls3</title>
        <meta name="description" content="Your competitors' apps have 10K+ downloads. You have nothing. We build iOS/Android apps in 90 days. React Native saves you 40% vs native. Dallas's mobile experts." />
        <meta name="keywords" content="mobile app development Dallas, React Native development, cross-platform apps, iOS Android development, mobile development agency" />
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
