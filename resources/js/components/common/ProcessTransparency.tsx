import React from "react";
import { CheckCircle, Clock, Shield, Users, DollarSign } from "lucide-react";
import { Link } from "@inertiajs/react";

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
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-pink text-white font-bold text-lg">
            {number}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
            {icon && <span className="text-accent-pink">{icon}</span>}
            {title}
          </h3>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="inline-flex items-center gap-1 text-sm font-medium text-accent-pink bg-accent-pink/10 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
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
      number: "1",
      title: "Discovery Call",
      description: "We learn about your pain points, budget, and goals. No sales pitch, just honest advice on whether we can help.",
      timeline: "30-45 min",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: "2",
      title: "Custom Quote & Proposal",
      description: "Detailed breakdown of work, timeline, and exact cost. No surprises, no hidden fees. Fixed or hourly—your choice.",
      timeline: "1-2 business days",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      number: "3",
      title: "Senior Developer Assignment",
      description: "Dedicated senior developer assigned to your project. Direct communication, no account managers or junior teams.",
      timeline: "Immediate",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: "4",
      title: "Development & Delivery",
      description: "Regular updates, transparent progress, and fixes on your timeline. We deliver what we promise, when we promise.",
      timeline: "Project-specific",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "No-Surprise Guarantee",
      description: "Clear pricing from day one. We'll tell you upfront if something costs extra."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "2-Hour Response Time",
      description: "Urgent issue? We respond within 2 hours. No waiting days for an answer."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Senior Access",
      description: "Talk directly to the person building your solution. No filters, no middlemen."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Results Focused",
      description: "We don't get paid until you're happy. Your success is our success."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="process-heading">
      <div className="container mx-auto px-[5%]">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 id="process-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How We Work: Completely Transparent
          </h2>
          <p className="text-gray-700 md:text-lg">
            No BS. No surprises. Just a clear process that gets results. Most agencies hide their process. We lay it all out.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>

        {/* Our Guarantee */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Our Guarantees to Dallas Businesses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent-pink flex-shrink-0">
                    {guarantee.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{guarantee.title}</h4>
                    <p className="text-gray-700">{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typical Timelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6">Typical Project Timelines</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold text-primary mb-2">Small Project / MVP</div>
              <div className="text-gray-700 mb-1">2-4 weeks</div>
              <div className="text-sm text-gray-600">Quick fixes, small features, proof of concepts</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2">Standard Project</div>
              <div className="text-gray-700 mb-1">4-12 weeks</div>
              <div className="text-sm text-gray-600">Most web apps, API integrations, redesigns</div>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2">Enterprise Solution</div>
              <div className="text-gray-700 mb-1">3-6 months</div>
              <div className="text-sm text-gray-600">Complex systems, platform rebuilds, large migrations</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Ready to see how this process works for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent-pink px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 min-h-[44px]"
          >
            Schedule Your Free Discovery Call
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            30-minute call • No obligation • Get honest advice about your project
          </p>
        </div>
      </div>
    </section>
  );
}

