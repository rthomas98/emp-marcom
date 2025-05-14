"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function IndustriesHeader() {
  return (
    <section id="industries-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Industry-Specific Technology Solutions
            </h1>
            <p className="text-gray-700 md:text-md">
              Empuls3 delivers tailored technology solutions designed for the unique challenges of your industry. 
              Our expertise spans multiple sectors, ensuring that your business receives the specialized support 
              it needs to thrive in today's competitive landscape.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link
                href="/industries/healthcare"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative flex">
            <div className="absolute bottom-0 left-0 w-3/5">
              <img
                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
                className="aspect-square size-full rounded-image object-cover"
                alt="Industry professionals in digital marketing"
              />
            </div>
            <div className="mb-[15%] ml-[15%] w-full">
              <img
                src="/images/site-images/rob_thomas23_Young_black_man_discussing_market_research_with_co_c8d0d42d-962e-4e67-922c-77d03d1bacb2.png"
                className="aspect-square size-full rounded-image object-cover"
                alt="Market research discussion"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
