import { processSteps } from './about-content';

export function AboutProcess() {
    return (
        <section
            id="about-process"
            className="scroll-mt-24 bg-[#1F1946] px-[5%] py-16 text-white md:py-24 lg:py-28"
            aria-labelledby="about-process-heading"
        >
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <p className="mb-3 font-semibold text-[#F29AB8] md:mb-4">Our process</p>
                    <h2 id="about-process-heading" className="font-header mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        From first conversation to ongoing support
                    </h2>
                    <p className="text-lg leading-8 text-white/80">
                        The same steps apply to a new build, a focused project on an existing system, or an ongoing support arrangement.
                    </p>
                </div>
                <ol className="space-y-10">
                    {processSteps.map((step, index) => (
                        <li key={step.title} className="grid grid-cols-[auto_1fr] gap-x-6">
                            <span
                                className="font-header flex size-12 items-center justify-center rounded-full border border-white/30 text-lg font-bold"
                                aria-hidden="true"
                            >
                                {index + 1}
                            </span>
                            <div className="border-b border-white/15 pb-10">
                                <h3 className="text-2xl font-bold">
                                    <span className="sr-only">Step {index + 1}: </span>
                                    {step.title}
                                </h3>
                                <p className="mt-3 leading-7 text-white/80">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
