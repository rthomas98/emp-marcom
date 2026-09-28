import React from 'react';

export function MvpProcess() {
    const processSteps = [
        {
            number: '01',
            title: 'Product Definition',
            subtitle: 'Clarify the Problem',
            heading: 'Decide What the First Version Needs to Do',
            description:
                'Together we agree on the smallest version that solves the core problem, write down what it must do and what can wait, and prototype the parts that still need testing.',
            image: '/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png',
            alt: 'Designers and developers collaborating in an office',
        },
        {
            number: '02',
            title: 'User Testing',
            subtitle: 'Focused Validation',
            heading: 'Test the Main Tasks with Real Users',
            description:
                'Prototypes and early builds go in front of the people the product is for. Their feedback shapes scope before changes become expensive and helps your team decide what belongs in the first version.',
            image: '/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__working_t_e54e2d34-af10-4785-8b30-bc46cef92038_0.png',
            alt: 'Illustration of people smiling while working together',
        },
        {
            number: '03',
            title: 'Iterative Development',
            subtitle: 'Build in Sequence',
            heading: 'Build the Riskiest Parts First',
            description:
                'We design and build the product and the supporting pieces it needs for real use. The riskiest and most connected parts come first, and tradeoffs are discussed openly as feedback comes in.',
            image: '/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_1.png',
            alt: 'People working at desks in a large, modern office',
        },
        {
            number: '04',
            title: 'Launch and Learning',
            subtitle: 'Launch and Support',
            heading: 'Launch with a Plan for What Comes Next',
            description:
                'We support early users, track how people use the main tasks, and document how the product runs and who is responsible for what. What the launch shows becomes the plan for the next version.',
            image: '/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_2.png',
            alt: 'Colleagues meeting in a modern open office',
        },
    ];

    return (
        <section id="mvp-process" className="relative" aria-label="MVP development process">
            <div className="sticky top-0">
                {processSteps.map((step, index) => {
                    const topOffset =
                        index === 0
                            ? 'top-0'
                            : index === 1
                              ? 'lg:top-16 lg:-mt-32 lg:mb-32'
                              : index === 2
                                ? 'lg:top-32 lg:-mt-16 lg:mb-16'
                                : 'lg:top-0 lg:mb-16';

                    const stepId = `mvp-process-step-${step.number}`;

                    return (
                        <React.Fragment key={step.number}>
                            <div className="relative -top-32 h-0" aria-hidden="true" />
                            <article
                                className={`relative border-t border-gray-200 bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 ${topOffset}`}
                                aria-labelledby={stepId}
                            >
                                <div className="px-[5%]">
                                    <div className="container mx-auto">
                                        <div className="flex h-16 w-full items-center">
                                            <span className="mr-5 font-semibold text-[#BD1550] md:mr-6 md:text-lg" aria-hidden="true">
                                                {step.number}
                                            </span>
                                            <h3 id={stepId} className="font-header text-primary font-semibold md:text-lg">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <div className="py-8 md:py-10 lg:py-12">
                                            <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                                                <div>
                                                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">{step.subtitle}</p>
                                                    <h2
                                                        id={`${stepId}-heading`}
                                                        className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                                                    >
                                                        {step.heading}
                                                    </h2>
                                                    <p className="text-gray-700 md:text-lg">{step.description}</p>
                                                </div>
                                                <figure className="relative">
                                                    <img
                                                        src={step.image}
                                                        className="rounded-image h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                                                        alt={step.alt}
                                                        width="800"
                                                        height="600"
                                                        loading="lazy"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
}
