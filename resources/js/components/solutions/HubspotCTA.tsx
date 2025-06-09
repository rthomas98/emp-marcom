"use client";

import React from "react";
import { Link } from "@inertiajs/react";

type ImageProps = {
  src: string;
  alt?: string;
};

type ButtonProps = {
  title: string;
  href: string;
  variant: "primary" | "secondary";
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export function HubspotCTA({ 
  heading = "Transform Your Business with HubSpot CRM", 
  description = "Ready to elevate your customer relationship management? Our team of HubSpot experts is here to help you implement, customize, and optimize your CRM solution.", 
  buttons = [
    { title: "Get Started", href: "/contact", variant: "primary" },
    { title: "Learn More", href: "/solutions", variant: "secondary" },
  ],
  image = {
    src: "/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png",
    alt: "Team collaborating on HubSpot solutions",
  }
}: Partial<Props>) {
  return (
    <section id="hubspot-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-cta-heading">
      <div className="container relative mx-auto">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <header className="w-full max-w-lg">
            <h2 id="hubspot-cta-heading" className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="text-white md:text-md">{description}</p>
          </header>
          <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot CTA navigation">
            {buttons.map((button, index) => (
              button.variant === "primary" ? (
                <Link
                  key={index}
                  href={button.href}
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#BD1550] shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                  aria-label={`${button.title} - ${heading}`}
                >
                  {button.title}
                </Link>
              ) : (
                <Link
                  key={index}
                  href={button.href}
                  className="inline-flex items-center justify-center rounded-md bg-transparent border border-white px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                  aria-label={`${button.title} - ${heading}`}
                >
                  {button.title}
                </Link>
              )
            ))}
          </nav>
        </div>
        <div className="absolute inset-0 z-0" role="img" aria-label={image.alt}>
          <img 
            src={image.src} 
            className="size-full object-cover" 
            alt="" 
            aria-hidden="true" 
            width="1200" 
            height="600" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
