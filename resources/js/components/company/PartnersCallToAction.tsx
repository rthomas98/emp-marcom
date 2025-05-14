"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function PartnersCallToAction() {
  return (
    <section id="partners-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Partner with Empuls3 for Success
            </h1>
          </div>
          <div>
            <p className="text-white md:text-md">
              Join us in driving innovation and delivering exceptional
              solutions. Explore how our strategic partnerships can elevate your
              business to new heights.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/company/partnerships"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
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
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_Business_people_startup_and_mee_3dd8c795-8b26-4123-83bf-cb2cfe12617d_2.png"
          className="h-full w-full object-cover"
          alt="Business people in a meeting"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
