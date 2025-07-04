"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function Header9() {
  return (
    <section id="hubspot-header" className="flex h-svh min-h-svh flex-col" aria-labelledby="hubspot-header-title">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0" role="img" aria-label="Team meeting discussing HubSpot CRM solutions">
          <img
            src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_2.png"
            alt="Team of professionals collaborating on HubSpot CRM implementation"
            className="absolute inset-0 size-full object-cover"
            width="1920"
            height="1080"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <header>
              <p id="hubspot-header-subtitle" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique HubSpot Development</p>
              <h1 id="hubspot-header-title" className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Personalized HubSpot Solutions with Senior Expertise
              </h1>
            </header>
            <div>
              <p className="text-base text-gray-700 md:text-md">
                As a specialized micro agency, our senior HubSpot specialists work directly with you to deliver tailored CRM solutions. Our boutique approach ensures personalized attention, faster implementation, and streamlined processes that enhance customer relationships—without the overhead and complexity of larger firms.
              </p>
              <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="HubSpot solutions navigation">
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                  aria-label="Learn more about our HubSpot solutions"
                >
                  Learn More
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                  aria-label="Contact us for HubSpot CRM assistance"
                >
                  Need HubSpot Help?
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}