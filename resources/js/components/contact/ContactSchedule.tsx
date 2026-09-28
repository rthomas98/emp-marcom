'use client';

import { requestContactIntent } from '@/utils/contact-intent';
import { Calendar, Clock, Users } from 'lucide-react';

export function ContactSchedule() {
    return (
        <section id="schedule-meeting" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                            alt="Illustration of people discussing a project around a table"
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl lg:text-5xl">Request a Consultation</h2>
                        <p className="md:text-md mb-8 text-gray-700">
                            Prefer to talk it through before sending details? Ask for a consultation and we will reply by email to arrange a time. It
                            works for a new website or app idea and for an existing system that needs work.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                                    <Calendar className="h-6 w-6 text-[#BD1550]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Bring What You Know</h3>
                                    <p className="text-gray-700">The goal, who uses it, and any timing. Missing details are fine at this stage.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                                    <Clock className="h-6 w-6 text-[#BD1550]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Expect a Fit Conversation</h3>
                                    <p className="text-gray-700">
                                        We will talk through whether Empuls3 is a good fit and whether the next step is a project plan, a focused
                                        assessment, or ongoing support.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                                    <Users className="h-6 w-6 text-[#BD1550]" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Leave with a Practical Next Step</h3>
                                    <p className="text-gray-700">You will know what information or access we need before we recommend an approach.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="button"
                                aria-controls="contact-form"
                                onClick={() => requestContactIntent('consultation')}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Request a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
