import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobileFinalCTA() {
  return (
    <section id="mobile-final-cta" className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-final-cta-heading">
      <div className="absolute inset-0 z-0" role="img" aria-labelledby="mobile-final-cta-heading">
        <img 
          src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_e09526ff-5324-4597-9086-2a8bc0dc6851.png" 
          alt="Mobile development team collaborating on project" 
          className="h-full w-full object-cover"
          width="1920"
          height="1080"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#BD1550]/90" aria-hidden="true" />
      </div>
      
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <header>
            <h2 id="mobile-final-cta-heading" className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Ready to Transform Your Mobile Experience?
            </h2>
          </header>
          <p className="mb-8 text-lg text-white md:text-xl">
            Partner with our expert team to create innovative, user-friendly mobile applications that elevate your business and engage your customers.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Mobile final call to action navigation">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#BD1550] shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#BD1550]"
              aria-label="Start your mobile development project"
            >
              Start Your Project
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center text-white hover:text-gray-200 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              aria-label="Explore more mobile development solutions"
            >
              Explore More Solutions <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
