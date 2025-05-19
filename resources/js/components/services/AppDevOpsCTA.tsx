"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function AppDevOpsCTA() {
  return (
    <section id="app-devops-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-white md:mb-4">
            Boutique DevOps Services
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Experience the Micro Agency Advantage
          </h2>
          <p className="text-white md:text-md">
            Contact us today for direct access to our senior specialists who provide truly personalized application and DevOps solutions. Unlike larger firms, our boutique micro agency delivers faster implementation times, more dedicated attention, and tailored infrastructure automation without the overhead and complexity that comes with bigger agencies.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-center font-medium text-[#1F1946] transition hover:bg-opacity-90"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_Web_devoloer_with_their_laptop_st_6c8d2e72-ba66-449b-9cad-d007dcc9b132.png"
          className="h-full w-full object-cover"
          alt="Web developer working on application development"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
