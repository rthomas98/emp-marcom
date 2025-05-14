"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  description: string;
  faqs: FAQItem[];
};

export function FAQsCategories() {
  const [openCategory, setOpenCategory] = useState<string | null>("services");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const categories: FAQCategory[] = [
    {
      title: "Services",
      description: "Common questions about our services and solutions",
      faqs: [
        {
          question: "What services does Empuls3 offer?",
          answer: "Empuls3 offers a comprehensive range of digital services including web development, mobile app development, cloud solutions, digital marketing, and strategic consulting. Our team specializes in creating custom solutions tailored to meet the unique needs of each client."
        },
        {
          question: "How do you ensure quality in your deliverables?",
          answer: "We maintain strict quality control processes throughout our development lifecycle. This includes thorough testing, code reviews, and regular client feedback sessions. Our team follows industry best practices and standards to ensure all deliverables meet the highest quality benchmarks."
        },
        {
          question: "What technologies do you specialize in?",
          answer: "Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, PHP/Laravel, Python, AWS, Azure, and Google Cloud. We stay current with emerging technologies to provide cutting-edge solutions for our clients."
        }
      ]
    },
    {
      title: "Partnerships",
      description: "Information about our partnership programs and opportunities",
      faqs: [
        {
          question: "How can my company partner with Empuls3?",
          answer: "We offer various partnership models including strategic alliances, technology partnerships, and channel partnerships. To explore partnership opportunities, please contact our partnerships team through the Contact Us page, and we'll schedule a consultation to discuss potential collaboration."
        },
        {
          question: "What benefits do partners receive?",
          answer: "Our partners enjoy benefits such as joint marketing opportunities, technical support, training resources, and access to our network of clients. We work closely with our partners to create mutually beneficial relationships that drive growth for both organizations."
        },
        {
          question: "Do you have any existing case studies of successful partnerships?",
          answer: "Yes, we have several case studies highlighting our successful partnerships with companies like Samsung, Shell, and Warner Brothers Discovery. These case studies demonstrate how our collaborative approach has delivered significant value and results for our partners."
        }
      ]
    },
    {
      title: "Process",
      description: "Learn about our project process and methodology",
      faqs: [
        {
          question: "What is your project development process?",
          answer: "Our development process follows an agile methodology with clear phases including discovery, planning, design, development, testing, deployment, and ongoing support. We emphasize collaboration, transparency, and regular communication throughout the project lifecycle."
        },
        {
          question: "How do you handle project timelines and deadlines?",
          answer: "We create detailed project plans with realistic timelines based on the scope and requirements. Our project managers closely monitor progress, identify potential delays early, and implement mitigation strategies when necessary to ensure timely delivery."
        },
        {
          question: "How do you communicate project updates?",
          answer: "We provide regular updates through scheduled meetings, progress reports, and our project management platform. Clients have access to real-time project status and can communicate directly with our team members as needed."
        }
      ]
    },
    {
      title: "Support",
      description: "Details about our support services and resources",
      faqs: [
        {
          question: "What kind of support do you provide after project completion?",
          answer: "We offer comprehensive post-launch support including maintenance, bug fixes, performance monitoring, and feature enhancements. Our support packages can be tailored to meet your specific needs and budget constraints."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "Our standard response time for support requests is within 24 hours, with faster response times for critical issues. We offer different service level agreements (SLAs) based on your support package."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we provide comprehensive training for your team on how to use and manage the solutions we develop. This includes documentation, hands-on training sessions, and ongoing support to ensure your team can effectively utilize the technology."
        }
      ]
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  const toggleQuestion = (categoryTitle: string, questionIndex: number) => {
    const key = `${categoryTitle}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faq-categories" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl">
              Browse by Category
            </h2>
            <p className="text-gray-700 md:text-md">
              Find answers to your questions by exploring our FAQ categories below. If you can't find what you're looking for, please contact our support team.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <button
                className="flex w-full items-center justify-between bg-white p-6 text-left transition hover:bg-gray-50 md:p-8"
                onClick={() => toggleCategory(category.title.toLowerCase())}
                aria-expanded={openCategory === category.title.toLowerCase()}
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1F1946] md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-gray-700">
                    {category.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <ChevronDown 
                    className={`h-6 w-6 text-[#BD1550] transition-transform ${
                      openCategory === category.title.toLowerCase() ? "rotate-180" : ""
                    }`} 
                  />
                </div>
              </button>

              {openCategory === category.title.toLowerCase() && (
                <div className="border-t border-gray-200 px-6 py-4 md:px-8">
                  <div className="divide-y divide-gray-200">
                    {category.faqs.map((faq, index) => (
                      <div key={index} className="py-4">
                        <button
                          className="flex w-full items-center justify-between text-left"
                          onClick={() => toggleQuestion(category.title.toLowerCase(), index)}
                          aria-expanded={!!openQuestions[`${category.title.toLowerCase()}-${index}`]}
                        >
                          <h4 className="text-lg font-medium text-[#1F1946]">
                            {faq.question}
                          </h4>
                          <ChevronDown 
                            className={`h-5 w-5 text-[#BD1550] transition-transform ${
                              openQuestions[`${category.title.toLowerCase()}-${index}`] ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openQuestions[`${category.title.toLowerCase()}-${index}`] && (
                          <div className="mt-2 text-gray-700">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
