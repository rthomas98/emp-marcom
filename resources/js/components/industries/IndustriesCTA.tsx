"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function IndustriesCTA() {
  return (
    <section id="industries-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto max-w-lg text-center">
        <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
          Explore Our Industry Solutions
        </h2>
        <p className="text-white md:text-md">
          Discover tailored technology solutions designed for your industry's
          unique challenges and opportunities.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
          >
            Consult
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_developer_standing_near_a_server__d9ad6d27-075f-4765-ba32-359df48eb803.png"
          className="h-full w-full object-cover"
          alt="IT professional in server room"
        />
        <div className="absolute inset-0 bg-[#1F1946]/70" />
      </div>
    </section>
  );
}
