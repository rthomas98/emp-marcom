import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { PageProps } from '@/types';
import { Calendar, Globe, Quote } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service_type: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial: string | null;
  testimonial_author: string | null;
  testimonial_position: string | null;
  featured_image: string;
  logo: string | null;
  website_url: string | null;
  completion_date: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

interface ShowProps extends PageProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

export default function Show({ caseStudy, relatedCaseStudies }: ShowProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <>
      <Head>
        <title>{caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`}</title>
        {caseStudy.meta_description && (
          <meta name="description" content={caseStudy.meta_description} />
        )}
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <a 
                href="/case-studies" 
                className="text-white/80 hover:text-white transition-colors"
              >
                ← Back to Case Studies
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Client:</span>
                <span>{caseStudy.client_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Industry:</span>
                <span>{caseStudy.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Service:</span>
                <span>{caseStudy.service_type}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={`/storage/${caseStudy.featured_image}`} 
              alt={caseStudy.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-secondary">The Challenge</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-secondary">Our Solution</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-secondary">The Results</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.results }} />
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                {caseStudy.logo && (
                  <div className="mb-6">
                    <img 
                      src={`/storage/${caseStudy.logo}`} 
                      alt={`${caseStudy.client_name} logo`} 
                      className="max-h-16"
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-4 text-secondary">Project Details</h3>
                
                <div className="space-y-4">
                  {caseStudy.completion_date && (
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Completion Date</p>
                        <p className="font-medium">{formatDate(caseStudy.completion_date)}</p>
                      </div>
                    </div>
                  )}
                  
                  {caseStudy.website_url && (
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <a 
                          href={caseStudy.website_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {caseStudy.testimonial && (
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                  <Quote size={32} className="text-primary mb-4" />
                  <blockquote className="text-lg italic mb-4" dangerouslySetInnerHTML={{ __html: caseStudy.testimonial }} />
                  {caseStudy.testimonial_author && (
                    <div>
                      <p className="font-bold">{caseStudy.testimonial_author}</p>
                      {caseStudy.testimonial_position && (
                        <p className="text-gray-600">{caseStudy.testimonial_position}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedCaseStudies.map((relatedCase) => (
                <div key={relatedCase.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
                  <a href={`/case-studies/${relatedCase.slug}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={`/storage/${relatedCase.featured_image}`} 
                        alt={relatedCase.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        {relatedCase.service_type}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-secondary">{relatedCase.title}</h3>
                      <p className="text-gray-600 mb-4">{relatedCase.client_name}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{relatedCase.industry}</span>
                        <span className="text-primary font-medium">Read Case Study →</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to build innovative solutions that drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/solutions" 
              className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

Show.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Study | Empuls3" />;
