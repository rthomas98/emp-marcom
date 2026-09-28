import React, { useRef, useState } from 'react';

const tabs = [
    {
        id: 'mvp-overview-definition',
        title: 'Agree on What to Build First',
        content:
            'Before design starts, we clarify the users, the jobs they need done, your assumptions, and the business rules and integrations the product depends on. That keeps the first version focused on the core problem instead of a growing feature list.',
        image: '/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_0.png',
        alt: 'Illustration of men and women meeting to plan a project',
    },
    {
        id: 'mvp-overview-senior',
        title: 'Direct Access to a Senior Developer',
        content:
            'You work with Robert, the senior developer making the technical decisions, from planning through launch. Tradeoffs are explained as they come up.',
        image: '/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (2).png',
        alt: 'Illustration of developers collaborating on a mobile app',
    },
    {
        id: 'mvp-overview-foundation',
        title: 'Test the Idea Before the Full Build',
        content:
            'Your idea does not need to be proven before you contact us. If it still needs testing, we can start with a clickable prototype and short feedback sessions with likely users, then decide together what the full build should include.',
        image: '/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4d54bb42-096c-4b7b-ae8e-cee40c231aac_3.png',
        alt: 'Illustration of people reviewing work at a shared table',
    },
];

export function MvpOverview() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

    const focusTab = (index: number) => {
        const next = (index + tabs.length) % tabs.length;
        setActiveTab(tabs[next].id);
        tabRefs.current[next]?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                focusTab(index + 1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                focusTab(index - 1);
                break;
            case 'Home':
                e.preventDefault();
                focusTab(0);
                break;
            case 'End':
                e.preventDefault();
                focusTab(tabs.length - 1);
                break;
        }
    };

    return (
        <section id="mvp-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-overview-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 md:w-auto lg:mb-20">
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">How We Plan a First Version</p>
                    <h2 id="mvp-overview-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        A First Version You Can Test with Real Customers
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Before building, we agree on who the product is for, what it needs to do for them, who will run it after launch, and how you
                        will know it is working.
                    </p>
                </div>
                <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        {tabs.map((tab) => (
                            <figure
                                key={tab.id}
                                role="tabpanel"
                                id={`${tab.id}-panel`}
                                aria-labelledby={`${tab.id}-tab`}
                                hidden={activeTab !== tab.id}
                                tabIndex={activeTab === tab.id ? 0 : -1}
                                className="transition-opacity duration-300 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                <img
                                    src={tab.image}
                                    alt={tab.alt}
                                    className="rounded-image aspect-[4/3] h-auto w-full object-cover"
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                />
                            </figure>
                        ))}
                    </div>
                    <div className="order-1 md:order-2">
                        <div
                            role="tablist"
                            aria-label="How we plan a first version"
                            aria-orientation="vertical"
                            className="grid grid-cols-1 items-center gap-x-4"
                        >
                            {tabs.map((tab, index) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        ref={(el) => {
                                            tabRefs.current[index] = el;
                                        }}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-controls={`${tab.id}-panel`}
                                        aria-labelledby={`${tab.id}-title`}
                                        aria-describedby={`${tab.id}-description`}
                                        id={`${tab.id}-tab`}
                                        tabIndex={isActive ? 0 : -1}
                                        className={`flex flex-col items-start border-0 border-l-2 ${
                                            isActive ? 'border-[#BD1550]' : 'border-gray-200'
                                        } bg-transparent py-4 pr-0 pl-6 text-left whitespace-normal focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none md:pl-8`}
                                    >
                                        <span
                                            id={`${tab.id}-title`}
                                            className={`font-header mb-3 block text-2xl font-bold ${
                                                isActive ? 'text-primary' : 'text-gray-500'
                                            } md:mb-4 md:text-3xl md:leading-[1.3]`}
                                        >
                                            {tab.title}
                                        </span>
                                        <span id={`${tab.id}-description`} className={`block ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                                            {tab.content}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
