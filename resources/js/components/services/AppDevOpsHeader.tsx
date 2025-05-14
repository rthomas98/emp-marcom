"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function AppDevOpsHeader() {
  return (
    <section id="app-devops-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <div>
            <h1 className="text-5xl font-bold text-[#1F1946] md:text-6xl lg:text-7xl">
              Optimize Your Development with Empuls3 Solutions
            </h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="text-gray-700 md:text-md">
              Empuls3's combined Application and DevOps services empower your
              team to streamline app development and enhance operational
              efficiency. Experience seamless integration of CI/CD pipelines and
              infrastructure automation for scalable solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="#app-devops-services"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[1fr_1.5fr_1fr] sm:gap-8">
          <div className="mt-0 w-full sm:mt-[70%]">
            <img
              className="aspect-square h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
              alt="DevOps engineers collaborating on code"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
              alt="Software developer working on application"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_951e0ed1-e092-48e3-802a-9bc4e19c7af2.png"
              alt="Web development team discussing project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
