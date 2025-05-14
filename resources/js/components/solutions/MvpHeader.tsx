import React from "react";
import { Link } from "@inertiajs/react";

export function MvpHeader() {
  return (
    <section id="mvp-header" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-start justify-center p-8 md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-md">
            <h1 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Transforming Ideas into Successful Products
            </h1>
            <p className="text-white md:text-lg">
              From concept to launch, our MVP and product development services help startups and enterprises validate ideas quickly and build scalable solutions that drive business growth.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Start Your Project
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_0.png" 
            className="size-full object-cover" 
            alt="MVP development team" 
          />
          <div className="absolute inset-0 bg-[#1F1946]/70" />
        </div>
      </div>
    </section>
  );
}
