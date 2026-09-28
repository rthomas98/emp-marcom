import type React from 'react';

export type FormType = 'general' | 'project';

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    formType: string;
    projectType: string;
    budget: string;
    timeline: string;
    projectDescription: string;
    requirements: string;
    website: string;
    submit_time: number;
}

/** Sent when the visitor does not choose a project type. The backend requires a projectType string. */
export const DEFAULT_PROJECT_TYPE = 'other';

export const projectTypeOptions = [
    { value: 'new-website-app', label: 'New Website or Web App Build' },
    { value: 'software-rescue', label: 'Software Rescue & Legacy Modernization' },
    { value: 'systems-integration', label: 'CRM, API & Workflow Integration' },
    { value: 'engineering-support', label: 'Ongoing Software Support' },
    { value: 'web-modernization', label: 'Website & E-Commerce Modernization' },
    { value: 'mobile-development', label: 'Mobile App Development' },
    { value: 'managed-it', label: 'Managed IT Services' },
    { value: DEFAULT_PROJECT_TYPE, label: 'Other / Not sure yet' },
] as const;

interface ContactFormPanelProps {
    formData: ContactFormData;
    isSubmitting: boolean;
    detailsOpen: boolean;
    onDetailsToggle: (open: boolean) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
}

const fieldClass =
    'min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none';
const labelClass = 'mb-2 block text-sm font-medium text-[#1F1946]';
const optional = <span className="font-normal text-gray-500">(optional)</span>;

export function ContactFormPanel({ formData, isSubmitting, detailsOpen, onDetailsToggle, onChange, onSubmit }: ContactFormPanelProps) {
    const presetType = projectTypeOptions.find((option) => option.value === formData.projectType && option.value !== DEFAULT_PROJECT_TYPE);

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 id="contact-form-title" className="mb-2 text-2xl font-bold text-[#1F1946] md:text-3xl">
                Send a Message
            </h2>
            <p className="mb-6 text-sm text-gray-600">Only your name, email, and a short description are required.</p>

            <form onSubmit={onSubmit} aria-labelledby="contact-form-title">
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className={labelClass}>
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            className={fieldClass}
                            required
                            aria-required="true"
                            autoComplete="name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className={fieldClass}
                            required
                            aria-required="true"
                            autoComplete="email"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className={labelClass}>
                        What would you like to build, fix, or discuss? *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={onChange}
                        rows={5}
                        className={fieldClass}
                        required
                        aria-required="true"
                        aria-describedby="message-help"
                        placeholder="A few sentences is fine: who it is for and what it needs to do, or what is not working today."
                    />
                    <p id="message-help" className="mt-2 text-sm text-gray-600">
                        Please do not include passwords, private keys, or regulated data.
                    </p>
                </div>

                <details
                    className="group mb-6 rounded-md border border-gray-200"
                    open={detailsOpen}
                    onToggle={(event) => onDetailsToggle(event.currentTarget.open)}
                >
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-[#1F1946] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] [&::-webkit-details-marker]:hidden">
                        <span>
                            Add optional details
                            {presetType && <span className="ml-2 font-normal text-gray-600">(project type: {presetType.label})</span>}
                        </span>
                        <span aria-hidden="true" className="text-lg leading-none text-[#BD1550] group-open:hidden">
                            +
                        </span>
                        <span aria-hidden="true" className="hidden text-lg leading-none text-[#BD1550] group-open:inline">
                            −
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 px-4 py-5">
                        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="company" className={labelClass}>
                                    Company Name {optional}
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={onChange}
                                    className={fieldClass}
                                    autoComplete="organization"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelClass}>
                                    Phone Number {optional}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={onChange}
                                    className={fieldClass}
                                    autoComplete="tel"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="projectType" className={labelClass}>
                                Project Type {optional}
                            </label>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType || DEFAULT_PROJECT_TYPE}
                                onChange={onChange}
                                className={fieldClass}
                            >
                                {projectTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="budget" className={labelClass}>
                                    Budget Range {optional}
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={onChange}
                                    className={fieldClass}
                                    aria-describedby="budget-help"
                                >
                                    <option value="">Select Budget Range</option>
                                    <option value="2500-5000">$2,500 - $5,000</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-25000">$10,000 - $25,000</option>
                                    <option value="25k-plus">$25,000+</option>
                                    <option value="not-sure">Not sure yet</option>
                                </select>
                                <p id="budget-help" className="mt-2 text-sm text-gray-600">
                                    Projects start at $2,500; the final estimate depends on scope.
                                </p>
                            </div>

                            <div>
                                <label htmlFor="timeline" className={labelClass}>
                                    Timeline {optional}
                                </label>
                                <select id="timeline" name="timeline" value={formData.timeline} onChange={onChange} className={fieldClass}>
                                    <option value="">Select Timeline</option>
                                    <option value="urgent">Urgent (ASAP)</option>
                                    <option value="1-month">Within 1 month</option>
                                    <option value="1-3-months">1-3 months</option>
                                    <option value="3-6-months">3-6 months</option>
                                    <option value="6-plus-months">6+ months</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="requirements" className={labelClass}>
                                Known Constraints or Requirements {optional}
                            </label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={onChange}
                                rows={3}
                                className={fieldClass}
                                placeholder="Anything you already know about timing, systems, or vendors. This can wait until we follow up."
                            />
                        </div>
                    </div>
                </details>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
                <p className="sr-only" aria-live="polite">
                    {isSubmitting ? 'Sending your message.' : ''}
                </p>
            </form>
        </div>
    );
}
