"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, BookOpen, HeadphonesIcon, FileText } from "lucide-react";

export function HubspotTraining() {
  return (
    <section id="hubspot-training" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                Empower Your Team with Expert Guidance
              </h2>
              <p className="text-gray-700 md:text-md">
                Our comprehensive training sessions ensure your team is fully
                equipped to leverage HubSpot's capabilities. With ongoing
                support, we are here to assist you every step of the way.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <BookOpen className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Tailored Training for Your Unique Needs
              </h3>
              <p className="text-gray-700">
                Our training programs are tailored specifically to meet the
                unique requirements of your business and its needs.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <HeadphonesIcon className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                24/7 Support for Your HubSpot Solutions
              </h3>
              <p className="text-gray-700">
                Our dedicated support team is available 24/7 to assist you with
                any questions or concerns you may have at any time.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <FileText className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Resources to Maximize Your CRM Investment
              </h3>
              <p className="text-gray-700">
                Discover a vast array of valuable resources designed to elevate
                and enhance your overall HubSpot experience, ensuring you
                maximize its full potential.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link 
              href="/resources" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Learn
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium"
            >
              Contact <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
