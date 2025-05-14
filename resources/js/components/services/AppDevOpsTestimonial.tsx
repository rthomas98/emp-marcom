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
              src="/images/site-images/rob_thomas23_Two_African_American_business_professionals_shakin_192a73a1-6814-409d-9214-6471b0199cb4.png"
              alt="Business professionals discussing app development success"
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
              "Empuls3 transformed our app development process, making it faster
              and more efficient. Their expertise in DevOps has significantly
              improved our deployment times and overall productivity."
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div>
                <p className="font-semibold text-[#1F1946]">Michael Johnson</p>
                <p className="text-gray-700">CTO, InnovateX</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-gray-300 sm:mx-0" />
              <div>
                <img
                  src="/images/emp-logo.svg"
                  alt="Client company logo"
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
