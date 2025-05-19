"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function FAQsContact() {
  return (
    <section id="faqs-contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Direct Access to Senior Specialists</p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl">
              Connect With Our Boutique Team
            </h2>
            <p className="text-gray-700 md:text-md">
              Unlike larger firms where your inquiry might be handled by junior staff, our specialized micro agency founded in 2009 by Robert Thomas provides direct access to senior specialists. Reach out through any channel below for personalized attention and faster response times.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10">
              <Mail className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Email a Senior Specialist</h3>
            <p className="mb-6 text-gray-700">
              Email us directly and receive a response from a senior specialist within 24 hours—faster than larger firms can offer.
            </p>
            <Link
              href="mailto:support@empuls3.com"
              className="mt-auto inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
            >
              Email Support
            </Link>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10">
              <Phone className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Direct Call Access</h3>
            <p className="mb-6 text-gray-700">
              Speak directly with our senior specialists during business hours—no gatekeepers or junior staff like at larger firms.
            </p>
            <Link
              href="tel:+18005551234"
              className="mt-auto inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
            >
              Call Now
            </Link>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10">
              <MessageSquare className="h-8 w-8 text-[#BD1550]" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Boutique Chat Support</h3>
            <p className="mb-6 text-gray-700">
              Chat directly with our senior specialists in real-time—experiencing the personalized attention that only a micro agency can provide.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
