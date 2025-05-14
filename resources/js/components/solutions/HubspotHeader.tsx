"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function Header9() {
  return (
    <section id="relume" className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_2.png"
            alt="Relume placeholder image"
            className="absolute inset-0 size-full object-cover"
          />

        </div>
      </div>
      <div className="px-[5%]">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Transform Your Business with HubSpot Solutions
              </h1>
            </div>
            <div>
              <p className="text-base text-gray-700 md:text-md">
                Our expertise in CRM integrations and automation empowers your
                business to streamline processes and enhance customer
                relationships. Discover custom HubSpot solutions tailored to
                meet your unique needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                >
                  Learn More
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                >
                  Need HubSpot Help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}