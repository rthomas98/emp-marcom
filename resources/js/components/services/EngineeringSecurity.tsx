"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function EngineeringSecurity() {
  return (
    <section id="engineering-security" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            Boutique Security Services
          </p>
          <h2 className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
            Personalized Security Solutions with Senior Expertise
          </h2>
          <p className="text-gray-700 md:text-md">
            As a specialized micro agency, we ensure the safety and integrity of your systems with direct access to our senior security specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team implements cutting-edge security protocols tailored to your specific needs—providing peace of mind and reliable protection with faster implementation times and more dedicated attention.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_developers_using_a_computer_t_be2a97fe-d00e-41c1-ad43-4bffd775a774.png"
                alt="Web developers implementing security measures"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Direct Access</p>
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Senior Security Specialists
                </h3>
                <p className="text-gray-700">
                  Our boutique team provides direct access to senior security specialists who implement best practices for comprehensive protection—with the personalized attention that only a micro agency can provide.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_An_African_American_developer_holding_his_computer_160e36fc-9208-4e49-8166-d14de5aa74b0.png"
                alt="Developer with secure laptop"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Personalized</p>
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Boutique Monitoring Services
                </h3>
                <p className="text-gray-700">
                  Experience the micro agency advantage with personalized monitoring and updates from our senior specialists—maintaining security against threats and vulnerabilities with faster response times than larger firms.
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
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_Laptop_Standing_on_a_Desk_with_a_Video_Streaming_4cf335b7-cb95-43d9-8eff-5e907d49c3f4_3.png"
                alt="Secure laptop workstation"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Tailored</p>
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Micro Agency Security Advantage
                </h3>
                <p className="text-gray-700">
                  Our boutique team creates truly personalized security strategies designed to address your unique requirements—with the focused attention and customization that only a micro agency can deliver.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
