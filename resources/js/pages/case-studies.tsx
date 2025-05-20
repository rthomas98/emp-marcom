import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import CaseStudiesHeader from '@/components/case-studies/CaseStudiesHeader';
import CaseStudiesGallery from '@/components/case-studies/CaseStudiesGallery';
import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service_type: string;
  featured_image: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {

  return (
    <>
      <Head title="Case Studies | Empuls3" />
      
      {/* Animated Header */}
      <CaseStudiesHeader />
      
      {/* Gallery Component */}
      <CaseStudiesGallery caseStudies={caseStudies} />
      
      {/* CTA Component */}
      <CaseStudiesCta />
    </>
  );
}

CaseStudies.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Studies | Empuls3" />;
