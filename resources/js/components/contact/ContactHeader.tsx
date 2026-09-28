'use client';

import { requestContactIntent } from '@/utils/contact-intent';

export function ContactHeader() {
    return (
        <section id="contact-header" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="mb-12 text-center md:mb-18 lg:mb-20">
                        <div className="mx-auto w-full max-w-lg">
                            <h1 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                                Tell Us What You Want to Build or Fix
                            </h1>
                            <p className="md:text-md text-gray-700">
                                Planning a new website or web app, or need to improve a system you already use? Send a short note. We normally reply
                                within one business day by email, and we can go through the details after that.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                                <button
                                    type="button"
                                    aria-controls="contact-form"
                                    onClick={() => requestContactIntent('new-project')}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                >
                                    Start a New Project
                                </button>
                                <button
                                    type="button"
                                    aria-controls="contact-form"
                                    onClick={() => requestContactIntent('project')}
                                    className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-center font-medium text-[#1F1946] transition hover:bg-[#1F1946] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                >
                                    Request a Software Review
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid auto-cols-fr grid-cols-1 items-end sm:grid-cols-[0.4fr_1fr_0.4fr] sm:gap-8">
                        <div className="w-full self-start">
                            <img
                                className="aspect-[3/4] h-full w-full rounded-lg object-cover"
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png"
                                alt="Illustration of business professionals"
                            />
                        </div>
                        <div className="my-[15%] w-full">
                            <img
                                className="my-[10%] aspect-[3/2] h-full w-full rounded-lg object-cover sm:my-0"
                                src="/images/site-images/rob_thomas23_An_African_American_team_of_developers_working_col_23a5e847-d8cd-45e5-805c-f2485621fb22.png"
                                alt="Illustration of developers collaborating"
                            />
                        </div>
                        <div className="w-full">
                            <img
                                className="aspect-square h-full w-full rounded-lg object-cover"
                                src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
                                alt="Illustration of two people shaking hands"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
