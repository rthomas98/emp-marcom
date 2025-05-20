"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function CaseStudiesCta() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-4xl font-bold text-secondary md:mb-6 md:text-5xl lg:text-6xl">
              Transform Your Business Today
            </h2>
            <p className="md:text-md text-gray-700">
              Discover how our clients achieved success. Contact us for your
              personalized consultation today!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md border border-primary bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_31b61ffe-cc01-4adc-81dd-e6e0a1f5674e_1.png"
              className="w-full rounded-lg object-cover border-0"
              alt="Digital transformation solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesCta;
