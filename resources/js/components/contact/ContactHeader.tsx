"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ContactHeader() {
  return (
    <section id="contact-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Got a Software Emergency? We Answer in 2 Hours.
              </h1>
              <p className="text-gray-700 md:text-md">
                Here's the deal: Tell us what's broken, we'll tell you exactly how to fix it. 
                No sales pitch, no jargon, just straight answers from developers who've 
                been solving these problems since 2009.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
                >
                  Get Emergency Help
                </Link>
                <Link
                  href="#schedule-meeting"
                  className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-center font-medium text-[#1F1946] transition hover:bg-[#1F1946] hover:text-white"
                >
                  Book Free Tech Audit
                </Link>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-end sm:grid-cols-[0.4fr_1fr_0.4fr] sm:gap-8">
            <div className="w-full self-start">
              <img
                className="aspect-[3/4] h-full w-full rounded-lg object-cover"
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png"
                alt="Diverse team of professionals"
              />
            </div>
            <div className="my-[15%] w-full">
              <img
                className="my-[10%] aspect-[3/2] h-full w-full rounded-lg object-cover sm:my-0"
                src="/images/site-images/rob_thomas23_An_African_American_team_of_developers_working_col_23a5e847-d8cd-45e5-805c-f2485621fb22.png"
                alt="Team of developers working collaboratively"
              />
            </div>
            <div className="w-full">
              <img
                className="aspect-square h-full w-full rounded-lg object-cover"
                src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
                alt="Team leader shaking hands"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
