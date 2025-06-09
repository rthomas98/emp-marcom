"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, LayoutTemplate, Code, Zap } from "lucide-react";

export function EngineeringStrategies() {
  return (
    <section id="engineering-strategies" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="strategies-heading">
      <div className="relative z-10 container mx-auto">
        <header className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Boutique Technology Guidance
            </p>
            <h2 id="strategies-heading" className="text-5xl font-bold text-white md:text-5xl lg:text-6xl">
              Personalized Strategies with Senior Expertise
            </h2>
          </div>
          <p className="text-white md:text-md">
            As a specialized micro agency, our senior specialists provide personalized technical guidance to help you navigate complex technology landscapes. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to analyze your existing systems and recommend strategies that align with your business goals—with the dedicated attention and faster implementation that larger firms simply can't match.
          </p>
        </header>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <article className="flex w-full gap-6" aria-labelledby="architecture-solutions-heading">
            <LayoutTemplate 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 id="architecture-solutions-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Architecture Solutions
              </h3>
              <p className="text-white">
                Work directly with our senior architects to create strong and adaptable systems specifically designed to meet your unique needs—with the personalized attention that only a micro agency can provide.
              </p>
            </div>
          </article>
          <article className="flex w-full gap-6" aria-labelledby="senior-engineers-heading">
            <Code 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 id="senior-engineers-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Engineers
              </h3>
              <p className="text-white">
                Our boutique team provides innovative engineering solutions with direct access to senior specialists—enhancing efficiency and driving progress without the overhead of larger firms.
              </p>
            </div>
          </article>
          <article className="flex w-full gap-6" aria-labelledby="technology-approach-heading">
            <Zap 
              className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6"
              aria-hidden="true"
            />
            <div>
              <h3 id="technology-approach-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Technology Approach
              </h3>
              <p className="text-white">
                Experience the micro agency advantage as we work closely with you to revolutionize your technology landscape—delivering better results with faster implementation times and more dedicated attention.
              </p>
            </div>
          </article>
        </div>
        <nav className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20" aria-label="Engineering strategies navigation">
          <Link 
            href="/services/software-engineering-it-consulting#services" 
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            aria-label="Learn more about our engineering strategies"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            aria-label="Contact us about our engineering strategies"
          >
            Contact Us
            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
      <div className="absolute inset-0 z-0" role="img" aria-label="Background image of team discussing technology strategies">
        <img
          src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
          className="h-full w-full object-cover"
          alt="Team discussing technology strategies"
          width="1600"
          height="900"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
      </div>
    </section>
  );
}
