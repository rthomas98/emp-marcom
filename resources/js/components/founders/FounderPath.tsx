import { Check, Info } from 'lucide-react';
import { blueprintBoundaries, blueprintIncludes, founderPath, mvpExplainer } from './founder-content';

export function FounderPath() {
    return (
        <section id="founder-path" className="scroll-mt-24 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="founder-path-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">From Idea to Launch</p>
                    <h2 id="founder-path-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Three steps, each agreed before it starts
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Planning, building, and support are separate steps with their own scope and price, so you always know what you are paying for
                        next.
                    </p>
                </div>

                <ol className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {founderPath.map((item) => (
                        <li key={item.step} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 md:p-8">
                            <span
                                className="bg-accent-pink mb-5 flex size-12 items-center justify-center rounded-full text-lg font-bold text-white"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>
                            <h3 className="text-primary text-2xl font-bold">
                                <span className="sr-only">Step {item.step}: </span>
                                {item.title}
                            </h3>
                            <p className="text-accent-pink mt-1 font-semibold">{item.price}</p>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                        </li>
                    ))}
                </ol>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="rounded-lg bg-gray-50 p-6 md:p-10">
                        <h3 className="font-header text-primary mb-2 text-3xl font-bold">What a Product Blueprint typically covers</h3>
                        <p className="mb-6 text-gray-700">The exact list is agreed with you before we start, based on your idea and budget.</p>
                        <ul className="space-y-4">
                            {blueprintIncludes.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span
                                        className="bg-accent-pink/10 text-accent-pink mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full"
                                        aria-hidden="true"
                                    >
                                        <Check className="size-4" />
                                    </span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="border-primary rounded-lg border-2 p-6 md:p-10">
                            <h3 className="font-header text-primary mb-6 text-3xl font-bold">Clear limits on price and scope</h3>
                            <ul className="space-y-4">
                                {blueprintBoundaries.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Info className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-primary rounded-lg p-6 text-white md:p-10">
                            <h3 className="font-header mb-4 text-3xl font-bold">{mvpExplainer.heading}</h3>
                            <p className="leading-7 text-white/90">{mvpExplainer.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
