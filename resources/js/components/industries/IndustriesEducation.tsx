"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function IndustriesEducation() {
  return (
    <section id="industries-education" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Empower</p>
            <h3 className="text-4xl font-bold leading-[1.2] text-[#1F1946] md:text-5xl lg:text-6xl">
              Transforming Education with Innovative Technology Solutions
            </h3>
          </div>
          <div>
            <p className="text-gray-700 md:text-md">
              Empuls3 offers cutting-edge digital solutions designed to enhance
              learning experiences and streamline the management of educational
              institutions. Our expertise in technology empowers educators and
              administrators to leverage data-driven insights for improved
              outcomes. From custom software to e-learning platforms, we provide
              tailored solutions that meet the unique needs of the education
              sector.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/industries/education"
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
          src="/images/site-images/rob_thomas23_African_American_women_having_a_meeting_in_web_dev_fb519bf8-8bb4-48ca-a923-a977b1775635.png"
          className="w-full rounded-lg border border-gray-200 object-cover"
          alt="Educational technology collaboration session"
        />
      </div>
    </section>
  );
}
