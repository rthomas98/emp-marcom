"use client";

import React from "react";

export function AppDevOpsPipeline() {
  return (
    <section id="app-devops-pipeline" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Accelerate Your Development with Seamless CI/CD Pipeline Solutions
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              Our CI/CD pipelines streamline your application development
              process, ensuring faster and more reliable releases. Experience
              the power of automation and efficiency in every deployment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Fast Releases
                </h6>
                <p className="text-gray-700">
                  Achieve quicker time-to-market with our robust continuous
                  integration and deployment strategies.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                  Reliable Automation
                </h6>
                <p className="text-gray-700">
                  Automate your workflows to minimize errors and maximize
                  efficiency in your deployments.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Software_Engineers_in_a_meeting_7f9202d7-9cb9-49eb-92d7-f5f6966d2594_2.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Software engineers discussing CI/CD pipeline implementation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
