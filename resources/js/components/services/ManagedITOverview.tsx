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
              Boutique IT Support
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              The Micro Agency IT Support Advantage
            </h2>
          </div>
          <div>
            <p className="text-white md:text-md">
              As a specialized micro agency, our senior IT specialists provide personalized support services that ensure your business runs smoothly. Unlike larger firms where your tickets might be handled by junior staff, our boutique team delivers faster response times, more dedicated attention, and truly tailored solutions—allowing you to focus on growth while we handle the technical details with the expertise and responsiveness that only a micro agency can provide.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <HelpCircle className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Direct Access to Senior IT Specialists
            </h3>
            <p className="text-white">
              Work directly with our senior IT specialists who resolve issues swiftly and efficiently—minimizing downtime with faster response times than larger firms can match.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Clock className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Personalized Proactive Maintenance
            </h3>
            <p className="text-white">
              Our boutique team provides truly personalized monitoring and updates that keep your systems running at peak performance—with the dedicated attention and faster implementation that larger firms simply can't offer.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Users className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Boutique Team Augmentation
            </h3>
            <p className="text-white">
              Experience the micro agency advantage with our senior specialists who enhance your capabilities—integrating seamlessly with your team and providing personalized support without the overhead of larger firms.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Micro Agency Customization
            </h3>
            <p className="text-white">
              Our boutique team creates truly personalized solutions that meet the unique needs of your organization—delivering maximum value with the focused attention and flexibility that only a specialized micro agency can provide.
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
