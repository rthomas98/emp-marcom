import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MobileProcess() {
  return (
    <section id="mobile-process" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#BD1550]" aria-labelledby="mobile-process-heading">
      <div className="container mx-auto">
        <header className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p id="mobile-process-subheading" className="mb-3 font-semibold text-white md:mb-4">
              Swift, a fast and efficient programming language.
            </p>
            <h2 id="mobile-process-heading" className="text-5xl font-bold text-white md:text-7xl lg:text-6xl">
              Accelerate Your Mobile Development Journey
            </h2>
          </div>
          <div>
            <p className="md:text-md text-white">
              Experience rapid development cycles that prioritize quality and
              performance. Our team leverages cutting-edge technologies to
              deliver mobile applications that meet your business needs. With a
              focus on efficiency, we ensure your product reaches the market
              faster than ever.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <article aria-labelledby="quality-heading">
            <figure className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_951e0ed1-e092-48e3-802a-9bc4e19c7af2.png"
                alt="Development team ensuring quality standards"
                className="rounded-lg w-full h-auto object-cover aspect-video"
                width="400"
                height="225"
                loading="lazy"
              />
              <figcaption className="sr-only">Team members collaborating to ensure development quality</figcaption>
            </figure>
            <h3 id="quality-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Uncompromising Development Quality
            </h3>
            <p className="text-white">
              We consistently uphold exceptional standards in our work while
              efficiently speeding up project timelines for success.
            </p>
          </article>
          <article aria-labelledby="process-heading">
            <figure className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_bd469912-996e-4571-8b24-605888555825.png"
                alt="Team implementing streamlined development processes"
                className="rounded-lg w-full h-auto object-cover aspect-video"
                width="400"
                height="225"
                loading="lazy"
              />
              <figcaption className="sr-only">Developers working with agile methodologies for faster delivery</figcaption>
            </figure>
            <h3 id="process-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Streamlined Processes for Faster Time to Market
            </h3>
            <p className="text-white">
              Our agile methodologies are designed to deliver quick turnaround
              times, enhancing efficiency and project success.
            </p>
          </article>
          <article aria-labelledby="solutions-heading">
            <figure className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_c2c76405-7d19-4853-a0f4-468f736d29b6.png"
                alt="Team designing customized mobile solutions"
                className="rounded-lg w-full h-auto object-cover aspect-video"
                width="400"
                height="225"
                loading="lazy"
              />
              <figcaption className="sr-only">Developers creating innovative mobile solutions tailored to client needs</figcaption>
            </figure>
            <h3 id="solutions-heading" className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Innovative Solutions Tailored to Your Needs
            </h3>
            <p className="text-white">
              We tailor our strategies specifically to align with your unique
              vision, ensuring that every detail reflects your ideas and
              aspirations for the best possible outcome.
            </p>
          </article>
        </div>
        <nav className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20" aria-label="Mobile process navigation">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#BD1550] shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
            aria-label="Learn more about our mobile development process"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-white hover:text-gray-200 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            aria-label="Start a mobile development project with us"
          >
            Start A Project <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
