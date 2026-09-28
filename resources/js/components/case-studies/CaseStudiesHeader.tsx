import { SOFTWARE_PROJECTS_ANCHOR } from '@/content/software-projects';
import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function CaseStudiesHeader() {
    return (
        <section className="bg-primary px-[5%] py-16 text-white md:py-24">
            <div className="container mx-auto max-w-4xl text-center">
                <p className="text-accent-yellow font-semibold tracking-wide uppercase">Case studies</p>
                <h1 className="mt-4 text-4xl font-bold md:text-6xl">Websites and software, delivered and in progress</h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
                    Delivered websites for Hebert Thomas Law, CodeGig, and Solushiens, plus current software and platform projects: AEC Unites, Carbon
                    Capture, Kinesics Health, and EcoGlobe. Each entry describes the scope of the work.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <a href="#case-studies-list" className="bg-accent-pink rounded-lg px-6 py-3 font-semibold text-white">
                        See Website Work
                    </a>
                    <a href={`#${SOFTWARE_PROJECTS_ANCHOR}`} className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
                        See Software Projects
                    </a>
                    <Link href={contactHref('project')} className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
                        Let’s Talk About Your Project
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CaseStudiesHeader;
