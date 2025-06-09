import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MvpScalability() {
  return (
    <section id="mvp-scalability" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-scalability-heading">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-md">
          <p className="mb-3 font-semibold text-white md:mb-4" id="mvp-scalability-subheading">
            Scalability
          </p>
          <h2 id="mvp-scalability-heading" className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
            Empower Your Growth with Scalable Solutions
          </h2>
          <p className="text-white/90 md:text-lg">
            Our MVP and product development services focus on creating scalable
            architectures that adapt to your evolving business needs. With a
            strong foundation, your product can grow seamlessly, ensuring
            long-term success.
          </p>
          <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Scalability section navigation">
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              aria-label="Learn more about our solutions"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              aria-label="Start a project with us"
            >
              Start A Project
              <ChevronRight className="ml-1 size-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
      <div className="absolute inset-0 z-0" role="img" aria-labelledby="mvp-scalability-subheading mvp-scalability-heading">
        <img
          src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
          alt="Developers collaborating on scalable software architecture"
          className="absolute inset-0 size-full object-cover"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#BD1550]/80" aria-hidden="true" />
      </div>
    </section>
  );
}
