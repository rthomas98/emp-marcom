import React from "react";
import { Link } from "@inertiajs/react";

export function MvpFinalCTA() {
  return (
    <section id="mvp-final-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
            Start Your MVP Journey Today
          </h2>
          <p className="text-white/90 md:text-lg">
            Reach out to us today so we can discuss how our expertise can assist
            you in launching your Minimum Viable Product (MVP) in a way that is
            both efficient and effective. We're here to help you succeed every
            step of the way!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Connect With Us
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Have More Questions?
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
          className="size-full object-cover"
          alt="MVP Development Team"
        />
        <div className="absolute inset-0 bg-[#BD1550]/80" />
      </div>
    </section>
  );
}
