import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MvpOverview() {
  const [activeTab, setActiveTab] = useState("tab-one");

  const tabs = [
    {
      id: "tab-one",
      title: "Boutique MVP Development",
      content: "As a specialized micro agency, our senior developers work directly with you to deliver tailored MVP solutions with faster turnaround times. We combine technical excellence with personalized attention that larger firms simply can't match, helping you succeed in the competitive market without the overhead costs.",
      image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_0.png"
    },
    {
      id: "tab-two",
      title: "Direct Access to Senior Talent",
      content: "Unlike larger agencies where your project might be handed off to junior staff, our boutique team ensures you work directly with senior developers throughout the entire process. This direct collaboration enables faster iteration cycles based on real user insights and market demands.",
      image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (2).png"
    },
    {
      id: "tab-three",
      title: "Micro Agency Scalability",
      content: "Our specialized team builds your MVP with scalability in mind while maintaining the personalized attention only a micro agency can provide. We design solutions that grow alongside your business without the communication barriers and overhead costs of traditional firms.",
      image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3.png"
    }
  ];

  return (
    <section id="mvp-overview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">The Micro Agency Advantage</p>
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Personalized MVP Development with Senior Expertise
          </h2>
          <p className="text-gray-700 md:text-lg">
            As a boutique micro agency, Empuls3 empowers startups and businesses with personalized MVP development services and direct access to our senior developers. We deliver faster validation and iteration without compromising quality, all with the focused attention and reduced overhead that larger firms simply can't match.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none"
            >
              Start A Project
              <ChevronRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                className={`transition-opacity duration-300 ${activeTab === tab.id ? 'block' : 'hidden'}`}
              >
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full rounded-image h-auto aspect-[4/3] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 items-center gap-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-start border-0 border-l-2 ${
                    activeTab === tab.id ? 'border-[#BD1550]' : 'border-gray-200'
                  } bg-transparent py-4 pr-0 pl-6 text-left whitespace-normal md:pl-8`}
                >
                  <h3 className={`mb-3 text-2xl font-bold font-header ${
                    activeTab === tab.id ? 'text-primary' : 'text-gray-500'
                  } md:mb-4 md:text-3xl md:leading-[1.3]`}>
                    {tab.title}
                  </h3>
                  <p className={`${
                    activeTab === tab.id ? 'text-gray-700' : 'text-gray-500'
                  }`}>
                    {tab.content}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
