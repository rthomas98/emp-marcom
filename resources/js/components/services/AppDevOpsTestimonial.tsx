"use client";

import React from "react";
import { Star } from "lucide-react";

export function AppDevOpsTestimonial() {
  return (
    <section id="app-devops-testimonial" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first">
            <img
              src="/images/1638545534787.jpeg"
              alt="Palmer Dean portrait"
              className="aspect-square w-full rounded-lg border border-gray-200 object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-6 flex md:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
              "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented."
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold text-[#1F1946]">Palmer Dean</p>
                <p className="text-gray-700">Founder, Wash Metrix</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-gray-300 sm:mx-0" />
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Wash Metrix logo"
                  className="max-h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
