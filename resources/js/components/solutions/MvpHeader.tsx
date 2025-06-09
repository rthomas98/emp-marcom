import React from "react";
import { Link } from "@inertiajs/react";

export function MvpHeader() {
  return (
    <section id="mvp-header" className="px-[5%] py-12 md:py-16 lg:py-20" aria-labelledby="mvp-header-title">
      <div className="container mx-auto relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-start justify-center p-8 md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-md">
            <p className="mb-3 font-semibold text-white md:mb-4">
              Boutique MVP Development
            </p>
            <h1 id="mvp-header-title" className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Personalized MVP Solutions with Senior Expertise
            </h1>
            <p className="text-white md:text-lg">
              As a specialized micro agency, we deliver personalized MVP and product development with direct access to our senior developers. From concept to launch, our boutique team helps startups and enterprises validate ideas faster and build scalable solutions with the focused attention and quicker turnaround that larger firms simply can't match.
            </p>
          </div>
          <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="MVP development navigation">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              aria-label="Start your MVP development project"
            >
              Start Your Project
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Explore our MVP development solutions"
            >
              Explore Solutions
            </Link>
          </nav>
        </div>
        <div className="absolute inset-0 z-0" role="img" aria-label="Team of professionals working on MVP development in a modern office">
          <img 
            src="/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_0.png" 
            className="size-full object-cover" 
            alt="MVP development team" 
            width="1200"
            height="800"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1F1946]/70" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
