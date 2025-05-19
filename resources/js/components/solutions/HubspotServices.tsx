"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function HubspotServices() {
  return (
    <section id="hubspot-services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique HubSpot Services</p>
              <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                Personalized HubSpot Solutions with Senior Expertise
              </h2>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, we transform your customer relationship management with personalized HubSpot solutions. Our senior specialists work directly with you to create seamless integrations and automation that enhance your business efficiency—with the dedicated attention and faster implementation that larger firms simply can't match.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_1.png"
                  alt="Secure Data Migration to HubSpot"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Data Migration Services
              </h3>
              <p className="text-gray-700">
                Work directly with our senior HubSpot specialists for seamless and reliable data migration services, ensuring your information is both secure and accurate throughout the process—with the personalized attention that only a micro agency can provide.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png"
                  alt="Tailored HubSpot Solutions for You"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized HubSpot Implementation
              </h3>
              <p className="text-gray-700">
                As a boutique micro agency, our solutions are specifically crafted to address your individual requirements with direct access to senior specialists and faster turnaround times than larger firms can offer.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_2.png"
                  alt="Automate Your Marketing with HubSpot"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Marketing Automation
              </h3>
              <p className="text-gray-700">
                Our senior specialists work directly with you to implement automation tools that enhance and streamline your marketing strategies—delivering improved efficiency and effectiveness with the personalized attention only a micro agency can provide.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link 
              href="/solutions" 
              className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium"
            >
              Sign Up <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
