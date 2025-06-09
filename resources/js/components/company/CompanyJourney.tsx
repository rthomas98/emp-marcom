"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Award, Target } from "lucide-react";

export function CompanyJourney() {
  return (
    <section 
      id="company-journey" 
      className="px-[5%] py-16 md:py-24 lg:py-28"
      aria-labelledby="journey-heading"
    >
      <div className="container mx-auto">
        <header className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Agency Journey</p>
            <h2 
              id="journey-heading" 
              className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl"
            >
              Our Micro Agency Story Since 2009
            </h2>
            <p className="text-gray-700 md:text-md">
              Founded in 2009 by Robert Thomas, Empuls3 has been dedicated to empowering businesses as a specialized micro agency. Unlike larger firms where projects are handed off to junior staff, our boutique team provides personalized solutions with direct access to senior specialists—helping clients thrive with faster implementation times and more dedicated attention than larger firms can offer.
            </p>
          </div>
        </header>
        
        <div 
          className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8"
          role="list"
          aria-label="Company advantages and achievements"
        >
          <article 
            className="rounded-lg border border-gray-200 bg-white p-6 md:p-8 lg:p-12"
            aria-labelledby="micro-agency-advantage"
          >
            <div>
              <div className="mb-5 md:mb-6">
                <Target className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 
                id="micro-agency-advantage"
                className="mb-5 text-3xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-4xl lg:text-5xl"
              >
                The Micro Agency Advantage:
                Personalized Solutions & Direct Access
              </h3>
              <p className="text-gray-700">
                As a specialized micro agency, our commitment is to provide direct access to senior specialists for truly personalized solutions. Unlike larger firms, our boutique team delivers faster implementation times, more dedicated attention, and truly customer-centric solutions—ensuring exceptional results without the overhead of traditional agencies.
              </p>
            </div>
            <nav 
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
              aria-label="Micro agency advantage links"
            >
              <Link
                href="/company/values"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our company values"
              >
                Learn More
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:rounded-sm focus-visible:p-1"
                aria-label="Explore career opportunities at our company"
              >
                Join Us
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </article>
          
          <article 
            className="rounded-lg border border-gray-200 bg-white p-6 md:p-8 lg:p-12"
            aria-labelledby="boutique-excellence"
          >
            <div>
              <div className="mb-5 md:mb-6">
                <Award className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 
                id="boutique-excellence"
                className="mb-5 text-3xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-4xl lg:text-5xl"
              >
                Boutique Excellence Since 2009
              </h3>
              <p className="text-gray-700">
                Since our founding in 2009 by Robert Thomas, we are proud to have built a specialized micro agency recognized for delivering personalized technology solutions across diverse industries. Our boutique approach with direct access to senior specialists has consistently delivered exceptional results and built lasting partnerships with clients who value our dedicated attention and faster implementation times.
              </p>
            </div>
            <nav 
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
              aria-label="Boutique excellence links"
            >
              <Link
                href="/company/achievements"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Explore our company achievements"
              >
                Explore
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:rounded-sm focus-visible:p-1"
                aria-label="Contact our team to discuss your project"
              >
                Contact
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
}
