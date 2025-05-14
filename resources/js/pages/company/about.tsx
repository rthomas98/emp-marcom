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
      <Head title="About Us - Empuls3" />
      <CompanyHeader 
        heading="About Empuls3"
        description="We're a team of passionate technology experts dedicated to helping businesses succeed through innovative solutions and exceptional service."
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
