import React from "react";
import { Link } from "@inertiajs/react";

export function BackendCTA() {
  return (
    <section id="backend-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="backend-cta-heading">
      <div className="relative z-10 container mx-auto">
        <div className="grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h2 id="backend-cta-heading" className="mb-3 text-4xl leading-[1.2] font-bold font-header text-white md:mb-4 md:text-5xl lg:text-6xl">
                Begin Your Backend Journey with Us Today
              </h2>
              <p className="text-white md:text-md">
                Explore the transformative power of our robust backend solutions and
                see how they can significantly enhance your application performance, 
                scalability, and security. Let our expert team help you build the 
                solid foundation your business needs to thrive in today's digital landscape.
              </p>
            </div>
          </div>
          <nav className="flex items-start justify-start gap-4" aria-label="Backend CTA navigation">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              aria-label="Contact us about backend development services"
            >
              Contact Us
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Learn more about our solutions"
            >
              Learn More
            </Link>
          </nav>
        </div>
      </div>
      <div className="absolute inset-0 z-0" role="img" aria-label="Background image of backend development team with overlay">
        <img
          src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
          className="size-full object-cover"
          alt="Backend development team"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
      </div>
    </section>
  );
}
