'use client';

export function HubspotTestimonial() {
    return (
        <section id="hubspot-testimonial" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-testimonial-heading">
            <div className="container mx-auto">
                <div className="mx-auto w-full max-w-lg text-center">
                    <h2 id="hubspot-testimonial-heading" className="sr-only">
                        Client feedback about working with Rob
                    </h2>
                    <p className="mb-6 text-sm font-semibold tracking-wide text-[#BD1550] uppercase md:mb-8">Client</p>
                    <blockquote className="text-xl font-bold text-[#1F1946] md:text-2xl">
                        "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for
                        work is very quick."
                    </blockquote>
                    <footer className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
                        <div>
                            <img
                                src="/images/image-800x800.webp"
                                alt="James McElroy portrait"
                                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                        </div>
                        <cite className="mb-4 not-italic md:mb-0">
                            <p className="font-semibold text-[#1F1946]">James McElroy</p>
                            <p className="text-gray-700">Founder, CEO, frienzy.io</p>
                        </cite>
                        <div className="hidden w-px self-stretch bg-gray-300 md:block" aria-hidden="true" />
                        <div>
                            <p className="text-lg font-bold text-[#1F1946]">frienzy.io</p>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
}
