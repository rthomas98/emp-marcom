"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Award, Zap, Users, BarChart3 } from "lucide-react";

export function PartnersStrategic() {
  return (
    <section id="partners-strategic" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Micro Agency Partnerships</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Boutique Expertise, Enhanced Capabilities
            </h2>
            <p className="text-gray-700 md:text-md">
              Since our founding in 2009 by Robert Thomas, we've cultivated strategic partnerships that complement our boutique approach. As a specialized micro agency, we combine direct access to our senior specialists with our partners' capabilities—delivering personalized solutions with faster implementation times than larger firms can offer, all without sacrificing quality or increasing overhead.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="#partner-benefits"
                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium text-[#BD1550] transition hover:text-[#a01245]"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            {partnerFeatures.map((feature, index) => (
              <div key={index}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10 text-[#BD1550] md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const partnerFeatures = [
  {
    title: "Direct Access to Senior Specialists",
    description: "Our micro agency model ensures you work directly with senior specialists who leverage our strategic partnerships to enhance your personalized solutions.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Boutique Service, Enhanced Capabilities",
    description: "We maintain our personalized micro agency approach while expanding our capabilities through strategic partnerships—delivering faster implementation times without the overhead of larger firms.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Personalized Technology Solutions",
    description: "Our boutique team works directly with you while leveraging our partners' technologies to create truly tailored solutions that address your unique needs.",
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    title: "Micro Agency Collaboration",
    description: "Partner with our specialized boutique agency founded in 2009 by Robert Thomas to experience the perfect balance of personalized attention and expanded capabilities.",
    icon: <Users className="h-6 w-6" />
  }
];
