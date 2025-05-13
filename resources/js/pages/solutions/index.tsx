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
        <meta name="description" content="Explore Empuls3's comprehensive suite of software development solutions and services tailored to meet your unique business needs and drive digital transformation." />
        <meta name="keywords" content="software development, web development, custom applications, API integration, mobile apps, IT consulting, digital solutions" />
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
