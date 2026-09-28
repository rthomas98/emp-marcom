'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight, FileSearch, GitBranch, Rocket } from 'lucide-react';

export function AppDevOpsProcess() {
    return (
        <section id="app-devops-process" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-process-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <header className="mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">What a deployment review produces</p>
                        <h2 id="devops-process-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                            What you get from a deployment review
                        </h2>
                        <p className="md:text-md text-gray-700">
                            The review looks at how your application is built, tested, deployed, and rolled back today. Urgent fixes are separated
                            from improvements that can wait.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="understand-problem-heading">
                            <div className="mb-5 md:mb-6">
                                <FileSearch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="understand-problem-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                A Written Review
                            </h3>
                            <p className="text-gray-700">
                                A plain-language write-up of how builds, deployments, and rollbacks work today, and where they break or depend on one
                                person.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="safest-move-heading">
                            <div className="mb-5 md:mb-6">
                                <GitBranch className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="safest-move-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                A Prioritized Fix List
                            </h3>
                            <p className="text-gray-700">
                                The changes ranked by risk and effort, with the urgent fixes first, so you can decide what to do now and what can
                                wait.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="visible-ownership-heading">
                            <div className="mb-5 md:mb-6">
                                <Rocket className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="visible-ownership-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                An Implemented Pipeline and Runbook
                            </h3>
                            <p className="text-gray-700">
                                If you go ahead, we build the agreed pipeline changes and write a runbook your team can follow for releases, rollback,
                                and recovery.
                            </p>
                        </article>
                    </div>
                    <nav className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" aria-label="DevOps process navigation">
                        <Link
                            href="/company/faqs"
                            className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            Read Common Questions
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
