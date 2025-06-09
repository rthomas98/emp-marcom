"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ManagedITCTA() {
  return (
    <section id="managed-it-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-cta-heading">
      <div className="container relative z-10 mx-auto">
        <div className="w-full max-w-lg">
          <header>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Boutique IT Support
            </p>
            <h2 id="it-cta-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
              Experience the Micro Agency Advantage
            </h2>
          </header>
          <p className="text-white md:text-md">
            Contact us today for direct access to our senior specialists who provide truly personalized IT support solutions. Unlike larger firms, our boutique team delivers faster response times, more dedicated attention, and custom strategies designed specifically for your unique needs—helping you drive growth and achieve lasting success without the overhead of traditional IT providers.
          </p>
          <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="IT services contact navigation">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
              aria-label="Contact us about our IT support services"
            >
              Inquire
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
              aria-label="Learn more about our IT services"
            >
              Learn More
            </Link>
          </nav>
        </div>
      </div>
      <figure className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/site-images/rob_thomas23_Empty_developer_work_stations_in_a_modern_office_w_249ca82d-c4b9-4af2-9af8-aae352b63f75.png"
          className="h-full w-full object-cover"
          alt="Modern IT office workspace with professional workstations"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </figure>
    </section>
  );
}
