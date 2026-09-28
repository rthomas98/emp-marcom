import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function HubspotSolutions() {
    return (
        <section id="hubspot-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-solutions-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">HubSpot and CRM</p>
                    <h2 id="hubspot-solutions-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Set Up HubSpot Around How Your Team Works
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        We set up and customize HubSpot to cut down on missed follow-ups, duplicate contacts, and reports your sales and service teams
                        do not trust.
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                                alt="Business professionals meeting in an office"
                                className="h-auto w-full rounded-t-lg"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="text-accent-pink mb-2 font-semibold">Automation</p>
                                <h3 className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Automate Follow-Ups and Handoffs
                                </h3>
                                <p className="text-gray-700">
                                    Workflows that assign leads, send follow-ups, and create tasks, so fewer steps depend on someone remembering.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/solutions/hubspot-crm-development"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                >
                                    Explore HubSpot & CRM Development
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                                alt="Two business leaders talking"
                                className="h-auto w-full rounded-t-lg"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="text-accent-pink mb-2 font-semibold">Integrations</p>
                                <h3 className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Connect HubSpot to Your Other Tools
                                </h3>
                                <p className="text-gray-700">
                                    Integrations that sync contacts, deals, and activity between HubSpot and your website, apps, or other systems.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/solutions/hubspot-crm-development"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                >
                                    See HubSpot Integration Work
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_People_sticky_note_and_office_g_cf3e7832-6a5e-48da-9f5b-7dd8a0ac57e4_1.png"
                                alt="People planning with sticky notes"
                                className="h-auto w-full rounded-t-lg object-cover"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="text-accent-pink mb-2 font-semibold">Support</p>
                                <h3 className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Help Your Team Start Using It
                                </h3>
                                <p className="text-gray-700">
                                    Setup, data import, and guidance so your team knows how to use HubSpot in their daily work.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link href={contactHref('consultation')} className="text-primary hover:text-accent-pink inline-flex items-center">
                                    Request a Consultation
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
