"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Code, Layers, ChevronRight } from "lucide-react";

export function IndustriesTechnology() {
  return (
    <section id="industries-technology" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Innovate</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Empuls3: Transforming Technology Across Industries
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              At Empuls3, we provide tailored technology solutions designed to
              meet the unique needs of various industries. Our expertise
              empowers businesses to thrive in competitive landscapes through
              innovative and efficient practices.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Code className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Tech Solutions
                </h6>
                <p className="text-gray-700">
                  Cutting-edge solutions that drive growth and efficiency for
                  technology companies.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Layers className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Industry Expertise
                </h6>
                <p className="text-gray-700">
                  Deep understanding of sector-specific challenges to deliver
                  impactful technology solutions.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/industries"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline"
              >
                Contact
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Software developers collaborating on technology solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
