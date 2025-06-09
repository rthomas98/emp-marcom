"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, BookOpen, HeadphonesIcon, FileText } from "lucide-react";

export function HubspotTraining() {
  return (
    <section id="hubspot-training" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-training-heading">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <header className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p id="hubspot-training-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique HubSpot Training</p>
              <h2 id="hubspot-training-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                Personalized Training with Senior Expertise
              </h2>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, our senior specialists deliver personalized training sessions that ensure your team is fully equipped to leverage HubSpot's capabilities. With direct access to our experts and ongoing support, we provide the dedicated attention that larger firms simply can't match.
              </p>
            </div>
          </header>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <article className="flex w-full flex-col" aria-labelledby="boutique-training-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <BookOpen className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="boutique-training-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Training for Your Unique Needs
              </h3>
              <p className="text-gray-700">
                Our boutique approach ensures training programs are specifically tailored to your unique business requirements, with direct access to senior specialists who understand your specific goals—without the generic solutions often provided by larger agencies.
              </p>
            </article>
            <article className="flex w-full flex-col" aria-labelledby="senior-specialists-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <HeadphonesIcon className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="senior-specialists-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Specialists
              </h3>
              <p className="text-gray-700">
                As a micro agency, we provide direct access to our senior specialists who are readily available to assist with your questions and concerns—eliminating the frustrating tiered support systems common with larger firms.
              </p>
            </article>
            <article className="flex w-full flex-col" aria-labelledby="personalized-resources-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <FileText className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="personalized-resources-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Resources for Your Team
              </h3>
              <p className="text-gray-700">
                Our boutique team creates personalized resources specifically designed for your team, elevating and enhancing your HubSpot experience with the focused attention that only a micro agency can provide—ensuring you maximize the full potential of your CRM investment.
              </p>
            </article>
          </div>
          <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot training navigation">
            <Link 
              href="/resources" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about our HubSpot training resources"
            >
              Learn
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 py-1 px-2 rounded-md"
              aria-label="Contact us about HubSpot training"
            >
              Contact <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
