import { CalendarCheck, KeyRound, MessageSquare, Rocket, TestTube } from 'lucide-react';
import { buildPractices, ownershipPoints } from './founder-content';

const practiceIcons = [CalendarCheck, TestTube, MessageSquare, Rocket];

export function FounderBuild() {
    return (
        <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="founder-build-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Building the First Release</p>
                    <h2 id="founder-build-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        What to expect once we start building
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        The build follows the plan from your Blueprint, with a separate written estimate agreed before any work begins.
                    </p>
                </div>

                <ul className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {buildPractices.map((practice, index) => {
                        const Icon = practiceIcons[index];
                        return (
                            <li key={practice.title} className="rounded-lg bg-white p-6">
                                <Icon className="text-accent-pink mb-4 size-8" aria-hidden="true" />
                                <h3 className="text-primary mb-2 text-xl font-bold">{practice.title}</h3>
                                <p className="text-gray-700">{practice.description}</p>
                            </li>
                        );
                    })}
                </ul>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-lg bg-white p-6 md:grid-cols-[auto_1fr] md:p-10">
                    <span className="bg-accent-pink/10 text-accent-pink flex size-14 items-center justify-center rounded-full" aria-hidden="true">
                        <KeyRound className="size-7" />
                    </span>
                    <div>
                        <h3 className="font-header text-primary mb-4 text-3xl font-bold">Your code, accounts, and access</h3>
                        <ul className="list-disc space-y-3 pl-5 text-gray-700">
                            {ownershipPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
