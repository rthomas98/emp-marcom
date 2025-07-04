"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function IndustriesCTA() {
  return (
    <section id="industries-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="industries-cta-heading">
      <div className="relative z-10 container mx-auto max-w-lg text-center">
        <header>
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            Boutique Industry Solutions
          </p>
          <h2 id="industries-cta-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Experience the Micro Agency Advantage
          </h2>
        </header>
        <p className="text-white md:text-md">
          Contact us today for direct access to our senior specialists who provide truly personalized technology solutions for your industry's unique challenges. Unlike larger firms, our boutique team delivers faster implementation times, more dedicated attention, and custom strategies—without the overhead of traditional agencies.
        </p>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8" aria-label="Industry solutions contact navigation">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
            aria-label="Learn more about our industry solutions"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
            aria-label="Schedule a consultation about our industry solutions"
          >
            Consult
          </Link>
        </nav>
      </div>
      <figure className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/images/site-images/rob_thomas23_African_American_developer_standing_near_a_server__d9ad6d27-075f-4765-ba32-359df48eb803.png"
          className="h-full w-full object-cover"
          alt="IT professional examining server infrastructure in a modern data center"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1946]/70" />
      </figure>
    </section>
  );
}
