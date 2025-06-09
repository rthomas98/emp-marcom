"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Code, Database, Server, ChevronRight } from "lucide-react";

export function EngineeringServices() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <header className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Expertise</p>
          <h2 id="services-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-gray-700 md:text-md">
            Our software engineering and IT consulting services are designed to help your 
            business leverage technology effectively, streamline operations, and drive growth.
          </p>
        </header>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8" aria-labelledby="software-dev-heading">
            <div className="mb-4">
              <Code className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="software-dev-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              Custom Software Development
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              We build tailored software solutions that address your specific business 
              challenges and requirements, ensuring optimal performance and scalability.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about custom software development"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
          
          <article className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8" aria-labelledby="database-design-heading">
            <div className="mb-4">
              <Database className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="database-design-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              Database Design & Optimization
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              Our experts design and optimize database systems to ensure efficient data 
              storage, retrieval, and management, enhancing your application performance.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about database design and optimization"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
          
          <article className="flex flex-col rounded-lg border border-gray-200 p-6 md:p-8" aria-labelledby="infrastructure-heading">
            <div className="mb-4">
              <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="infrastructure-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:text-2xl">
              IT Infrastructure Consulting
            </h3>
            <p className="mb-6 flex-grow text-gray-700">
              We provide strategic guidance on IT infrastructure planning, implementation, 
              and management to support your business objectives and growth plans.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about IT infrastructure consulting"
            >
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
