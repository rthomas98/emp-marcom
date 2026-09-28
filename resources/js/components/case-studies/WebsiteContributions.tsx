import { ExternalLink } from 'lucide-react';

interface WebsiteContribution {
    id: string;
    name: string;
    role: string;
    summary: string;
    href: string;
    linkLabel: string;
    capture: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

const contributions: WebsiteContribution[] = [
    {
        id: 'wb-studio-tour-hollywood',
        name: 'Warner Bros. Studio Tour Hollywood',
        role: 'Payment feature and maintenance',
        summary:
            'Dedicated programming support for a custom payment system experiencing issues. Resolved PHP-side currency conversion, ticket scheduling, and refund issues, alongside website maintenance.',
        href: 'https://www.wbstudiotour.com/',
        linkLabel: 'wbstudiotour.com',
        capture: {
            src: '/images/case-studies/wb-hollywood-live.jpg',
            alt: 'Homepage of the Warner Bros. Studio Tour Hollywood website',
            width: 1280,
            height: 720,
        },
    },
    {
        id: 'wb-studio-tour-london',
        name: 'Warner Bros. Studio Tour London',
        role: 'Frontend development',
        summary: 'Frontend development for the Warner Bros. Studio Tour London website.',
        href: 'https://www.wbstudiotour.co.uk/',
        linkLabel: 'wbstudiotour.co.uk',
        capture: {
            src: '/images/case-studies/wb-london-live.jpg',
            alt: 'Homepage of the Warner Bros. Studio Tour London website',
            width: 1280,
            height: 720,
        },
    },
    {
        id: 'crewhq',
        name: 'CrewHQ',
        role: 'Website development',
        summary: 'Contributed to the development of the CrewHQ website.',
        href: 'https://crewhq.co.uk/',
        linkLabel: 'crewhq.co.uk',
        capture: {
            src: '/images/case-studies/crewhq-live.jpg',
            alt: 'Homepage of the CrewHQ website',
            width: 1280,
            height: 720,
        },
    },
];

export function WebsiteContributions() {
    return (
        <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="website-contributions-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <h2 id="website-contributions-heading" className="text-secondary text-4xl font-bold md:text-5xl">
                        Selected Website Contributions
                    </h2>
                </div>

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {contributions.map((item) => (
                        <li key={item.id} className="flex">
                            <article
                                className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
                                aria-labelledby={`${item.id}-heading`}
                            >
                                <div className="bg-gray-100 p-4">
                                    <img
                                        src={item.capture.src}
                                        alt={item.capture.alt}
                                        width={item.capture.width}
                                        height={item.capture.height}
                                        loading="lazy"
                                        className="aspect-video h-auto w-full rounded-lg border border-gray-200 object-cover shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="text-accent-pink text-sm font-semibold">{item.role}</p>
                                    <h3 id={`${item.id}-heading`} className="text-secondary mt-2 text-xl font-bold md:text-2xl">
                                        {item.name}
                                    </h3>
                                    <p className="mt-3 flex-1 leading-7 text-gray-700">{item.summary}</p>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-accent-pink focus-visible:ring-accent-pink mt-6 inline-flex min-h-11 items-center gap-1 self-start font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2"
                                    >
                                        Visit {item.linkLabel}
                                        <ExternalLink className="size-4" aria-hidden="true" />
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default WebsiteContributions;
