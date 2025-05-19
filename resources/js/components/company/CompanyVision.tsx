"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function CompanyVision() {
  return (
    <section id="company-vision" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Vision</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              The Micro Agency Difference
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              At Empuls3, we envision a world where businesses thrive through truly personalized technology solutions. As a specialized micro agency, our mission is to provide direct access to senior specialists who empower organizations to achieve digital excellence and sustainable growth—with faster implementation times and more dedicated attention than larger firms can provide.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Boutique Values
                </h6>
                <p className="text-gray-700">
                  Personalized attention, direct collaboration with senior specialists, and truly tailored solutions drive our commitment to client success as a specialized micro agency.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Micro Agency Excellence
                </h6>
                <p className="text-gray-700">
                  Trusted boutique partner for industry leaders, delivering personalized technology solutions with senior expertise since our founding in 2009 by Robert Thomas.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/company/values"
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
              src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Business professionals discussing vision and strategy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
