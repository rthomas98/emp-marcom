"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Server, Scale, DollarSign, Zap, ChevronRight } from "lucide-react";

export function AppDevOpsInfrastructure() {
  return (
    <section id="app-devops-infrastructure" className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="infrastructure-heading">
      <div className="relative z-10 container mx-auto">
        <header className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-white md:mb-4">
            Boutique Infrastructure Solutions
          </p>
          <h2 id="infrastructure-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Personalized Infrastructure Automation with Senior Expertise
          </h2>
          <p className="text-white md:text-md">
            As a specialized micro agency, our senior DevOps specialists create truly personalized infrastructure automation solutions. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures enhanced scalability and operational efficiency with faster implementation times and more dedicated attention.
          </p>
        </header>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <article className="flex w-full flex-col" aria-labelledby="senior-engineers-heading">
            <div className="mb-5 md:mb-6">
              <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="senior-engineers-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Direct Access to Senior DevOps Engineers
            </h3>
            <p className="text-white">
              Work directly with our senior specialists to reduce manual errors and improve deployment speed with personalized infrastructure automation solutions that larger firms can't match.
            </p>
          </article>
          <article className="flex w-full flex-col" aria-labelledby="scalability-heading">
            <div className="mb-5 md:mb-6">
              <Scale className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="scalability-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Boutique Scalability Solutions
            </h3>
            <p className="text-white">
              Experience the micro agency advantage with personalized scalability solutions that help your applications meet increasing demand with faster implementation times than larger firms.
            </p>
          </article>
          <article className="flex w-full flex-col" aria-labelledby="resource-heading">
            <div className="mb-5 md:mb-6">
              <DollarSign className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="resource-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Personalized Resource Optimization
            </h3>
            <p className="text-white">
              Our boutique team creates truly personalized resource management solutions that optimize usage and reduce operational costs with the focused attention that only a micro agency can provide.
            </p>
          </article>
          <article className="flex w-full flex-col" aria-labelledby="advantage-heading">
            <div className="mb-5 md:mb-6">
              <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="advantage-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              The Micro Agency Advantage
            </h3>
            <p className="text-white">
              Transform your infrastructure management with our senior specialists who provide personalized automation services with faster implementation times and more dedicated attention than larger firms.
            </p>
          </article>
        </div>
        <nav className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20" aria-label="Infrastructure services navigation">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
            aria-label="Learn more about our infrastructure services"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-white hover:text-[#BD1550] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
            aria-label="Contact us about our infrastructure services"
          >
            Contact Us
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <figure>
          <img
            src="/images/site-images/rob_thomas23_African_American_developer_standing_near_a_server__d9ad6d27-075f-4765-ba32-359df48eb803.png"
            className="h-full w-full object-cover"
            alt="Developer working with server infrastructure"
            width="1920"
            height="1080"
            loading="lazy"
          />
          <figcaption className="sr-only">DevOps engineer working with server infrastructure</figcaption>
        </figure>
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
