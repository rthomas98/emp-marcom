"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Activity, Stethoscope, ChevronRight } from "lucide-react";

export function IndustriesHealthcare() {
  return (
    <section id="industries-healthcare" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Healthcare Solutions</p>
            <h3 className="text-4xl font-bold leading-[1.2] text-[#1F1946] md:text-5xl lg:text-6xl">
              Personalized Healthcare Technology with Senior Expertise
            </h3>
          </div>
          <div>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              As a specialized micro agency, Empuls3 offers truly personalized technology solutions that enhance patient care and streamline healthcare operations. Unlike larger firms where your project might be handed off to junior staff, our boutique team of senior specialists works directly with you—ensuring compliance with industry regulations while driving efficiency with the dedicated attention and faster implementation times that larger firms simply can't match.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Stethoscope className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Patient Care
                </h6>
                <p className="text-gray-700">
                  Work directly with our senior specialists to enhance patient experiences with personalized healthcare technology solutions—delivering better outcomes with faster implementation times than larger firms can offer.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Activity className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Operational Efficiency
                </h6>
                <p className="text-gray-700">
                  Experience the micro agency advantage as our senior specialists help you streamline operations with personalized software and support services—improving efficiency with more dedicated attention than larger firms can provide.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/industries/healthcare"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline"
              >
                Contact
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_0c9ec954-2131-4655-b31f-c9a5c027ba39.png"
          className="w-full rounded-image object-cover"
          alt="Healthcare professionals collaborating"
        />
      </div>
    </section>
  );
}
