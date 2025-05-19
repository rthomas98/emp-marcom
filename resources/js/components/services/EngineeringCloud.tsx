"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Cloud, Upload, Zap } from "lucide-react";

export function EngineeringCloud() {
  return (
    <section id="engineering-cloud" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Boutique Cloud Services
              </p>
              <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                Personalized Cloud Solutions with Senior Expertise
              </h2>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, we elevate your business with personalized cloud integration solutions. Unlike larger firms where your project might be handed off to junior staff, our senior specialists work directly with you to ensure a seamless transition to cloud platforms—significantly enhancing both scalability and operational efficiency with faster implementation times and more dedicated attention.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Cloud className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Cloud Specialists
              </h3>
              <p className="text-gray-700">
                Our boutique team provides direct access to senior cloud specialists who create truly customized strategies for your business—ensuring a smooth and effective cloud adoption process with the personalized attention that only a micro agency can provide.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Upload className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Migration Strategy
              </h3>
              <p className="text-gray-700">
                As a micro agency, we deliver a truly personalized migration strategy with faster implementation times—ensuring minimal disruptions and a smooth transition without the overhead and complexity of larger firms.
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Cloud Optimization
              </h3>
              <p className="text-gray-700">
                Work directly with our senior specialists to utilize advanced cloud technologies that significantly enhance your operational efficiency—with the focused attention and customization that only a boutique agency can deliver.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Start A Project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-[#BD1550] hover:underline"
            >
              Have More Questions?
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
