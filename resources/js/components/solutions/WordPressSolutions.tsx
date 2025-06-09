import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function WordPressSolutions() {
  return (
    <section id="wordpress-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="wordpress-solutions-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <figure>
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_008ed057-ce50-4832-bfc4-21051acf71dd.png"
                className="w-full rounded-image object-cover"
                alt="WordPress development team working"
                width="600"
                height="400"
                loading="lazy"
              />
              <figcaption className="sr-only">Team of web developers collaborating on WordPress solutions</figcaption>
            </figure>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Boutique WordPress Development
            </p>
            <h2 id="wordpress-solutions-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Personalized WordPress Solutions with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a specialized micro agency, we deliver custom WordPress solutions with direct access to our senior developers. Unlike larger agencies where your project might be handed off to junior staff, our boutique team works closely with you from concept to completion, ensuring your unique business needs are met with precision and care.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="WordPress solutions actions">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                aria-label="Learn more about our WordPress solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80 focus:outline-none"
                aria-label="Contact us about WordPress development"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
