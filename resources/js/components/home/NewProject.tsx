import { founderPath } from '@/components/founders/founder-content';
import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Check, ChevronRight } from 'lucide-react';

// Same three steps and pricing wording as /for-founders.
const steps = founderPath.map((step) => ({ title: `${step.title} (${step.price.toLowerCase()})`, description: step.description }));

export function NewProject() {
    return (
        <section id="new-project" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="new-project-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">For Founders</p>
                        <h2 id="new-project-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Have an Idea? Start With a Plan
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            You do not need a technical background. We help you decide what your first release should do, explain the scope and cost
                            in plain language, and build it in clear milestones.
                        </p>
                        <ul className="mt-6 space-y-4 md:mt-8">
                            {steps.map((step) => (
                                <li key={step.title} className="flex items-start gap-3">
                                    <span
                                        className="bg-accent-pink/10 text-accent-pink mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                        aria-hidden="true"
                                    >
                                        <Check className="h-4 w-4" />
                                    </span>
                                    <p className="text-gray-700">
                                        <span className="text-primary font-semibold">{step.title}:</span> {step.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link
                                href={contactHref('product-planning')}
                                className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                            >
                                Plan Your Product
                            </Link>
                            <Link href="/for-founders" className="text-primary hover:text-accent-pink inline-flex items-center text-sm font-medium">
                                How It Works for Founders
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Product Blueprint planning starts at $2,500. Building the first release is estimated separately. Not sure yet? A
                            consultation is a good first step.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/new-project-planning-watercolor.webp"
                            alt="Business owner and engineer sketching plans for a new web application"
                            className="aspect-[7/4] w-full rounded-lg border border-gray-200 object-cover"
                            loading="lazy"
                            width="1456"
                            height="832"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
