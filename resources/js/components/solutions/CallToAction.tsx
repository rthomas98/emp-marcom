import React from "react";
import { Link } from "@inertiajs/react";

export function CallToAction() {
  return (
    <section id="call-to-action" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="call-to-action-heading">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
          <h2 id="call-to-action-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Get Started with Empuls3
          </h2>
          <p className="text-gray-700 md:text-lg">
            Elevate your business to new heights by leveraging our expert
            development solutions tailored to your needs. Don't wait any
            longer—schedule a consultation with us today and discover how we can
            help you achieve your goals!
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Contact
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Learn More
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
