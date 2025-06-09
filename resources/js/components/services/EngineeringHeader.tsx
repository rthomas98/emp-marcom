"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EngineeringHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const slides = [
    {
      image: "/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_0.png",
      title: "Direct Access to Senior Engineers",
      description: "As a boutique micro agency, we provide personalized solutions with direct access to our senior engineers. Unlike larger firms where your project might be handed off to junior staff, our specialists work directly with you to address your unique challenges.",
      altText: "Senior software engineers collaborating on a project at Empuls3 micro agency"
    },
    {
      image: "/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_2.png",
      title: "Faster Implementation & Personalized Attention",
      description: "Our boutique team leverages cutting-edge technologies with faster implementation times and more dedicated attention than larger firms can offer—building scalable, robust solutions without the overhead and complexity.",
      altText: "Software engineering team working on implementing solutions with personalized attention"
    },
    {
      image: "/images/site-images/rob_thomas23_African_American_Software_Engineers_standing_fac_1c490440-96b8-4333-88cd-7c5e0c406ec0_3.png",
      title: "Boutique IT Consulting",
      description: "Experience the micro agency advantage with strategic guidance from our senior specialists who help you make informed technology decisions aligned with your business objectives—with the personalized attention that only a boutique firm can provide.",
      altText: "IT consultants providing strategic guidance to clients at Empuls3"
    }
  ];

  return (
    <section
      id="engineering-header"
      className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0"
      aria-labelledby="engineering-header-title"
    >
      <div className="mx-[5%] max-w-md justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <header>
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Software Engineering</p>
          <h1 id="engineering-header-title" className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-7xl lg:text-7xl">
            Personalized Solutions with Senior Expertise
          </h1>
        </header>
        <p className="text-gray-700 md:text-md">
          As a specialized micro agency, Empuls3 offers personalized software engineering and IT consulting services with direct access to our senior specialists. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to deliver tailored solutions that meet your unique technical needs—with faster implementation times and more dedicated attention.
        </p>
        <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Engineering services navigation">
          <Link 
            href="#services" 
            className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
            aria-label="Learn more about our engineering services"
          >
            Learn More
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-transparent border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
            aria-label="Contact us about software engineering services"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#f5f5f5] text-center" aria-roledescription="carousel" aria-label="Software engineering services carousel">
        <div className="relative h-full w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.title}`}
              aria-hidden={currentSlide !== index}
            >
              <div className="flex h-screen flex-col">
                <figure className="relative flex-1">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={slide.image}
                    alt={slide.altText}
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </figure>
                <div className="relative bg-white px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                  <div className="w-full max-w-lg text-left">
                    <h2 className="mb-1 text-md leading-[1.4] font-bold text-[#1F1946] md:text-xl">
                      {slide.title}
                    </h2>
                    <p className="text-gray-700">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute top-auto right-auto bottom-[52px] left-8 flex w-full items-start justify-start" role="tablist" aria-label="Select a slide to show">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-[3px] inline-block h-2 w-2 rounded-full ${
                  currentSlide === index ? "bg-[#1F1946]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-selected={currentSlide === index}
                role="tab"
                tabIndex={currentSlide === index ? 0 : -1}
              />
            ))}
          </div>
          
          <div className="absolute bottom-2 right-8 flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-[#1F1946]" aria-hidden="true" />
            </button>
            
            <button 
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-[#1F1946]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
