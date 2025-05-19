import React from "react";
import { Link } from "@inertiajs/react";

export function FrontendHeader() {
  return (
    <section id="frontend-header" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        <p className="mb-3 font-semibold text-white md:mb-4">
          Boutique UX/UI Design & Development
        </p>
        <h1 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
          Personalized Front-End Solutions with Senior Expertise
        </h1>
        <p className="text-white md:text-lg">
          As a specialized micro agency, Empuls3 delivers interactive interfaces and exceptional user experiences with direct access to our senior designers. We craft high-performance web applications that captivate users with the personalized attention and faster turnaround that larger firms simply can't match.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Link
            href="/solutions"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4131a61a-cf71-4493-911e-e766265cc50c_1.png"
          className="size-full object-cover"
          alt="Frontend development team"
        />
        <div className="absolute inset-0 bg-[#1F1946]/70" />
      </div>
    </section>
  );
}
