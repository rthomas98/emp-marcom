import React from "react";
import { Star } from "lucide-react";

export function BackendTestimonials() {
  return (
    <section id="backend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 id="testimonials-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Customer Testimonials
          </h2>
          <p className="text-gray-700 md:text-lg">
            Empuls3 has significantly enhanced our backend systems, delivering
            exceptional efficiency and performance improvements that have
            streamlined our processes and boosted overall productivity across
            the board.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <article className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8" aria-label="5 out of 5 star rating" role="img">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "I gladly managed and collaborated with Rob at Monkeytag. When Rob joined our company, he jumped right into a fast-moving project for a large client."
            </blockquote>
            <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <figure className="mb-4">
                <img
                  src="/images/1723665299718.jpeg"
                  alt="Anthony Bearden portrait"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </figure>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Anthony Bearden</p>
                <p className="text-gray-700">Founder | Marketer | Consultant</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">Monkeytag</p>
              </div>
            </footer>
          </article>
          <article className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8" aria-label="5 out of 5 star rating" role="img">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that."
            </blockquote>
            <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <figure className="mb-4">
                <img
                  src="/images/1638545534787.jpeg"
                  alt="Palmer Dean portrait"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </figure>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Palmer Dean</p>
                <p className="text-gray-700">Founder, Wash Metrix</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">Wash Metrix</p>
              </div>
            </footer>
          </article>
          <article className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8" aria-label="5 out of 5 star rating" role="img">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick."
            </blockquote>
            <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <figure className="mb-4">
                <img
                  src="/images/image-800x800.webp"
                  alt="James McElroy portrait"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </figure>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">James McElroy</p>
                <p className="text-gray-700">Founder & CEO, frienzy.io</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">frienzy.io</p>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
