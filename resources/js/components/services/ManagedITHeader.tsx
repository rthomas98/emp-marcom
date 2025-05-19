"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ManagedITHeader() {
  return (
    <section id="managed-it-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
        <div className="flex h-full flex-col justify-between">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            Boutique IT Support Services
          </p>
          <h1 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
            Personalized IT Solutions with Senior Expertise
          </h1>
          <div className="ml-[7.5%]">
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 delivers personalized Managed IT & Support Services with direct access to our senior specialists. Unlike larger firms where your tickets might be handled by junior staff, our boutique team ensures your technology runs smoothly with faster response times and more dedicated attention—allowing you to focus on growth while we handle the technical details.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8 md:flex-wrap">
              <Link
                href="#managed-it-services"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          <div className="w-full">
            <img
              src="/images/site-images/rob_thomas23_An_African_American_developer_holding_his_computer_160e36fc-9208-4e49-8166-d14de5aa74b0.png"
              alt="IT professional with laptop"
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src="/images/site-images/rob_thomas23_Empty_developer_work_stations_in_a_modern_office_w_249ca82d-c4b9-4af2-9af8-aae352b63f75.png"
              alt="Modern IT workspace"
              className="aspect-square h-full w-full rounded-lg border border-gray-200 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
