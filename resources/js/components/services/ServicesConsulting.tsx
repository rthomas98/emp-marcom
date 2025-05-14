"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Lightbulb } from "lucide-react";

export function ServicesConsulting() {
  return (
    <section id="services-consulting" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <Lightbulb className="h-16 w-16 text-[#BD1550]" />
            </div>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Navigate Your Technology Challenges with Confidence
            </h2>
            <p className="text-gray-700 md:text-md">
              Our IT Consulting Services provide expert guidance to help you
              tackle complex technology challenges. With a deep understanding of
              industry-specific needs, we empower your business to leverage
              technology for optimal growth and efficiency.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href="/services/software-engineering-it-consulting" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#BD1550] hover:underline"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_developers_working_in_meetings_st_c9833523-4ca9-45d6-998d-6dd8a2c3d7d1.png"
              className="w-full rounded-lg object-cover"
              alt="IT consultants in a strategy meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
