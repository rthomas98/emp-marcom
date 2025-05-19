"use client";

import React from "react";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

export function CompanyTeam() {
  return (
    <section id="company-team" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Senior Specialists</p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Our Boutique Team
          </h2>
          <p className="text-gray-700 md:text-md">
            As a specialized micro agency, we provide direct access to our senior specialists who are at the heart of our success. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you—delivering personalized solutions with faster implementation times and more dedicated attention. Founded in 2009 by Robert Thomas, our team consistently pushes boundaries to make our vision a reality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-lg border border-gray-200 md:mb-6 md:pt-[100%]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.title}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-[#1F1946] md:text-lg">
                  {member.name}
                </h5>
                <h6 className="text-gray-700 md:text-md">{member.title}</h6>
              </div>
              <p className="text-gray-700">{member.description}</p>
              <div className="mt-6 flex gap-3.5 self-start">
                <a href="#" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-[#1F1946] hover:text-[#BD1550]">
                  <Dribbble className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: "Robert Thomas",
    title: "Founder & CEO",
    description: "Founded Empuls3 in 2009 as a specialized micro agency providing personalized technology solutions with direct access to senior specialists.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_0.png"
  },
  {
    name: "Mark Smith",
    title: "Senior Technical Specialist",
    description: "Providing direct client collaboration and overseeing technical excellence in our boutique approach to software development.",
    image: "/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
  },
  {
    name: "Sarah Lee",
    title: "Senior Project Specialist",
    description: "Working directly with clients to ensure faster implementation times and more personalized attention than larger firms can offer.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_1.png"
  },
  {
    name: "David Brown",
    title: "Senior Development Specialist",
    description: "Providing direct client collaboration with specialized expertise in full-stack development to create truly personalized software solutions.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_2.png"
  },
  {
    name: "Emma Wilson",
    title: "Senior Design Specialist",
    description: "Working directly with clients to craft personalized, user-centric designs that enhance the overall user experience with faster implementation times.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_3.png"
  },
  {
    name: "James Taylor",
    title: "Senior Marketing Specialist",
    description: "Providing personalized marketing solutions with direct client collaboration to drive brand awareness through truly tailored strategies.",
    image: "/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
  }
];
