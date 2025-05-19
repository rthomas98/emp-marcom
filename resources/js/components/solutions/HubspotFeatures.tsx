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
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">The Micro Agency Advantage</p>
              <h2 className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                Boutique HubSpot Solutions with Senior Expertise
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
                  Direct Access to Senior HubSpot Specialists
                </h3>
                <p className="text-gray-700">
                  As a boutique micro agency, we provide direct access to senior HubSpot specialists who work closely with you to enhance your CRM experience and drive growth—without the layers of management found at larger firms.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div className="flex-none self-start">
                <BarChart3 className="h-12 w-12 text-[#BD1550]" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                  Faster Implementation & Personalized Attention
                </h3>
                <p className="text-gray-700">
                  Our boutique team delivers faster implementation times with more personalized attention, automating your workflows and improving customer engagement without the overhead of larger agencies.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <div className="flex-none self-start">
                <Layers className="h-12 w-12 text-[#BD1550]" />
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                  Tailored Solutions for Your Specific Needs
                </h3>
                <p className="text-gray-700">
                  Our specialized micro agency crafts truly personalized HubSpot solutions that precisely align with your unique business objectives—with the focused attention and customization that only a boutique team can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
