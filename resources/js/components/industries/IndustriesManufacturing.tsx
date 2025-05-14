"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function IndustriesManufacturing() {
  return (
    <section id="industries-manufacturing" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Digital manufacturing solutions team"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Manufacturing</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Transforming Manufacturing with Innovative Solutions
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              Empuls3 offers advanced technology solutions tailored for the
              manufacturing sector. Our expertise helps optimize production
              processes and enhance supply chain management.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Efficiency Boost
                </h6>
                <p className="text-gray-700">
                  Streamline operations and reduce costs with our tailored
                  manufacturing solutions.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Smart Integration
                </h6>
                <p className="text-gray-700">
                  Leverage cutting-edge technology for seamless integration
                  across your production lines.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/industries/manufacturing"
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
        </div>
      </div>
    </section>
  );
}
