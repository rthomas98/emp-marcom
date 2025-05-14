"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { HelpCircle, Clock, Users, Settings, ChevronRight } from "lucide-react";

export function ManagedITOverview() {
  return (
    <section id="managed-it-services" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Assistance and encouragement in difficult times.
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Comprehensive Managed IT & Support Services
            </h2>
          </div>
          <div>
            <p className="text-white md:text-md">
              Our Managed IT & Support Services ensure your business runs
              smoothly with ongoing maintenance and troubleshooting. We provide
              expert team augmentation to help you scale effectively and address
              challenges proactively. With our dedicated support, you can focus
              on growth while we handle the technical details.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <HelpCircle className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Reliable Troubleshooting for Seamless Operations
            </h3>
            <p className="text-white">
              Our team is always ready to resolve issues swiftly and
              efficiently, minimizing downtime.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Clock className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Proactive Maintenance for Long-Term Success
            </h3>
            <p className="text-white">
              Regular updates and monitoring keep your systems running at peak
              performance, ensuring reliability.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Users className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Expert Team Support On Demand
            </h3>
            <p className="text-white">
              Enhance your capabilities with our skilled professionals, ready to
              integrate with your team.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Tailored Solutions for Every Business
            </h3>
            <p className="text-white">
              We customize our services to meet the unique needs of your
              organization, ensuring maximum value.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
          >
            Ready To Get Started?
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-medium text-white hover:text-[#BD1550]"
          >
            Our Solutions
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_People_sticky_note_and_office_g_cf3e7832-6a5e-48da-9f5b-7dd8a0ac57e4_1.png"
          className="h-full w-full object-cover"
          alt="IT professionals in a modern office environment"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
