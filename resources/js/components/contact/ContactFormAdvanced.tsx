'use client';

import { Toast } from '@/components/common/Toast';
import { ContactFormPanel, type ContactFormData, type FormType } from '@/components/contact/ContactFormPanel';
import { trackAnalyticsEvent } from '@/utils/analytics';
import axios from 'axios';
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

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
                Contact Information
            </h2>
            <p className="md:text-md mb-8 text-gray-700">
                Tell us what is breaking, disconnected, delayed, or consuming staff time. A senior specialist will review the inquiry and normally
                respond within one business day.
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
                        <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Remote-First DFW Service</h3>
                        <p className="text-gray-700">
                            We serve established Dallas–Fort Worth businesses through scheduled sessions and secure remote access.
                        </p>
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleFormTypeChange = (type: FormType) => {
        setFormType(type);
        setFormData((previous) => ({ ...previous, formType: type }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

            const submissionData = { ...formData };
            if (formType === 'general') submissionData.projectType = 'general-inquiry';

            const response = await axios.post('/contact/submit', submissionData);
            if (!response.data.success) throw new Error(response.data.message || 'Something went wrong. Please try again.');

            trackAnalyticsEvent('generate_lead', { form_type: formType, project_type: submissionData.projectType });
            trackAnalyticsEvent('contact_form_success', { form_type: formType, project_type: submissionData.projectType });
            setFormData(createEmptyForm(formType));
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
                        formType={formType}
                        formData={formData}
                        isSubmitting={isSubmitting}
                        onFormTypeChange={handleFormTypeChange}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </section>
    );
}
