"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ManagedITCTA() {
  return (
    <section id="managed-it-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 mx-auto">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Get Your IT Support Today
          </h2>
          <p className="text-white md:text-md">
            Reach out to us today to discuss a customized support plan designed
            specifically for your needs. Our goal is to help you drive growth
            and achieve lasting success for your business. Let's work together
            to create a strategy that works for you!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
            >
              Inquire
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_Empty_developer_work_stations_in_a_modern_office_w_249ca82d-c4b9-4af2-9af8-aae352b63f75.png"
          className="h-full w-full object-cover"
          alt="Modern IT office workspace"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
