"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ManagedITServices() {
  return (
    <section id="managed-it-services" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Boutique IT Services
              </p>
              <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                The Micro Agency IT Support Advantage
              </h2>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, our senior IT specialists provide personalized support services that ensure your business runs smoothly. Unlike larger firms where your needs might be handled by junior staff, our boutique team delivers faster response times, more dedicated attention, and truly tailored solutions—supporting your growth and adapting to changing needs without the overhead of traditional IT providers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_0.png"
                  alt="Proactive IT monitoring team"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Monitoring Specialists
              </h3>
              <p className="text-gray-700">
                Work directly with our senior specialists who proactively identify and resolve potential issues before they escalate—ensuring smooth operations with faster response times and more personalized attention than larger firms can offer.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
                  alt="Expert IT troubleshooting"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Troubleshooting Services
              </h3>
              <p className="text-gray-700">
                Experience the micro agency advantage with our senior specialists who tackle and resolve your IT challenges with personalized attention—ensuring smoother operations with faster resolution times than larger firms can deliver.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
                  alt="Team augmentation services"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Team Augmentation
              </h3>
              <p className="text-gray-700">
                Enhance your IT capabilities by working directly with our senior specialists who provide personalized support—delivering the expertise you need with faster implementation times and more dedicated attention than larger firms can provide.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
