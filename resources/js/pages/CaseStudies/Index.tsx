import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Filter } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service_type: string;
  featured_image: string;
  is_featured: boolean;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
  featuredCaseStudies?: CaseStudy[];
  filter?: {
    industry: string | null;
    service_type: string | null;
  };
}

export default function Index({ caseStudies = [], featuredCaseStudies = [], filter }: CaseStudiesProps) {
  const [showFilters, setShowFilters] = useState(false);
  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce', 'Manufacturing', 'Real Estate', 'Hospitality', 'Entertainment', 'Other'];
  const serviceTypes = [
    'Web Development', 
    'Mobile Development', 
    'E-commerce', 
    'MVP Development', 
    'Software Development', 
    'Backend Development', 
    'Frontend Development', 
    'HubSpot Development', 
    'Managed IT Services', 
    'Other'
  ];

  return (
    <>
      <Head title="Case Studies | Empuls3" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Success Stories</h1>
            <p className="text-lg md:text-xl mb-8">
              Explore how we've helped businesses transform their digital presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      {featuredCaseStudies && featuredCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCaseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
                  <a href={`/case-studies/${caseStudy.slug}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={`/storage/${caseStudy.featured_image}`} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        {caseStudy.service_type}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-secondary">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.client_name}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{caseStudy.industry}</span>
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
      
      {/* All Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Case Studies</h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
              <h3 className="font-semibold mb-4">Filter Case Studies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <div className="grid grid-cols-2 gap-2">
                    {industries.map((industry) => (
                      <a 
                        key={industry}
                        href={`/case-studies/filter?industry=${industry}`}
                        className={`px-3 py-2 text-sm rounded-md ${
                          filter?.industry === industry 
                            ? 'bg-primary text-white' 
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {industry}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceTypes.map((serviceType) => (
                      <a 
                        key={serviceType}
                        href={`/case-studies/filter?service_type=${serviceType}`}
                        className={`px-3 py-2 text-sm rounded-md ${
                          filter?.service_type === serviceType 
                            ? 'bg-primary text-white' 
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {serviceType}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {(filter?.industry || filter?.service_type) && (
                <div className="mt-4 flex justify-end">
                  <a 
                    href="/case-studies"
                    className="text-primary hover:underline"
                  >
                    Clear Filters
                  </a>
                </div>
              )}
            </div>
          )}
          
          {/* Case Studies Grid */}
          {caseStudies && caseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
                  <a href={`/case-studies/${caseStudy.slug}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={`/storage/${caseStudy.featured_image}`} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        {caseStudy.service_type}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-secondary">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.client_name}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                        <span className="text-primary font-medium">Read Case Study →</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600 mb-4">No case studies found</h3>
              <p className="text-gray-500">Try adjusting your filters or check back later for new case studies.</p>
            </div>
          )}
        </div>
      </section>
      
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

Index.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Studies | Empuls3" />;
