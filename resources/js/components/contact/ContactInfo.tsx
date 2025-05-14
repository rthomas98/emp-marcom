"use client";

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

export function ContactInfo() {
  return (
    <section id="contact-info" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#F8F9FA]">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
              <Mail className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 text-gray-700 md:mb-6">
              Reach out to us for inquiries or support anytime.
            </p>
            <a className="text-[#BD1550] underline hover:text-[#a01245]" href="mailto:info@empuls3.com">
              info@empuls3.com
            </a>
          </div>
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
              <Phone className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 text-gray-700 md:mb-6">
              Call us for immediate assistance or to schedule a consultation.
            </p>
            <a className="text-[#BD1550] underline hover:text-[#a01245]" href="tel:9727988914">
              972.798.8914
            </a>
          </div>
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
              <Globe className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">
              Remote Agency
            </h3>
            <p className="mb-5 text-gray-700 md:mb-6">
              We operate as a fully remote agency, serving clients worldwide.
            </p>
            <a className="text-[#BD1550] underline hover:text-[#a01245]" href="https://www.empuls3.com" target="_blank" rel="noopener noreferrer">
              www.empuls3.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
