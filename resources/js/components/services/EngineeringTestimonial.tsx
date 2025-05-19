"use client";

import React from "react";
import { Star } from "lucide-react";

export function EngineeringTestimonial() {
  return (
    <section id="engineering-testimonial" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
            "Working with Empuls3's boutique team was a game-changer for our business. The direct access to their senior specialists and personalized attention made all the difference. Their micro agency approach delivered faster implementation and more tailored solutions than we ever experienced with larger firms."
          </blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="/images/site-images/rob_thomas23_Portrait_of_happy_African_American_business_people_453fe4c5-c7a7-4d1e-9b53-fee82b42f03b.png"
                alt="Testimonial from client"
                className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-[#1F1946]">Sarah Johnson</p>
              <p className="text-gray-700">CTO, TechInnovate Solutions</p>
            </div>
            <div className="hidden w-px self-stretch bg-gray-300 md:block" />
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
    </section>
  );
}
