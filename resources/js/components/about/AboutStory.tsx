import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { aboutImages } from './about-content';

export function AboutStory() {
    const image = aboutImages.workbench;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="about-story-heading">
            <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div className="order-2 md:order-1">
                    <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="aspect-[3/2] w-full rounded-lg object-cover"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">What we do</p>
                    <h2 id="about-story-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Build something new, or improve what you already run
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">
                        Some clients are founders with a business idea and no technical co-founder. Others need help with software, integrations, or
                        systems their business already depends on. In both cases, the same developer, Robert, stays involved from planning through
                        launch and support.
                    </p>
                    <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="border-accent-pink border-l-2 pl-5">
                            <dt className="text-primary text-lg font-semibold">Building something new</dt>
                            <dd className="mt-2 leading-7 text-gray-700">
                                Decide what to build first, understand the scope, and launch a web or mobile app you can keep improving.
                            </dd>
                        </div>
                        <div className="border-primary border-l-2 pl-5">
                            <dt className="text-primary text-lg font-semibold">Running what you have</dt>
                            <dd className="mt-2 leading-7 text-gray-700">
                                Stabilize, connect, and modernize the systems your team already relies on, with documentation your team can use after
                                delivery.
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-8">
                        <Link href="/case-studies" className="text-primary hover:text-accent-pink inline-flex items-center font-medium">
                            See Published Work
                            <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
