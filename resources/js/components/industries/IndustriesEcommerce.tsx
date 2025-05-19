"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function IndustriesEcommerce() {
  return (
    <section id="industries-ecommerce" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique E-commerce Solutions</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Personalized E-commerce & Retail with Senior Expertise
            </h2>
            <p className="text-gray-700 md:text-md">
              As a specialized micro agency, Empuls3 offers truly personalized platforms designed to enhance sales and customer engagement in the E-commerce and Retail sectors. Unlike larger firms where your project might be handed off to junior staff, our boutique team of senior specialists works directly with you to streamline operations—enabling your business to thrive with faster implementation times and more dedicated attention than larger firms can provide.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/industries/ecommerce"
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
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Web_devoloer_with_their_laptop_st_6c8d2e72-ba66-449b-9cad-d007dcc9b132.png"
              className="w-full rounded-lg border border-gray-200 object-cover"
              alt="Web developer with laptop showcasing e-commerce solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
