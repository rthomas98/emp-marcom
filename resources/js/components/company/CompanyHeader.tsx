"use client";

import React from "react";
import { Link } from "@inertiajs/react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
};

const imageColumns = [
  { className: "-mt-[20%]", animation: "animate-loop-vertically" },
  { className: "-mt-[50%]", animation: "animate-loop-vertically-reverse" },
  { className: "", animation: "animate-loop-vertically" },
  { className: "mt-[-30%]", animation: "animate-loop-vertically-reverse" },
  { className: "mt-[-20%]", animation: "animate-loop-vertically" },
];

export function CompanyHeader({
  heading = "The Micro Agency Advantage",
  description = "Founded in 2009 by Robert Thomas, Empuls3 is a specialized micro agency providing personalized technology solutions with direct access to senior specialists. Unlike larger firms, our boutique team delivers faster implementation times and more dedicated attention without the overhead of traditional agencies.",
  imagesPartOne = defaultImagesPartOne,
  imagesPartTwo = defaultImagesPartTwo,
}: Partial<Props>) {
  return (
    <section id="company-header" className="relative px-[5%]">
      <div className="flex max-h-[60rem] min-h-svh items-center">
        <div className="container py-16 md:py-24 lg:py-28 mx-auto">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="text-white md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Link
                href="/company/about"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-[#1F1946]/70" />
          <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
            {imageColumns.map((column, index) => (
              <AnimatedImageColumn
                key={index}
                imagesPartOne={imagesPartOne}
                imagesPartTwo={imagesPartTwo}
                className={column.className}
                animation={column.animation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ImageGrid = ({ images, animation }: { images: ImageProps[], animation: string }) => (
  <div className={`flex flex-col gap-4 ${animation}`}>
    {images.map((image, index) => (
      <div key={index} className="relative w-full pt-[120%] mb-4">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-md"
          src={image.src}
          alt={image.alt}
        />
      </div>
    ))}
    {/* Duplicate images for seamless loop */}
    {images.map((image, index) => (
      <div key={`duplicate-${index}`} className="relative w-full pt-[120%] mb-4">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-md"
          src={image.src}
          alt={image.alt}
        />
      </div>
    ))}
  </div>
);

const AnimatedImageColumn = ({
  imagesPartOne,
  imagesPartTwo,
  className,
  animation,
}: {
  imagesPartOne: ImageProps[];
  imagesPartTwo: ImageProps[];
  className: string;
  animation: string;
}) => (
  <div className={`h-full overflow-hidden ${className}`}>
    <div className="h-[200%]">
      <ImageGrid images={[...imagesPartOne, ...imagesPartTwo]} animation={animation} />
    </div>
  </div>
);

const defaultImagesPartOne = [
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png",
    alt: "Diverse team collaborating in office",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png",
    alt: "Team members discussing project",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_2.png",
    alt: "Professional team meeting",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_3.png",
    alt: "Team working together on project",
  },
];

const defaultImagesPartTwo = [
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_0.png",
    alt: "Technology professionals collaborating",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_1.png",
    alt: "Team brainstorming session",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_2.png",
    alt: "Professional team in modern office",
  },
  {
    src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_3.png",
    alt: "Team members working together",
  },
];
