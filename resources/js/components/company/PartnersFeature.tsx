"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function PartnersFeature() {
  return (
    <section id="partners-feature" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Partners</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Empuls3 and Warner Brothers Discovery Partnership
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              Empuls3 collaborates with Warner Brothers Discovery to deliver
              innovative technology solutions that enhance operational
              efficiency. This partnership leverages our full-stack expertise to
              drive digital transformation across their platforms.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-4xl font-bold text-[#BD1550] md:text-5xl lg:text-6xl">
                  50%
                </h3>
                <p className="text-gray-700">
                  Transforming media experiences through technology innovation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold text-[#BD1550] md:text-5xl lg:text-6xl">
                  50%
                </h3>
                <p className="text-gray-700">Empowering growth with strategic technology solutions.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="#partner-benefits"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium text-[#BD1550] transition hover:text-[#a01245]"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <img
            src="/images/site-images/rob_thomas23_African_American_developers_working_in_meetings_st_c9833523-4ca9-45d6-998d-6dd8a2c3d7d1.png"
            className="w-full rounded-lg object-cover"
            alt="Team meeting discussing technology solutions"
          />
        </div>
      </div>
    </section>
  );
}
