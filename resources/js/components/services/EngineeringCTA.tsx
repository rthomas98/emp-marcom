"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function EngineeringCTA() {
  return (
    <section id="engineering-cta" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-6xl">
              Transform Your Business Today
            </h2>
            <p className="text-gray-700 md:text-md">
              Contact us today for personalized expert guidance in software
              engineering and IT consulting that's specifically tailored to meet
              your unique needs and goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                Connect With Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                More About Us
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_1.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Diverse team collaborating on software solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
