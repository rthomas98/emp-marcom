'use client';

import { Toast } from '@/components/common/Toast';
import { ContactFormPanel, DEFAULT_PROJECT_TYPE, type ContactFormData, type FormType } from '@/components/contact/ContactFormPanel';
import { trackAnalyticsEvent } from '@/utils/analytics';
import {
    CONTACT_INTENT_EVENT,
    readContactIntentFromUrl,
    resolveContactIntent,
    type ContactIntent,
    type ResolvedContactIntent,
} from '@/utils/contact-intent';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

function createEmptyForm(formType: FormType): ContactFormData {
    return {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        formType,
        projectType: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        requirements: '',
        website: '',
        submit_time: Math.floor(Date.now() / 1000),
    };
}

function ContactMethods() {
    return (
        <div className="contact-info">
            <h2 id="contact-form-heading" className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl lg:text-5xl">
                Start With a Short Note
            </h2>
            <p className="md:text-md mb-4 text-gray-700">We normally reply within one business day by email.</p>
            <p className="md:text-md mb-8 text-gray-700">
                A few sentences about what you want to build or fix is enough. Scope, timing, and system access can wait until we follow up.
            </p>

            <ul className="space-y-6" aria-label="Contact methods">
                <li className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                        <Mail className="h-6 w-6 text-[#BD1550]" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Email</h3>
                        <a className="block text-gray-700 hover:text-[#BD1550]" href="mailto:info@empuls3.com">
                            info@empuls3.com
                        </a>
                        <a className="block text-gray-700 hover:text-[#BD1550]" href="mailto:support@empuls3.com">
                            support@empuls3.com
                        </a>
                    </div>
                </li>

                <li className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                        <Phone className="h-6 w-6 text-[#BD1550]" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Phone</h3>
                        <p className="text-gray-700">If you would rather talk first.</p>
                        <a className="text-gray-700 hover:text-[#BD1550] hover:underline" href="tel:+19727988914">
                            972.798.8914
                        </a>
                    </div>
                </li>

                <li className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                        <MapPin className="h-6 w-6 text-[#BD1550]" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Dallas–Fort Worth</h3>
                        <p className="text-gray-700">We are based in DFW and work remotely through scheduled sessions and secure access.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export function ContactFormAdvanced() {
    const [formType, setFormType] = useState<FormType>('general');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("Thank you for your message. We'll get back to you soon!");
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>(() => createEmptyForm('general'));
    const [detailsOpen, setDetailsOpen] = useState(false);
    const { url } = usePage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const applyIntent = useCallback((intent: ResolvedContactIntent | null) => {
        if (!intent) return;
        setFormType(intent.formType);
        setFormData((previous) => ({
            ...previous,
            formType: intent.formType,
            projectType: intent.projectType ?? previous.projectType,
            message: intent.message && !previous.message.trim() ? intent.message : previous.message,
        }));
    }, []);

    useEffect(() => {
        applyIntent(readContactIntentFromUrl(url));
    }, [applyIntent, url]);

    useEffect(() => {
        const handleIntent = (event: Event) => applyIntent(resolveContactIntent((event as CustomEvent<ContactIntent>).detail));
        window.addEventListener(CONTACT_INTENT_EVENT, handleIntent);
        return () => window.removeEventListener(CONTACT_INTENT_EVENT, handleIntent);
    }, [applyIntent]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

            // projectType is required by the backend: keep an intent preset or a chosen type, otherwise send the truthful "other".
            const projectType = formData.projectType || DEFAULT_PROJECT_TYPE;
            const submittedFormType: FormType = projectType !== DEFAULT_PROJECT_TYPE ? 'project' : formType;
            const submissionData: ContactFormData = { ...formData, projectType, formType: submittedFormType };

            const response = await axios.post('/contact/submit', submissionData);
            if (!response.data.success) throw new Error(response.data.message || 'Something went wrong. Please try again.');

            trackAnalyticsEvent('generate_lead', { form_type: submittedFormType, project_type: submissionData.projectType });
            trackAnalyticsEvent('contact_form_success', { form_type: submittedFormType, project_type: submissionData.projectType });
            setFormData(createEmptyForm(formType));
            setDetailsOpen(false);
            setToastType('success');
            setToastMessage(response.data.message || "Thank you for your message. We'll get back to you soon!");
            setShowToast(true);
        } catch (error) {
            console.error('Form submission error:', error);
            setToastType('error');
            setToastMessage(
                axios.isAxiosError(error) && error.response?.data?.message
                    ? error.response.data.message
                    : error instanceof Error
                      ? error.message
                      : 'Something went wrong. Please try again.',
            );
            setShowToast(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="contact-form-heading">
            <Toast
                isVisible={showToast}
                title={toastType === 'success' ? 'Success' : 'Error'}
                message={toastMessage}
                onClose={() => setShowToast(false)}
                duration={5000}
                type={toastType}
            />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    <ContactMethods />
                    <ContactFormPanel
                        formData={formData}
                        isSubmitting={isSubmitting}
                        detailsOpen={detailsOpen}
                        onDetailsToggle={setDetailsOpen}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </section>
    );
}
