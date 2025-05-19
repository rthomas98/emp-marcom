import SiteLayout from '@/layouts/site-layout';
import { SolutionsHeader } from '@/components/solutions/SolutionsHeader';
import { SolutionsOverview } from '@/components/solutions/SolutionsOverview';
import { WebEcommerce } from '@/components/solutions/WebEcommerce';
import { BackendAPI } from '@/components/solutions/BackendAPI';
import { FrontendDevelopment } from '@/components/solutions/FrontendDevelopment';
import { ProductDevelopment } from '@/components/solutions/ProductDevelopment';
import { MobileCrossPlatform } from '@/components/solutions/MobileCrossPlatform';
import { HubspotSolutions } from '@/components/solutions/HubspotSolutions';
import { CallToAction } from '@/components/solutions/CallToAction';
import { Head } from '@inertiajs/react';

export default function SolutionsPage() {
  return (
    <SiteLayout title="Solutions & Services - Empuls3">
      <Head>
        <meta name="description" content="Empuls3 is a specialized micro agency delivering personalized software development solutions with the direct attention of senior developers that larger firms can't match." />
        <meta name="keywords" content="micro agency, boutique development firm, personalized software development, senior developers, custom applications, web development, mobile apps, API integration, direct client collaboration" />
      </Head>
      <SolutionsHeader />
      <SolutionsOverview />
      <WebEcommerce />
      <BackendAPI />
      <FrontendDevelopment />
      <ProductDevelopment />
      <MobileCrossPlatform />
      <HubspotSolutions />
      <CallToAction />
    </SiteLayout>
  );
}
