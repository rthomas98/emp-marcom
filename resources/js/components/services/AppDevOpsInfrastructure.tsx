"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Server, Scale, DollarSign, Zap, ChevronRight } from "lucide-react";

export function AppDevOpsInfrastructure() {
  return (
    <section id="app-devops-infrastructure" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-white md:mb-4">
            Streamlined processes enhance overall productivity levels.
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Streamline Your Infrastructure with Automation
          </h2>
          <p className="text-white md:text-md">
            Automating your infrastructure enhances scalability and operational
            efficiency. Experience seamless integration and faster deployment
            cycles.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Benefits of Infrastructure Automation
            </h3>
            <p className="text-white">
              Reduce manual errors and improve deployment speed with automated
              infrastructure solutions.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <Scale className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Scalability for Growing Businesses
            </h3>
            <p className="text-white">
              Easily scale your applications to meet increasing demand without
              compromising performance.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <DollarSign className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Cost-Effective Resource Management
            </h3>
            <p className="text-white">
              Optimize resource usage and reduce operational costs through
              intelligent automation.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Get Started with Automation Today
            </h3>
            <p className="text-white">
              Transform your infrastructure management with our expert
              automation services tailored for your needs.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-white hover:text-[#BD1550]"
          >
            Contact Us
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_developer_standing_near_a_server__d9ad6d27-075f-4765-ba32-359df48eb803.png"
          className="h-full w-full object-cover"
          alt="Developer working with server infrastructure"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
