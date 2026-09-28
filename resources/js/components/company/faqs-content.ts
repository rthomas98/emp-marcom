// Single source for the visible FAQ accordion and the FAQPage JSON-LD on /company/faqs.
// Answers state current, approved facts only (no partnerships, speed comparisons, SLAs or guarantees).

export type FaqItem = {
    question: string;
    answer: string;
};

export type FaqCategory = {
    id: string;
    title: string;
    description: string;
    faqs: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Fit, new projects, and what to send before the first conversation.',
        faqs: [
            {
                question: 'What kinds of problems are the best fit for Empuls3?',
                answer: 'We help businesses build websites and apps, connect the systems they use, replace manual work, and look after software they depend on. We also take over projects that need experienced technical help, and handle focused website, CRM, mobile, DevOps, and managed IT work.',
            },
            {
                question: 'Can you build a new website or app, not just fix existing systems?',
                answer: 'Yes. We plan, design, and build new websites, web applications, mobile apps, and first product versions. We start by agreeing who will use it, what it must do first, and who will support it after launch. Projects start at $2,500, and the final estimate depends on scope. A consultation can come first if the scope is still taking shape.',
            },
            {
                question: 'What should we send before the first call?',
                answer: 'A few sentences are enough: what you want to build or fix, who uses it, what happens when it goes wrong, which systems are involved, how urgent it is, and who looks after it today. Please do not send passwords, private keys, regulated data, or confidential source files through the contact form.',
            },
            {
                question: 'How quickly will you respond to an inquiry?',
                answer: 'Robert reads every business inquiry and normally replies within one business day. Response times for ongoing support are agreed as part of each engagement.',
            },
        ],
    },
    {
        id: 'assessment-and-delivery',
        title: 'Assessment and Delivery',
        description: 'Taking over existing software, reviews, and how the work is run.',
        faqs: [
            {
                question: 'Can you take over software built by another developer or agency?',
                answer: 'Yes. We start by reviewing the code, hosting, data, documentation, known problems, and how your team uses the system. We only recommend a rebuild if that review shows it is the better option.',
            },
            {
                question: 'How does a software review work?',
                answer: 'First we talk through what the problem is costing you, which systems are involved, how urgent it is, and who needs to be involved. If a technical review makes sense, we agree what it will cover before we start. You get a clear picture of the risks, your options, and what we recommend doing first.',
            },
            {
                question: 'Do you repair systems or replace them?',
                answer: 'Either, depending on what makes sense. The right answer might be fixing what you have, improving it in stages, replacing part of it, or rebuilding it. We compare the options on cost, risk to day-to-day operations, your data, and who will look after it afterward.',
            },
            {
                question: 'Will we work directly with the developer doing the work?',
                answer: 'Yes. Robert, the senior developer who plans the work, also builds it and talks with you throughout. If a project needs an outside specialist or vendor, we tell you who they are and what they are responsible for before they start.',
            },
            {
                question: 'Can you work with our current vendors and internal team?',
                answer: 'Yes. We agree who makes decisions, who has access to what, and what each provider is responsible for, then work alongside your staff and current vendors.',
            },
        ],
    },
    {
        id: 'cost-and-engagement',
        title: 'Cost and Engagement',
        description: 'Project size, ongoing support, and how we work with DFW clients.',
        faqs: [
            {
                question: 'How much does a project cost?',
                answer: 'Projects start at $2,500. The final estimate depends on scope, and you receive a written estimate before work begins. Ongoing support is priced after we understand your systems and what you need covered.',
            },
            {
                question: 'Do you work remotely?',
                answer: 'Yes. Empuls3 is remote-first and works with Dallas–Fort Worth businesses through scheduled video sessions, secure access to your systems, and written updates. We do not have a walk-in office.',
            },
        ],
    },
    {
        id: 'ownership-and-security',
        title: 'Ownership and Security',
        description: 'System access, credentials, and who owns the delivered work.',
        faqs: [
            {
                question: 'How do you handle security and access?',
                answer: 'We ask only for the access the work needs, agree who on your side can approve it, keep passwords out of everyday messages, and remove access when the work ends. If your systems have specific security, privacy, or regulatory requirements, tell us early so the right safeguards and specialists are part of the plan.',
            },
            {
                question: 'Who owns the work and source code?',
                answer: 'Ownership, licensing, third-party components, code repositories, and handover are set out in your engagement agreement. Our aim is that you end up with the access and documentation you need to run what we deliver.',
            },
        ],
    },
];

export const allFaqs: FaqItem[] = faqCategories.flatMap((category) => category.faqs);

export const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};
