'use client';

export function AppDevOpsPipeline() {
    return (
        <section id="app-devops-pipeline" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="pipeline-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <header>
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">CI/CD pipelines</p>
                            <h2
                                id="pipeline-heading"
                                className="mb-5 text-4xl leading-[1.2] font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl"
                            >
                                Repeatable builds, tests, and deployments
                            </h2>
                        </header>
                        <p className="md:text-md mb-6 text-gray-700 md:mb-8">
                            We map source control, build, testing, artifacts, configuration, secrets, environments, approvals, and deployment
                            responsibilities, then automate the steps that are currently manual or inconsistent. Every release follows the same path
                            and leaves a record of what changed.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <article aria-labelledby="pipeline-review-heading">
                                <h3 id="pipeline-review-heading" className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                                    Pipeline and Environment Review
                                </h3>
                                <p className="text-gray-700">
                                    A senior developer reviews how code moves from commit to production and identify where differences between
                                    environments or missing tests create unpredictable results.
                                </p>
                            </article>
                            <article aria-labelledby="release-automation-heading">
                                <h3
                                    id="release-automation-heading"
                                    className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl"
                                >
                                    Release Automation
                                </h3>
                                <p className="text-gray-700">
                                    Builds, tests, approvals, and deployments run the same way every time, so releases no longer depend on the one
                                    person who knows the steps.
                                </p>
                            </article>
                        </div>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Software_Engineers_in_a_meeting_7f9202d7-9cb9-49eb-92d7-f5f6966d2594_2.png"
                            className="w-full rounded-lg border border-gray-200 object-cover"
                            alt="Illustration of people talking in a meeting"
                            width="600"
                            height="400"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
