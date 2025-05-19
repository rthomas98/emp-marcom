"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Check } from "lucide-react";

export function EngineeringSolutions() {
  return (
    <section id="engineering-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
              className="w-full rounded-lg object-cover"
              alt="Software engineers working on custom solutions"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique Software Engineering
            </p>
            <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Solutions with Senior Expertise
            </h2>
            <p className="mb-5 text-gray-700 md:mb-6 md:text-md">
              As a specialized micro agency, Empuls3 creates truly personalized software solutions that address your unique challenges. Unlike larger firms where your project might be handed off to junior staff, our senior specialists work directly with you, combining technical guidance with innovative engineering practices to deliver exceptional results—with faster implementation times and more dedicated attention.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                </div>
                <p className="text-gray-700">
                  Direct access to senior engineers creating high-quality, scalable software precisely tailored to your business needs—with the personalized attention only a boutique agency can provide.
                </p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                </div>
                <p className="text-gray-700">
                  Boutique consulting with senior specialists for effective system architecture and design—delivering faster implementation without the overhead of larger firms.
                </p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                </div>
                <p className="text-gray-700">
                  Our micro agency transforms your ideas into robust software solutions with direct collaboration and personalized attention throughout the entire process.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#BD1550] hover:underline"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
