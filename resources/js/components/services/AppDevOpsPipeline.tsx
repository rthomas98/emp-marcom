"use client";

import React from "react";

export function AppDevOpsPipeline() {
  return (
    <section id="app-devops-pipeline" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="pipeline-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <header>
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Boutique CI/CD Solutions
              </p>
              <h2 id="pipeline-heading" className="mb-5 text-4xl leading-[1.2] font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Personalized CI/CD Pipelines with Senior Expertise
              </h2>
            </header>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              As a specialized micro agency, our senior DevOps specialists create truly personalized CI/CD pipelines that streamline your development process. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures faster implementation times and more reliable releases with the dedicated attention that only a micro agency can provide.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <article aria-labelledby="specialists-heading">
                <h3 id="specialists-heading" className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Direct Access to Senior Specialists
                </h3>
                <p className="text-gray-700">
                  Work directly with our senior DevOps engineers who create personalized CI/CD strategies that achieve quicker time-to-market without the overhead of larger firms.
                </p>
              </article>
              <article aria-labelledby="automation-heading">
                <h3 id="automation-heading" className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Boutique Automation Solutions
                </h3>
                <p className="text-gray-700">
                  Experience the micro agency advantage with truly personalized workflow automation that minimizes errors and maximizes efficiency with faster implementation times than larger agencies.
                </p>
              </article>
            </div>
          </div>
          <figure>
            <img
              src="/images/site-images/rob_thomas23_African_American_Software_Engineers_in_a_meeting_7f9202d7-9cb9-49eb-92d7-f5f6966d2594_2.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Software engineers discussing CI/CD pipeline implementation"
              width="600"
              height="400"
              loading="lazy"
            />
            <figcaption className="sr-only">DevOps engineers discussing CI/CD pipeline optimization strategies</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
