"use client";

import React from "react";
import { Link } from "@inertiajs/react";

type LinkProps = {
  href: string;
  title: string;
  variant?: "primary" | "secondary";
};

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  links: LinkProps[];
  image: ImageProps;
};

export type FAQsHeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export function FAQsHeader(props: FAQsHeaderProps) {
  const { heading, description, links, image, ...rest } = {
    ...FAQsHeaderDefaults,
    ...props,
  };

  return (
    <section id="faqs-header" className="relative px-[5%]" {...rest}>
      <div className="container mx-auto flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="mx-[7.5%] flex flex-col justify-end">
              <p className="text-white md:text-md">{description}</p>
            </div>

            <div className="order-first flex flex-col justify-start md:order-last md:justify-center">
              <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                {heading}
              </h1>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-center font-medium transition ${
                      link.variant === "secondary"
                        ? "border border-white bg-transparent text-white hover:bg-white hover:text-[#1F1946]"
                        : "border border-transparent bg-[#BD1550] text-white hover:bg-[#a01245]"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="h-full w-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-[#1F1946]/80" />
      </div>
    </section>
  );
}

export const FAQsHeaderDefaults: Props = {
  heading: "Boutique Agency FAQs",
  description:
    "Find answers to common questions about our specialized micro agency founded in 2009 by Robert Thomas. Learn about our personalized approach, direct access to senior specialists, and how we deliver faster implementation times than larger firms can offer—all without the overhead of traditional agencies.",
  links: [
    { href: "#faq-categories", title: "Browse FAQs", variant: "primary" }, 
    { href: "/contact", title: "Contact Us", variant: "secondary" }
  ],
  image: {
    src: "/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png",
    alt: "Team discussing solutions in a modern office",
  },
};
