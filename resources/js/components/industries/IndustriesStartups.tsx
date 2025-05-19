"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function IndustriesStartups() {
  return (
    <section id="industries-startups" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Startup Solutions</p>
            <h2 className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Personalized Startup Technology with Senior Expertise
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-md">
              In the fast-paced world of startups, having the right technology can make all the difference. As a specialized micro agency, Empuls3 offers truly personalized, scalable solutions designed to help startups innovate rapidly and grow efficiently. Unlike larger firms where your project might be handed off to junior staff, our boutique team of senior specialists works directly with you—ensuring your business can adapt and thrive with faster implementation times and more dedicated attention than larger firms can provide.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Business_people_startup_and_mee_3dd8c795-8b26-4123-83bf-cb2cfe12617d_2.png"
                alt="Tailored solutions for startups"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Direct Access to Senior Specialists
            </h3>
            <p className="text-gray-700">
              Work directly with our senior specialists who recognize the distinct challenges that startups encounter. Unlike larger firms, our boutique team provides truly personalized support and solutions—helping your startup thrive with faster implementation times and more dedicated attention.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_0.png"
                alt="Accelerate your growth with our expertise"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              The Micro Agency Advantage
            </h3>
            <p className="text-gray-700">
              Experience the micro agency advantage with our boutique team who is fully committed to providing personalized support and resources—helping you achieve your goals with faster response times and more dedicated attention than larger firms can offer.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_1.png"
                alt="Rapid results through innovation"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Personalized Innovation Strategy
            </h3>
            <p className="text-gray-700">
              Work directly with our senior specialists to utilize the latest advancements in technology—maintaining a competitive edge in your industry with personalized innovation strategies and faster implementation times than larger firms can deliver.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/industries/startups"
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
    </section>
  );
}
