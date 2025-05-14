import React from "react";
import { Link } from "@inertiajs/react";

export function FrontendCTA() {
  return (
    <section id="frontend-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto relative">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-lg">
            <h2 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-white md:text-lg">
              Partner with Empuls3 to create stunning, user-friendly interfaces that captivate your audience and drive engagement. Our front-end development and UX/UI design services will elevate your digital presence.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Get Started
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_3787497e-4cde-4a7f-8959-dbd51c7183c8.png" 
            className="size-full object-cover" 
            alt="Frontend development team" 
          />
          <div className="absolute inset-0 bg-[#1F1946]/80" />
        </div>
      </div>
    </section>
  );
}
