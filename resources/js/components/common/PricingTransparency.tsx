import { Link } from '@inertiajs/react';
import { Check, Clock, DollarSign, Shield } from 'lucide-react';

interface PricingTierProps {
    service: string;
    range: string;
    timeline: string;
    features: string[];
}

const PricingTier = ({ service, range, timeline, features }: PricingTierProps) => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
            <div className="mb-4">
                <h3 className="text-primary mb-2 text-xl font-bold">{service}</h3>
                <div className="text-accent-pink flex items-center gap-2 text-2xl font-bold">
                    <DollarSign className="h-6 w-6" />
                    {range}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {timeline}
                </div>
            </div>
            <ul className="mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className="text-accent-pink mt-0.5 h-5 w-5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export function PricingTransparency() {
    // Truthful founder offer: planning has a starting price; build and support are scoped and quoted separately.
    const pricingTiers = [
        {
            service: 'Product Blueprint',
            range: 'From $2,500',
            timeline: 'Scope agreed before work begins',
            features: [
                'Who the product is for and the problem it solves',
                'What the first release must do, and what can wait',
                'Key screens, user flows, and technical approach',
                'Written estimate and milestones for the build',
            ],
        },
        {
            service: 'First Release',
            range: 'Quoted separately',
            timeline: 'Milestone-based delivery',
            features: [
                'Estimated after planning, based on scope',
                'Built by the developer who planned it',
                'Working software to review at each milestone',
                'Testing and launch help included in the plan',
            ],
        },
        {
            service: 'Ongoing Support',
            range: 'Scoped to your needs',
            timeline: 'Agreed after launch',
            features: [
                'Fixes and improvements after launch',
                'Priced once we know what needs covering',
                'Direct access to the same developer',
                'Terms set out in a separate agreement',
            ],
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="pricing-heading">
            <div className="container mx-auto px-[5%]">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="bg-accent-pink/10 text-accent-pink mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                        <Shield className="h-4 w-4" />
                        Transparent Pricing Promise
                    </div>
                    <h2 id="pricing-heading" className="text-primary mb-4 text-4xl font-bold md:text-5xl">
                        No Surprises. Just Clear Pricing.
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Planning, building, and support are priced as separate steps. Product Blueprint planning starts at $2,500; building the first
                        release is quoted separately once the scope is clear. You work directly with Robert, the developer doing the work.
                    </p>
                </div>

                {/* Why transparency */}
                <div className="mx-auto mb-12 max-w-4xl rounded-lg border border-gray-200 bg-white p-6 md:p-8">
                    <h3 className="text-primary mb-4 text-2xl font-bold">Why We're Transparent About Pricing</h3>
                    <div className="grid gap-4 text-gray-700 md:grid-cols-2">
                        <div>
                            <div className="text-primary mb-2 font-semibold">Direct Access</div>
                            <p className="text-sm">
                                Work directly with an experienced developer who connects technical choices to your business priorities.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">No Hidden Costs</div>
                            <p className="text-sm">
                                You receive a written estimate before each step starts. If something falls outside the agreed scope, we tell you
                                first.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Planning Is Not the Whole App</div>
                            <p className="text-sm">
                                A Product Blueprint is planning, not a finished app. Completing one does not commit you to the build.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Start With a Conversation</div>
                            <p className="text-sm">Tell us about your idea and we will suggest a sensible next step and whether we are a good fit.</p>
                        </div>
                    </div>
                </div>

                {/* Pricing tiers */}
                <div className="mb-8 grid gap-6 md:grid-cols-3">
                    {pricingTiers.map((tier, index) => (
                        <PricingTier key={index} {...tier} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="mb-6 text-gray-700">
                        <strong>Every product is different.</strong> Tell us what you want to build and we will reply with a practical next step.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-11 min-h-[44px] items-center justify-center rounded-md px-6 py-2.5 text-base font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">We normally reply within one business day by email.</p>
                </div>
            </div>
        </section>
    );
}
