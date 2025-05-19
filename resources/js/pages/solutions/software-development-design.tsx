import SiteLayout from '@/layouts/site-layout';
import { SoftwareDevelopmentHeader } from '@/components/solutions/SoftwareDevelopmentHeader';
import { CustomSoftwareSolutions } from '@/components/solutions/CustomSoftwareSolutions';
import { SoftwareDevelopmentProcess } from '@/components/solutions/SoftwareDevelopmentProcess';
import { ComprehensiveSoftwareSolutions } from '@/components/solutions/ComprehensiveSoftwareSolutions';
import { ScalableSoftwareSolutions } from '@/components/solutions/ScalableSoftwareSolutions';
import { ComprehensiveDevelopmentFeatures } from '@/components/solutions/ComprehensiveDevelopmentFeatures';
import { SoftwareSolutionsBenefits } from '@/components/solutions/SoftwareSolutionsBenefits';
import { SoftwareTestimonials } from '@/components/solutions/SoftwareTestimonials';
import { DevelopmentProcessOverview } from '@/components/solutions/DevelopmentProcessOverview';
import { SoftwareDevelopmentCTA } from '@/components/solutions/SoftwareDevelopmentCTA';
import { Head } from '@inertiajs/react';

export default function SoftwareDevelopmentDesign() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Software Development & Design - Empuls3</title>
        <meta name="description" content="Experience the micro agency advantage with Empuls3's boutique software development services. Direct access to senior developers, personalized attention, and enterprise-quality results." />
        <meta name="keywords" content="micro agency, boutique software development, senior developers, custom software solutions, personalized development, software design" />
      </Head>
      <SoftwareDevelopmentHeader />
      <CustomSoftwareSolutions />
      <SoftwareDevelopmentProcess />
      <ComprehensiveSoftwareSolutions />
      <ScalableSoftwareSolutions />
      <ComprehensiveDevelopmentFeatures />
      <SoftwareSolutionsBenefits />
      <DevelopmentProcessOverview />
      <SoftwareTestimonials />
      <SoftwareDevelopmentCTA />
    </SiteLayout>
  );
}
