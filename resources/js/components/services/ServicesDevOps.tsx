"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function ServicesDevOps() {
  return (
    <section id="services-devops" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique DevOps Services</p>
          <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
            Personalized DevOps with Senior Expertise
          </h2>
          <p className="text-gray-700 md:text-md">
            As a specialized micro agency, we boost teamwork and streamline efficiency across your projects with direct access to our senior DevOps specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to achieve better results and foster a more productive environment—with the personalized attention and faster implementation that larger firms simply can't match.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Micro Agency Advantage</p>
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Direct Access to Senior DevOps Specialists
                </h3>
                <p className="text-gray-700">
                  Work directly with our senior specialists to experience quicker deployments while enhancing overall reliability for your projects and applications—with the personalized attention that only a boutique agency can provide.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/services/devops"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_An_African_American_team_of_developers_working_col_23a5e847-d8cd-45e5-805c-f2485621fb22.png"
                alt="Development team collaborating on DevOps implementation"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 flex-col overflow-hidden rounded-lg border border-gray-200 sm:grid-cols-2 lg:col-span-2">
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Boutique Approach</p>
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Personalized DevOps Transformation
                </h3>
                <p className="text-gray-700">
                  Our boutique team helps you discover how continuous delivery and integration can transform your workflow with faster implementation times and more dedicated attention than larger firms can offer—maximizing the potential of your development process without the overhead.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_2.png"
                alt="Diverse team implementing DevOps practices"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
