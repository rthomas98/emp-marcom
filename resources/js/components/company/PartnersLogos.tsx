"use client";

import React from "react";

export function PartnersLogos() {
  return (
    <section id="partners-logos" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mx-auto mb-8 max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] text-[#1F1946] md:text-md md:leading-[1.2]">
          Trusted by industry leaders worldwide
        </h1>
      </div>
      <div className="flex h-20 items-center justify-center">
        <div className="relative flex w-full overflow-hidden">
          <div className="flex min-w-full animate-marquee items-center justify-center whitespace-nowrap">
            {Array(6).fill(0).map((_, index) => (
              <div key={`logo-1-${index}`} className="mx-8 inline-flex items-center justify-center md:mx-12">
                <img
                  className="h-10 w-auto md:h-12"
                  src="/images/emp-logo.svg"
                  alt="Empuls3 Logo"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex min-w-full animate-marquee2 items-center justify-center whitespace-nowrap">
            {Array(6).fill(0).map((_, index) => (
              <div key={`logo-2-${index}`} className="mx-8 inline-flex items-center justify-center md:mx-12">
                <img
                  className="h-10 w-auto md:h-12"
                  src="/images/emp-logo.svg"
                  alt="Empuls3 Logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
