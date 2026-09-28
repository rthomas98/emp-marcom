'use client';

import { Settings, Shield, UserPlus } from 'lucide-react';

export function ManagedITSupport() {
    return (
        <section id="managed-it-support" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-support-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-start">
                    <header className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                        <div>
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Beyond Individual Tickets</p>
                            <h2 id="it-support-heading" className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                                Support That Addresses Root Causes
                            </h2>
                        </div>
                        <div>
                            <p className="md:text-md text-gray-700">
                                When the same issues keep returning, closing tickets is not enough. We keep a history of recurring problems, look for
                                the patterns behind them, and bring leadership a prioritized list of changes that reduce the next round of
                                interruptions.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex flex-col" aria-labelledby="support-inventory-heading">
                            <div className="mb-5 md:mb-6">
                                <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="support-inventory-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Environment Inventory
                            </h3>
                            <p className="text-gray-700">
                                An up-to-date list of your devices, systems, vendor contacts, and past issues, so nobody starts from scratch.
                            </p>
                        </article>
                        <article className="flex flex-col" aria-labelledby="support-risk-heading">
                            <div className="mb-5 md:mb-6">
                                <Shield className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="support-risk-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Patterns and Priorities
                            </h3>
                            <p className="text-gray-700">
                                Repeat problems and security gaps are reviewed together, so fixes are ranked instead of treated one at a time.
                            </p>
                        </article>
                        <article className="flex flex-col" aria-labelledby="support-changes-heading">
                            <div className="mb-5 md:mb-6">
                                <UserPlus className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="support-changes-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Planned IT Changes
                            </h3>
                            <p className="text-gray-700">
                                Device replacements, system changes, and vendor transitions are planned with your main contact instead of handled as
                                surprises.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
