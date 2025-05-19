"use client";

import React from "react";
import { Code, Layers } from "lucide-react";

export function ServicesOverview() {
  return (
    <section id="services-overview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">The Micro Agency Advantage</p>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Boutique Application Services with Senior Expertise
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              As a specialized micro agency, our Application Services provide personalized development with direct access to senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to meet your unique business needs and ensure seamless integration with existing systems—delivering enhanced functionality with faster implementation times.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Code className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Custom Development
                </h6>
                <p className="text-gray-700">
                  Work directly with our senior developers to build applications precisely tailored to your business requirements—with the personalized attention and faster turnaround that only a boutique agency can provide.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Layers className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Seamless Integration
                </h6>
                <p className="text-gray-700">
                  Our boutique team ensures seamless integration of new applications with your existing systems, providing direct access to senior specialists throughout the entire process for optimal performance without the overhead of larger firms.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
              className="w-full rounded-lg object-cover"
              alt="Software development team working on custom application"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
