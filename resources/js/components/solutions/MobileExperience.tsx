import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Smartphone, Layout, Maximize, Zap } from "lucide-react";

export function MobileExperience() {
  return (
    <section id="mobile-experience" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Seamless</p>
            <h2 className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
              Elevate Your Mobile Experience with Innovation
            </h2>
            <p className="md:text-md text-gray-700">
              Our mobile and cross-platform solutions prioritize user experience
              by delivering intuitive interfaces. Enjoy smooth navigation that
              keeps users engaged and satisfied.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[#1F1946] hover:text-[#BD1550] text-base font-medium"
              >
                Sign Up <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10">
                  <Smartphone className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Intuitive Interfaces for All Devices
              </h3>
              <p className="text-gray-700">
                Our innovative designs guarantee a seamless and consistent user
                experience, no matter which platform you choose to use.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10">
                  <Layout className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Seamless Navigation for User Engagement
              </h3>
              <p className="text-gray-700">
                By making it simple for users to locate what they need, we can
                significantly enhance their overall experience and retention
                rates.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10">
                  <Maximize className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Responsive Design for Every Screen Size
              </h3>
              <p className="text-gray-700">
                Our applications are designed to adapt seamlessly to a variety
                of devices, ensuring an optimal user experience no matter the
                platform or screen size.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD1550]/10">
                  <Zap className="h-6 w-6 text-[#BD1550]" />
                </div>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Consistent Performance Across Platforms
              </h3>
              <p className="text-gray-700">
                We deliver reliable functionality that consistently performs
                well in any environment, ensuring a seamless experience for
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
