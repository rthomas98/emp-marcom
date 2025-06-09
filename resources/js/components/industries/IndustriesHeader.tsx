"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function IndustriesHeader() {
  return (
    <section id="industries-header" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="industries-main-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <header>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique Industry Solutions
            </p>
            <h1 id="industries-main-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Industry Solutions with Senior Expertise
            </h1>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 delivers truly personalized technology solutions designed for the unique challenges of your industry. Unlike larger firms where your project might be handed off to junior staff, our boutique team of senior specialists works directly with you across multiple sectors—ensuring your business receives the dedicated attention and faster implementation times that larger firms simply can't match.
            </p>
            <nav className="mt-6 flex gap-x-4 md:mt-8" aria-label="Industry solutions navigation">
              <Link
                href="/industries/healthcare"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our healthcare industry solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about our industry solutions"
              >
                Contact Us
              </Link>
            </nav>
          </header>
          <figure className="relative flex" aria-label="Industry professionals collaborating on solutions">
            <div className="absolute bottom-0 left-0 w-3/5">
              <img
                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
                className="aspect-square size-full rounded-image object-cover"
                alt="Diverse team of industry professionals collaborating on digital marketing strategies"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="mb-[15%] ml-[15%] w-full">
              <img
                src="/images/site-images/rob_thomas23_Young_black_man_discussing_market_research_with_co_c8d0d42d-962e-4e67-922c-77d03d1bacb2.png"
                className="aspect-square size-full rounded-image object-cover"
                alt="Business professionals analyzing market research data for industry insights"
                width="500"
                height="500"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
