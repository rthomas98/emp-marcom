import { Link } from '@inertiajs/react';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    featured_image: string;
}

interface CaseStudyGalleryProps {
    relatedCaseStudies?: CaseStudy[];
}

export function CaseStudyGallery({ relatedCaseStudies = [] }: CaseStudyGalleryProps) {
    if (relatedCaseStudies.length === 0) {
        return null;
    }

    return (
        <section className="bg-gray-50 px-[5%] py-16 md:py-24">
            <div className="container mx-auto">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h2 className="text-primary text-3xl font-bold md:text-5xl">Related Published Work</h2>
                    <p className="mt-4 leading-7 text-gray-700">Additional client-approved case studies in the same service category.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {relatedCaseStudies.map((caseStudy) => (
                        <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`} className="group block w-full">
                            <div className="relative h-[300px] overflow-hidden rounded-lg">
                                <img
                                    src={caseStudy.featured_image}
                                    alt={caseStudy.title}
                                    className="size-full border-0 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="from-primary/90 absolute inset-0 bg-linear-to-t to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <span className="bg-accent-pink mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                                        {caseStudy.service_type}
                                    </span>
                                    <h3 className="mb-2 text-xl font-bold">{caseStudy.title}</h3>
                                    <p className="text-white/80">{caseStudy.client_name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudyGallery;
