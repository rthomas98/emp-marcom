import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { PageProps } from '@/types';
import { Link } from '@inertiajs/react';

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
  gallery_images: Array<{
    src: string;
    alt: string;
  }> | null;
  is_featured: boolean;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
}

interface Props extends PageProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

export default function Show({ caseStudy, relatedCaseStudies }: Props) {
  return (
    <Layout>
      <Head title={caseStudy.meta_title || caseStudy.title} />
      
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/40 z-10"></div>
          <div className="h-96 md:h-[500px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${caseStudy.featured_image})` }}></div>
          <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-32 md:-mt-48">
            <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{caseStudy.title}</h1>
                  <p className="text-lg text-gray-600">Client: {caseStudy.client_name}</p>
                </div>
                {caseStudy.logo && (
                  <div className="mt-4 md:mt-0">
                    <img src={caseStudy.logo} alt={`${caseStudy.client_name} logo`} className="h-16 object-contain" />
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-900 mb-1">Industry</h3>
                  <p>{caseStudy.industry}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-900 mb-1">Service Type</h3>
                  <p>{caseStudy.service_type}</p>
                </div>
                {caseStudy.completion_date && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-900 mb-1">Completion Date</h3>
                    <p>{new Date(caseStudy.completion_date).toLocaleDateString()}</p>
                  </div>
                )}
                {caseStudy.website_url && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <a href={caseStudy.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Challenge Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}></div>
            </div>
            
            {/* Solution Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.solution }}></div>
            </div>
            
            {/* Gallery Section */}
            {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caseStudy.gallery_images.map((image, index) => (
                    <div key={index} className="aspect-video overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt || `${caseStudy.title} gallery image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Results Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Results</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.results }}></div>
            </div>
            
            {/* Testimonial Section */}
            {caseStudy.testimonial && (
              <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <div className="flex flex-col items-center text-center">
                  <svg className="h-12 w-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: caseStudy.testimonial }}></blockquote>
                  {caseStudy.testimonial_author && (
                    <cite className="not-italic">
                      <p className="font-semibold text-gray-900">{caseStudy.testimonial_author}</p>
                      {caseStudy.testimonial_position && (
                        <p className="text-gray-600">{caseStudy.testimonial_position}</p>
                      )}
                    </cite>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Related Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedCaseStudies.map((relatedCase) => (
                  <Link key={relatedCase.id} href={`/case-studies/${relatedCase.slug}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedCase.featured_image} 
                          alt={relatedCase.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedCase.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedCase.client_name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                            {relatedCase.service_type}
                          </span>
                          <span className="text-blue-600 font-medium text-sm">Read More →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Own Success Story?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our tailored solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
