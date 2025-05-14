"use client";

import React from "react";
import { Database, BarChart3, Layers } from "lucide-react";

export function HubspotFeatures() {
  return (
    <section id="hubspot-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <h2 className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Custom HubSpot Solutions: Tailored Configurations for Your
                Unique Business Needs
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full gap-6">
              <div className="flex-none self-start">
                <Database className="h-12 w-12 text-[#BD1550]" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                  Optimize Your Processes with HubSpot Integrations
                </h3>
                <p className="text-gray-700">
                  Our custom HubSpot solutions are designed to enhance your CRM
                  experience and drive growth.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div className="flex-none self-start">
                <BarChart3 className="h-12 w-12 text-[#BD1550]" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                  Boost Efficiency with Custom HubSpot Solutions
                </h3>
                <p className="text-gray-700">
                  Leverage our expertise to automate your workflows and improve
                  customer engagement.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div className="flex-none self-start">
                <Layers className="h-12 w-12 text-[#BD1550]" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                  Maximize HubSpot with Custom Solutions
                </h3>
                <p className="text-gray-700">
                  Our team crafts personalized HubSpot solutions that align with
                  your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
