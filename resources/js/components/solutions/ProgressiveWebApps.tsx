import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Zap, Smartphone } from "lucide-react";

export function ProgressiveWebApps() {
  return (
    <section id="progressive-web-apps" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-gray-700 md:mb-4">
              Innovative ideas drive progress and inspire change.
            </p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Transform Your Online Presence with PWAs
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-lg">
              Progressive Web Apps provide a fast, reliable, and highly engaging
              user experience. They operate seamlessly across all devices,
              significantly enhancing overall user satisfaction and interaction
              with the content.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Zap className="h-6 w-6 text-[#BD1550]" />
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-primary md:mb-4 md:text-xl">
                  Enhanced Performance
                </h6>
                <p className="text-gray-700">
                  Enjoy incredibly fast load times and seamless interactions
                  that enhance the experience for all your users.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Smartphone className="h-6 w-6 text-[#BD1550]" />
                  </div>
                </div>
                <h6 className="mb-3 text-lg leading-[1.4] font-bold text-primary md:mb-4 md:text-xl">
                  Cross-Platform Compatibility
                </h6>
                <p className="text-gray-700">
                  Connect with your audience seamlessly across all devices for a
                  consistent and engaging experience.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80 focus:outline-none"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
              className="w-full rounded-image object-cover"
              alt="Progressive Web App development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
