import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobilePWA() {
  return (
    <section id="mobile-pwa" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Innovate for a brighter, more creative future today.
            </p>
            <h2 className="text-4xl font-bold font-header text-white md:text-5xl lg:text-6xl">
              Seamless Mobile Experiences Across All Platforms
            </h2>
          </div>
          <div>
            <p className="mb-6 text-white/90 md:mb-8 md:text-lg">
              Progressive Web Apps (PWAs) merge the best features of web and
              mobile applications. They deliver fast, reliable, and engaging
              user experiences on any device.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              <div>
                <h3 className="mb-3 text-xl leading-[1.4] font-bold font-header text-white md:mb-4 md:text-2xl">
                  Enhanced Performance
                </h3>
                <p className="text-white/90">
                  PWAs load quickly, ensuring users stay engaged regardless of
                  their internet connection.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl leading-[1.4] font-bold font-header text-white md:mb-4 md:text-2xl">
                  Cross-Platform Compatibility
                </h3>
                <p className="text-white/90">
                  Connect with users seamlessly on any device, eliminating the
                  need for separate apps.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/90 focus:outline-none"
              >
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_145993e3-2092-4107-aff9-f6d916f76c36_1.png"
          className="size-full object-cover"
          alt="Mobile Development Team"
        />
        <div className="absolute inset-0 bg-[#BD1550]/80" />
      </div>
    </section>
  );
}
