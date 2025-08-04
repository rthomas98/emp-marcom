"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ManagedITHeader() {
  return (
    <section id="managed-it-header" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="managed-it-heading">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
        <div className="flex h-full flex-col justify-between">
          <header>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              24/7 IT Support That Actually Works
            </p>
            <h1 id="managed-it-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Stop Losing $10K/Month to IT Problems
            </h1>
          </header>
          <div className="ml-[7.5%]">
            <p className="text-gray-700 md:text-md">
              Every hour your team can't work costs you money. When your email crashes, servers die, or "the system is slow," you're bleeding cash. We keep Dallas businesses running 24/7 with IT support that actually fixes problems, not just creates tickets. Real techs, real solutions, 15-minute response times.
            </p>
            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8 md:flex-wrap" aria-label="Managed IT services navigation">
              <Link
                href="#managed-it-services"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our managed IT services"
              >
                Stop the IT Bleeding
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about managed IT support services"
              >
                Get Emergency IT Help
              </Link>
            </nav>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          <figure className="w-full">
            <img
              src="/images/site-images/rob_thomas23_An_African_American_developer_holding_his_computer_160e36fc-9208-4e49-8166-d14de5aa74b0.png"
              alt="IT professional with laptop providing managed support services"
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
              width="400"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">Senior IT specialist providing personalized support services</figcaption>
          </figure>
          <figure className="w-full">
            <img
              src="/images/site-images/rob_thomas23_Empty_developer_work_stations_in_a_modern_office_w_249ca82d-c4b9-4af2-9af8-aae352b63f75.png"
              alt="Modern IT workspace with managed technology solutions"
              className="aspect-square h-full w-full rounded-lg border border-gray-200 object-cover"
              width="300"
              height="300"
              loading="lazy"
            />
            <figcaption className="sr-only">Modern workspace equipped with managed IT infrastructure</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
