import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Smartphone, Layout, Maximize, Zap } from "lucide-react";

export function MobileExperience() {
  return (
    <section id="mobile-experience" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-experience-heading">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <header>
            <p id="mobile-experience-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Seamless</p>
            <h2 id="mobile-experience-heading" className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
              Elevate Your Mobile Experience with Innovation
            </h2>
            <p className="md:text-md text-gray-700">
              Our mobile and cross-platform solutions prioritize user experience
              by delivering intuitive interfaces. Enjoy smooth navigation that
              keeps users engaged and satisfied.
            </p>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Mobile experience navigation">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our mobile experience solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Sign up for our mobile development services"
              >
                Sign Up <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </nav>
          </header>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <article aria-labelledby="interfaces-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10" aria-hidden="true">
                  <Smartphone className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 id="interfaces-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Intuitive Interfaces for All Devices
              </h3>
              <p className="text-gray-700">
                Our innovative designs guarantee a seamless and consistent user
                experience, no matter which platform you choose to use.
              </p>
            </article>
            <article aria-labelledby="navigation-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10" aria-hidden="true">
                  <Layout className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 id="navigation-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Seamless Navigation for User Engagement
              </h3>
              <p className="text-gray-700">
                By making it simple for users to locate what they need, we can
                significantly enhance their overall experience and retention
                rates.
              </p>
            </article>
            <article aria-labelledby="responsive-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10" aria-hidden="true">
                  <Maximize className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 id="responsive-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Responsive Design for Every Screen Size
              </h3>
              <p className="text-gray-700">
                Our applications are designed to adapt seamlessly to a variety
                of devices, ensuring an optimal user experience no matter the
                platform or screen size.
              </p>
            </article>
            <article aria-labelledby="performance-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10" aria-hidden="true">
                  <Zap className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 id="performance-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Consistent Performance Across Platforms
              </h3>
              <p className="text-gray-700">
                We deliver reliable functionality that consistently performs
                well in any environment, ensuring a seamless experience for
                users.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
