"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function AppDevOpsOverview() {
  return (
    <section id="app-devops-services" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-overview-heading">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <header>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              The Micro Agency Advantage
            </p>
            <h2 id="devops-overview-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Personalized DevOps with Senior Expertise
            </h2>
          </header>
          <div>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, our senior DevOps specialists work directly with you through every stage of the process—from initial concept to final deployment. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures you receive personalized attention, faster implementation times, and truly tailored CI/CD pipelines and infrastructure automation solutions without the overhead of traditional agencies.
            </p>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="DevOps services links">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our DevOps services"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Get started with our DevOps services"
              >
                Get Started
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
        <figure>
          <img
            src="/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_2.png"
            className="w-full rounded-lg border border-gray-200 object-cover h-[500px]"
            alt="Software engineers working on application development"
            width="1200"
            height="500"
            loading="lazy"
          />
          <figcaption className="sr-only">DevOps engineers collaborating on CI/CD pipeline implementation</figcaption>
        </figure>
      </div>
    </section>
  );
}
