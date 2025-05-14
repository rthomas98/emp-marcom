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
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Startups</p>
            <h2 className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
              Empowering Startups with Tailored Technology Solutions
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-md">
              In the fast-paced world of startups, having the right technology
              can make all the difference. Empuls3 offers scalable and flexible
              solutions designed to help startups innovate rapidly and grow
              efficiently. Our expertise in modern development practices ensures
              that your business can adapt and thrive in a competitive
              landscape.
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
              Tailored Solutions for Startups
            </h3>
            <p className="text-gray-700">
              We recognize the distinct challenges that startups encounter as
              they navigate their journey. Our goal is to provide tailored
              support and solutions to help them thrive in a competitive
              landscape.
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
              Accelerate Your Growth with Our Expertise
            </h3>
            <p className="text-gray-700">
              Our dedicated team is fully committed to providing you with the
              support and resources you need to achieve your goals and ensure
              your success in every endeavor you pursue.
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
              Rapid Results Through Innovation
            </h3>
            <p className="text-gray-700">
              Utilize the latest advancements in technology to maintain a
              competitive edge in your industry and ensure you are always one
              step ahead of the competition.
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
