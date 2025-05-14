"use client";

import React from "react";
import { Code, Server, Lightbulb } from "lucide-react";

export function EngineeringExpertise() {
  return (
    <section id="engineering-expertise" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Expert Full-Stack Development for Seamless Front-End and Back-End
              Solutions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <Code className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Elevate Your Business with Software Solutions
            </h3>
            <p className="text-gray-700">
              Our comprehensive full-stack development services guarantee a
              seamless and efficient digital experience for all users.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Custom IT Consulting for Strategic Technology Support
            </h3>
            <p className="text-gray-700">
              Utilize our extensive IT consulting expertise to successfully
              navigate through complex technology landscapes with confidence.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <Lightbulb className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Innovative Solutions for Modern Software Challenges
            </h3>
            <p className="text-gray-700">
              Our innovative engineering solutions are specifically crafted to
              address the distinct needs and challenges of your particular
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
