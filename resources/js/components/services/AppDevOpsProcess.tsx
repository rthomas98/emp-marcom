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
              Streamlined for improved efficiency and productivity.
            </p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Our Process: From Idea to Deployment
            </h2>
            <p className="text-gray-700 md:text-md">
              We begin with a thorough consultation to understand your unique
              needs and objectives. Our team then crafts a tailored strategy
              that guides the development process, ensuring alignment with your
              goals.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <FileSearch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Consultation and Strategy Development
              </h3>
              <p className="text-gray-700">
                Our experienced team works closely with you to clearly define
                the project scope and specific requirements.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <GitBranch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Agile Development and Continuous Integration
              </h3>
              <p className="text-gray-700">
                We utilize agile methodologies to guarantee flexibility,
                enabling rapid iterations and continuous improvements in our
                processes.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <Rocket className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Final Deployment and Ongoing Support
              </h3>
              <p className="text-gray-700">
                After deployment, we offer ongoing support and maintenance to
                ensure everything runs smoothly and efficiently for you.
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
