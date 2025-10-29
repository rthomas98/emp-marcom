import React from "react";
import { Award, Users, Calendar, Star } from "lucide-react";

interface TrustSignalProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const TrustSignal = ({ icon, label, value }: TrustSignalProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-pink/10 text-accent-pink">
        {icon}
      </div>
      <div>
        <div className="text-lg font-bold text-primary">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
};

export function TrustSignals() {
  const signals = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Years in Business",
      value: "Since 2009"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Active Clients",
      value: "50+"
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: "Google Rating",
      value: "4.9 Stars"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Projects Completed",
      value: "200+"
    }
  ];

  return (
    <section className="bg-white" aria-label="Trust Indicators">
      <div className="container mx-auto px-[5%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <TrustSignal
              key={index}
              icon={signal.icon}
              label={signal.label}
              value={signal.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


