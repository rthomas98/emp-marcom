"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function PartnersOverview() {
  return (
    <section id="partners-overview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Partners</p>
            <h1 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Empuls3: Elevating Solutions Through Strategic Partnerships
            </h1>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              At Empuls3, our partnerships are pivotal in delivering
              comprehensive technology solutions. By collaborating with industry
              leaders, we enhance our offerings and drive innovation.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Collaborative Success
                </h6>
                <p className="text-gray-700">
                  Together, we tackle complex challenges and create exceptional
                  value for our clients.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Innovative Solutions
                </h6>
                <p className="text-gray-700">
                  Our partners empower us to integrate cutting-edge technologies
                  and best practices seamlessly.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="#partner-benefits"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium text-[#BD1550] transition hover:text-[#a01245]"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_An_African_American_team_of_developers_working_col_23a5e847-d8cd-45e5-805c-f2485621fb22.png"
              className="w-full rounded-lg object-cover"
              alt="Team of developers working collaboratively"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
