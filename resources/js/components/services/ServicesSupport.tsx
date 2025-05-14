"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, LifeBuoy, Clock } from "lucide-react";

export function ServicesSupport() {
  return (
    <section id="services-support" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Support</p>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Your Success is Our Mission
            </h2>
            <p className="text-gray-700 md:text-md">
              Our team of experts provides top-notch services to ensure seamless
              implementation of your projects. We also offer ongoing support to
              address any challenges you may face, ensuring your success every
              step of the way.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg border border-gray-200">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <LifeBuoy className="h-12 w-12 text-[#BD1550]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Complete Support Services
                  </h3>
                  <p className="text-gray-700">Ensuring your systems run smoothly and efficiently.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/services/support"
                    className="inline-flex items-center text-[#BD1550] hover:underline"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <Clock className="h-12 w-12 text-[#BD1550]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    24/7 Technical Assistance
                  </h3>
                  <p className="text-gray-700">Round-the-clock support for your critical systems.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/services/technical-assistance"
                    className="inline-flex items-center text-[#BD1550] hover:underline"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 rounded-lg border border-gray-200 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Software_Engineers_in_a_meeting_7f9202d7-9cb9-49eb-92d7-f5f6966d2594_2.png"
                  alt="Software engineers providing support"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#BD1550]">Engineering</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Advanced Software Engineering Solutions
                  </h3>
                  <p className="text-gray-700">
                    Innovative approaches to complex engineering challenges.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#BD1550] hover:underline"
                  >
                    Contact
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
