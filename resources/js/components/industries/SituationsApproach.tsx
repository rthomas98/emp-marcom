import { Info } from 'lucide-react';
import { approachSteps } from './situations-content';

export function SituationsApproach() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="situations-approach-heading">
            <div className="container mx-auto">
                <div className="mb-12 max-w-3xl md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Our approach</p>
                    <h2 id="situations-approach-heading" className="font-header text-primary text-4xl font-bold md:text-5xl">
                        Learn how things work before recommending technology
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute top-6 right-0 left-0 hidden h-px bg-gray-300 md:block" aria-hidden="true" />
                    <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-300 md:hidden" aria-hidden="true" />
                    <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
                        {approachSteps.map((step, index) => (
                            <li key={step.title} className="relative grid grid-cols-[auto_1fr] gap-x-5 md:block">
                                <span
                                    className="font-header bg-primary relative flex size-12 items-center justify-center rounded-full text-lg font-bold text-white ring-8 ring-white"
                                    aria-hidden="true"
                                >
                                    {index + 1}
                                </span>
                                <div className="md:mt-6">
                                    <h3 className="text-primary text-xl font-bold md:text-2xl">
                                        <span className="sr-only">Step {index + 1}: </span>
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-gray-700">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <p className="mt-12 flex max-w-3xl items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-5 leading-7 text-gray-700 md:mt-16">
                    <Info className="text-accent-pink mt-1 size-5 shrink-0" aria-hidden="true" />
                    <span>
                        When legal, compliance, security, or sector specialists are needed, we identify them early and coordinate with your team so
                        their guidance is part of the plan.
                    </span>
                </p>
            </div>
        </section>
    );
}
