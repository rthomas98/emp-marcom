"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function PartnersHeader() {
  return (
    <section 
      id="partners-header" 
      className="px-[5%] py-16 md:py-24 lg:py-28"
      aria-labelledby="partners-header-heading"
    >
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <header>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Agency Partnerships</p>
            <h1 
              id="partners-header-heading"
              className="text-5xl font-bold text-[#1F1946] md:text-6xl lg:text-7xl"
            >
              Micro Agency Strategic Alliances
            </h1>
          </header>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="text-gray-700 md:text-md">
              Since our founding in 2009 by Robert Thomas, Empuls3 has strategically partnered with industry leaders to enhance our boutique service offerings. As a specialized micro agency, we combine our personalized approach and direct access to senior specialists with our partners' complementary capabilities—delivering truly tailored technology solutions with faster implementation times than larger firms can offer.
            </p>
            <nav 
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
              aria-label="Partnership navigation"
            >
              <Link
                href="#partner-benefits"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#BD1550]"
                aria-label="Learn more about our partnership benefits"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us to become a strategic partner"
              >
                Become a Partner
              </Link>
            </nav>
          </div>
        </div>
        <figure 
          className="grid grid-cols-[1fr_0.33fr] items-start gap-6 sm:gap-8 md:gap-16"
          aria-label="Partnership team images"
        >
          <div className="mt-[10%] w-full">
            <img
              className="aspect-[3/2] h-full w-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
              alt="Team collaborating on digital marketing strategy"
              width="800"
              height="533"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png"
              alt="Diverse business team in discussion"
              width="400"
              height="600"
              loading="lazy"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
