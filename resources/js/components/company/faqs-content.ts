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

export const FOUNDER_FAQ_CATEGORY_ID = 'for-founders';

export const faqCategories: FaqCategory[] = [
    {
        id: FOUNDER_FAQ_CATEGORY_ID,
        title: 'For Founders',
        description: 'Planning a first app without a technical background: cost, scope, ownership, and what happens after launch.',
        faqs: [
            {
                question: 'I am not technical. Can I still work with you?',
                answer: 'Yes. You bring the business idea and knowledge of your customers; Robert explains the technical choices in plain language and asks you to decide only what affects your business, such as what to build first and what can wait.',
            },
            {
                question: 'What is a Product Blueprint?',
                answer: 'A Product Blueprint is a paid planning engagement that starts at $2,500. We agree its exact scope and deliverables in writing before it starts. It typically turns your idea into a clear plan for a first release: who it is for, what it must do, the main screens and flows, the technical approach, and a written estimate and milestones for the build. It is planning, not a finished app.',
            },
            {
                question: 'Can you build my whole app for $2,500?',
                answer: 'No. $2,500 is where Product Blueprint planning starts. Building the first release is scoped and estimated separately once the plan is clear, and the cost depends on what the first release needs to do.',
            },
            {
                question: 'What do you mean by an MVP?',
                answer: 'We use MVP to mean the first usable release: the smallest version of your product that real customers can use for the main task, built well enough to support and improve. It is not a mockup or a throwaway demo.',
            },
            {
                question: 'Will I own the code and accounts?',
                answer: 'Ownership and licensing of the code, and who holds each account, are set out in your agreement. Where possible we set up the code repository, hosting, domain, and app store accounts under your business so you keep control, and we document how everything fits together.',
            },
            {
                question: 'How will I know how the build is going?',
                answer: 'The first release is split into milestones agreed up front. You get regular updates, can try working software at each milestone, and approve changes before they go live. If something falls outside the agreed scope, we tell you before doing the extra work.',
            },
            {
                question: 'What happens after launch?',
                answer: 'We help with launch and the issues that come up afterward, and can continue with ongoing support and improvements under a separate arrangement. Support is priced once we know what your product needs covered.',
            },
            {
                question: 'Do I work with a team or one person?',
                answer: 'You work directly with Robert, the developer who plans and builds your product. If a project needs an outside specialist, such as a designer or a security reviewer, we tell you who they are and what they are responsible for before they start.',
            },
        ],
    },
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
                answer: 'Yes. We plan, design, and build new websites, web applications, mobile apps, and first product versions. We start by agreeing who will use it, what it must do first, and who will support it after launch. Product Blueprint planning starts at $2,500, and building the first release is estimated separately once the scope is clear. A consultation can come first if the idea is still taking shape.',
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
                answer: 'New product work starts with Product Blueprint planning, from $2,500. Building the first release, and other project work, is estimated separately based on scope, and you receive a written estimate before work begins. Ongoing support is priced after we understand your systems and what you need covered.',
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
