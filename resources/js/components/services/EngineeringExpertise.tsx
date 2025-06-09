"use client";

import React from "react";
import { Code, Server, Lightbulb } from "lucide-react";

export function EngineeringExpertise() {
  return (
    <section id="engineering-expertise" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="expertise-heading">
      <div className="container mx-auto">
        <header className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-3xl">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4 text-center">Boutique Development Services</p>
            <h2 id="expertise-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Personalized Full-Stack Development with Senior Expertise
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <article className="flex flex-col items-center text-center" aria-labelledby="senior-developers-heading">
            <div className="mb-5 md:mb-6">
              <Code className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="senior-developers-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Direct Access to Senior Developers
            </h3>
            <p className="text-gray-700">
              Our boutique agency provides direct access to senior full-stack developers who work closely with you to create a seamless and efficient digital experience—without the layers of management found at larger firms.
            </p>
          </article>
          <article className="flex flex-col items-center text-center" aria-labelledby="it-consulting-heading">
            <div className="mb-5 md:mb-6">
              <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="it-consulting-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Personalized IT Consulting
            </h3>
            <p className="text-gray-700">
              Experience the micro agency advantage with personalized IT consulting from our senior specialists who help you navigate complex technology landscapes with confidence—delivering faster implementation without the overhead of larger firms.
            </p>
          </article>
          <article className="flex flex-col items-center text-center" aria-labelledby="tailored-solutions-heading">
            <div className="mb-5 md:mb-6">
              <Lightbulb className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
            </div>
            <h3 id="tailored-solutions-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
              Tailored Solutions for Your Specific Needs
            </h3>
            <p className="text-gray-700">
              Our boutique team creates innovative engineering solutions specifically crafted for your industry's unique challenges—with the focused attention and customization that only a micro agency can provide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
