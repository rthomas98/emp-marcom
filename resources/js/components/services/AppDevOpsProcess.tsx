"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, FileSearch, GitBranch, Rocket } from "lucide-react";

export function AppDevOpsProcess() {
  return (
    <section id="app-devops-process" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique Development Process
            </p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Personalized DevOps Journey with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, we begin with a personalized consultation where you work directly with our senior specialists to understand your unique needs. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures you receive dedicated attention throughout the entire development process with faster implementation times and truly tailored solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FileSearch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Strategists
              </h3>
              <p className="text-gray-700">
                Work directly with our senior strategists who collaborate closely with you to define project scope and requirements—with the personalized attention and faster response times that only a boutique micro agency can provide.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <GitBranch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Agile Approach
              </h3>
              <p className="text-gray-700">
                Experience the micro agency advantage with our personalized agile methodology that ensures flexibility and rapid iterations—delivering continuous improvements with faster implementation cycles than larger firms can match.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Rocket className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Support with Senior Specialists
              </h3>
              <p className="text-gray-700">
                After deployment, our senior specialists provide personalized ongoing support and maintenance—ensuring your systems run smoothly with the dedicated attention and faster response times that larger firms simply can't match.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
