"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function CompanyContact() {
  return (
    <section id="company-contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-[#1F1946] md:mb-4 md:text-5xl lg:text-6xl">
              Connect With Us Today
            </h2>
            <p className="text-gray-700 md:text-md">
              Explore the exciting possibilities of collaboration with us and
              learn how we can work together to achieve mutual success and reach
              our goals more effectively. Let's embark on this journey together!
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
          >
            Inquire
          </Link>
          <Link
            href="/company/partnerships"
            className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
          >
            Collaborate
          </Link>
        </div>
      </div>
    </section>
  );
}
