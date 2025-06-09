"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, LifeBuoy, Clock } from "lucide-react";

export function ServicesSupport() {
  return (
    <section id="services-support" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="services-support-heading">
      <div className="container mx-auto">
        <header className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Support Services</p>
            <h2 id="services-support-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Support with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, our team of senior specialists provides personalized support to ensure seamless implementation of your projects. Unlike larger firms where your support tickets might be handled by junior staff, our boutique team offers direct access to senior expertise for ongoing support—addressing any challenges you may face with the dedicated attention that larger firms simply can't match.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <article className="flex flex-col rounded-lg border border-gray-200 bg-white" aria-labelledby="boutique-support-heading">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4" aria-hidden="true">
                    <LifeBuoy className="h-12 w-12 text-[#BD1550]" />
                  </div>
                  <h3 id="boutique-support-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Boutique Support Services
                  </h3>
                  <p className="text-gray-700">Direct access to senior specialists ensuring your systems run smoothly and efficiently, with the personalized attention only a micro agency can provide.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/services/managed-it-support-services"
                    className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    aria-label="Learn more about our boutique support services"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
            <article className="flex flex-col rounded-lg border border-gray-200 bg-white" aria-labelledby="technical-assistance-heading">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4" aria-hidden="true">
                    <Clock className="h-12 w-12 text-[#BD1550]" />
                  </div>
                  <h3 id="technical-assistance-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Personalized Technical Assistance
                  </h3>
                  <p className="text-gray-700">Responsive support for your critical systems with direct access to senior specialists—no frustrating tiered support systems like larger firms.</p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/services/managed-it-support-services"
                    className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    aria-label="Learn more about our personalized technical assistance"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white sm:col-span-2 sm:row-span-1 sm:grid-cols-2" aria-labelledby="engineering-solutions-heading">
              <figure className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Software_Engineers_in_a_meeting_7f9202d7-9cb9-49eb-92d7-f5f6966d2594_2.png"
                  alt="Software engineers providing support"
                  className="h-full w-full object-cover"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <figcaption className="sr-only">A diverse team of software engineers collaborating on support solutions</figcaption>
              </figure>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#BD1550]">Engineering</p>
                  <h3 id="engineering-solutions-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Boutique Engineering Solutions
                  </h3>
                  <p className="text-gray-700">
                    Our senior specialists deliver innovative approaches to complex engineering challenges with faster implementation times and more dedicated attention than larger firms can offer.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    aria-label="Contact us about our boutique engineering solutions"
                  >
                    Contact
                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
