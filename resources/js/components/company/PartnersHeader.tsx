"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function PartnersHeader() {
  return (
    <section id="partners-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <div>
            <h1 className="text-5xl font-bold text-[#1F1946] md:text-6xl lg:text-7xl">
              Strategic Partnerships for Business Growth
            </h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="text-gray-700 md:text-md">
              Empuls3 partners with industry leaders to deliver comprehensive technology solutions that drive innovation and business success. Our collaborative approach ensures that our clients receive the best possible outcomes through combined expertise and resources.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="#partner-benefits"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.33fr] items-start gap-6 sm:gap-8 md:gap-16">
          <div className="mt-[10%] w-full">
            <img
              className="aspect-[3/2] h-full w-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
              alt="Team collaborating on digital marketing strategy"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png"
              alt="Diverse business team in discussion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
