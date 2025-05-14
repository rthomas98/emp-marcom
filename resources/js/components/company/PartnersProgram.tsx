"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Award, Zap, TrendingUp, Users } from "lucide-react";

export function PartnersProgram() {
  return (
    <section id="partner-benefits" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Partnership Program</p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Why Partner With Us
          </h2>
          <p className="text-gray-700 md:text-lg">
            Join our network of strategic partners and gain access to exclusive benefits, resources, and opportunities for collaborative growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10 text-[#BD1550]">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1F1946]">{benefit.title}</h3>
              <p className="mb-4 flex-grow text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
          >
            Apply to Partner Program
          </Link>
        </div>
      </div>
    </section>
  );
}

const partnerBenefits = [
  {
    title: "Expanded Market Reach",
    description: "Gain access to new markets and customer segments through our established network and reputation.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "Co-Marketing Opportunities",
    description: "Collaborate on joint marketing initiatives, events, and content to increase brand visibility.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Technical Support",
    description: "Receive priority technical support and access to our expert development team for collaborative projects.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Revenue Sharing",
    description: "Benefit from competitive revenue sharing models and incentives for successful client referrals.",
    icon: <Award className="h-6 w-6" />
  }
];
