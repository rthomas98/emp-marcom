import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobileHeader() {
  return (
    <section id="mobile-header" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png"
          alt="Mobile Development Team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1946]/90 to-[#1F1946]/70" />
      </div>
      <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-white md:mb-4">Boutique Mobile Development</p>
            <h1 className="mb-5 text-5xl font-bold font-header text-white md:mb-6 md:text-6xl lg:text-7xl">
              Personalized Mobile Solutions with Senior Expertise
            </h1>
            <p className="text-white/90 md:text-lg">
              As a specialized micro agency, we deliver high-performance mobile applications with direct access to our senior developers. Our boutique team ensures seamless user experiences across all devices with the personalized attention and faster turnaround that larger firms simply can't match.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get Started
              </Link>
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/90 focus:outline-none"
              >
                Explore Solutions
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
