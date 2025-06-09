"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function ServicesHeader() {
  return (
    <section id="services-header" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="services-heading">
      <div className="container mx-auto">
        <div className="ml-[5%]">
          <header className="mb-12 w-full max-w-5xl md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Professional Services</p>
            <h1 id="services-heading" className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Services with Senior Expertise
            </h1>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 provides truly personalized solutions with direct access to our senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to improve your business operations and foster sustainable growth—with the dedicated attention and faster implementation that larger firms simply can't match.
            </p>
            <nav className="mt-6 flex gap-x-4 md:mt-8" aria-label="Services navigation">
              <Link 
                href="/services/software-engineering-it-consulting" 
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our software engineering and IT consulting services"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about our professional services"
              >
                Contact
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
