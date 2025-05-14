"use client";

import React from "react";
import { Award, Zap } from "lucide-react";

export function PartnersHighlight() {
  return (
    <section id="partners-highlight" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Empuls3 and Samsung: A Partnership for Innovative Technology
              Solutions
            </h1>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              Empuls3 has collaborated with Samsung to deliver cutting-edge
              technology solutions that enhance operational efficiency. This
              partnership leverages our technical expertise and Samsung's
              industry leadership to drive innovation and growth.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10 text-[#BD1550] md:mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Collaborative Innovation
                </h6>
                <p className="text-gray-700">
                  Together, we create transformative solutions that meet
                  evolving market demands.
                </p>
              </div>
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10 text-[#BD1550] md:mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Proven Success
                </h6>
                <p className="text-gray-700">
                  Our partnership has resulted in successful projects that
                  deliver measurable business impact.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
              className="w-full rounded-lg object-cover"
              alt="African American team in a modern office discussing technology solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
