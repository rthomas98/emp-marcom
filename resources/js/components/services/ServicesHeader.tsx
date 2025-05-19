"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ServicesHeader() {
  return (
    <section id="services-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="ml-[5%]">
          <div className="mb-12 w-full max-w-5xl md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Professional Services</p>
            <h1 className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Services with Senior Expertise
            </h1>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 provides truly personalized solutions with direct access to our senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to improve your business operations and foster sustainable growth—with the dedicated attention and faster implementation that larger firms simply can't match.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link 
                href="/services/software-engineering-it-consulting" 
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-end gap-6 sm:grid-cols-[1fr_0.4fr_0.4fr] sm:gap-8">
          <div className="my-[15%] w-full">
            <img
              className="aspect-[3/2] size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_71aec2e9-67b0-4fb7-8f24-58f13c1e9800.png"
              alt="Professional team collaborating on a project"
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-square size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
              alt="Business professionals in a meeting"
            />
          </div>
          <div className="w-full self-start">
            <img
              className="aspect-[3/4] size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_Two_African_American_business_professionals_shakin_192a73a1-6814-409d-9214-6471b0199cb4.png"
              alt="Business professionals shaking hands"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
