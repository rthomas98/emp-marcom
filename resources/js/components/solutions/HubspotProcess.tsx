"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Zap, Users } from "lucide-react";

export function HubspotProcess() {
  return (
    <section id="hubspot-process" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Automating processes for greater efficiency and accuracy.
            </p>
            <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Streamline Your Processes with HubSpot Solutions
            </h2>
          </div>
          <div>
            <p className="mb-6 text-white md:mb-8 md:text-md">
              Enhance your business efficiency through automated workflows and
              lead nurturing. Our custom HubSpot solutions ensure personalized
              customer engagement at every touchpoint.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Zap className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Boost Efficiency
                </h6>
                <p className="text-white">
                  Automate repetitive tasks and focus on what truly matters for
                  your business growth.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Users className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Personalized Engagement
                </h6>
                <p className="text-white">
                  Create tailored experiences for your customers that drive
                  loyalty and satisfaction.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
          className="absolute inset-0 size-full object-cover"
          alt="Team collaborating on HubSpot solutions"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
