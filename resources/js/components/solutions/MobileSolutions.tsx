import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobileSolutions() {
  return (
    <section id="mobile-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-solutions-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p id="mobile-solutions-subheading" className="mb-3 font-semibold text-accent-pink md:mb-4">Boutique Mobile Development</p>
            <h2 id="mobile-solutions-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Personalized Mobile Solutions with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a specialized micro agency, we deliver customized mobile solutions with direct access to our senior developers. Unlike larger firms where your project might be handed off to junior staff, our boutique team works closely with you to create applications for both iOS and Android platforms that perfectly meet your unique business objectives with faster turnaround times and more personalized attention.
            </p>
            <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Mobile solutions navigation">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Learn more about our mobile solutions"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Start a mobile development project with us"
              >
                Start A Project
                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png"
              className="w-full rounded-image object-cover"
              alt="Mobile developer working on cross-platform application"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">A developer working on mobile cross-platform solutions</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
