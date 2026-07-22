import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';

const faqs = [
    {
        question: 'What kinds of problems are the best fit for Empuls3?',
        answer: 'We are strongest when an established service business depends on aging software, disconnected systems, manual workflows, or technology that lacks a dependable senior owner. We also handle focused website, CRM, mobile, DevOps, and managed IT work when it supports a defined operating outcome.',
    },
    {
        question: 'Can you take over software built by another developer or agency?',
        answer: 'Yes. We begin by reviewing access, source code, environments, dependencies, data, deployment, documentation, known incidents, and the business workflow. We do not assume the system must be rebuilt until the evidence supports that recommendation.',
    },
    {
        question: 'How does a software review work?',
        answer: 'The first conversation establishes the business impact, system boundaries, urgency, stakeholders, and available access. If a technical assessment is appropriate, we define its scope and deliverables before beginning. The output identifies immediate risk, options, sequencing, and the recommended next decision.',
    },
    {
        question: 'Do you repair systems or replace them?',
        answer: 'Both are possible. The responsible path may be stabilization, incremental modernization, targeted replacement, or a full rebuild. We compare those options against continuity, data, cost drivers, dependencies, team capability, and future ownership.',
    },
    {
        question: 'What is your minimum project size?',
        answer: 'Product and substantial implementation engagements generally begin at $25,000. A focused assessment may be smaller when it has a clearly defined system, evidence set, and decision outcome. Ongoing support is scoped after we review the environment and ownership need.',
    },
    {
        question: 'Will we work directly with senior specialists?',
        answer: 'Yes. Senior specialists remain involved in discovery, recommendations, delivery decisions, and client communication. Any additional contributors are introduced with clear responsibilities rather than hidden behind an account-management layer.',
    },
    {
        question: 'How do you handle security and access?',
        answer: 'We request only the access needed for the agreed work, identify authorized client contacts, avoid sharing credentials in ordinary messages, and document ownership and removal of access. System-specific security, privacy, or regulatory requirements must be identified during scoping so the appropriate controls and specialists can be included.',
    },
    {
        question: 'Who owns the work and source code?',
        answer: 'Ownership, licensing, third-party dependencies, repositories, credentials, and handoff obligations are defined in the engagement agreement. We aim to leave clients with the access and documentation required to operate the delivered work under those terms.',
    },
    {
        question: 'Do you work remotely?',
        answer: 'Yes. Empuls3 is remote-first and serves Dallas–Fort Worth businesses through scheduled working sessions, secure system access, written decisions, and direct communication. We do not advertise a walk-in support office.',
    },
    {
        question: 'How quickly will you respond to an inquiry?',
        answer: 'A senior specialist will review a legitimate business inquiry and normally respond within one business day. That response target is for initial inquiries, not an emergency-support guarantee or a universal incident service level.',
    },
    {
        question: 'Can you work with our current vendors and internal team?',
        answer: 'Yes. We define the client sponsor, decision rights, system access, provider responsibilities, dependencies, and escalation path. We can collaborate with an incumbent provider without overstating the relationship or assigning blame before reviewing the facts.',
    },
    {
        question: 'What should we send before the first call?',
        answer: 'Send a short description of the affected workflow, who depends on it, the consequence of the problem, systems involved, urgency, current owner or vendor, and the decision leadership needs to make. Do not send passwords, private keys, regulated data, or confidential source files through the public form.',
    },
];

export default function Faqs() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <SiteLayout title="Software & Engineering FAQs | Empuls3">
            <Head>
                <meta
                    name="description"
                    content="Answers about software rescue, inherited systems, engagement size, security, ownership, remote delivery, and ongoing engineering support."
                />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            <section className="px-[5%] py-16 md:py-24">
                <div className="container mx-auto max-w-4xl">
                    <p className="text-accent-pink font-semibold tracking-wide uppercase">Frequently asked questions</p>
                    <h1 className="text-primary mt-4 text-4xl font-bold md:text-6xl">What leaders ask before trusting us with a critical system</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
                        These answers explain fit, assessment, ownership, access, delivery, and what to expect before an engagement begins.
                    </p>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                <summary className="text-primary cursor-pointer list-none pr-8 text-lg font-bold marker:hidden">
                                    {faq.question}
                                </summary>
                                <p className="mt-4 leading-7 text-gray-700">{faq.answer}</p>
                            </details>
                        ))}
                    </div>

                    <div className="bg-primary mt-12 rounded-2xl p-8 text-white md:p-10">
                        <h2 className="text-3xl font-bold">Have a system-specific question?</h2>
                        <p className="mt-4 max-w-2xl leading-7 text-white/80">
                            Send the business impact and the decision you need to make. A senior specialist will respond within one business day.
                        </p>
                        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                            <Link href="/contact#contact-form" className="bg-accent-pink rounded-lg px-6 py-3 text-center font-semibold text-white">
                                Request a Software Review
                            </Link>
                            <a
                                href="mailto:info@empuls3.com"
                                className="rounded-lg border border-white px-6 py-3 text-center font-semibold text-white"
                            >
                                info@empuls3.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
