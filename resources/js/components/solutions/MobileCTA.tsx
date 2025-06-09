import React from "react";
import { Link } from "@inertiajs/react";

export function MobileCTA() {
  return (
    <section id="mobile-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-cta-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <header>
              <h2 id="mobile-cta-heading" className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
                Unlock Your Mobile Potential
              </h2>
            </header>
            <p className="md:text-md text-gray-700">
              Get in touch with us today to schedule your complimentary
              consultation regarding your mobile development needs and the
              innovative solutions we can provide to help your business thrive
              in a digital world.
            </p>
            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Mobile CTA navigation">
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our mobile solutions"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Contact us about your mobile project"
              >
                Have A Project in Mind?
              </Link>
            </nav>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_1.png"
              className="w-full rounded-lg object-cover"
              alt="Mobile developer working on cross-platform application development"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">A developer working on mobile application development</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
