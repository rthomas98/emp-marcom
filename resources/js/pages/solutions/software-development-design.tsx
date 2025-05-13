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
        <title>Software Development & Design - Empuls3</title>
        <meta name="description" content="Transform your vision into software reality with Empuls3's end-to-end software development and design solutions." />
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
