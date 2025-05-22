import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Calendar, Globe } from 'lucide-react';
import CaseStudyGallery from '@/components/case-studies/CaseStudyGallery';
import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudyGallery7 from '@/components/case-studies/CaseStudyGallery7';

// Define GalleryImage interface
interface GalleryImage {
    src: string;
    alt?: string; 
}

// This interface is used for type checking
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
  gallery_images: GalleryImage[] | null; 
  logo: string | null;
  website_url: string | null;
  completion_date: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

interface CaseStudyProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

export default function CaseStudy({ caseStudy, relatedCaseStudies }: CaseStudyProps) {
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
      
      {/* Project Gallery or Featured Image */}
      {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 ? (
        <CaseStudyGallery7 
          images={caseStudy.gallery_images.slice(0, 3).map((img: GalleryImage) => ({
            src: img.src.startsWith('http') ? img.src : `/storage/${img.src.startsWith('/') ? img.src.substring(1) : img.src}`,
            alt: img.alt || caseStudy.title 
          }))}
        />
      ) : (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src={caseStudy.featured_image.startsWith('http') ? caseStudy.featured_image : `/storage/${caseStudy.featured_image.startsWith('/') ? caseStudy.featured_image.substring(1) : caseStudy.featured_image}`}
                alt={caseStudy.title} 
                className="w-full h-full object-cover border-0"
              />
            </div>
          </div>
        </section>
      )}
      
      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-secondary">The Challenge</h2>
                <div className="prose max-w-none text-secondary" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-secondary">Our Solution</h2>
                <div className="prose max-w-none text-secondary" dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-secondary">The Results</h2>
                <div className="prose max-w-none text-secondary" dangerouslySetInnerHTML={{ __html: caseStudy.results }} />
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                {caseStudy.logo && (
                  <div className="mb-6">
                    <img 
                      src={caseStudy.logo.startsWith('http') ? caseStudy.logo : `/storage/${caseStudy.logo.startsWith('/') ? caseStudy.logo.substring(1) : caseStudy.logo}`}
                      alt={`${caseStudy.client_name} logo`} 
                      className="max-h-16 border-0"
                    />
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-4 text-secondary">Project Details</h3>
                
                <div className="space-y-4">
                  {caseStudy.completion_date && (
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-secondary">Completion Date</p>
                        <p className="font-medium text-secondary">{formatDate(caseStudy.completion_date)}</p>
                      </div>
                    </div>
                  )}
                  
                  {caseStudy.website_url && (
                    <div className="flex items-center gap-3">
                      <Globe size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-secondary">Website</p>
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
              
              {/* Testimonial section removed as requested */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies Gallery */}
      <CaseStudyGallery relatedCaseStudies={relatedCaseStudies} />
      
      {/* CTA Component */}
      <CaseStudiesCta />
    </>
  );
}

CaseStudy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Study | Empuls3" />;
