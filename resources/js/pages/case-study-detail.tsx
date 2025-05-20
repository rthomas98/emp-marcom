import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

interface CaseStudyDetailProps {
  caseStudy: {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    challenge: string;
    solution: string;
    results: string;
    testimonial?: string;
    testimonial_author?: string;
    testimonial_position?: string;
    featured_image: string;
    logo?: string;
    website_url?: string;
    completion_date?: string;
    meta_title?: string;
    meta_description?: string;
  };
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <>
      <Head>
        <title>{caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`}</title>
        {caseStudy.meta_description && (
          <meta name="description" content={caseStudy.meta_description} />
        )}
      </Head>
      
      {/* Hero Section - Will be replaced with Relume component */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">{caseStudy.title}</h1>
            <p className="text-xl mb-8">{caseStudy.client_name}</p>
          </div>
        </div>
      </section>
      
      {/* Content Placeholder - Will be replaced with Relume components */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Content will be added here</p>
        </div>
      </section>
    </>
  );
}

CaseStudyDetail.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Study Detail | Empuls3" />;
