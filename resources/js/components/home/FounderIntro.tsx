import { Link } from '@inertiajs/react';
import { ChevronRight, Dribbble, Linkedin, Twitter } from 'lucide-react';

// Keep in sync with the About page founder (components/about/about-content.ts); do not add unverified biography details.
const founder = {
    name: 'Robert Thomas',
    role: 'Founder',
    portrait: '/images/682c9204c876aa4ebe43910b-HeadshotPro.png',
    bio: 'Robert founded Empuls3 in 2009 and works as an independent developer, so clients work directly with the person who plans and builds their project.',
    links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/robert-thomas-1b110216/', icon: Linkedin },
        { label: 'X', href: 'https://x.com/rob_thomas10', icon: Twitter },
        { label: 'Dribbble', href: 'https://dribbble.com/robt84', icon: Dribbble },
    ],
};

export function FounderIntro({ showAboutLink = true }: { showAboutLink?: boolean }) {
    return (
        <section id="founder" className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="founder-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Who You Work With</p>
                    <h2 id="founder-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Meet the Founder
                    </h2>
                    <p className="text-gray-700 md:text-lg">Empuls3 was founded in 2009 by Robert Thomas and is based in Dallas–Fort Worth.</p>
                </div>
                <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                    <div className="mb-5 aspect-square w-40 overflow-hidden rounded-full border border-gray-200 md:mb-6 md:w-48">
                        <img
                            src={founder.portrait}
                            alt={`${founder.name}, ${founder.role} of Empuls3`}
                            className="size-full object-cover"
                            loading="lazy"
                            width="192"
                            height="192"
                        />
                    </div>
                    <div className="mb-3 md:mb-4">
                        <h3 className="text-primary text-lg font-semibold md:text-xl">{founder.name}</h3>
                        <p className="text-gray-700">{founder.role}</p>
                    </div>
                    <p className="text-gray-700">{founder.bio}</p>
                    <ul className="mt-6 flex gap-3.5" aria-label={`${founder.name} on social media`}>
                        {founder.links.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-accent-pink"
                                    aria-label={`${founder.name} on ${label}`}
                                >
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    {showAboutLink && (
                        <Link href="/company/about" className="text-primary hover:text-accent-pink mt-6 inline-flex items-center text-sm font-medium">
                            More About Empuls3
                            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
