import React from "react";
import { Link } from "@inertiajs/react";

export function SolutionsHeader() {
  return (
    <section
      id="solutions-header"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
      aria-labelledby="solutions-heading"
    >
      <div className="order-2 lg:order-1">
        <img
          src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
          alt="Team of developers working on software solutions"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
          loading="lazy"
          width="1200"
          height="800"
        />
      </div>
      <div className="order-1 mx-[5%] sm:max-w-md md:justify-self-start lg:order-2 lg:mr-[5vw] lg:ml-20">
        <h1 id="solutions-heading" className="mb-5 text-5xl font-bold font-header text-primary md:mb-6 md:text-6xl lg:text-7xl">
          Boutique Development Solutions with Personal Attention
        </h1>
        <p className="text-gray-700 md:text-lg">
          As a specialized micro agency, Empuls3 delivers tailored development solutions with the personalized attention that larger firms simply can't match. Our senior team works directly with you throughout your project, ensuring exceptional quality, faster turnaround times, and a truly collaborative experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="Solutions page navigation">
          <Link
            href="/company/about"
            className="inline-flex h-10 items-center justify-center rounded-md bg-accent-pink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2"
            aria-label="Learn about who we are at Empuls3"
          >
            Who We Are
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Contact us about other services not listed"
          >
            Need Another Service?
          </Link>
        </div>
      </div>
    </section>
  );
}
