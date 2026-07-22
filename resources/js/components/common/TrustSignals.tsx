import { Award, Calendar, MapPin, Users } from 'lucide-react';
import React from 'react';

interface TrustSignalProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const TrustSignal = ({ icon, label, value }: TrustSignalProps) => {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-accent-pink/10 text-accent-pink flex h-10 w-10 items-center justify-center rounded-full">{icon}</div>
            <div>
                <div className="text-primary text-lg font-bold">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
            </div>
        </div>
    );
};

export function TrustSignals() {
    const signals = [
        {
            icon: <Calendar className="h-5 w-5" />,
            label: 'Established',
            value: 'Since 2009',
        },
        {
            icon: <Users className="h-5 w-5" />,
            label: 'Engagement Model',
            value: 'Senior-Led',
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: 'Primary Market',
            value: 'Dallas–Fort Worth',
        },
        {
            icon: <Award className="h-5 w-5" />,
            label: 'Delivery Style',
            value: 'Direct Access',
        },
    ];

    return (
        <section className="bg-white" aria-label="Trust Indicators">
            <div className="container mx-auto px-[5%] py-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {signals.map((signal, index) => (
                        <TrustSignal key={index} icon={signal.icon} label={signal.label} value={signal.value} />
                    ))}
                </div>
            </div>
        </section>
    );
}
