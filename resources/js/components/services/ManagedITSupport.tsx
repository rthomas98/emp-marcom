"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Settings, Shield, UserPlus } from "lucide-react";

export function ManagedITSupport() {
  return (
    <section id="managed-it-support" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Specialized knowledge or skills in a particular area.
              </p>
              <h2 className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Comprehensive IT Support for Your Business
              </h2>
            </div>
            <div>
              <p className="text-gray-700 md:text-md">
                Our Managed IT & Support Services provide seamless, full-stack
                support across a variety of technologies. With a focus on
                troubleshooting and team augmentation, we ensure your operations
                run smoothly and efficiently. Trust us to be your partner in
                long-term growth and digital transformation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Custom Solutions for Tech Needs
              </h3>
              <p className="text-gray-700">
                We customize our services to meet your specific needs and
                preferences, ensuring that we provide exactly what you're
                looking for.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <Shield className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Proactive Support for Continuous Improvement
              </h3>
              <p className="text-gray-700">
                Our dedicated team is committed to improving and optimizing your
                IT infrastructure for better performance and efficiency.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <UserPlus className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expert Team Support for Projects
              </h3>
              <p className="text-gray-700">
                Tap into the expertise of our skilled professionals to enhance
                your capabilities and elevate your business to new heights.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
