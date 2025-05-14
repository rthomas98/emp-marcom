import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MvpApproach() {
  return (
    <section id="mvp-approach" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
              className="w-full rounded-image object-cover"
              alt="MVP Development Team"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Innovate</p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Crafting MVPs for Rapid Market Entry
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-lg">
              Our MVP & Product Development services are designed to help
              startups and businesses launch their ideas swiftly. We prioritize
              user-centric design to ensure your product resonates with your
              target audience.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-xl leading-[1.4] font-bold font-header text-primary md:mb-4 md:text-2xl">
                  User Focused
                </h6>
                <p className="text-gray-700">
                  Engaging designs that focus on user experience and encourage
                  product adoption.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-xl leading-[1.4] font-bold font-header text-primary md:mb-4 md:text-2xl">
                  Agile Approach
                </h6>
                <p className="text-gray-700">
                  Rapid iterations that adapt to feedback, ensuring your product
                  meets market needs.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none"
              >
                Start A Project
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
