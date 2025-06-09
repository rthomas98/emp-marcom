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
        <meta name="keywords" content={`${caseStudy.service_type}, ${caseStudy.industry}, case study, success story, ${caseStudy.client_name}`} />
        <meta property="og:title" content={caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`} />
        <meta property="og:description" content={caseStudy.meta_description || `Learn how we helped ${caseStudy.client_name} overcome challenges with our ${caseStudy.service_type} solutions.`} />
        {caseStudy.featured_image && (
          <meta property="og:image" content={`/storage/${caseStudy.featured_image}`} />
        )}
        <meta property="og:type" content="article" />
      </Head>
      
      {/* Hero Section - Will be replaced with Relume component */}
      <section 
        className="bg-gradient-to-r from-secondary to-primary py-20 text-white" 
        aria-labelledby="case-study-title"
      >
        <div className="container mx-auto px-4">
          <header className="max-w-4xl">
            <h1 
              id="case-study-title" 
              className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl"
            >
              {caseStudy.title}
            </h1>
            <p className="text-xl mb-8">
              <span className="sr-only">Client: </span>
              {caseStudy.client_name}
            </p>
            {caseStudy.completion_date && (
              <p className="text-sm opacity-80">
                <span className="sr-only">Completion date: </span>
                {caseStudy.completion_date}
              </p>
            )}
          </header>
        </div>
      </section>
      
      {/* Content Placeholder - Will be replaced with Relume components */}
      <section 
        className="py-16"
        aria-label="Case study details"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Content will be added here</p>
          
          {/* This is a placeholder structure for when the actual content is added */}
          <div className="sr-only">
            <article>
              <section aria-labelledby="challenge-heading">
                <h2 id="challenge-heading">Challenge</h2>
                <div>{caseStudy.challenge}</div>
              </section>
              
              <section aria-labelledby="solution-heading">
                <h2 id="solution-heading">Solution</h2>
                <div>{caseStudy.solution}</div>
              </section>
              
              <section aria-labelledby="results-heading">
                <h2 id="results-heading">Results</h2>
                <div>{caseStudy.results}</div>
              </section>
              
              {caseStudy.testimonial && (
                <section aria-labelledby="testimonial-heading">
                  <h2 id="testimonial-heading">Client Testimonial</h2>
                  <blockquote>
                    <p>{caseStudy.testimonial}</p>
                    {caseStudy.testimonial_author && (
                      <footer>
                        <cite>
                          {caseStudy.testimonial_author}
                          {caseStudy.testimonial_position && (
                            <>, {caseStudy.testimonial_position}</>
                          )}
                        </cite>
                      </footer>
                    )}
                  </blockquote>
                </section>
              )}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

CaseStudyDetail.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Study Detail | Empuls3" />;

