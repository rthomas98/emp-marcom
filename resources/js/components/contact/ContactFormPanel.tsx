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

interface ContactFormPanelProps {
    formType: FormType;
    formData: ContactFormData;
    isSubmitting: boolean;
    onFormTypeChange: (type: FormType) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
}

export function ContactFormPanel({ formType, formData, isSubmitting, onFormTypeChange, onChange, onSubmit }: ContactFormPanelProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 id="contact-form-title" className="mb-6 text-2xl font-bold text-[#1F1946] md:text-3xl">
                Send Us a Message
            </h2>

            <div className="mb-6 flex space-x-4" role="tablist" aria-label="Contact form types">
                <button
                    type="button"
                    id="tab-general"
                    role="tab"
                    aria-selected={formType === 'general'}
                    aria-controls="panel-general"
                    onClick={() => onFormTypeChange('general')}
                    className={`flex-1 rounded-md border px-4 py-2 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 ${
                        formType === 'general'
                            ? 'border-[#BD1550] bg-[#BD1550] text-white'
                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    General Inquiry
                </button>
                <button
                    type="button"
                    id="tab-project"
                    role="tab"
                    aria-selected={formType === 'project'}
                    aria-controls="panel-project"
                    onClick={() => onFormTypeChange('project')}
                    className={`flex-1 rounded-md border px-4 py-2 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 ${
                        formType === 'project'
                            ? 'border-[#BD1550] bg-[#BD1550] text-white'
                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    Project Request
                </button>
            </div>

            <form onSubmit={onSubmit} aria-labelledby="contact-form-title">
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1F1946]">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                            required
                            aria-required="true"
                            aria-describedby="name-required"
                        />
                        <span id="name-required" className="sr-only">
                            Required field
                        </span>
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1F1946]">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                            required
                            aria-required="true"
                            aria-describedby="email-required"
                            autoComplete="email"
                        />
                        <span id="email-required" className="sr-only">
                            Required field
                        </span>
                    </div>

                    <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1F1946]">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={onChange}
                            className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                            autoComplete="tel"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#1F1946]">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={onChange}
                            className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                            autoComplete="organization"
                        />
                    </div>
                </div>

                {formType === 'general' && (
                    <div id="panel-general" role="tabpanel" aria-labelledby="tab-general">
                        <div className="mb-6">
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                What is slowing the business down? *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={onChange}
                                rows={5}
                                className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                required
                                aria-required="true"
                                aria-describedby="message-required"
                                placeholder="Describe the affected workflow, who depends on it, and the consequence of the problem."
                            />
                            <span id="message-required" className="sr-only">
                                Required field
                            </span>
                        </div>
                    </div>
                )}

                {formType === 'project' && (
                    <div id="panel-project" role="tabpanel" aria-labelledby="tab-project">
                        <div className="mb-6">
                            <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                Engagement Type *
                            </label>
                            <span id="projectType-required" className="sr-only">
                                Required field
                            </span>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={onChange}
                                className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                required
                                aria-required="true"
                                aria-describedby="projectType-required"
                            >
                                <option value="">Select Engagement Type</option>
                                <option value="software-rescue">Software Rescue & Legacy Modernization</option>
                                <option value="systems-integration">CRM, API & Workflow Integration</option>
                                <option value="engineering-support">Ongoing Senior Engineering Support</option>
                                <option value="web-modernization">Website & E-Commerce Modernization</option>
                                <option value="mobile-development">Mobile Product Development</option>
                                <option value="managed-it">Managed IT Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                    Implementation Budget
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={onChange}
                                    className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                >
                                    <option value="">Select Budget Range</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k-100k">$50,000 - $100,000</option>
                                    <option value="over-100k">Over $100,000</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                    Timeline
                                </label>
                                <select
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={onChange}
                                    className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                >
                                    <option value="">Select Timeline</option>
                                    <option value="urgent">Urgent (ASAP)</option>
                                    <option value="1-month">Within 1 month</option>
                                    <option value="1-3-months">1-3 months</option>
                                    <option value="3-6-months">3-6 months</option>
                                    <option value="6-plus-months">6+ months</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="projectDescription" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                Business and System Context *
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={onChange}
                                rows={4}
                                className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                required
                                aria-required="true"
                                aria-describedby="projectDescription-required"
                                placeholder="Describe the workflow, systems involved, current owner or vendor, business impact, and the decision leadership needs to make."
                            />
                            <span id="projectDescription-required" className="sr-only">
                                Required field
                            </span>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="requirements" className="mb-2 block text-sm font-medium text-[#1F1946]">
                                Known Constraints or Requirements
                            </label>
                            <textarea
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={onChange}
                                rows={3}
                                className="min-h-[44px] w-full rounded-md border border-gray-300 px-4 py-3 text-base text-[#1F1946] focus:border-[#BD1550] focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                placeholder="Include timing, access, security, data, vendor, or operating constraints. Do not submit credentials or regulated data."
                            />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    aria-live="polite"
                >
                    {isSubmitting ? 'Sending…' : formType === 'general' ? 'Send Inquiry' : 'Request a Software Review'}
                </button>
            </form>
        </div>
    );
}
