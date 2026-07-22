import { Link } from '@inertiajs/react';
import { CheckCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';
import React from 'react';

interface ProcessStepProps {
    number: string;
    title: string;
    description: string;
    timeline: string;
    icon?: React.ReactNode;
}

const ProcessStep = ({ number, title, description, timeline, icon }: ProcessStepProps) => {
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
                        {icon && <span className="text-accent-pink">{icon}</span>}
                        {title}
                    </h3>
                    <p className="mb-2 text-gray-700">{description}</p>
                    <div className="text-accent-pink bg-accent-pink/10 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium">
                        <Clock className="h-4 w-4" />
                        {timeline}
                    </div>
                </div>
            </div>
        </div>
    );
};

export function ProcessTransparency() {
    const steps = [
        {
            number: '1',
            title: 'Discovery Call',
            description: 'We learn about your pain points, budget, and goals. No sales pitch, just honest advice on whether we can help.',
            timeline: '30-45 min',
            icon: <Users className="h-5 w-5" />,
        },
        {
            number: '2',
            title: 'Custom Quote & Proposal',
            description: 'Detailed breakdown of work, timeline, and exact cost. No surprises, no hidden fees. Fixed or hourly—your choice.',
            timeline: '1-2 business days',
            icon: <DollarSign className="h-5 w-5" />,
        },
        {
            number: '3',
            title: 'Senior Developer Assignment',
            description: 'Dedicated senior developer assigned to your project. Direct communication, no account managers or junior teams.',
            timeline: 'Immediate',
            icon: <Users className="h-5 w-5" />,
        },
        {
            number: '4',
            title: 'Development & Delivery',
            description: 'Regular updates, transparent progress, and fixes on your timeline. We deliver what we promise, when we promise.',
            timeline: 'Project-specific',
            icon: <CheckCircle className="h-5 w-5" />,
        },
    ];

    const guarantees = [
        {
            icon: <Shield className="h-8 w-8" />,
            title: 'No-Surprise Guarantee',
            description: "Clear pricing from day one. We'll tell you upfront if something costs extra.",
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: '2-Hour Response Time',
            description: 'Tell us what is urgent and we will respond within one business day with the most practical next step.',
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: 'Direct Senior Access',
            description: 'Talk directly to the person building your solution. No filters, no middlemen.',
        },
        {
            icon: <CheckCircle className="h-8 w-8" />,
            title: 'Results Focused',
            description: "We don't get paid until you're happy. Your success is our success.",
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24" aria-labelledby="process-heading">
            <div className="container mx-auto px-[5%]">
                <div className="mx-auto mb-12 max-w-4xl text-center">
                    <h2 id="process-heading" className="text-primary mb-4 text-4xl font-bold md:text-5xl">
                        How We Work: Completely Transparent
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        No BS. No surprises. Just a clear process that gets results. Most agencies hide their process. We lay it all out.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="mb-16 space-y-8">
                    {steps.map((step, index) => (
                        <ProcessStep key={index} {...step} />
                    ))}
                </div>

                {/* Our Guarantee */}
                <div className="mb-12 rounded-lg bg-gray-50 p-8 md:p-12">
                    <h3 className="text-primary mb-8 text-center text-3xl font-bold">Our Guarantees to Dallas Businesses</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="rounded-lg bg-white p-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-accent-pink flex-shrink-0">{guarantee.icon}</div>
                                    <div>
                                        <h4 className="text-primary mb-2 text-xl font-bold">{guarantee.title}</h4>
                                        <p className="text-gray-700">{guarantee.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Typical Timelines */}
                <div className="mb-12 rounded-lg border border-blue-200 bg-blue-50 p-8">
                    <h3 className="text-primary mb-6 text-2xl font-bold">Typical Project Timelines</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <div className="text-primary mb-2 font-semibold">Small Project / MVP</div>
                            <div className="mb-1 text-gray-700">2-4 weeks</div>
                            <div className="text-sm text-gray-600">Quick fixes, small features, proof of concepts</div>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Standard Project</div>
                            <div className="mb-1 text-gray-700">4-12 weeks</div>
                            <div className="text-sm text-gray-600">Most web apps, API integrations, redesigns</div>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Enterprise Solution</div>
                            <div className="mb-1 text-gray-700">3-6 months</div>
                            <div className="text-sm text-gray-600">Complex systems, platform rebuilds, large migrations</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="mb-6 text-lg text-gray-700">Ready to see how this process works for your business?</p>
                    <Link
                        href="/contact"
                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-11 min-h-[44px] items-center justify-center rounded-md px-6 py-2.5 text-base font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Schedule Your Free Discovery Call
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">30-minute call • No obligation • Get honest advice about your project</p>
                </div>
            </div>
        </section>
    );
}
