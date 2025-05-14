"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Code, Database, Server, ChevronRight } from "lucide-react";

export function EngineeringServices() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Expertise</p>
          <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-gray-700 md:text-md">
            Our software engineering and IT consulting services are designed to help your 
            business leverage technology effectively, streamline operations, and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8">
            <div className="mb-4">
              <Code className="h-12 w-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              Custom Software Development
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              We build tailored software solutions that address your specific business 
              challenges and requirements, ensuring optimal performance and scalability.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8">
            <div className="mb-4">
              <Database className="h-12 w-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              Database Design & Optimization
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              Our experts design and optimize database systems to ensure efficient data 
              storage, retrieval, and management, enhancing your application performance.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8">
            <div className="mb-4">
              <Server className="h-12 w-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              IT Infrastructure Consulting
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              We provide strategic guidance on IT infrastructure planning, implementation, 
              and management to support your business objectives and growth plans.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
