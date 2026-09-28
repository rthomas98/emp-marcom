import { Code, PenTool, Rocket } from 'lucide-react';

export function FrontendProcess() {
    return (
        <section id="frontend-process" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-process-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <h2
                            id="frontend-process-heading"
                            className="font-header text-primary text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl"
                        >
                            How a Project Goes From Idea to Launch
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-700 md:text-lg">
                            We start with your users and their tasks, build interactive prototypes you can try before anything is coded, then turn the
                            approved flow into a working interface.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <div>
                        <div className="mb-5 md:mb-6" aria-hidden="true">
                            <PenTool className="size-12 text-[#BD1550]" />
                        </div>
                        <h3 className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Discovery and Planning</h3>
                        <p className="text-gray-700">
                            We agree on the users, tasks, and goals the interface must support, and which screens matter most.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6" aria-hidden="true">
                            <Code className="size-12 text-[#BD1550]" />
                        </div>
                        <h3 className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Iterative Design and Development</h3>
                        <p className="text-gray-700">
                            We share prototypes and working builds as we go and adjust them based on feedback from your users and stakeholders.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6" aria-hidden="true">
                            <Rocket className="size-12 text-[#BD1550]" />
                        </div>
                        <h3 className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Implementation and Launch</h3>
                        <p className="text-gray-700">
                            We test the finished interface across browsers and devices before launch and document the components so future changes are
                            safer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
