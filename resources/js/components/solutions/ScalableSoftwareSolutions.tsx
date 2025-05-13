import React from "react";
import { Link } from "@inertiajs/react";
import { Code, Database } from "lucide-react";

export function ScalableSoftwareSolutions() {
  return (
    <section id="scalable-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#BD1550] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">
              Innovate and create new solutions for the future.
            </p>
            <h2 className="mb-5 text-4xl font-bold font-header md:mb-6 md:text-5xl lg:text-6xl">
              Crafting Scalable Software Solutions for Your Business
            </h2>
            <p className="mb-6 md:mb-8 md:text-lg">
              Our software development process is designed to deliver robust and
              scalable solutions tailored to your needs. We focus on both design
              and architecture, ensuring a seamless user experience and
              efficient performance.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Expert Design
                </h6>
                <p className="text-white/90">
                  Transforming ideas into functional designs that drive user
                  engagement and satisfaction.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Architectural Excellence
                </h6>
                <p className="text-white/90">
                  Building a solid foundation for your software to ensure
                  scalability and performance.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#BD1550]"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
              className="w-full rounded-lg object-cover"
              alt="Software development team working on scalable solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
