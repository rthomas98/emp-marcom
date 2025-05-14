"use client";

import React from "react";

export function ManagedITTestimonial() {
  return (
    <section id="managed-it-testimonial" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <img
              src="/images/emp-logo.svg"
              alt="Client logo"
              className="max-h-14"
            />
          </div>
          <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
            "Empuls3's Managed IT Services have been a game changer for our
            operations. Their support team is always responsive and proactive,
            ensuring our systems run smoothly."
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="/images/site-images/rob_thomas23_Profile_portrait_of_cheerful_intelligent_African_A_71302e8d-5e88-4aa2-8fc7-044d4d653f23.png"
                alt="Testimonial avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold text-[#1F1946]">Sarah Johnson</p>
            <p className="text-gray-700">CTO, TechVision Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
