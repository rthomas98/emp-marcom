"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Users, Headphones, ChevronRight } from "lucide-react";

export function ManagedITTeams() {
  return (
    <section id="managed-it-teams" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="IT team leader shaking hands with client"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Team Support</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Senior IT Specialists for Your Success
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              As a specialized micro agency, our Managed IT & Support Services provide personalized assistance with direct access to senior specialists. Unlike larger firms where your needs might be handled by junior staff, our boutique team ensures you receive faster response times and more dedicated attention—allowing you to scale efficiently and focus on your core business without the overhead of traditional IT providers.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <Users className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Direct Access to Senior Specialists
                </h6>
                <p className="text-gray-700">
                  Work directly with our senior IT specialists who enhance your team's capabilities with personalized solutions and faster implementation times than larger firms can offer.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <Headphones className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Boutique IT Support
                </h6>
                <p className="text-gray-700">
                  Experience the micro agency advantage with personalized troubleshooting and maintenance that keeps your systems running smoothly—with faster response times and more dedicated attention than larger firms.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
