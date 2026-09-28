import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { situations } from './situations-content';

const number = (index: number) => String(index + 1).padStart(2, '0');

export function SituationsNavigator() {
    return (
        <section id="situations" className="scroll-mt-24 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="situations-list-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Situations we solve</p>
                    <h2 id="situations-list-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        The recurring situations we address
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">
                        Industry context matters, but every project starts with the actual workflow, users, systems, and constraints.
                    </p>
                </div>

                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {situations.map((situation, index) => (
                        <article
                            key={situation.id}
                            id={situation.id}
                            className="scroll-mt-24 py-10 first:pt-10 md:py-12"
                            aria-labelledby={`${situation.id}-heading`}
                        >
                            <div className="flex items-baseline gap-4">
                                <span className="font-header text-5xl leading-none font-bold text-[#E8A33D]/70 md:text-6xl" aria-hidden="true">
                                    {number(index)}
                                </span>
                                <h3 id={`${situation.id}-heading`} className="text-primary text-2xl font-bold md:text-3xl">
                                    {situation.title}
                                </h3>
                            </div>
                            <p className="mt-5 text-lg leading-8 text-gray-700">{situation.description}</p>
                            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Common signs</h4>
                                    <ul className="mt-3 space-y-2">
                                        {situation.signs.map((sign) => (
                                            <li key={sign} className="flex items-start gap-3 leading-7 text-gray-700">
                                                <span className="bg-accent-pink mt-2.5 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
                                                {sign}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-lg bg-gray-50 p-5">
                                    <h4 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Where we usually start</h4>
                                    <Link
                                        href={situation.startingPoint.href}
                                        className="text-primary hover:text-accent-pink mt-3 inline-flex items-center gap-2 font-semibold"
                                    >
                                        {situation.startingPoint.label}
                                        <ArrowRight className="size-4" aria-hidden="true" />
                                    </Link>
                                    {situation.action && (
                                        <div className="mt-4">
                                            <Link
                                                href={situation.action.href}
                                                className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                            >
                                                {situation.action.label}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
