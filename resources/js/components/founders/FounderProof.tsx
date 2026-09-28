import { softwareProjects } from '@/content/software-projects';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

// Factual evidence reused verbatim from content/software-projects.ts; keep attribution and status labels as approved.
const PROOF_PROJECT_IDS = ['aec-unites', 'kinesics-health'];
const proofProjects = softwareProjects.filter((project) => PROOF_PROJECT_IDS.includes(project.id));

export function FounderProof() {
    return (
        <section className="px-[5%] py-16 md:py-24" aria-labelledby="founder-proof-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Recent Work</p>
                    <h2 id="founder-proof-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Recent platform work
                    </h2>
                    <p className="text-gray-700 md:text-lg">Two current projects, described by the scope of the work.</p>
                </div>
                <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                    {proofProjects.map((project) => (
                        <li key={project.id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                            {project.capture && (
                                <img
                                    src={project.capture.src}
                                    alt={project.capture.alt}
                                    width={project.capture.width}
                                    height={project.capture.height}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full border-b border-gray-200 object-cover object-top"
                                />
                            )}
                            <div className="flex flex-1 flex-col p-6 md:p-8">
                                <p className="text-accent-pink text-sm font-semibold">{project.statusLabel}</p>
                                <h3 className="text-primary mt-2 text-2xl font-bold">{project.title}</h3>
                                {project.attribution && <p className="mt-2 text-sm text-gray-600">{project.attribution}</p>}
                                <p className="mt-4 flex-1 text-gray-700">{project.summary}</p>
                                <Link
                                    href={`/case-studies#${project.id}`}
                                    className="text-primary hover:text-accent-pink mt-6 inline-flex items-center text-sm font-medium"
                                >
                                    Read the project summary
                                    <span className="sr-only">: {project.name}</span>
                                    <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
