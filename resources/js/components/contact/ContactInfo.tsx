'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
    return (
        <section id="contact-info" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
                    <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
                            <Mail className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-3 text-2xl leading-[1.4] font-bold text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">Email</h3>
                        <p className="mb-5 text-gray-700 md:mb-6">
                            Send the business impact, affected workflow, and decision you need to make. Do not email passwords, private keys, or
                            regulated data.
                        </p>
                        <a className="text-[#BD1550] underline hover:text-[#a01245]" href="mailto:info@empuls3.com">
                            info@empuls3.com
                        </a>
                    </div>
                    <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
                            <Phone className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-3 text-2xl leading-[1.4] font-bold text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">Phone</h3>
                        <p className="mb-5 text-gray-700 md:mb-6">
                            Call to discuss fit or an urgent business-system concern. This public number is not a guaranteed emergency support line.
                        </p>
                        <a className="text-[#BD1550] underline hover:text-[#a01245]" href="tel:+19727988914">
                            972.798.8914
                        </a>
                    </div>
                    <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#BD1550]/10 lg:mb-6">
                            <MapPin className="h-8 w-8 text-[#BD1550]" />
                        </div>
                        <h3 className="mb-3 text-2xl leading-[1.4] font-bold text-[#1F1946] md:text-3xl lg:mb-4 lg:text-4xl">Dallas–Fort Worth</h3>
                        <p className="mb-5 text-gray-700 md:mb-6">
                            Empuls3 is remote-first and works with established businesses across the DFW Metroplex through scheduled sessions and
                            secure system access.
                        </p>
                        <a
                            className="text-[#BD1550] underline hover:text-[#a01245]"
                            href="https://www.empuls3.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Serving DFW remotely
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
