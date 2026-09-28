import { founder } from './about-content';

export function AboutFounder() {
    return (
        <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="about-founder-heading">
            <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-x-12 lg:gap-x-20">
                <div className="mx-auto w-full max-w-sm md:max-w-none">
                    <img
                        src={founder.portrait}
                        alt={`${founder.name}, ${founder.role} of Empuls3`}
                        width={640}
                        height={640}
                        loading="lazy"
                        className="aspect-square w-full rounded-lg border border-gray-200 object-cover"
                    />
                </div>
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Meet the founder</p>
                    <h2 id="about-founder-heading" className="font-header text-primary text-4xl font-bold md:text-5xl lg:text-6xl">
                        {founder.name}
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">{founder.role}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-700">{founder.bio}</p>
                    <p className="mt-4 leading-7 text-gray-700">
                        That is still how the work runs. You talk with Robert, the developer who plans and builds your project, from the first
                        conversation through launch and support.
                    </p>
                    <ul className="mt-8 flex gap-4" aria-label={`${founder.name} on social media`}>
                        {founder.links.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${founder.name} on ${label} (opens in a new tab)`}
                                    className="text-primary hover:text-accent-pink focus-visible:ring-accent-pink inline-flex size-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors focus:outline-none focus-visible:ring-2"
                                >
                                    <Icon className="size-5" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
