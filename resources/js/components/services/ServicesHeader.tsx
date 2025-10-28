"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ServicesHeader() {
  return (
    <section id="services-header" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <div className="ml-[5%]">
          <header className="mb-12 w-full max-w-5xl md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">No Junior Developers, No Excuses</p>
            <h1 id="services-heading" className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Your IT Problems Get Solved by Actual Experts
            </h1>
            <p className="text-gray-700 md:text-md">
              Dallas businesses waste $50K+ every year on tech that doesn't work. We fix something faster—working directly with senior developers who've been solving these problems since 2009. No account managers, no junior teams learning on your dime. Just results, faster.
            </p>
            <nav className="mt-6 flex gap-x-4 md:mt-8" aria-label="Services navigation">
              <Link 
                href="/contact" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#BD1550] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 min-h-[44px]"
                aria-label="Get your free tech audit"
              >
                Get Your Free Tech Audit
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-transparent border-2 border-[#1F1946] px-6 py-2.5 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 min-h-[44px]"
                aria-label="See how we saved others $2M+"
              >
                See How We Saved Others $2M+
              </Link>
            </nav>
          </header>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-end gap-6 sm:grid-cols-[1fr_0.4fr_0.4fr] sm:gap-8" aria-label="Team imagery">
          <figure className="my-[15%] w-full">
            <img
              className="aspect-[3/2] size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_71aec2e9-67b0-4fb7-8f24-58f13c1e9800.png"
              alt="Professional team collaborating on a project"
              width="600"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">A diverse team of professionals collaborating on a project</figcaption>
          </figure>
          <figure className="w-full">
            <img
              className="aspect-square size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
              alt="Business professionals in a meeting"
              width="400"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">Business professionals discussing strategy in a modern office setting</figcaption>
          </figure>
          <figure className="w-full self-start">
            <img
              className="aspect-[3/4] size-full rounded-lg object-cover"
              src="/images/site-images/rob_thomas23_Two_African_American_business_professionals_shakin_192a73a1-6814-409d-9214-6471b0199cb4.png"
              alt="Business professionals shaking hands"
              width="300"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">Two business professionals shaking hands, symbolizing partnership and collaboration</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
