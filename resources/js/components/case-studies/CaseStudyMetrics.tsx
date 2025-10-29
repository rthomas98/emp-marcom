import React from "react";
import { TrendingUp, DollarSign, Clock, Zap } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  description?: string;
}

const Metric = ({ icon, label, value, description }: MetricProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-pink/10 text-accent-pink flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">{label}</div>
          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
          {description && (
            <div className="text-xs text-gray-500">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CaseStudyMetricsProps {
  metrics?: {
    costSavings?: string;
    timeSaved?: string;
    performanceImprovement?: string;
    roi?: string;
  };
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  // Default metrics to show competitive structure
  const defaultMetrics = {
    costSavings: "40%",
    timeSaved: "60%",
    performanceImprovement: "3x",
    roi: "250%"
  };

  const displayMetrics = metrics || defaultMetrics;

  const metricData = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Cost Savings",
      value: displayMetrics.costSavings || "40%",
      description: "Reduced operational expenses"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Time Saved",
      value: displayMetrics.timeSaved || "60%",
      description: "Faster processing times"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Performance",
      value: displayMetrics.performanceImprovement || "3x",
      description: "System speed improvement"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "ROI",
      value: displayMetrics.roi || "250%",
      description: "Return on investment"
    }
  ];

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="metrics-heading">
      <div className="container mx-auto px-4 md:px-6">
        <h2 id="metrics-heading" className="text-3xl font-bold text-primary text-center mb-2">
          Results That Matter
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Measurable outcomes that transformed business operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metricData.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

