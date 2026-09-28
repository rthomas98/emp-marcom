import { Link } from '@inertiajs/react';
import { Quote } from 'lucide-react';

export function WebEcommerceTestimonials() {
    return (
        <section id="web-ecommerce-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="web-ecommerce-feedback-heading">
            <div className="container mx-auto">
                <div className="mb-12 w-full md:mb-18 lg:mb-20">
                    <h2
                        id="web-ecommerce-feedback-heading"
                        className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                    >
                        Client feedback
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        What clients say about working with Rob Thomas and Empuls3. For project details, read how we built a{' '}
                        <Link
                            href="/case-studies/codegig-strategic-pivot-new-website-for-new-audiences"
                            className="font-medium text-[#BD1550] underline"
                        >
                            new website for CodeGig
                        </Link>{' '}
                        and{' '}
                        <Link href="/case-studies/solushiens-modern-website-redesign" className="font-medium text-[#BD1550] underline">
                            redesigned the Solushiens website
                        </Link>
                        .
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
                    <figure className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                        <div className="mb-6 flex text-[#BD1550] md:mb-8">
                            <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
                        </div>
                        <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
                            "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with
                            that."
                        </blockquote>
                        <figcaption className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                            <div className="mb-4">
                                <img
                                    src="/images/1638545534787.jpeg"
                                    alt=""
                                    className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                    width="56"
                                    height="56"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-3 md:mb-4">
                                <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Client</p>
                                <p className="text-primary font-semibold">Palmer Dean</p>
                                <p className="text-gray-600">Founder, Wash Metrix</p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                        <div className="mb-6 flex text-[#BD1550] md:mb-8">
                            <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
                        </div>
                        <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
                            "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will
                            ensure your project is completed from beginning to the end."
                        </blockquote>
                        <figcaption className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                            <div className="mb-4">
                                <img
                                    src="/images/305620519_446536930828187_8773084213258704960_n.jpg"
                                    alt=""
                                    className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                    width="56"
                                    height="56"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-3 md:mb-4">
                                <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Client</p>
                                <p className="text-primary font-semibold">John Knight</p>
                                <p className="text-gray-600">Founder, 24peekview.com</p>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                        <div className="mb-6 flex text-[#BD1550] md:mb-8">
                            <Quote className="h-6 w-6 fill-current" aria-hidden="true" />
                        </div>
                        <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
                            "Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly
                            positive."
                        </blockquote>
                        <figcaption className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                            <div className="mb-4">
                                <img
                                    src="/images/fx-gs.webp"
                                    alt=""
                                    className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                    width="56"
                                    height="56"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mb-3 md:mb-4">
                                <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Client</p>
                                <p className="text-primary font-semibold">Theron Williams</p>
                                <p className="text-gray-600">Client, Owner at Theron J Williams Consulting LLC</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
