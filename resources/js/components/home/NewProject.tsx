import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Check, ChevronRight } from 'lucide-react';

const steps = [
    {
        title: 'Scope and plan',
        description: 'Define who will use it, the must-have features, and a realistic first release.',
    },
    {
        title: 'Design and build',
        description: 'Responsive, maintainable websites, web apps, and business systems built by a senior developer.',
    },
    {
        title: 'Launch and support',
        description: 'Keep the same developer for ongoing support after launch, without a handoff to a new vendor.',
    },
];

export function NewProject() {
    return (
        <section id="new-project" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="new-project-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">New Websites & Web Apps</p>
                        <h2 id="new-project-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Planning Something New? Start With a Senior Developer
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            If you are planning a new website, customer portal, internal tool, or web application, we help you shape the scope, choose
                            a practical approach, and build it.
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
                                href={contactHref('new-project')}
                                className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                            >
                                Start a New Project
                            </Link>
                            <Link
                                href="/solutions/web-ecommerce-development"
                                className="text-primary hover:text-accent-pink inline-flex items-center text-sm font-medium"
                            >
                                Explore Web Development
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Projects start at $2,500; the final estimate depends on scope. Not sure yet? A consultation is a good first step.
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
