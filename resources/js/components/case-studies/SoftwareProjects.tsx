import { SOFTWARE_PROJECTS_ANCHOR, softwareProjects, type SoftwareProject } from '@/content/software-projects';
import { Check, ExternalLink } from 'lucide-react';

function StatusBadge({ project }: { project: SoftwareProject }) {
    const live = project.statusKind === 'live-and-in-development';
    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                live ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200' : 'bg-amber-50 text-amber-900 ring-1 ring-amber-200'
            }`}
        >
            {project.statusLabel}
        </span>
    );
}

function ScopeList({ project }: { project: SoftwareProject }) {
    return (
        <div>
            <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Scope</p>
            <ul className="mt-3 space-y-2">
                {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-7 text-gray-700">
                        <Check className="text-accent-pink mt-1.5 size-4 shrink-0" aria-hidden="true" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function WebsiteLink({ project }: { project: SoftwareProject }) {
    if (!project.website) return null;
    return (
        <a
            href={project.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent-pink focus-visible:ring-accent-pink mt-6 inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2"
        >
            {project.website.label}
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
        </a>
    );
}

export function SoftwareProjects() {
    const featured = softwareProjects.filter((project) => project.capture);
    const inDevelopment = softwareProjects.filter((project) => !project.capture);

    return (
        <section
            id={SOFTWARE_PROJECTS_ANCHOR}
            className="scroll-mt-24 bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28"
            aria-labelledby="software-projects-heading"
        >
            <div className="container mx-auto">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="text-accent-pink mb-3 font-semibold">Software and platform projects</p>
                    <h2 id="software-projects-heading" className="text-secondary text-4xl font-bold md:text-5xl">
                        Software We Are Building
                    </h2>
                    <p className="md:text-md text-secondary mt-5 font-medium">
                        Current work across membership platforms, environmental reporting, movement assessment, and online marketplaces.
                    </p>
                </div>

                <nav aria-label="Software projects" className="mb-12 md:mb-16">
                    <ul className="flex flex-wrap justify-center gap-3">
                        {softwareProjects.map((project) => (
                            <li key={project.id}>
                                <a
                                    href={`#${project.id}`}
                                    className="text-primary hover:border-accent-pink focus-visible:ring-accent-pink inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2"
                                >
                                    {project.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {featured.map((project) => (
                    <article
                        key={project.id}
                        id={project.id}
                        className="mb-12 grid scroll-mt-24 grid-cols-1 gap-8 overflow-hidden rounded-xl border border-gray-200 bg-white md:mb-16 lg:grid-cols-2 lg:items-center"
                        aria-labelledby={`${project.id}-heading`}
                    >
                        {project.capture && (
                            <figure className="bg-gray-100 p-4 md:p-6">
                                <img
                                    src={project.capture.src}
                                    alt={project.capture.alt}
                                    width={project.capture.width}
                                    height={project.capture.height}
                                    loading="lazy"
                                    className="h-auto w-full rounded-lg border border-gray-200 shadow-sm"
                                />
                                <figcaption className="mt-3 text-sm text-gray-600">{project.capture.caption}</figcaption>
                            </figure>
                        )}
                        <div className="p-6 md:p-10">
                            <StatusBadge project={project} />
                            <h3 id={`${project.id}-heading`} className="text-secondary mt-4 text-2xl font-bold md:text-3xl">
                                {project.title}
                            </h3>
                            {project.attribution && <p className="mt-2 text-sm text-gray-600">{project.attribution}</p>}
                            <p className="mt-4 leading-7 text-gray-700">{project.summary}</p>
                            {project.note && <p className="mt-3 text-sm leading-6 text-gray-600">{project.note}</p>}
                            <div className="mt-6">
                                <ScopeList project={project} />
                            </div>
                            <WebsiteLink project={project} />
                        </div>
                    </article>
                ))}

                <h3 className="text-secondary mb-6 text-2xl font-bold md:text-3xl">Ongoing Development</h3>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {inDevelopment.map((project) => (
                        <article
                            key={project.id}
                            id={project.id}
                            className="flex scroll-mt-24 flex-col rounded-xl border border-gray-200 bg-white p-6 md:p-8"
                            aria-labelledby={`${project.id}-heading`}
                        >
                            <StatusBadge project={project} />
                            <h4 id={`${project.id}-heading`} className="text-secondary mt-4 text-xl font-bold md:text-2xl">
                                {project.title}
                            </h4>
                            {project.attribution && <p className="mt-2 text-sm text-gray-600">{project.attribution}</p>}
                            <p className="mt-4 leading-7 text-gray-700">{project.summary}</p>
                            {project.note && <p className="mt-3 text-sm leading-6 text-gray-600">{project.note}</p>}
                            <div className="mt-6 border-t border-gray-200 pt-6">
                                <ScopeList project={project} />
                            </div>
                            <WebsiteLink project={project} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SoftwareProjects;
