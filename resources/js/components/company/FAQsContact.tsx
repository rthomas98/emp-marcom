import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const buttonClass =
    'mt-auto inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2';

export function FAQsContact() {
    return (
        <section id="faqs-contact" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="faqs-contact-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Still Have a Question?</p>
                        <h2 id="faqs-contact-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl">
                            Ask About Your Project or System
                        </h2>
                        <p className="md:text-md text-gray-700">
                            Whether you are planning something new or dealing with an existing system, Robert will read your message. We normally
                            reply within one business day.
                        </p>
                    </div>
                </div>

                <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    <li className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                            <MessageSquare className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Send a Project Request</h3>
                        <p className="mb-6 text-gray-700">
                            Use the contact form to describe the new project or the system you need help with, who uses it, and your timing.
                        </p>
                        <Link href={contactHref('project')} className={buttonClass}>
                            Let’s Talk About Your Project
                        </Link>
                    </li>

                    <li className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                            <Mail className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Email Us</h3>
                        <p className="mb-6 text-gray-700">
                            Send the business impact and the decision you need to make. Do not email passwords, private keys, or regulated data.
                        </p>
                        <a href="mailto:info@empuls3.com" className={buttonClass}>
                            info@empuls3.com
                        </a>
                    </li>

                    <li className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                            <Phone className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#1F1946]">Call Us</h3>
                        <p className="mb-6 text-gray-700">Call to discuss fit during business hours. This number is not an emergency support line.</p>
                        <a href="tel:+19727988914" className={buttonClass}>
                            972.798.8914
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
