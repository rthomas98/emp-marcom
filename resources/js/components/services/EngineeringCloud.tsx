"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Cloud, Upload, Zap } from "lucide-react";

export function EngineeringCloud() {
  return (
    <section id="engineering-cloud" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Cloud Integration Solutions
              </p>
              <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                Seamless Cloud Integration and Migration Services
              </h2>
              <p className="text-gray-700 md:text-md">
                Elevate your business to new heights with our comprehensive
                cloud integration solutions. We guarantee a seamless transition
                to cloud platforms, significantly enhancing both scalability and
                operational efficiency for your organization.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Cloud className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expert Guidance for Cloud Solutions
              </h3>
              <p className="text-gray-700">
                Our dedicated team specializes in creating customized strategies
                to ensure a smooth and effective cloud adoption process for your
                business.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Upload className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Simplified Migration for Your Business
              </h3>
              <p className="text-gray-700">
                Our goal is to streamline the migration process, ensuring
                minimal disruptions and a smooth transition for everyone
                involved.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Maximize Efficiency with Cloud Technologies
              </h3>
              <p className="text-gray-700">
                Utilize advanced cloud technologies to significantly enhance and
                improve overall operational efficiency for your business.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Start A Project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-[#BD1550] hover:underline"
            >
              Have More Questions?
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
