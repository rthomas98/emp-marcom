import SiteLayout from '@/layouts/site-layout';
import { CompanyHeader } from '@/components/company/CompanyHeader';
import { CompanyJourney } from '@/components/company/CompanyJourney';
import { CompanyVision } from '@/components/company/CompanyVision';
import { CompanyValues } from '@/components/company/CompanyValues';
import { CompanyAchievements } from '@/components/company/CompanyAchievements';
import { CompanyTeam } from '@/components/company/CompanyTeam';
import { CompanyContact } from '@/components/company/CompanyContact';
import { Head } from '@inertiajs/react';

export default function About() {
  return (
    <SiteLayout>
      <Head>
        <title>About Our Boutique Agency - Empuls3</title>
        <meta name="description" content="Learn about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Direct collaboration with senior specialists for personalized technology solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique technology firm, Robert Thomas, senior specialists, personalized technology solutions, direct collaboration, founded 2009" />
      </Head>
      <CompanyHeader 
        heading="About Our Boutique Agency"
        description="Founded in 2009 by Robert Thomas, Empuls3 is a specialized micro agency with a team of senior specialists dedicated to providing personalized technology solutions with direct collaboration and exceptional service."
      />
      <CompanyJourney />
      <CompanyVision />
      <CompanyValues />
      <CompanyAchievements />
      <CompanyTeam />
      <CompanyContact />
    </SiteLayout>
  );
}
