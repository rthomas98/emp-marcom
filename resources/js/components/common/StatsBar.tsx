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
            value: 'Build',
            label: 'New websites, web apps, and business systems',
        },
        {
            value: 'Improve',
            label: 'Fix and modernize the software you already use',
        },
        {
            value: 'Connect',
            label: 'Link CRMs, APIs, data, and workflows',
        },
        {
            value: 'Support',
            label: 'Ongoing help from the developer who built it',
        },
    ];

    return (
        <section className="border-b border-gray-200 bg-gray-50" aria-label="What we do">
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
