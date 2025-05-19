import SiteLayout from '@/layouts/site-layout';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { Head } from '@inertiajs/react';

export default function WebEcommerceDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Web & E-commerce Development - Empuls3</title>
        <meta name="description" content="Experience personalized web and e-commerce development from our boutique micro agency. Direct collaboration with senior developers for WordPress, e-commerce, and PWA solutions." />
        <meta name="keywords" content="micro agency, boutique web development, WordPress development, e-commerce solutions, senior developers, personalized web services, progressive web apps" />
      </Head>
      <WebEcommerceHeader />
      <WordPressSolutions />
      <EcommercePlatforms />
      <ProgressiveWebApps />
      <WebEcommerceFeatures />
      <WebEcommerceTestimonials />
      <WebEcommerceCTA />
    </SiteLayout>
  );
}
