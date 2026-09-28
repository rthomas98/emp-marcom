import { Link } from '@inertiajs/react';
import { ChevronRight, GraduationCap } from 'lucide-react';

export function IncubatorTeaser() {
    return (
        <section className="px-[5%] pb-16 md:pb-24" aria-labelledby="incubator-teaser-heading">
            <div className="container mx-auto flex max-w-5xl flex-col items-start gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center md:p-10">
                <span
                    className="bg-accent-pink/10 text-accent-pink flex size-14 shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                >
                    <GraduationCap className="size-7" />
                </span>
                <div className="flex-1">
                    <h2 id="incubator-teaser-heading" className="text-primary text-2xl font-bold">
                        Run an incubator or founder program?
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Empuls3 can offer workshops, technical office hours, and scoped development support for the founders you work with.
                    </p>
                </div>
                <Link href="/for-incubators" className="text-primary hover:text-accent-pink inline-flex shrink-0 items-center font-medium">
                    For Incubators
                    <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
