"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function EngineeringArchitecture() {
  return (
    <section id="engineering-architecture" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="architecture-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <header>
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Boutique Architecture Services
              </p>
              <h2 id="architecture-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Personalized System Architecture with Senior Expertise
              </h2>
            </header>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, our senior architects work directly with you to design robust system architectures that meet your unique business demands. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures scalability and efficiency with personalized attention and faster implementation—empowering your organization to thrive in a digital landscape without the overhead of larger firms.
            </p>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Architecture services navigation">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our architecture services"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Get started with our architecture services"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
              className="w-full rounded-lg object-cover"
              alt="Team designing system architecture"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">A diverse team of architects collaborating on system design</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
