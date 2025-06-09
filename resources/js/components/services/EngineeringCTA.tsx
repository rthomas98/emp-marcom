"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function EngineeringCTA() {
  return (
    <section id="engineering-cta" className="bg-white px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="cta-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <header>
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Software Engineering</p>
              <h2 id="cta-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-6xl">
                Experience the Micro Agency Advantage
              </h2>
            </header>
            <p className="text-gray-700 md:text-md">
              Contact us today for direct access to our senior specialists who provide truly personalized software engineering and IT consulting solutions. Unlike larger firms, our boutique micro agency delivers faster implementation times, more dedicated attention, and tailored solutions without the overhead and complexity that comes with bigger agencies.
            </p>
            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Engineering call to action navigation">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Connect with our engineering team"
              >
                Connect With Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our engineering team"
              >
                More About Us
              </Link>
            </nav>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_1.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Diverse team collaborating on software solutions"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">A diverse team of engineers collaborating on software solutions</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
