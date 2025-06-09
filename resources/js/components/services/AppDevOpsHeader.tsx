"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function AppDevOpsHeader() {
  return (
    <section id="app-devops-header" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-heading">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <header>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique DevOps Services
            </p>
            <h1 id="devops-heading" className="text-5xl font-bold text-[#1F1946] md:text-6xl lg:text-7xl">
              Personalized DevOps Solutions with Senior Expertise
            </h1>
          </header>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 delivers personalized Application and DevOps services with direct access to our senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures streamlined CI/CD pipelines and infrastructure automation with faster implementation times and more dedicated attention.
            </p>
            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="DevOps services navigation">
              <Link
                href="#app-devops-services"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our DevOps services"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about DevOps services"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[1fr_1.5fr_1fr] sm:gap-8" aria-label="DevOps team images">
          <figure className="mt-0 w-full sm:mt-[70%]">
            <img
              className="aspect-square h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
              alt="DevOps engineers collaborating on code"
              width="400"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">DevOps engineers collaborating on infrastructure code</figcaption>
          </figure>
          <figure className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
              alt="Software developer working on application"
              width="400"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">Software developer implementing CI/CD pipeline</figcaption>
          </figure>
          <figure className="w-full">
            <img
              className="aspect-[2/3] h-full w-full rounded-lg border border-gray-200 object-cover"
              src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_951e0ed1-e092-48e3-802a-9bc4e19c7af2.png"
              alt="Web development team discussing project"
              width="400"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">Web development team discussing DevOps implementation strategy</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
