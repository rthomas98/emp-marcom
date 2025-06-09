import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MvpApproach() {
  return (
    <section id="mvp-approach" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-approach-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <figure className="order-2 md:order-1">
            <img
              src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
              className="w-full rounded-image object-cover"
              alt="Diverse team of designers and developers collaborating on MVP development"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">A diverse team collaborating on MVP development using agile methodologies</figcaption>
          </figure>
          <div className="order-1 md:order-2">
            <p id="mvp-approach-subtitle" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Innovate</p>
            <h2 id="mvp-approach-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Crafting MVPs for Rapid Market Entry
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-lg">
              Our MVP & Product Development services are designed to help
              startups and businesses launch their ideas swiftly. We prioritize
              user-centric design to ensure your product resonates with your
              target audience.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <article aria-labelledby="user-focused-heading">
                <h3 id="user-focused-heading" className="mb-3 text-xl leading-[1.4] font-bold font-header text-primary md:mb-4 md:text-2xl">
                  User Focused
                </h3>
                <p className="text-gray-700">
                  Engaging designs that focus on user experience and encourage
                  product adoption.
                </p>
              </article>
              <article aria-labelledby="agile-approach-heading">
                <h3 id="agile-approach-heading" className="mb-3 text-xl leading-[1.4] font-bold font-header text-primary md:mb-4 md:text-2xl">
                  Agile Approach
                </h3>
                <p className="text-gray-700">
                  Rapid iterations that adapt to feedback, ensuring your product
                  meets market needs.
                </p>
              </article>
            </div>
            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="MVP approach navigation">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our MVP solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Start an MVP development project with us"
              >
                Start A Project
                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
