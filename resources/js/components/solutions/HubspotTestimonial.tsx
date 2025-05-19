"use client";

import React from "react";
import { Star } from "lucide-react";

export function HubspotTestimonial() {
  return (
    <section id="hubspot-testimonial" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-lg text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" />
            <Star className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" />
          </div>
          <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
            "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick."
          </blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                alt="James McElroy"
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-[#1F1946]">James McElroy</p>
              <p className="text-gray-700">Founder & CEO, frienzy.io</p>
            </div>
            <div className="hidden w-px self-stretch bg-gray-300 md:block" />
            <div>
              <img
                src="/images/emp-logo.svg"
                alt="Innovate Solutions logo"
                className="max-h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
