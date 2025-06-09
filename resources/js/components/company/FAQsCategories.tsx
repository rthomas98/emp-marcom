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
  const [openCategory, setOpenCategory] = useState<string | null>("micro agency advantage");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const categories: FAQCategory[] = [
    {
      title: "Micro Agency Advantage",
      description: "Learn about the benefits of working with our boutique agency",
      faqs: [
        {
          question: "What makes Empuls3 different as a micro agency?",
          answer: "As a specialized micro agency founded in 2009 by Robert Thomas, Empuls3 provides direct access to senior specialists who work directly with you—unlike larger firms where your project might be handed off to junior staff. Our boutique approach delivers personalized solutions with faster implementation times and more dedicated attention than larger firms can offer, all without the overhead of traditional agencies."
        },
        {
          question: "How does your micro agency approach benefit clients?",
          answer: "Our boutique approach means you work directly with senior specialists who understand your unique needs. This direct collaboration results in faster implementation times, more personalized solutions, and a level of dedicated attention that larger agencies simply cannot match—all without the overhead costs associated with traditional firms."
        },
        {
          question: "What services does your boutique agency offer?",
          answer: "Since our founding in 2009, our specialized micro agency has offered personalized technology solutions including web development, mobile app development, cloud solutions, digital marketing, and strategic consulting. Unlike larger firms, our senior specialists work directly with you to create truly tailored solutions with faster implementation times."
        }
      ]
    },
    {
      title: "Boutique Partnerships",
      description: "Information about our strategic alliances as a micro agency",
      faqs: [
        {
          question: "How does your micro agency approach partnerships?",
          answer: "As a specialized boutique agency founded in 2009 by Robert Thomas, we form strategic alliances that complement our personalized approach. We carefully select partners who enhance our ability to provide direct access to senior specialists while maintaining our boutique service model—delivering faster implementation times without the overhead of larger firms."
        },
        {
          question: "What benefits do partners receive when working with a micro agency?",
          answer: "Partners who collaborate with our boutique agency benefit from our agile decision-making, personalized approach, and direct access to our senior specialists. We create truly collaborative relationships where both organizations can leverage each other's strengths without the bureaucracy and overhead of larger firms."
        },
        {
          question: "Can you share examples of successful micro agency partnerships?",
          answer: "Yes, our specialized micro agency has successfully partnered with companies like Samsung, Shell, and Warner Brothers Discovery. These partnerships demonstrate how our boutique approach—providing direct access to senior specialists and personalized solutions—has delivered significant value with faster implementation times than larger firms can offer."
        }
      ]
    },
    {
      title: "Boutique Process",
      description: "Learn about our micro agency approach to projects",
      faqs: [
        {
          question: "How does your micro agency approach project development?",
          answer: "As a specialized boutique agency, our senior specialists work directly with you throughout the entire project lifecycle. Unlike larger firms where your project might be handed off to junior staff, our micro agency approach ensures personalized attention, faster implementation times, and more agile decision-making—all without the overhead of traditional agencies."
        },
        {
          question: "How does your boutique approach affect project timelines?",
          answer: "Our micro agency model enables us to deliver faster implementation times than larger firms can offer. With direct access to senior specialists and fewer layers of management, we eliminate bureaucratic delays and provide more dedicated attention to your project—ensuring efficient delivery without sacrificing quality."
        },
        {
          question: "How do you maintain communication as a micro agency?",
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
    <section 
      id="faq-categories" 
      className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28"
      aria-labelledby="faq-categories-heading"
    >
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Micro Agency FAQs</p>
            <h2 
              id="faq-categories-heading"
              className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl"
            >
              Boutique Agency Questions
            </h2>
            <p className="text-gray-700 md:text-md">
              Find answers about our specialized micro agency founded in 2009 by Robert Thomas. Explore how we provide direct access to senior specialists and deliver personalized solutions with faster implementation times than larger firms can offer.
            </p>
          </header>
        </div>

        <div 
          className="mx-auto max-w-4xl"
          role="tablist"
          aria-label="FAQ categories"
        >
          {categories.map((category) => {
            const categoryId = category.title.toLowerCase().replace(/\s+/g, '-');
            const isOpen = openCategory === category.title.toLowerCase();
            
            return (
              <div 
                key={category.title} 
                className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <h3>
                  <button
                    id={`tab-${categoryId}`}
                    className="flex w-full items-center justify-between bg-white p-6 text-left transition hover:bg-gray-50 md:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    onClick={() => toggleCategory(category.title.toLowerCase())}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${categoryId}`}
                    role="tab"
                  >
                    <div>
                      <span className="text-xl font-bold text-[#1F1946] md:text-2xl">
                        {category.title}
                      </span>
                      <p className="mt-2 text-gray-700">
                        {category.description}
                      </p>
                    </div>
                    <div 
                      className="ml-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <ChevronDown 
                        className={`h-6 w-6 text-[#BD1550] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`} 
                      />
                    </div>
                  </button>
                </h3>

              {isOpen && (
                <div 
                  id={`panel-${categoryId}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${categoryId}`}
                  className="border-t border-gray-200 px-6 py-4 md:px-8"
                >
                  <div 
                    className="divide-y divide-gray-200"
                    role="list"
                    aria-label={`${category.title} frequently asked questions`}
                  >
                    {category.faqs.map((faq, index) => {
                      const questionId = `${category.title.toLowerCase().replace(/\s+/g, '-')}-q${index}`;
                      const isQuestionOpen = !!openQuestions[`${category.title.toLowerCase()}-${index}`];
                      
                      return (
                        <div 
                          key={index} 
                          className="py-4"
                          role="listitem"
                        >
                          <h4>
                            <button
                              id={questionId}
                              className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                              onClick={() => toggleQuestion(category.title.toLowerCase(), index)}
                              aria-expanded={isQuestionOpen}
                              aria-controls={`${questionId}-answer`}
                            >
                              <span className="text-lg font-medium text-[#1F1946]">
                                {faq.question}
                              </span>
                              <span 
                                className="ml-4 flex-shrink-0"
                                aria-hidden="true"
                              >
                                <ChevronDown 
                                  className={`h-5 w-5 text-[#BD1550] transition-transform ${
                                    isQuestionOpen ? "rotate-180" : ""
                                  }`} 
                                />
                              </span>
                            </button>
                          </h4>
                          {isQuestionOpen && (
                            <div 
                              id={`${questionId}-answer`}
                              className="mt-2 text-gray-700"
                            >
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
