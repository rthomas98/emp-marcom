"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Zap, Users } from "lucide-react";

export function HubspotProcess() {
  return (
    <section id="hubspot-process" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-process-heading">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <header>
            <p id="hubspot-process-subheading" className="mb-3 font-semibold text-white md:mb-4">
              Boutique HubSpot Automation
            </p>
            <h2 id="hubspot-process-heading" className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Personalized Process Automation with Senior Expertise
            </h2>
          </header>
          <div>
            <p className="mb-6 text-white md:mb-8 md:text-md">
              As a specialized micro agency, we enhance your business efficiency through personalized automated workflows and lead nurturing. Our senior HubSpot specialists work directly with you to create custom solutions that ensure personalized customer engagement at every touchpoint—with the dedicated attention and faster implementation that larger firms simply can't match.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <article aria-labelledby="boost-efficiency-heading">
                <div className="mb-3 md:mb-4" aria-hidden="true">
                  <Zap className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h3 id="boost-efficiency-heading" className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Boost Efficiency
                </h3>
                <p className="text-white">
                  Work directly with our senior specialists to automate repetitive tasks, allowing you to focus on what truly matters for your business growth—all with the personalized attention that only a boutique agency can provide.
                </p>
              </article>
              <article aria-labelledby="personalized-engagement-heading">
                <div className="mb-3 md:mb-4" aria-hidden="true">
                  <Users className="h-12 w-12 text-[#BD1550]" />
                </div>
                <h3 id="personalized-engagement-heading" className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Personalized Engagement
                </h3>
                <p className="text-white">
                  Our boutique team creates tailored experiences for your customers that drive loyalty and satisfaction, with the direct access to senior expertise that ensures your specific business needs are met without the overhead of larger agencies.
                </p>
              </article>
            </div>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot process navigation">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our HubSpot process automation"
              >
                Learn More
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0" role="img" aria-label="Background image of team collaborating on HubSpot solutions">
        <img
          src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
          className="absolute inset-0 size-full object-cover"
          alt="Team of professionals collaborating on HubSpot automation solutions"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
      </div>
    </section>
  );
}
