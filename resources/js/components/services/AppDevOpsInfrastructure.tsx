'use client';

import { DollarSign, Scale, Server, Zap } from 'lucide-react';

export function AppDevOpsInfrastructure() {
    return (
        <section
            id="app-devops-infrastructure"
            className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
            aria-labelledby="infrastructure-heading"
        >
            <div className="relative z-10 container mx-auto">
                <header className="mb-12 max-w-lg md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold text-white md:mb-4">Infrastructure and observability</p>
                    <h2 id="infrastructure-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                        Infrastructure you can see, change, and recover
                    </h2>
                    <p className="md:text-md text-white">
                        We improve the highest-risk parts first instead of imposing a fashionable platform or unnecessary infrastructure. The goal is
                        environments that match, problems that surface before users report them, and a recovery plan your team can follow.
                    </p>
                </header>
                <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
                    <article className="flex w-full flex-col" aria-labelledby="infra-automation-heading">
                        <div className="mb-5 md:mb-6">
                            <Server className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="infra-automation-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Infrastructure Automation
                        </h3>
                        <p className="text-white">
                            Environments are defined and provisioned the same way each time, which removes the small manual differences that make
                            deployments unpredictable.
                        </p>
                    </article>
                    <article className="flex w-full flex-col" aria-labelledby="infra-scalability-heading">
                        <div className="mb-5 md:mb-6">
                            <Scale className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="infra-scalability-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Capacity for Growing Demand
                        </h3>
                        <p className="text-white">
                            We size and configure hosting so the application can handle increasing demand, without adding infrastructure it does not
                            need.
                        </p>
                    </article>
                    <article className="flex w-full flex-col" aria-labelledby="infra-resource-heading">
                        <div className="mb-5 md:mb-6">
                            <DollarSign className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="infra-resource-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Resource and Cost Review
                        </h3>
                        <p className="text-white">
                            We review how cloud and hosting resources are used and remove idle or oversized services where they do not support the
                            application.
                        </p>
                    </article>
                    <article className="flex w-full flex-col" aria-labelledby="infra-observability-heading">
                        <div className="mb-5 md:mb-6">
                            <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="infra-observability-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Monitoring and Recovery
                        </h3>
                        <p className="text-white">
                            Health checks, logs, alerts, and release markers reveal problems early, and runbooks define rollback, data recovery,
                            escalation, and incident communication.
                        </p>
                    </article>
                </div>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <figure>
                    <img
                        src="/images/site-images/rob_thomas23_African_American_developer_standing_near_a_server__d9ad6d27-075f-4765-ba32-359df48eb803.png"
                        className="h-full w-full object-cover"
                        alt=""
                        width="1920"
                        height="1080"
                        loading="lazy"
                    />
                </figure>
                <div className="absolute inset-0 bg-[#1F1946]/80" />
            </div>
        </section>
    );
}
