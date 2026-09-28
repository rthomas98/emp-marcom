import { founderStages } from './founder-content';

export function FounderStages() {
    return (
        <section className="bg-gray-50 px-[5%] py-16 md:py-24" aria-labelledby="founder-stages-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Where You Might Be</p>
                    <h2 id="founder-stages-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        You do not need a technical plan to start
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Founders reach out at every stage. Tell us where you are, and we will suggest a sensible next step.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {founderStages.map((stage) => (
                        <li key={stage.title} className="border-accent-pink rounded-lg border-t-4 bg-white p-6">
                            <h3 className="text-primary mb-2 text-xl font-bold">{stage.title}</h3>
                            <p className="text-gray-700">{stage.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
