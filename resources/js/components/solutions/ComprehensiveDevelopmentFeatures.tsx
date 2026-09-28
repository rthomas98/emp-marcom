import { Code, Layers, Wrench } from 'lucide-react';

export function ComprehensiveDevelopmentFeatures() {
    return (
        <section id="comprehensive-development-features" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="development-scope-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-start">
                    <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
                        <h2
                            id="development-scope-heading"
                            className="font-header text-primary text-3xl leading-[1.2] font-bold md:text-4xl lg:text-5xl"
                        >
                            What a Software Engagement Can Include
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <div>
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Layers className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">Integrations and Data Migration</h3>
                            <p className="mb-5 text-gray-700 md:mb-6">
                                Connections to the tools you already use, and moving records out of spreadsheets or an older system.
                            </p>
                        </div>
                        <div>
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Code className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">Staged Modernization</h3>
                            <p className="mb-5 text-gray-700 md:mb-6">
                                Replacing an older system one part at a time, so the business can keep running while the new version takes over.
                            </p>
                        </div>
                        <div>
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Wrench className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">Support After Launch</h3>
                            <p className="mb-5 text-gray-700 md:mb-6">
                                Fixes, updates, and new features after release, from the developer who built or took over the software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
