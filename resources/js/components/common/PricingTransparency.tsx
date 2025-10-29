import React from "react";
import { Check, DollarSign, Clock, Shield } from "lucide-react";
import { Link } from "@inertiajs/react";

interface PricingTierProps {
  service: string;
  range: string;
  timeline: string;
  features: string[];
}

const PricingTier = ({ service, range, timeline, features }: PricingTierProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primary mb-2">{service}</h3>
        <div className="flex items-center gap-2 text-accent-pink text-2xl font-bold">
          <DollarSign className="w-6 h-6" />
          {range}
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
          <Clock className="w-4 h-4" />
          {timeline}
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-accent-pink flex-shrink-0 mt-0.5" />
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
      service: "Small Project / MVP",
      range: "$5,000 - $15,000",
      timeline: "2-4 weeks",
      features: [
        "Perfect for MVPs and quick wins",
        "Dedicated senior developer",
        "Direct communication, no account managers",
        "Fixed scope, predictable pricing"
      ]
    },
    {
      service: "Standard Project",
      range: "$15,000 - $50,000",
      timeline: "4-12 weeks",
      features: [
        "Most common project size",
        "Full-stack development team",
        "Professional design & development",
        "Includes testing & deployment"
      ]
    },
    {
      service: "Enterprise Solution",
      range: "$50,000+",
      timeline: "3-6 months",
      features: [
        "Complex, mission-critical systems",
        "Dedicated team of specialists",
        "Ongoing support & optimization",
        "Custom SLAs & guarantees"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-[5%]">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent-pink/10 text-accent-pink px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Transparent Pricing Promise
          </div>
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">
            No Surprises. Just Clear Pricing.
          </h2>
          <p className="text-gray-700 md:text-lg">
            We believe in honest pricing. Here's what Dallas businesses typically invest for our services.
            All prices include direct access to senior developers—no junior teams, no account managers.
          </p>
        </div>

        {/* Why transparency */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-12 max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-primary mb-4">Why We're Transparent About Pricing</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <div className="font-semibold text-primary mb-2">Save 40% vs Local Agencies</div>
              <p className="text-sm">
                Remote work means less overhead. We pass those savings to you while delivering 
                top-tier senior expertise.
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2">No Hidden Costs</div>
              <p className="text-sm">
                What you see is what you get. We'll quote everything upfront with a detailed 
                breakdown before we start.
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2">Fixed or Hourly—Your Choice</div>
              <p className="text-sm">
                Most projects work best with fixed pricing for predictable budgets. We also offer 
                hourly ($75-125/hr) for flexible work.
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2">Free Discovery Call</div>
              <p className="text-sm">
                Get a custom quote tailored to your exact needs. No obligation, no sales pitch—
                just honest advice.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            <strong>Your project is unique.</strong> Get a free, no-obligation quote tailored to your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent-pink px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 min-h-[44px]"
          >
            Get Your Custom Quote
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Response guaranteed within 2 hours • 100% no-obligation • Free consultation included
          </p>
        </div>
      </div>
    </section>
  );
}

