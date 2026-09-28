import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { CheckCircle, DollarSign, FileText, LifeBuoy, MessageSquare, Users } from 'lucide-react';
import React from 'react';

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
    return (
        <div className="relative">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <div className="bg-accent-pink flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                        {number}
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-primary mb-2 flex items-center gap-2 text-xl font-bold">
                        {icon && (
                            <span className="text-accent-pink" aria-hidden="true">
                                {icon}
                            </span>
                        )}
                        {title}
                    </h3>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    );
};

export function ProcessTransparency() {
    const steps = [
        {
            number: '1',
            title: 'Discovery Conversation',
            description:
                'We talk through your goals, current systems, timeline, and budget, and tell you plainly whether we are a good fit for the work.',
            icon: <MessageSquare className="h-5 w-5" />,
        },
        {
            number: '2',
            title: 'Written Scope and Estimate',
            description: 'You receive a written scope describing what we will build or change, with an estimate and a proposed schedule.',
            icon: <FileText className="h-5 w-5" />,
        },
        {
            number: '3',
            title: 'Build With Regular Check-Ins',
            description: 'A senior developer does the work and checks in with you regularly to show progress and raise decisions as they come up.',
            icon: <Users className="h-5 w-5" />,
        },
        {
            number: '4',
            title: 'Launch and Support',
            description: 'We launch the work, help with issues that come up afterward, and stay available for ongoing support and improvements.',
            icon: <LifeBuoy className="h-5 w-5" />,
        },
    ];

    const expectations = [
        {
            icon: <DollarSign className="h-8 w-8" />,
            title: 'Clear Pricing',
            description:
                'Your estimate spells out what is included. If something falls outside the agreed scope, we tell you before doing the extra work.',
        },
        {
            icon: <CheckCircle className="h-8 w-8" />,
            title: 'Agreed Scope and Acceptance',
            description: 'Each deliverable is reviewed against the scope and acceptance criteria agreed in your proposal.',
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24" aria-labelledby="process-heading">
            <div className="container mx-auto px-[5%]">
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <h2 id="process-heading" className="text-primary mb-4 text-4xl font-bold md:text-5xl">
                        How a Project Works
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Whether we are building something new or improving a system you already use, projects follow the same four steps.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="mb-16 space-y-8">
                    {steps.map((step) => (
                        <ProcessStep key={step.number} {...step} />
                    ))}
                </div>

                {/* What to expect */}
                <div className="mb-12 rounded-lg bg-gray-50 p-8 md:p-12">
                    <h3 className="text-primary mb-8 text-center text-3xl font-bold">What You Can Expect</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {expectations.map((item) => (
                            <div key={item.title} className="rounded-lg bg-white p-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-accent-pink flex-shrink-0" aria-hidden="true">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-primary mb-2 text-xl font-bold">{item.title}</h4>
                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="mb-6 text-lg text-gray-700">Tell us what you want to build, improve, or connect.</p>
                    <Link
                        href={contactHref('project')}
                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-11 min-h-[44px] items-center justify-center rounded-md px-6 py-2.5 text-base font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">We normally reply within one business day.</p>
                </div>
            </div>
        </section>
    );
}
