import { Quote } from 'lucide-react';

export function SoftwareTestimonials() {
    return (
        <section id="software-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="software-feedback-heading">
            <div className="container mx-auto">
                <div className="mb-12 w-full md:mb-18 lg:mb-20">
                    <h2 id="software-feedback-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Client feedback
                    </h2>
                    <p className="text-gray-700 md:text-lg">What clients say about working with Rob Thomas and Empuls3.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
                    <figure className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                        <div className="mb-6 flex text-[#BD1550] md:mb-8">
                            <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
                        </div>
                        <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
                            "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with
                            that. Would absolutely recommend to anyone looking for a top notch design agency to work with!"
                        </blockquote>
                        <figcaption className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
                            <div>
                                <img
                                    src="/images/1638545534787.jpeg"
                                    alt=""
                                    className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                    width="56"
                                    height="56"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-4 md:mb-0">
                                <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Client</p>
                                <p className="font-semibold text-[#BD1550]">Palmer Dean</p>
                                <p className="text-gray-600">Founder, Wash Metrix</p>
                            </div>
                            <div className="hidden w-px self-stretch bg-gray-300 md:block" />
                            <div>
                                <div className="flex h-12 w-24 items-center justify-center rounded bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-700">Wash Metrix</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                        <div className="mb-6 flex text-[#BD1550] md:mb-8">
                            <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
                        </div>
                        <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
                            "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time
                            for work is very quick."
                        </blockquote>
                        <figcaption className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
                            <div>
                                <img
                                    src="/images/image-800x800.webp"
                                    alt=""
                                    className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                    width="56"
                                    height="56"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-4 md:mb-0">
                                <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Client</p>
                                <p className="font-semibold text-[#BD1550]">James McElroy</p>
                                <p className="text-gray-600">Founder, CEO, frienzy.io</p>
                            </div>
                            <div className="hidden w-px self-stretch bg-gray-300 md:block" />
                            <div>
                                <div className="flex h-12 w-24 items-center justify-center rounded bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-700">frienzy.io</span>
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
