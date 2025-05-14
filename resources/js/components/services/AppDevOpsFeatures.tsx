"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function AppDevOpsFeatures() {
  return (
    <section id="app-devops-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Innovate and inspire for a brighter future ahead.
              </p>
              <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                Empowering Your Business with Advanced Solutions
              </h2>
              <p className="text-gray-700 md:text-md">
                Our Application and DevOps Services combine technical excellence
                with industry insights. We ensure your applications are built
                for scalability and performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                  alt="Full-stack development for e-commerce applications"
                  className="h-60 w-full rounded-lg border border-gray-200 object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expertise in Full-Stack Development
              </h3>
              <p className="text-gray-700">
                Utilize our comprehensive full-stack expertise to create
                powerful and reliable applications that meet your unique
                business needs effectively.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="Business executives discussing industry challenges"
                  className="h-60 w-full rounded-lg border border-gray-200 object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Understanding Your Industry Challenges
              </h3>
              <p className="text-gray-700">
                Our team has extensive expertise in understanding the unique
                challenges faced within specific industries, allowing us to
                provide tailored solutions for your needs.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
                  alt="Team working with emerging digital technologies"
                  className="h-60 w-full rounded-lg border border-gray-200 object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Focus on Innovation and Emerging Technologies
              </h3>
              <p className="text-gray-700">
                We utilize a blend of contemporary strategies and innovative
                techniques to achieve the best possible outcomes for our
                clients.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
