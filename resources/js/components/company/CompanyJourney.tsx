"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Award, Target } from "lucide-react";

export function CompanyJourney() {
  return (
    <section id="company-journey" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Empuls3</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              A Reflection on Our Journey Up Until Now
            </h2>
            <p className="text-gray-700 md:text-md">
              Since 2019, we have been dedicated to empowering businesses by
              providing innovative solutions tailored to their unique needs,
              helping them thrive in an ever-evolving marketplace and achieve
              their goals effectively.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <Target className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-3xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-4xl lg:text-5xl">
                Our Vision and Core Values for a Better Future
              </h3>
              <p className="text-gray-700">
                Our commitment is to achieve excellence and foster innovation
                while delivering customer-centric solutions in every single
                project we undertake, ensuring satisfaction and success for our
                clients.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/company/values"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline"
              >
                Join Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <Award className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-3xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-4xl lg:text-5xl">
                Our Achievements and Notable Milestones
              </h3>
              <p className="text-gray-700">
                We are proud to be recognized for our significant contributions
                to innovative technology solutions across diverse industries and
                global leadership. Since our founding, we have consistently delivered
                exceptional results and built lasting partnerships with our clients.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/company/achievements"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Explore
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
      </div>
    </section>
  );
}
