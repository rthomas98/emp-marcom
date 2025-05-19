"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function HubspotOverview() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">The Micro Agency Advantage</p>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Boutique HubSpot Integration with Senior Expertise
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              As a specialized micro agency, we enhance your customer relationship management with personalized HubSpot integrations. Unlike larger firms where your project might be handed off to junior staff, our senior specialists work directly with you to ensure a unified view of your customer data with faster implementation and more dedicated attention.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Unified View
                </h6>
                <p className="text-gray-700">
                  Our boutique team connects HubSpot with your existing systems for better insights and customer engagement, with the personalized attention that only a micro agency can provide.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Automation Tools
                </h6>
                <p className="text-gray-700">
                  Work directly with our senior specialists to automate workflows, saving time and improving efficiency across your organization without the overhead of larger agencies.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium"
              >
                Sign Up <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_developers_working_in_meetings_st_b5e34501-f3fa-4b29-a260-92f7f138fa79.png"
              className="w-full rounded-lg object-cover"
              alt="HubSpot CRM Implementation Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
