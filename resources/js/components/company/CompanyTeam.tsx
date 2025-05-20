"use client";

import React from "react";
import { Linkedin, Twitter, Dribbble, Globe, Instagram } from "lucide-react";

export function CompanyTeam() {
  return (
    <section id="company-team" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Senior Specialists</p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Our Boutique Team
          </h2>
          <p className="text-gray-700 md:text-md">
            As a specialized micro agency, we provide direct access to our senior specialists who are at the heart of our success. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you—delivering personalized solutions with faster implementation times and more dedicated attention. Founded in 2009 by Robert Thomas, our team consistently pushes boundaries to make our vision a reality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex flex-col">
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg border border-gray-200 md:mb-6 md:pt-[100%]">
                <img
                  src="/images/682c9204c876aa4ebe43910b-HeadshotPro.png"
                  alt="Robert Thomas, Founder"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-[#1F1946] md:text-lg">
                  Robert Thomas
                </h5>
                <h6 className="text-gray-700 md:text-md">Founder</h6>
              </div>
              <p className="text-gray-700">Founded Empuls3 in 2009 as a specialized micro agency providing personalized technology solutions with direct access to senior specialists.</p>
              <div className="mt-6 flex gap-3.5 self-start">
                <a href="https://www.linkedin.com/in/robert-thomas-1b110216/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/rob_thomas10" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://dribbble.com/robt84" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Dribbble className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg border border-gray-200 md:mb-6 md:pt-[100%]">
                <img
                  src="/images/adrian-hebert-thomas.jpg"
                  alt="Adrian Hebert-Thomas, In-house Counsel"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-[#1F1946] md:text-lg">
                  Adrian Hebert-Thomas
                </h5>
                <h6 className="text-gray-700 md:text-md">In-house Counsel/Hebert-Thomas Law</h6>
              </div>
              <p className="text-gray-700">Providing legal expertise and counsel for Empuls3 and its clients, ensuring compliance and protecting business interests.</p>
              <div className="mt-6 flex gap-3.5 self-start">
                <a href="https://www.linkedin.com/in/adrian-hebert-thomas-esq-41b013a2/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.hebertthomaslaw.com/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Globe className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/hebertthomaslaw/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg border border-gray-200 md:mb-6 md:pt-[100%]">
                <img
                  src="/images/cole-bush.jpg"
                  alt="Cole Bush, Developer"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-[#1F1946] md:text-lg">
                  Cole Bush
                </h5>
                <h6 className="text-gray-700 md:text-md">Developer</h6>
              </div>
              <p className="text-gray-700">Skilled developer creating custom solutions and implementing cutting-edge technologies for our clients' unique business needs.</p>
              <div className="mt-6 flex gap-3.5 self-start">
                <a href="https://www.linkedin.com/in/cole-bush-15026274/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.cobraautorentals.com/" target="_blank" rel="noopener noreferrer" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Globe className="h-6 w-6" />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

// Team members removed as requested
