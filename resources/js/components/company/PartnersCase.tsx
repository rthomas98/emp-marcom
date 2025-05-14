"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function PartnersCase() {
  return (
    <section id="partners-case" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Partners</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Empuls3 & Shell Collaboration
            </h2>
            <p className="text-gray-700 md:text-md">Transforming Energy Solutions Together</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <div className="order-first flex flex-col items-stretch overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
              <div>
                <img
                  src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_71aec2e9-67b0-4fb7-8f24-58f13c1e9800.png"
                  alt="Team of professionals collaborating"
                  className="h-64 w-full object-cover md:h-72 lg:h-80"
                />
              </div>
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold text-[#BD1550]">Innovation</p>
                  <h3 className="mb-5 text-3xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-4xl lg:text-5xl">
                    Driving Efficiency in Energy Sector
                  </h3>
                  <p className="text-gray-700">
                    Empuls3 partners with Shell to enhance operational
                    efficiency through cutting-edge technology. Our
                    collaboration focuses on innovative solutions that drive
                    sustainable growth.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
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
                    Explore
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-last flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:grid md:grid-cols-2 lg:order-none">
              <div className="flex w-full items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_0.png"
                  alt="Diverse team collaborating"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold text-[#BD1550]">Synergy</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Empowering the Future of Energy
                  </h3>
                  <p className="text-gray-700">
                    Together, we are redefining energy solutions for a
                    sustainable future through innovative technology.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Link
                      href="/company/partnerships"
                      className="inline-flex items-center justify-center font-medium text-[#BD1550] transition hover:text-[#a01245]"
                    >
                      Join
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-last flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:grid md:grid-cols-2 lg:order-none">
              <div className="flex w-full items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
                  alt="Team leader shaking hands"
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold text-[#BD1550]">Collaboration</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    A Partnership Built on Trust
                  </h3>
                  <p className="text-gray-700">
                    Our partnership with Shell exemplifies our commitment to
                    delivering exceptional value and innovation.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center font-medium text-[#BD1550] transition hover:text-[#a01245]"
                    >
                      Contact
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
