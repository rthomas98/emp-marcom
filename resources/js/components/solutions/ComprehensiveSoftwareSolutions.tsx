import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Code, Settings } from 'lucide-react';

export function ComprehensiveSoftwareSolutions() {
    return (
        <section id="comprehensive-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="software-paths-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Two ways we help</p>
                        <h2 id="software-paths-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Build Something New or Regain Control of What You Have
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Pick the path that matches where you are. Each starts with a different first conversation.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
                    <div className="rounded-lg border border-gray-200 bg-[#F8F9FA] p-6 shadow-sm md:p-8 lg:p-12">
                        <div>
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Code className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                New Custom Applications
                            </h3>
                            <p className="text-gray-700">
                                Start by telling us what the application needs to do and who will use it. If you are testing a new product idea, the
                                MVP page explains how we scope a first version.
                            </p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Tell Us About Your App
                            </Link>
                            <Link
                                href="/solutions/mvp-product-development"
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80"
                            >
                                Explore MVP Development
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-[#F8F9FA] p-6 shadow-sm md:p-8 lg:p-12">
                        <div>
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                                    <Settings className="text-primary h-6 w-6" aria-hidden="true" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                Fixing or Replacing Existing Software
                            </h3>
                            <p className="text-gray-700">
                                Start with a review of the application you have: what it depends on, where it breaks, and who can still change it
                                safely. That review shapes whether repair, staged modernization, or replacement makes sense.
                            </p>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Request a Software Review
                            </Link>
                            <Link
                                href="/solutions/backend-api-development"
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80"
                            >
                                Explore API and Integration Work
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
