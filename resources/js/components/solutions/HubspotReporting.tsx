"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, BarChart2, PieChart, ArrowRightLeft, Layers } from "lucide-react";

export function HubspotReporting() {
  return (
    <section id="hubspot-reporting" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-reporting-heading">
      <div className="container mx-auto">
        <header className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p id="hubspot-reporting-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique HubSpot Reporting</p>
            <h2 id="hubspot-reporting-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Reporting with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, we transform your data into actionable insights with personalized reporting solutions. Our senior specialists work directly with you to create tailored dashboards that provide clarity and drive informed decision-making—with the dedicated attention and faster implementation that larger firms simply can't match.
            </p>
          </div>
        </header>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <article className="flex flex-col items-center text-center" aria-labelledby="tailored-dashboards-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <BarChart2 className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="tailored-dashboards-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                Tailored Dashboards
              </h3>
              <p className="text-gray-700">
                Work directly with our senior specialists to create dashboards that perfectly reflect your unique business metrics and KPIs—with the personalized attention that only a boutique agency can provide.
              </p>
            </article>
            <article className="flex flex-col items-center text-center" aria-labelledby="actionable-insights-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <PieChart className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="actionable-insights-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                Actionable Insights
              </h3>
              <p className="text-gray-700">
                Our boutique team helps you leverage data-driven insights to enhance your strategies and improve overall performance, with direct access to senior expertise throughout the entire process.
              </p>
            </article>
          </div>
          <figure className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/site-images/rob_thomas23_African_American_Web_developers_using_a_computer_t_be2a97fe-d00e-41c1-ad43-4bffd775a774.png"
              alt="HubSpot specialists analyzing custom reporting dashboard with client"
              className="h-auto w-full rounded-lg object-cover"
              width="600"
              height="450"
              loading="lazy"
            />
            <figcaption className="sr-only">HubSpot reporting specialists working with customized dashboards</figcaption>
          </figure>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <article className="flex flex-col items-center text-center" aria-labelledby="seamless-integration-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <ArrowRightLeft className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="seamless-integration-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                Seamless Integration
              </h3>
              <p className="text-gray-700">
                As a micro agency, we provide faster integration with your existing systems for a unified view of your operations, without the overhead and complexity of larger firms.
              </p>
            </article>
            <article className="flex flex-col items-center text-center" aria-labelledby="user-friendly-interface-heading">
              <div className="mb-5 md:mb-6" aria-hidden="true">
                <Layers className="h-12 w-12 text-[#BD1550]" />
              </div>
              <h3 id="user-friendly-interface-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                User-Friendly Interface
              </h3>
              <p className="text-gray-700">
                Our boutique team creates intuitive designs that ensure everyone can navigate and utilize reports effectively, with personalized training from our senior specialists.
              </p>
            </article>
          </div>
        </div>
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20" aria-label="HubSpot reporting navigation">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
            aria-label="Start a HubSpot reporting project"
          >
            Start A Project
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 py-1 px-2 rounded-md"
            aria-label="Get answers to questions about HubSpot reporting"
          >
            Have More Questions? <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
