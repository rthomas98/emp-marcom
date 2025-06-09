import React from "react";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export function MvpCTA() {
  return (
    <section id="mvp-cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1F1946]" aria-labelledby="mvp-cta-heading">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <header className="mb-10 max-w-3xl md:mb-12">
            <p id="mvp-cta-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Get Started Today</p>
            <h2 id="mvp-cta-heading" className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Ready to Transform Your Idea into a Successful Product?
            </h2>
            <p className="text-white/90 md:text-lg">
              Our team of experts is ready to help you build, launch, and scale your MVP. 
              Let's work together to bring your vision to life with our proven development process.
            </p>
          </header>
          <nav className="flex flex-col items-center gap-4 sm:flex-row" aria-label="Call to action navigation">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Start your MVP development project"
            >
              Start Your Project
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              <span className="sr-only">Start your MVP development project</span>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              aria-label="Explore our MVP development services"
            >
              Explore Our Services
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
