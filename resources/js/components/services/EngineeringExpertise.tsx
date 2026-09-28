'use client';

import { Code, Lightbulb, Server } from 'lucide-react';

export function EngineeringExpertise() {
    return (
        <section id="engineering-expertise" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="expertise-heading">
            <div className="container mx-auto">
                <header className="mb-12 text-center md:mb-18 lg:mb-20">
                    <div className="mx-auto w-full max-w-3xl">
                        <p className="mb-3 text-center font-semibold text-[#BD1550] md:mb-4">Development and Consulting</p>
                        <h2 id="expertise-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                            Full-Stack Development and IT Consulting From One Developer
                        </h2>
                    </div>
                </header>
                <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    <article className="flex flex-col items-center text-center" aria-labelledby="senior-developers-heading">
                        <div className="mb-5 md:mb-6">
                            <Code className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="senior-developers-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
                            A Senior Full-Stack Developer
                        </h3>
                        <p className="text-gray-700">
                            The same developer works across the front end, back end, database, and integrations, so fixes and features are not split
                            between several vendors.
                        </p>
                    </article>
                    <article className="flex flex-col items-center text-center" aria-labelledby="it-consulting-heading">
                        <div className="mb-5 md:mb-6">
                            <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="it-consulting-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
                            IT Consulting
                        </h3>
                        <p className="text-gray-700">
                            We help leadership weigh business impact, technical risk, and delivery dependencies when choosing platforms, vendors, and
                            roadmap priorities.
                        </p>
                    </article>
                    <article className="flex flex-col items-center text-center" aria-labelledby="tailored-solutions-heading">
                        <div className="mb-5 md:mb-6">
                            <Lightbulb className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="tailored-solutions-heading" className="mb-5 text-xl font-bold text-[#1F1946] md:mb-6 md:text-2xl">
                            Solutions Built Around Your Workflow
                        </h3>
                        <p className="text-gray-700">
                            Recommendations start from how your staff and customers actually use the system, not from a preferred tool or platform.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
