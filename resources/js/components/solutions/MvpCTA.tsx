import React from "react";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export function MvpCTA() {
  return (
    <section id="mvp-cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1F1946]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Get Started Today</p>
            <h2 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Ready to Transform Your Idea into a Successful Product?
            </h2>
            <p className="text-white/90 md:text-lg">
              Our team of experts is ready to help you build, launch, and scale your MVP. 
              Let's work together to bring your vision to life with our proven development process.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Start Your Project
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
