import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function Innovation() {
  return (
    <section id="innovation" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="innovation-heading">
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Create new ideas and solutions to drive progress.
            </p>
            <h2 id="innovation-heading" className="text-4xl font-bold font-header text-white md:text-5xl lg:text-6xl">
              Driving Innovation Through Technology Integration
            </h2>
          </div>
          <div>
            <p className="mb-6 text-white/80 md:mb-8 md:text-lg">
              At Empuls3, we harness modern development practices to deliver
              cutting-edge solutions. Our focus on emerging technologies
              empowers businesses to stay ahead in a competitive landscape.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Agile Development
                </h3>
                <p className="text-white/80">
                  Embrace flexibility and speed with our agile development
                  methodologies tailored for your needs.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                  Tech Integration
                </h3>
                <p className="text-white/80">
                  Seamlessly integrate the latest technologies to enhance your
                  business operations and efficiency.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/services/innovation"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-accent-yellow hover:text-white"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
          className="h-full w-full object-cover"
          alt="Team of developers collaborating on innovative technology solutions"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    </section>
  );
}
