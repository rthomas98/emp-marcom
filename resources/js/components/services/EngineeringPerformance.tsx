"use client";

import React from "react";
import { Zap, BarChart, Gauge } from "lucide-react";

export function EngineeringPerformance() {
  return (
    <section id="engineering-performance" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Performance Optimization</p>
            <h2 className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Personalized Performance Solutions with Senior Expertise
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 delivers personalized performance optimization with direct access to our senior engineers. Unlike larger firms where your project might be handed off to junior staff, our boutique team analyzes your architecture and identifies bottlenecks with focused attention—implementing solutions that enhance speed and reliability with faster turnaround times and more dedicated support than larger firms can offer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Direct Access to Senior Performance Engineers
            </h3>
            <p className="text-gray-700">
              Our boutique team provides direct access to senior performance engineers who revolutionize your technology landscape—enhancing efficiency with personalized solutions tailored specifically for your unique needs.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <BarChart className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Boutique Performance Strategies
            </h3>
            <p className="text-gray-700">
              Experience the micro agency advantage with truly personalized performance strategies created by our senior specialists—designed to align perfectly with your unique business goals without the overhead of larger firms.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Gauge className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Personalized Performance Consulting
            </h3>
            <p className="text-gray-700">
              Work directly with our senior specialists to enhance your system's performance and reliability—ensuring it operates at peak potential with the focused attention and faster implementation that only a boutique agency can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
