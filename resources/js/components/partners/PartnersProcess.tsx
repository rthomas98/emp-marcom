import { CheckCircle2 } from 'lucide-react';
import { collaborationAgreements, collaborationSteps } from './partners-content';

export function PartnersProcess() {
    return (
        <section className="px-[5%] py-16 md:py-24" aria-labelledby="collaboration-process-heading">
            <div className="container mx-auto">
                <div className="mb-10 max-w-2xl md:mb-12">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">How it works</p>
                    <h2 id="collaboration-process-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        What working together looks like
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">
                        Before work starts, everyone knows who does what, who approves changes, and how to reach each other, so questions go to the
                        right person and nothing waits on an unclear approval.
                    </p>
                </div>

                <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
                    {collaborationSteps.map((step, index) => (
                        <li key={step.title} className="bg-white p-6 md:p-8">
                            <span className="font-header text-accent-pink text-3xl font-bold" aria-hidden="true">
                                {index + 1}
                            </span>
                            <h3 className="text-primary mt-4 text-lg font-semibold">
                                <span className="sr-only">Step {index + 1}: </span>
                                {step.title}
                            </h3>
                            <p className="mt-2 leading-7 text-gray-700">{step.description}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-10 md:mt-12" aria-labelledby="collaboration-agreements-heading" role="group">
                    <h3 id="collaboration-agreements-heading" className="text-primary text-lg font-semibold">
                        What we agree before work starts
                    </h3>
                    <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {collaborationAgreements.map((agreement) => (
                            <li key={agreement.title} className="flex items-start gap-3">
                                <CheckCircle2 className="text-accent-pink mt-0.5 size-5 shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="text-primary font-semibold">{agreement.title}</p>
                                    <p className="mt-1 leading-7 text-gray-700">{agreement.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
