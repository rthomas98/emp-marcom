"use client";

import React from "react";
import { Linkedin, Twitter, Dribbble } from "lucide-react";

export function CompanyTeam() {
  return (
    <section id="company-team" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Team</p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Our Team
          </h2>
          <p className="text-gray-700 md:text-md">
            Introducing the exceptional individuals who are at the heart of our
            success. Their dedication, creativity, and expertise play a vital
            role in shaping our achievements. Together, they form a remarkable
            team that consistently pushes boundaries and delivers outstanding
            results, making our vision a reality.
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
    name: "Alice Johnson",
    title: "CEO & Founder",
    description: "Leading the vision and strategy for innovative technology solutions at Empuls3.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_0.png"
  },
  {
    name: "Mark Smith",
    title: "CTO",
    description: "Overseeing technical excellence and innovation in software development practices.",
    image: "/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
  },
  {
    name: "Sarah Lee",
    title: "Project Manager",
    description: "Ensuring timely delivery and client satisfaction through effective project management.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_1.png"
  },
  {
    name: "David Brown",
    title: "Lead Developer",
    description: "Specializing in full-stack development to create robust software solutions.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_2.png"
  },
  {
    name: "Emma Wilson",
    title: "UX Designer",
    description: "Crafting user-centric designs that enhance the overall user experience.",
    image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_3.png"
  },
  {
    name: "James Taylor",
    title: "Marketing Lead",
    description: "Driving brand awareness and engagement through innovative marketing strategies.",
    image: "/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
  }
];
