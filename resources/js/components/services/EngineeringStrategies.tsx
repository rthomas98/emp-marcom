"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, LayoutTemplate, Code, Zap } from "lucide-react";

export function EngineeringStrategies() {
  return (
    <section id="engineering-strategies" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Guidance
            </p>
            <h2 className="text-5xl font-bold text-white md:text-5xl lg:text-6xl">
              Tailored Strategies for Your Technology Needs
            </h2>
          </div>
          <p className="text-white md:text-md">
            Our expert team provides personalized technical guidance to help you
            navigate complex technology landscapes. We analyze your existing
            systems and recommend strategies that align with your business
            goals. With our support, you can optimize your technology stack for
            maximum efficiency and effectiveness.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full gap-6">
            <LayoutTemplate 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                System Architecture Solutions
              </h3>
              <p className="text-white">
                We create strong and adaptable architectures specifically
                designed to meet your unique needs.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-6">
            <Code 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Modern Engineering Solutions
              </h3>
              <p className="text-white">
                Our innovative engineering solutions enhance efficiency and
                drive progress forward.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-6">
            <Zap 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Unlock Your Tech Potential
              </h3>
              <p className="text-white">
                Join us in revolutionizing and enhancing your technology
                landscape for better results.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20">
          <Link 
            href="/services/software-engineering-it-consulting#services" 
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-white hover:underline"
          >
            Contact Us
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
          className="h-full w-full object-cover"
          alt="Team discussing technology strategies"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
