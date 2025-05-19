"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ServicesCTA() {
  return (
    <section id="services-cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1F1946]">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Professional Services</p>
          <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
            Experience the Micro Agency Advantage
          </h2>
          <p className="mb-8 text-gray-300 md:text-md">
            Let's discuss how our boutique services can help you achieve your business goals with direct access to senior specialists. Unlike larger firms, our micro agency provides personalized attention, faster implementation, and more dedicated support—without the overhead and complexity that comes with bigger agencies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/services/software-engineering-it-consulting" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
