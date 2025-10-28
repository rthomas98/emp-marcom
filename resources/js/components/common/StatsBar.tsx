import React from "react";

interface StatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const Stat = ({ value, label, icon }: StatProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {icon && <div className="mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-accent-pink mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-700">
        {label}
      </div>
    </div>
  );
};

export function StatsBar() {
  const stats = [
    {
      value: "$10M+",
      label: "Saved for Dallas Businesses"
    },
    {
      value: "200+",
      label: "Projects Delivered Since 2009"
    },
    {
      value: "2 Hours",
      label: "Emergency Response Time"
    },
    {
      value: "40%",
      label: "Cost Savings vs Local Agencies"
    }
  ];

  return (
    <section className="bg-gray-50 border-b border-gray-200" aria-label="Company Statistics">
      <div className="container mx-auto px-[5%] py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Stat 
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

