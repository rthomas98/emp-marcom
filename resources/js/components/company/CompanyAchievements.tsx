"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Award, Clock, Zap } from "lucide-react";

export function CompanyAchievements() {
  return (
    <section id="company-achievements" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Agency Achievements</p>
              <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Micro Agency Excellence Since 2009
              </h2>
              <p className="text-gray-700 md:text-md">
                Since our founding in 2009 by Robert Thomas, Empuls3 has consistently delivered exceptional results for global leaders, including Warner Brothers Discovery, Shell, and Samsung. As a specialized micro agency, our boutique team provides direct access to senior specialists—ensuring we meet client needs with faster implementation times and more dedicated attention than larger firms can offer, all without sacrificing quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Award className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Specialists
              </h3>
              <p className="text-gray-700">
                As a specialized micro agency, we take great pride in providing direct access to our senior specialists who deliver effective solutions with faster implementation times and more personalized attention than larger firms can offer—all while upholding the highest standards of quality and excellence.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Clock className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                The Micro Agency Advantage
              </h3>
              <p className="text-gray-700">
                Our strong partnerships with leading industry giants clearly demonstrate the micro agency advantage—providing personalized solutions with senior expertise and faster implementation times without the overhead of larger firms.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Solutions with Senior Expertise
              </h3>
              <p className="text-gray-700">
                Our boutique approach enables our senior specialists to provide truly personalized solutions—executing tasks with faster implementation times and more dedicated attention than larger firms can offer while maintaining our strong commitment to quality standards.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link
              href="/company/case-studies"
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
    </section>
  );
}
