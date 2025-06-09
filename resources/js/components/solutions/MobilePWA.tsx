import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobilePWA() {
  return (
    <section id="mobile-pwa" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-pwa-heading">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <header>
            <p id="mobile-pwa-subheading" className="mb-3 font-semibold text-white md:mb-4">
              Boutique PWA Development
            </p>
            <h2 id="mobile-pwa-heading" className="text-4xl font-bold font-header text-white md:text-5xl lg:text-6xl">
              Personalized Progressive Web Apps with Senior Expertise
            </h2>
          </header>
          <div>
            <p className="mb-6 text-white/90 md:mb-8 md:text-lg">
              As a specialized micro agency, we deliver Progressive Web Apps with direct access to our senior developers. Our boutique team merges the best features of web and mobile applications to create fast, reliable, and engaging user experiences on any device—with the personalized attention and faster implementation that larger firms simply can't match.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              <article aria-labelledby="pwa-performance-heading">
                <h3 id="pwa-performance-heading" className="mb-3 text-xl leading-[1.4] font-bold font-header text-white md:mb-4 md:text-2xl">
                  Enhanced Performance
                </h3>
                <p className="text-white/90">
                  Our senior developers build PWAs that load quickly and perform exceptionally well, ensuring users stay engaged regardless of their internet connection—all with the focused attention of our boutique team.
                </p>
              </article>
              <article aria-labelledby="pwa-compatibility-heading">
                <h3 id="pwa-compatibility-heading" className="mb-3 text-xl leading-[1.4] font-bold font-header text-white md:mb-4 md:text-2xl">
                  Cross-Platform Compatibility
                </h3>
                <p className="text-white/90">
                  Experience the micro agency advantage with PWAs that connect with users seamlessly across all devices, eliminating the need for separate apps while maintaining the personalized approach that only a boutique team can provide.
                </p>
              </article>
            </div>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="PWA development navigation">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                aria-label="Learn more about our PWA solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                aria-label="Get started with PWA development"
              >
                Get Started
                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0" role="img" aria-labelledby="mobile-pwa-heading mobile-pwa-subheading">
        <img
          src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_145993e3-2092-4107-aff9-f6d916f76c36_1.png"
          className="size-full object-cover"
          alt="Development team working on Progressive Web Apps"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#BD1550]/80" aria-hidden="true" />
      </div>
    </section>
  );
}
