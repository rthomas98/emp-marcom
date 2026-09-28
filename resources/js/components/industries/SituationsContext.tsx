import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { contextLenses } from './situations-content';

// Relume Layout16 adapted: editorial copy and action row opposite a stacked icon-and-paragraph list.
export function SituationsContext() {
    return (
        <section className="bg-[#FDF6EC] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="situations-context-heading">
            <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">What we account for</p>
                    <h2 id="situations-context-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Context we account for on every engagement
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">We learn how your business works before recommending a technical approach.</p>
                    <div className="mt-6 md:mt-8">
                        <Link href="/services" className="text-primary hover:text-accent-pink inline-flex items-center font-medium">
                            Review Our Services
                            <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                    {contextLenses.map(({ title, description, icon: Icon }) => (
                        <li key={title} className="flex items-start gap-5 rounded-lg bg-white p-6 shadow-sm">
                            <span
                                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FDF6EC] text-[#B8741A]"
                                aria-hidden="true"
                            >
                                <Icon className="size-6" />
                            </span>
                            <div>
                                <h3 className="text-primary text-xl font-bold">{title}</h3>
                                <p className="mt-2 leading-7 text-gray-700">{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
