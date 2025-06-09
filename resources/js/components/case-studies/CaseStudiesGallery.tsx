"use client";

import React from "react";
import { Link } from "@inertiajs/react";

interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  service_type: string;
  featured_image: string;
}

interface CaseStudiesGalleryProps {
  caseStudies?: CaseStudy[];
}

export function CaseStudiesGallery({ caseStudies = [] }: CaseStudiesGalleryProps) {
  // Sample case studies for preview
  const sampleCaseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      slug: "ecommerce-platform-redesign",
      client_name: "RetailTech Solutions",
      industry: "E-commerce",
      service_type: "Web Development",
      featured_image: "images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
    },
    {
      id: 2,
      title: "Mobile Banking App Development",
      slug: "mobile-banking-app",
      client_name: "SecureFinance",
      industry: "Finance",
      service_type: "Mobile Development",
      featured_image: "images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      slug: "healthcare-management-system",
      client_name: "MedCare Innovations",
      industry: "Healthcare",
      service_type: "Software Development",
      featured_image: "images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png"
    },
    {
      id: 4,
      title: "Educational Platform MVP",
      slug: "educational-platform-mvp",
      client_name: "LearnSphere",
      industry: "Education",
      service_type: "MVP Development",
      featured_image: "images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_31b61ffe-cc01-4adc-81dd-e6e0a1f5674e_1.png"
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      slug: "corporate-website-redesign",
      client_name: "Global Enterprises",
      industry: "Technology",
      service_type: "Web Development",
      featured_image: "images/site-images/rob_thomas23_African_American_developers_working_in_an_agency.__75a77e13-82e4-4da4-aa89-3f854e38c79d.png"
    },
    {
      id: 6,
      title: "Real Estate Listing Platform",
      slug: "real-estate-listing-platform",
      client_name: "PropertyConnect",
      industry: "Real Estate",
      service_type: "Web Development",
      featured_image: "images/site-images/rob_thomas23_African_American_front-end_developers_development__76be193d-31cc-4dcc-9acf-814ccfe788bb.png"
    },
    {
      id: 7,
      title: "Supply Chain Management System",
      slug: "supply-chain-management",
      client_name: "LogisticsPro",
      industry: "Manufacturing",
      service_type: "Software Development",
      featured_image: "images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
    }
  ];

  // Use provided case studies or sample ones if none provided
  const displayCaseStudies = caseStudies.length > 0 ? caseStudies : sampleCaseStudies;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-secondary md:mb-6 md:text-7xl lg:text-8xl">
            Success Stories
          </h2>
          <p className="md:text-md max-w-3xl mx-auto text-secondary font-medium">
            Discover the inspiring success stories of our clients and the
            effective implementations we've carried out. Each narrative
            highlights the challenges faced, the innovative solutions we
            provided, and the remarkable results achieved.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayCaseStudies.map((caseStudy) => (
            <Link 
              key={caseStudy.id} 
              href={`/case-studies/${caseStudy.slug}`} 
              className="block w-full mb-8 group"
            >
              <div className="relative overflow-hidden rounded-lg h-[300px]">
                <img
                  src={caseStudy.featured_image}
                  alt={caseStudy.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105 border-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1946]/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#BD1550] rounded-full mb-3">
                    {caseStudy.service_type}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-white/80">{caseStudy.client_name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesGallery;
