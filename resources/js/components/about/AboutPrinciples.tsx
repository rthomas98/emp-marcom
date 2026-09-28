import { principles } from './about-content';

export function AboutPrinciples() {
    return (
        <section className="px-[5%] pb-16 md:pb-24 lg:pb-28" aria-labelledby="about-principles-heading">
            <div className="container mx-auto">
                <div className="mb-12 max-w-2xl md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">How we work</p>
                    <h2 id="about-principles-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        What working with us is like
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">
                        The working model is simple: you talk to the developer doing the work, and what we agree is written down.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
                    {principles.map((principle, index) => (
                        <li key={principle.title} className="border-t-2 border-gray-200 pt-6">
                            <span className="text-accent-pink font-header text-sm font-bold tracking-widest" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-primary mt-3 text-2xl font-bold">{principle.title}</h3>
                            <p className="mt-3 leading-7 text-gray-700">{principle.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
