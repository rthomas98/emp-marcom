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
    const pricingTiers = [
        {
            service: 'Focused Software Project',
            range: '$25,000+',
            timeline: 'Scoped after discovery',
            features: [
                'Defined business outcome and scope',
                'Dedicated senior developer',
                'Direct communication, no account managers',
                'Fixed scope, predictable pricing',
            ],
        },
        {
            service: 'Standard Project',
            range: '$50,000+',
            timeline: 'Milestone-based delivery',
            features: [
                'Most common project size',
                'Full-stack development team',
                'Professional design & development',
                'Includes testing & deployment',
            ],
        },
        {
            service: 'Enterprise Solution',
            range: '$50,000+',
            timeline: '3-6 months',
            features: [
                'Complex, mission-critical systems',
                'Dedicated team of specialists',
                'Ongoing support & optimization',
                'Custom SLAs & guarantees',
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
                        We believe in honest pricing. Here's what Dallas businesses typically invest for our services. All prices include direct
                        access to senior developers—no junior teams, no account managers.
                    </p>
                </div>

                {/* Why transparency */}
                <div className="mx-auto mb-12 max-w-4xl rounded-lg border border-gray-200 bg-white p-6 md:p-8">
                    <h3 className="text-primary mb-4 text-2xl font-bold">Why We're Transparent About Pricing</h3>
                    <div className="grid gap-4 text-gray-700 md:grid-cols-2">
                        <div>
                            <div className="text-primary mb-2 font-semibold">Senior-Led Delivery</div>
                            <p className="text-sm">
                                Work directly with experienced specialists who can connect technical choices to business priorities.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">No Hidden Costs</div>
                            <p className="text-sm">
                                What you see is what you get. We'll quote everything upfront with a detailed breakdown before we start.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Fixed or Hourly—Your Choice</div>
                            <p className="text-sm">
                                Most projects work best with fixed pricing for predictable budgets. We also offer hourly ($75-125/hr) for flexible
                                work.
                            </p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 font-semibold">Free Discovery Call</div>
                            <p className="text-sm">
                                Get a custom quote tailored to your exact needs. No obligation, no sales pitch— just honest advice.
                            </p>
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
                        <strong>Your project is unique.</strong> Get a free, no-obligation quote tailored to your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-11 min-h-[44px] items-center justify-center rounded-md px-6 py-2.5 text-base font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Get Your Custom Quote
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">Response within one business day • No obligation • Discovery conversation included</p>
                </div>
            </div>
        </section>
    );
}
