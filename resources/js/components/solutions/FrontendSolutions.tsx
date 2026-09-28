export function FrontendSolutions() {
    return (
        <section id="frontend-solutions" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-solutions-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">How We Work</p>
                    <h2 id="frontend-solutions-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Design and Development From One Person
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        The same senior developer plans the screens, writes the code, and checks accessibility and page speed, so decisions
                        don&rsquo;t get lost in a handoff between a designer and a developer.
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Design</p>
                                <h3
                                    id="frontend-ui-design-heading"
                                    className="font-header text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Screens That Behave the Same Way Everywhere
                                </h3>
                                <p className="text-gray-700">
                                    We create clear flows and reusable components that reflect your product&rsquo;s real states and business rules, so
                                    screens behave consistently from one page to the next.
                                </p>
                            </div>
                        </div>
                        <figure className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png"
                                alt="Mobile developers working together"
                                className="aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                    </article>
                    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Research</p>
                                <h3
                                    id="frontend-ux-research-heading"
                                    className="font-header text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Start With the User&rsquo;s Task
                                </h3>
                                <p className="text-gray-700">
                                    Before changing screens, we observe the task, decision points, errors, device needs, and accessibility barriers.
                                    For a new product, we map the tasks your users need to complete before designing them.
                                </p>
                            </div>
                        </div>
                        <figure className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_66721328-b2d4-4452-af7d-12506bf6fe02_1.png"
                                alt="Men and women working together"
                                className="aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                    </article>
                    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Build</p>
                                <h3
                                    id="frontend-responsive-build-heading"
                                    className="font-header text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Works on Phones and With Screen Readers
                                </h3>
                                <p className="text-gray-700">
                                    We build interfaces that adapt to phones, tablets, and desktops and support keyboard navigation, screen readers,
                                    and readable contrast.
                                </p>
                            </div>
                        </div>
                        <figure className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png"
                                alt="Men and women working together"
                                className="aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                    </article>
                </div>
            </div>
        </section>
    );
}
