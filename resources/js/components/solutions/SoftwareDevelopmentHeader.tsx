import React from "react";
import { Link } from "@inertiajs/react";

export function SoftwareDevelopmentHeader() {

  return (
    <section id="software-development-header" className="px-[5%] py-12 md:py-16 lg:py-20" aria-labelledby="software-development-heading">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h1 id="software-development-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
                Boutique Software Development with Direct Senior Access
              </h1>
              <p className="text-gray-700 md:text-lg">
                As a specialized micro agency, Empuls3 delivers personalized software development with direct access to our senior developers. We transform your vision into reality through collaborative partnerships that larger firms simply can't offer, combining innovative design with robust architecture for both front-end and back-end excellence.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Software development information links">
                <Link
                  href="/solutions"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Learn more about our software development solutions"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Contact us about your software development needs"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <figure className="relative h-full w-full overflow-hidden rounded-r-lg">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                  alt="Software development team working"
                  className="h-full w-full object-cover"
                  width="800"
                  height="600"
                  loading="lazy"
                />
                <figcaption className="sr-only">Team of diverse software developers collaborating on code</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
