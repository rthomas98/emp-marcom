import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, CircleAlert, CircleX, MapPin, Phone } from 'lucide-react';

export interface ContentCard {
    title: string;
    description: string;
}

export interface LinkAction {
    label: string;
    href: string;
}

export interface LeadPageConfig {
    title: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    introduction: string;
    primaryAction: LinkAction;
    secondaryAction?: LinkAction;
    problemHeading: string;
    problemIntroduction: string;
    problems: ContentCard[];
    solutionHeading: string;
    solutionIntroduction: string;
    solutions: ContentCard[];
    processHeading: string;
    processIntroduction: string;
    process: ContentCard[];
    fitHeading: string;
    fit: string[];
    notFit?: string[];
    proofHeading?: string;
    proofBody?: string;
    proofAction?: LinkAction;
    finalHeading: string;
    finalBody: string;
    locationLabel?: string;
    serviceType?: string;
}

function ActionLink({ action, secondary = false }: { action: LinkAction; secondary?: boolean }) {
    const classes = secondary
        ? 'inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white'
        : 'inline-flex items-center justify-center rounded-lg bg-accent-pink px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#a01245]';

    if (action.href.startsWith('tel:') || action.href.startsWith('mailto:') || action.href.startsWith('http')) {
        return (
            <a href={action.href} className={classes} target={action.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {action.label}
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
        );
    }

    return (
        <Link href={action.href} className={classes}>
            {action.label}
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
        </Link>
    );
}

export function LeadPage({ config }: { config: LeadPageConfig }) {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': config.serviceType ? 'Service' : 'WebPage',
        name: config.heading,
        description: config.metaDescription,
        provider: config.serviceType
            ? {
                  '@type': 'Organization',
                  name: 'Empuls3',
                  url: 'https://www.empuls3.com',
              }
            : undefined,
        serviceType: config.serviceType,
        areaServed: config.locationLabel || 'Dallas–Fort Worth, Texas',
    };

    return (
        <SiteLayout title={config.title}>
            <Head>
                <meta name="description" content={config.metaDescription} />
                <meta property="og:title" content={config.title} />
                <meta property="og:description" content={config.metaDescription} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={config.title} />
                <meta name="twitter:description" content={config.metaDescription} />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>

            <section className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#BD1550]/5" />
                <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="max-w-4xl">
                        <p className="text-accent-pink mb-4 font-semibold tracking-wide uppercase">{config.eyebrow}</p>
                        <h1 className="text-primary mb-6 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">{config.heading}</h1>
                        <p className="max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">{config.introduction}</p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <ActionLink action={config.primaryAction} />
                            {config.secondaryAction && <ActionLink action={config.secondaryAction} secondary />}
                        </div>
                    </div>

                    <aside className="bg-primary rounded-2xl p-8 text-white shadow-xl">
                        <p className="text-accent-yellow text-sm font-semibold tracking-wide uppercase">Built for operational problems</p>
                        <ul className="mt-6 space-y-4">
                            {config.problems.slice(0, 3).map((problem) => (
                                <li key={problem.title} className="flex gap-3">
                                    <CircleAlert className="text-accent-yellow mt-0.5 size-5 shrink-0" aria-hidden="true" />
                                    <span>{problem.title}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 border-t border-white/20 pt-6 text-sm text-white/80">
                            <p className="flex items-center gap-2">
                                <MapPin className="size-4" aria-hidden="true" />
                                {config.locationLabel || 'Serving established DFW businesses remotely'}
                            </p>
                            <a href="tel:+19727988914" className="mt-3 flex items-center gap-2 hover:text-white">
                                <Phone className="size-4" aria-hidden="true" />
                                (972) 798-8914
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-gray-50 px-[5%] py-16 md:py-24" aria-labelledby="problems-heading">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <h2 id="problems-heading" className="text-primary text-3xl font-bold md:text-5xl">
                            {config.problemHeading}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-700">{config.problemIntroduction}</p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {config.problems.map((problem) => (
                            <article key={problem.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                <CircleAlert className="text-accent-pink mb-5 size-7" aria-hidden="true" />
                                <h3 className="text-primary text-xl font-bold">{problem.title}</h3>
                                <p className="mt-3 leading-7 text-gray-700">{problem.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-[5%] py-16 md:py-24" aria-labelledby="solutions-heading">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 id="solutions-heading" className="text-primary text-3xl font-bold md:text-5xl">
                            {config.solutionHeading}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-gray-700">{config.solutionIntroduction}</p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {config.solutions.map((solution) => (
                            <article key={solution.title} className="bg-primary rounded-2xl p-7 text-white shadow-lg">
                                <CheckCircle2 className="text-accent-yellow mb-5 size-7" aria-hidden="true" />
                                <h3 className="text-xl font-bold">{solution.title}</h3>
                                <p className="mt-3 leading-7 text-white/80">{solution.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary px-[5%] py-16 text-white md:py-24" aria-labelledby="process-heading">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <h2 id="process-heading" className="text-3xl font-bold md:text-5xl">
                            {config.processHeading}
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-white/80">{config.processIntroduction}</p>
                    </div>
                    <ol className="mt-12 grid gap-8 md:grid-cols-3">
                        {config.process.map((step, index) => (
                            <li key={step.title} className="border-t border-white/20 pt-6">
                                <span className="text-accent-yellow text-sm font-bold">0{index + 1}</span>
                                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                                <p className="mt-3 leading-7 text-white/75">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="px-[5%] py-16 md:py-24" aria-labelledby="fit-heading">
                <div className="container mx-auto grid gap-10 lg:grid-cols-2">
                    <div>
                        <h2 id="fit-heading" className="text-primary text-3xl font-bold md:text-4xl">
                            {config.fitHeading}
                        </h2>
                        <ul className="mt-7 space-y-4">
                            {config.fit.map((item) => (
                                <li key={item} className="flex gap-3 leading-7 text-gray-700">
                                    <CheckCircle2 className="text-accent-pink mt-1 size-5 shrink-0" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {config.notFit && (
                        <div className="rounded-2xl bg-gray-50 p-8">
                            <h2 className="text-primary text-2xl font-bold">When another provider may be a better fit</h2>
                            <ul className="mt-6 space-y-4">
                                {config.notFit.map((item) => (
                                    <li key={item} className="flex gap-3 leading-7 text-gray-700">
                                        <CircleX className="mt-1 size-5 shrink-0 text-gray-500" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {config.proofBody && (
                <section className="bg-gray-50 px-[5%] py-14" aria-labelledby="proof-heading">
                    <div className="container mx-auto flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <h2 id="proof-heading" className="text-primary text-2xl font-bold md:text-3xl">
                                {config.proofHeading || 'Evidence before promises'}
                            </h2>
                            <p className="mt-3 leading-7 text-gray-700">{config.proofBody}</p>
                        </div>
                        {config.proofAction && <ActionLink action={config.proofAction} secondary />}
                    </div>
                </section>
            )}

            <section className="px-[5%] py-16 text-center md:py-24">
                <div className="bg-accent-yellow/20 container mx-auto max-w-3xl rounded-3xl p-8 md:p-12">
                    <h2 className="text-primary text-3xl font-bold md:text-5xl">{config.finalHeading}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-700">{config.finalBody}</p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <ActionLink action={config.primaryAction} />
                        {config.secondaryAction && <ActionLink action={config.secondaryAction} secondary />}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
