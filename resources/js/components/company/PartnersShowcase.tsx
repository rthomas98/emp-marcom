"use client";

import React from "react";
import { Link } from "@inertiajs/react";

export function PartnersShowcase() {
  return (
    <section id="current-partners" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Our Network</p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Our Trusted Partners
          </h2>
          <p className="text-gray-700 md:text-lg">
            We collaborate with industry-leading organizations to deliver exceptional solutions and drive innovation across various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition duration-300">
              <div className="mb-6 flex h-16 items-center">
                <div className="h-12 w-full">
                  <div className="flex h-full items-center justify-center rounded-md bg-gray-100 px-4">
                    <span className="text-xl font-bold text-[#1F1946]">{partner.name}</span>
                  </div>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1F1946]">{partner.title}</h3>
              <p className="mb-4 flex-grow text-gray-700">{partner.description}</p>
              <div className="mt-auto">
                <Link
                  href={partner.link}
                  className="text-[#BD1550] hover:text-[#a01245]"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-lg bg-[#1F1946] p-8 text-center md:p-12 lg:p-16">
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Interested in Becoming a Partner?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300 md:text-lg">
            Join our network of strategic partners and collaborate with us to deliver innovative solutions to clients worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}

const partners = [
  {
    name: "TechForward",
    title: "Technology Innovation Partner",
    description: "Collaborating on cutting-edge technology solutions to drive digital transformation for businesses of all sizes.",
    link: "#"
  },
  {
    name: "CloudMatrix",
    title: "Cloud Infrastructure Partner",
    description: "Working together to provide scalable, secure cloud infrastructure solutions for enterprise applications.",
    link: "#"
  },
  {
    name: "DataInsight",
    title: "Data Analytics Partner",
    description: "Combining our expertise to deliver powerful data analytics and business intelligence solutions.",
    link: "#"
  },
  {
    name: "SecureNet",
    title: "Cybersecurity Partner",
    description: "Partnering to provide comprehensive cybersecurity solutions to protect businesses from evolving threats.",
    link: "#"
  },
  {
    name: "MobileFusion",
    title: "Mobile Development Partner",
    description: "Collaborating on innovative mobile applications that enhance user experience and drive business growth.",
    link: "#"
  },
  {
    name: "AIVentures",
    title: "AI & Machine Learning Partner",
    description: "Working together to implement artificial intelligence and machine learning solutions for business optimization.",
    link: "#"
  }
];
