"use client";

import React from "react";
import { Zap, BarChart, Gauge } from "lucide-react";

export function EngineeringPerformance() {
  return (
    <section id="engineering-performance" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Maximize Efficiency and Performance with Our Tailored Engineering
              Solutions
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-md">
              At Empuls3, we specialize in performance optimization to ensure
              your systems run at peak efficiency. Our expert engineers analyze
              your architecture and identify bottlenecks, implementing solutions
              that enhance speed and reliability. With our guidance, you can
              achieve a seamless user experience and improved operational
              performance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Unlock Your System's Potential with Advanced Performance
              Optimization Strategies
            </h3>
            <p className="text-gray-700">
              Revolutionize your technology landscape and enhance efficiency by
              leveraging our expert solutions tailored for your needs.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <BarChart className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Tailored Solutions for Enhanced System Performance and Scalability
            </h3>
            <p className="text-gray-700">
              Our dedicated team creates tailored strategies specifically
              designed to align perfectly with your unique business goals.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Gauge className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
              Achieve Optimal Performance with Our Comprehensive IT Consulting
              Services
            </h3>
            <p className="text-gray-700">
              Leverage our expertise to enhance your system's performance and
              reliability, ensuring it operates at peak potential consistently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
