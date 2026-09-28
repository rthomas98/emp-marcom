import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ArrowDown } from 'lucide-react';
import { situations, situationsImage } from './situations-content';

export function SituationsHero({ heading }: { heading: string }) {
    return (
        <section aria-labelledby="situations-heading">
            <div className="bg-[#1F1946] px-[5%] pt-14 pb-36 text-white md:pt-20 md:pb-48 lg:pb-60">
                <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-[1.25fr_1fr] lg:items-start">
                    <div>
                        <p className="mb-3 font-semibold text-[#F29AB8] md:mb-4">Situations We Solve</p>
                        <h1 id="situations-heading" className="font-header text-4xl leading-tight font-bold md:text-5xl">
                            {heading}
                        </h1>
                        <p className="mt-5 text-lg leading-8 text-white/80">
                            Some projects start with a new website or app. Others start with software, systems, or workflows your business already
                            depends on for service delivery, customer handoffs, reporting, or day-to-day operations.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="bg-accent-pink hover:bg-accent-pink/90 inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                            >
                                Discuss Your Situation
                            </Link>
                        </div>
                    </div>
                    <nav aria-label="Jump to a situation" className="lg:border-l lg:border-white/15 lg:pl-10">
                        <p className="text-sm font-semibold tracking-wide text-white/60 uppercase">Find your situation</p>
                        <ol className="mt-3 divide-y divide-white/10">
                            {situations.map((situation, index) => (
                                <li key={situation.id}>
                                    <a
                                        href={`#${situation.id}`}
                                        className="group flex min-h-11 items-center gap-4 py-3 text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        <span className="font-header text-sm font-bold text-[#F29AB8]" aria-hidden="true">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="flex-1 font-medium">{situation.title}</span>
                                        <ArrowDown
                                            className="size-4 shrink-0 opacity-60 transition-transform group-hover:translate-y-0.5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="px-[5%]">
                <div className="container mx-auto -mt-28 md:-mt-40 lg:-mt-48">
                    <img
                        src={situationsImage.src}
                        alt={situationsImage.alt}
                        width={situationsImage.width}
                        height={situationsImage.height}
                        className="mx-auto aspect-[3/2] w-full max-w-[1000px] rounded-lg bg-white object-cover shadow-xl lg:aspect-[16/9]"
                    />
                </div>
            </div>
        </section>
    );
}
