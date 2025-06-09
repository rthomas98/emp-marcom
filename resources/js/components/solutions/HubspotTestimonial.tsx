"use client";

import React from "react";
import { Star } from "lucide-react";

export function HubspotTestimonial() {
  return (
    <section id="hubspot-testimonial" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="sr-testimonial-heading">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 id="sr-testimonial-heading" className="sr-only">Client Testimonial</h2>
          <div className="mb-6 flex items-center justify-center md:mb-8" aria-label="Five star rating" role="img">
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
          </div>
          <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
            "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick."
          </blockquote>
          <footer className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="/images/image-800x800.webp"
                alt="James McElroy"
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                width="56"
                height="56"
                loading="lazy"
              />
            </div>
            <cite className="mb-4 md:mb-0 not-italic">
              <p className="font-semibold text-[#1F1946]">James McElroy</p>
              <p className="text-gray-700">Founder & CEO, frienzy.io</p>
            </cite>
            <div className="hidden w-px self-stretch bg-gray-300 md:block" aria-hidden="true" />
            <div>
              <img
                src="/images/emp-logo.svg"
                alt="Frienzy.io company logo"
                className="max-h-12"
                width="120"
                height="48"
                loading="lazy"
              />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
