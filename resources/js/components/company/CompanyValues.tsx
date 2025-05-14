"use client";

import React from "react";

export function CompanyValues() {
  return (
    <section id="company-values" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Our Core Values: Innovation, Excellence, and Commitment to Client
              Success
            </h2>
            <p className="mb-6 text-gray-700 md:mb-8 md:text-md">
              At Empuls3, we are dedicated to pushing the boundaries of
              technology and creativity. Our commitment to excellence ensures
              that our clients achieve their goals with innovative solutions
              tailored to their needs.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Innovation First
                </h6>
                <p className="text-gray-700">
                  We embrace cutting-edge technologies to drive transformative
                  outcomes for our clients.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-[#1F1946] md:mb-4 md:text-xl">
                  Client Success
                </h6>
                <p className="text-gray-700">
                  Our clients' achievements are our top priority, guiding every
                  decision we make.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Team leader shaking hands with client, representing our commitment to client success"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
