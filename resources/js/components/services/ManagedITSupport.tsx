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
                Boutique IT Support Services
              </p>
              <h2 className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Personalized IT Support with Senior Expertise
              </h2>
            </div>
            <div>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, our senior IT specialists provide personalized, full-stack support across a variety of technologies. Unlike larger firms where your needs might be handled by junior staff, our boutique team ensures faster response times and more dedicated attention—keeping your operations running smoothly with the focused expertise and reduced overhead that only a micro agency can deliver.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior IT Specialists
              </h3>
              <p className="text-gray-700">
                Work directly with our senior specialists who create truly personalized solutions for your specific tech needs—delivering exactly what you're looking for with faster implementation times than larger firms can offer.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <Shield className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Proactive Support
              </h3>
              <p className="text-gray-700">
                Experience the micro agency advantage with our dedicated team who continuously improves and optimizes your IT infrastructure—delivering better performance and efficiency with the personalized attention that larger firms simply can't match.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <UserPlus className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Project Support
              </h3>
              <p className="text-gray-700">
                Tap into the expertise of our senior specialists who enhance your capabilities and elevate your business—with the personalized attention, faster response times, and reduced overhead that only a boutique micro agency can provide.
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
