"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Lightbulb } from "lucide-react";

export function ServicesConsulting() {
  return (
    <section id="services-consulting" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="consulting-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6" aria-hidden="true">
              <Lightbulb className="h-16 w-16 text-[#BD1550]" />
            </div>
            <header>
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique IT Consulting</p>
              <h2 id="consulting-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Personalized Technology Guidance with Senior Expertise
              </h2>
            </header>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, our IT Consulting Services provide personalized guidance with direct access to senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to tackle complex technology challenges—with a deep understanding of your specific needs and the dedicated attention that larger firms simply can't match.
            </p>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="IT Consulting navigation">
              <Link 
                href="/services/software-engineering-it-consulting" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our software engineering and IT consulting services"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about IT consulting services"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_African_American_developers_working_in_meetings_st_c9833523-4ca9-45d6-998d-6dd8a2c3d7d1.png"
              className="w-full rounded-lg object-cover"
              alt="IT consultants in a strategy meeting"
              width="600"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">A diverse team of IT consultants collaborating on technology strategy</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
