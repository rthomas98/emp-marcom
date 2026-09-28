'use client';

import { BarChart, Gauge, Zap } from 'lucide-react';

export function EngineeringPerformance() {
    return (
        <section
            id="engineering-performance"
            className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28"
            aria-labelledby="engineering-performance-heading"
        >
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Performance Optimization</p>
                        <h2 id="engineering-performance-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                            Find and Fix What Slows the System Down
                        </h2>
                    </div>
                    <div>
                        <p className="md:text-md text-gray-700">
                            Slow pages, timeouts, and overnight jobs that run into the workday usually trace back to a few specific causes. We review
                            your architecture, measure where time is spent, and fix the bottlenecks that matter most to your users.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <div>
                        <div className="mb-5 md:mb-6">
                            <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">Bottleneck Diagnosis</h3>
                        <p className="text-gray-700">
                            We trace slow requests through queries, integrations, and infrastructure to find the actual cause before changing code.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6">
                            <BarChart className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">Prioritized Improvements</h3>
                        <p className="text-gray-700">
                            Fixes are ranked by their effect on staff and customers, so the most disruptive problems are addressed first.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6">
                            <Gauge className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">Reliability Follow-Through</h3>
                        <p className="text-gray-700">
                            Health checks, logs, and alerts are added where they help your team spot the next slowdown before users report it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
