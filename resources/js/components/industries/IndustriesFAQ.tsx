"use client";

import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function IndustriesFAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const faqItems: FAQItem[] = [
    {
      id: "item-0",
      question: "What industries do you serve as a micro agency?",
      answer: "As a specialized micro agency, we provide truly personalized technology solutions across various industries including healthcare, finance, e-commerce, manufacturing, education, and startups. Unlike larger firms where your project might be handed off to junior staff, our boutique team of senior specialists works directly with you—ensuring our deep understanding of sector-specific challenges enables us to deliver more effective results with faster implementation times and more dedicated attention than larger firms can provide."
    },
    {
      id: "item-1",
      question: "How do you ensure quality?",
      answer: "Quality is at the forefront of our development process. We employ rigorous testing and validation methods to ensure our solutions meet the highest standards. Our experienced team is dedicated to delivering exceptional results without compromising on quality."
    },
    {
      id: "item-2",
      question: "What is your approach?",
      answer: "Our approach combines technical excellence with a deep understanding of industry needs. We utilize modern development practices and emerging technologies to create innovative solutions. This ensures that our clients can achieve digital excellence and drive growth."
    },
    {
      id: "item-3",
      question: "Can you handle scalability?",
      answer: "Absolutely! Our remote-first structure allows us to scale solutions efficiently as your business grows. We focus on long-term scalability to ensure our technology adapts to your evolving needs. This flexibility is key to supporting both startups and established enterprises."
    },
    {
      id: "item-4",
      question: "How do I get started?",
      answer: "Getting started is easy! Simply reach out through our contact form, and we'll schedule a consultation. Our team will discuss your specific needs and outline how we can help you achieve your goals."
    }
  ];

  return (
    <section id="industries-faq" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            Boutique Agency FAQs
          </p>
          <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
            Common Questions
          </h2>
          <p className="text-gray-700 md:text-md">
            Find answers to common questions about our boutique agency approach and personalized industry-specific technology solutions.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between py-4 text-left font-medium text-[#1F1946] md:py-5 md:text-md"
              >
                {item.question}
                <ChevronDown 
                  className={`h-5 w-5 text-[#BD1550] transition-transform ${openItems[item.id] ? 'rotate-180' : ''}`} 
                />
              </button>
              {openItems[item.id] && (
                <div className="pb-4 text-gray-700 md:pb-6">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="text-gray-700 md:text-md">We're here to help!</p>
          <div className="mt-6 md:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
