"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function EngineeringArchitecture() {
  return (
    <section id="engineering-architecture" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Designing systems that scale and endure through time.
            </p>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Crafting Scalable and Efficient System Architectures
            </h2>
            <p className="text-gray-700 md:text-md">
              Our expert team specializes in designing robust system
              architectures that meet the unique demands of your business. We
              ensure scalability and efficiency, empowering your organization to
              thrive in a digital landscape.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#BD1550] hover:underline"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
              className="w-full rounded-lg object-cover"
              alt="Team designing system architecture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
