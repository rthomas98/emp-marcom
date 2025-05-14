"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { DollarSign, ShoppingBag, Store, TrendingUp, ChevronRight } from "lucide-react";

export function IndustriesFinance() {
  return (
    <section id="industries-finance" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-white md:mb-4">
            Finance
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            Empowering Financial Services with Innovative Solutions
          </h2>
          <p className="text-white md:text-md">
            In the fast-paced world of finance, secure and scalable technology
            is essential. Empuls3 provides tailored solutions that enhance
            customer experiences and streamline operations.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <DollarSign className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Transforming Banking with Cutting-Edge Technology
            </h3>
            <p className="text-white">
              Our solutions ensure compliance and security while enhancing user
              engagement and operational efficiency.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <ShoppingBag className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Innovative Solutions for E-commerce Growth
            </h3>
            <p className="text-white">
              We empower e-commerce businesses with robust platforms that drive
              sales and improve customer satisfaction.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <Store className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Streamlined Operations for Retail Success
            </h3>
            <p className="text-white">
              Our technology enhances inventory management and customer
              interactions, ensuring a seamless retail experience.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-5 md:mb-6">
              <TrendingUp className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
              Your Partner in Financial Innovation
            </h3>
            <p className="text-white">
              Join us to revolutionize your financial services with our expert
              technology solutions tailored for success.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/industries/finance"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-white hover:underline"
          >
            Contact
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_6cd1ba9a-07fc-4ec5-8538-6eaa4464712d_1.png"
          className="h-full w-full object-cover"
          alt="Diverse team of finance professionals"
        />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}
