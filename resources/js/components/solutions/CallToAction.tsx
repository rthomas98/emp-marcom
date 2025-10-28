import React from "react";
import { Link } from "@inertiajs/react";

export function CallToAction() {
  return (
    <section id="call-to-action" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="call-to-action-heading">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
          <h2 id="call-to-action-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Ready to Stop Losing Money to Bad Software?
          </h2>
          <p className="text-gray-700 md:text-lg">
            Dallas businesses save an average of $50K per year with our solutions. 
            Limited to 5 new clients per month for personalized attention. Get your 
            free tech audit ($2,500 value) and see exactly what's broken.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent-pink px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 min-h-[44px]"
            >
              Get My Free Tech Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-11 items-center justify-center rounded-md border-2 border-primary bg-transparent px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px]"
            >
              See How We Saved Others $2M+
            </Link>
          </div>
        </div>
        <img
          src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
          className="w-full rounded-image object-cover"
          alt="Team of professionals collaborating"
        />
      </div>
    </section>
  );
}
