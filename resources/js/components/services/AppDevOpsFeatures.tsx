"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function AppDevOpsFeatures() {
  return (
    <section id="app-devops-features" className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-features-heading">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <header className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-3xl">
              <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                Boutique DevOps Services
              </p>
              <h2 id="devops-features-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                The Micro Agency DevOps Advantage
              </h2>
              <p className="text-gray-700 md:text-md">
                As a specialized micro agency, our Application and DevOps services combine senior technical expertise with personalized attention. Unlike larger firms where your project might be handed off to junior staff, our boutique team ensures your applications are built for scalability and performance with faster implementation times and more dedicated support.
              </p>
            </div>
          </header>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="senior-developers-heading">
              <figure className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                  alt="Full-stack development for e-commerce applications"
                  className="h-60 w-full rounded-lg object-cover"
                  width="400"
                  height="240"
                  loading="lazy"
                />
                <figcaption className="sr-only">Senior developers working on e-commerce application development</figcaption>
              </figure>
              <h3 id="senior-developers-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Direct Access to Senior Developers
              </h3>
              <p className="text-gray-700">
                Work directly with our senior full-stack specialists who create powerful and reliable applications tailored to your unique business needs—with the personalized attention and faster implementation times that only a micro agency can provide.
              </p>
            </article>
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="industry-solutions-heading">
              <figure className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="Business executives discussing industry challenges"
                  className="h-60 w-full rounded-lg object-cover"
                  width="400"
                  height="240"
                  loading="lazy"
                />
                <figcaption className="sr-only">Business executives discussing industry-specific DevOps solutions</figcaption>
              </figure>
              <h3 id="industry-solutions-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personalized Industry Solutions
              </h3>
              <p className="text-gray-700">
                Our boutique team brings extensive expertise in understanding your industry's unique challenges—delivering truly personalized solutions with the focused attention and direct collaboration that larger firms simply can't match.
              </p>
            </article>
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="innovation-approach-heading">
              <figure className="mb-6 md:mb-8">
                <img
                  src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
                  alt="Team working with emerging digital technologies"
                  className="h-60 w-full rounded-lg object-cover"
                  width="400"
                  height="240"
                  loading="lazy"
                />
                <figcaption className="sr-only">DevOps team implementing innovative automation solutions</figcaption>
              </figure>
              <h3 id="innovation-approach-heading" className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Boutique Innovation Approach
              </h3>
              <p className="text-gray-700">
                Experience the micro agency advantage with our senior specialists who blend contemporary strategies and innovative techniques—delivering faster implementation times and more personalized solutions than larger firms can offer.
              </p>
            </article>
          </div>
          <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="DevOps features navigation">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about our DevOps features"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Contact us about our DevOps services"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
