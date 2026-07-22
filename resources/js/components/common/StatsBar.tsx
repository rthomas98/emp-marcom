import React from 'react';

interface StatProps {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

const Stat = ({ value, label, icon }: StatProps) => {
    return (
        <div className="flex flex-col items-center text-center">
            {icon && <div className="mb-3">{icon}</div>}
            <div className="text-accent-pink mb-2 text-3xl font-bold md:text-4xl">{value}</div>
            <div className="text-sm text-gray-700 md:text-base">{label}</div>
        </div>
    );
};

export function StatsBar() {
    const stats = [
        {
            value: 'Rescue',
            label: 'Stabilize aging or unreliable software',
        },
        {
            value: 'Integrate',
            label: 'Connect CRMs, APIs, data, and workflows',
        },
        {
            value: 'Support',
            label: 'Add ongoing senior engineering capacity',
        },
        {
            value: 'Modernize',
            label: 'Replace manual processes with dependable systems',
        },
    ];

    return (
        <section className="border-b border-gray-200 bg-gray-50" aria-label="Primary software services">
            <div className="container mx-auto px-[5%] py-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <Stat key={index} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}
