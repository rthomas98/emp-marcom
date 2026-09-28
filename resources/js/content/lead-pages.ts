import type { LeadPageConfig } from '@/components/marketing/LeadPage';
import { contactHref } from '@/utils/contact-intent';

const seniorDelivery = [
    {
        title: 'Understand the need',
        description:
            'We learn how the work gets done today, who uses the system, and what the business needs from it before recommending an approach.',
    },
    {
        title: 'Agree a practical plan',
        description: 'You receive a written scope that separates what must happen first from improvements that can follow later.',
    },
    {
        title: 'Build and hand over',
        description:
            'The senior developer who plans the work also builds it, explains tradeoffs as they come up, and leaves clear documentation and next steps.',
    },
];

const servicesSteps = [
    {
        title: 'Tell us what you need',
        description: 'Send a few sentences through the contact form or by email. We normally reply within one business day.',
    },
    {
        title: 'Talk it through',
        description: 'A senior developer asks about your goals, users, systems, timing, and budget, and tells you plainly whether we are a good fit.',
    },
    {
        title: 'Agree the scope',
        description:
            'You receive a written plan for a defined project, a focused review, or ongoing support, with what is included and what comes first.',
    },
];

const softwareSteps = [
    {
        title: 'Discovery and plan',
        description: 'We learn the workflow, users, data, and systems involved, then agree what the first release must do and what can wait.',
    },
    {
        title: 'Build in reviewable stages',
        description: 'You review working software at agreed checkpoints and approve changes before they go live.',
    },
    {
        title: 'Launch and handover',
        description: 'We release carefully, document how the system works, and agree who supports it afterward.',
    },
];

const websiteSteps = [
    {
        title: 'Plan the site',
        description: 'We agree the audience, the pages the site needs, and what each page should help a visitor do.',
    },
    {
        title: 'Write, design, and build',
        description:
            'We draft the page structure and content, design the key pages for your review, then build and test the site on phones and desktops.',
    },
    {
        title: 'Launch and hand over',
        description: 'We move the site live, check forms and tracking, and show your team how to publish updates.',
    },
];

const consultingSteps = [
    {
        title: 'Define the question',
        description: 'We agree the decision you need to make, who is involved, and what we will review.',
    },
    {
        title: 'Review and interview',
        description: 'We look at the systems, documents, proposals, or code in scope and talk with the people who use and support them.',
    },
    {
        title: 'Walk through the findings',
        description:
            'We present the written assessment, answer questions, and help you choose. If you want help carrying out the plan, we scope that next.',
    },
];

const managedItSteps = [
    {
        title: 'Tell us what needs support',
        description: 'Share the number of users, main systems, current vendors, recurring problems, and business hours.',
    },
    {
        title: 'Review and proposal',
        description:
            'We review the environment with you and propose coverage, response expectations, authorized contacts, escalation, and exclusions.',
    },
    {
        title: 'Onboarding',
        description: 'Once you approve the proposal, we document the environment, set up access with your authorized contacts, and begin support.',
    },
];

const mobileSteps = [
    {
        title: 'Map the workflow and choose a platform',
        description: 'We look at who uses the app, where, how often, and which device features and systems it needs, then recommend a platform.',
    },
    {
        title: 'Prototype and build',
        description: 'You try clickable screens early, then test working builds on real devices before launch.',
    },
    {
        title: 'Store release and support',
        description: 'We prepare store listings, handle App Store and Google Play review submissions, monitor early releases, and plan updates.',
    },
];

const establishedBusinessFit = [
    'The business depends on the website, software, or workflow to serve customers, run operations, or bring in revenue.',
    'Someone on your side can explain how the business works and make decisions during the project.',
    'You want careful, lasting work more than the cheapest short-term fix.',
];

const standardNotFit = [
    'You need extra developers with no defined goal or decision-maker.',
    'The lowest hourly rate is the only deciding factor.',
    'The idea does not yet have a sponsor or a realistic budget.',
];

const shortNotFit = standardNotFit.slice(0, 2);

const dfwLocation = 'Based in Dallas–Fort Worth';

const publishedWork =
    'Our case studies cover commissioned website projects for Hebert Thomas Law, CodeGig, and Solushiens, and describe the scope of each project.';

export const leadPages = {
    home: {
        title: 'Websites and Software Built Around Your Business | Empuls3',
        metaDescription:
            'We design and build websites, web apps, and business systems, and improve the ones you already use. An independent senior developer based in Dallas–Fort Worth.',
        eyebrow: 'Independent senior developer based in Dallas–Fort Worth',
        heading: 'Websites and software built around your business',
        introduction:
            'We design and build websites, web apps, and business systems—and improve the ones you already use. Work directly with a senior developer from the first plan through launch and ongoing support.',
        primaryAction: { label: 'Let’s Talk About Your Project', href: contactHref('project') },
        secondaryAction: { label: 'See Our Work', href: '/case-studies' },
        problemHeading: 'Technology problems become operating problems',
        problemIntroduction:
            'The warning signs often appear in missed handoffs, duplicate work, delayed reporting, recurring incidents, and growing dependence on a system nobody confidently owns.',
        problems: [
            {
                title: 'Aging or unreliable software',
                description:
                    'A critical application is difficult to change, frequently breaks, or depends on knowledge that has left the organization.',
            },
            {
                title: 'Disconnected systems and data',
                description: 'Teams re-enter information, reconcile spreadsheets, or work around integrations that are incomplete or unreliable.',
            },
            {
                title: 'No dependable technical owner',
                description: 'Vendors respond tactically, internal teams are overloaded, and long-term risk continues to accumulate.',
            },
        ],
        solutionHeading: 'How we help',
        solutionIntroduction: 'Each engagement begins with the business consequence, then applies the smallest responsible technical response.',
        solutions: [
            {
                title: 'Software rescue and modernization',
                description:
                    'Stabilize the current system, recover operational knowledge, and create a controlled repair, replacement, or modernization path.',
            },
            {
                title: 'CRM, API, and workflow integration',
                description: 'Connect critical tools and data so information moves reliably and staff can stop carrying the process manually.',
            },
            {
                title: 'Ongoing senior engineering support',
                description: 'A senior developer who maintains and improves your applications, releases, and infrastructure over time.',
            },
        ],
        processHeading: 'A clear path from uncertainty to control',
        processIntroduction:
            'We do not begin by prescribing a rebuild. We begin by learning what the business needs to protect and what the current system can support.',
        process: seniorDelivery,
        fitHeading: 'Best suited to established service businesses',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofHeading: 'Published work',
        proofBody: publishedWork,
        proofAction: { label: 'Review Published Work', href: '/case-studies' },
        finalHeading: 'Start with the problem, not a technology shopping list',
        finalBody:
            'Tell us what you want to build, or what is breaking, disconnected, or taking too much staff time. We normally reply within one business day with a practical next step.',
        serviceType: 'Website and software development, integration, and support',
    },
    solutions: {
        title: 'Software Development Solutions for DFW Businesses | Empuls3',
        metaDescription:
            'Custom software, websites, online stores, APIs, mobile apps, and HubSpot work for DFW businesses. New builds or fixes to the systems you already use.',
        eyebrow: 'Solutions organized by business problem',
        heading: 'Choose a path based on what is hurting the business',
        introduction:
            'You do not need to diagnose the technology before contacting us. Start with the operational symptom and we will help determine whether the next move is stabilization, integration, modernization, or ongoing ownership.',
        primaryAction: { label: 'Let’s Talk About Your Project', href: contactHref('project') },
        secondaryAction: { label: 'See Our Work', href: '/case-studies' },
        problemHeading: 'Where should you start?',
        problemIntroduction: 'These are the three situations where Empuls3 is most useful to an established business.',
        problems: [
            {
                title: 'Critical software is fragile',
                description:
                    'Choose software rescue when failures, technical debt, missing documentation, or vendor dependence put operations at risk.',
            },
            {
                title: 'Systems do not work together',
                description: 'Choose integration when staff bridge gaps between CRM, finance, operations, reporting, and customer tools.',
            },
            {
                title: 'Nobody owns the technical roadmap',
                description:
                    'Choose ongoing engineering support when the business needs consistent senior guidance and delivery without building a full internal department.',
            },
        ],
        solutionHeading: 'Primary solution paths',
        solutionIntroduction:
            'Secondary capabilities such as web, mobile, CRM configuration, and UX are used when they support one of these operating outcomes.',
        solutions: [
            {
                title: 'Rescue and modernize',
                description: 'Assess an inherited or aging system, stabilize immediate risk, and plan a responsible future state.',
            },
            {
                title: 'Connect and automate',
                description: 'Create dependable data movement, business rules, and workflow visibility across the tools your teams already use.',
            },
            {
                title: 'Own and improve',
                description: 'Establish a steady operating rhythm for maintenance, releases, incidents, security, and prioritized improvements.',
            },
        ],
        processHeading: 'One diagnostic approach across every solution',
        processIntroduction: 'The first steps are the same whatever we are building or improving.',
        process: seniorDelivery,
        fitHeading: 'A good solution engagement has',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWork,
        proofAction: { label: 'See Current Case Studies', href: '/case-studies' },
        finalHeading: 'Not sure which solution fits?',
        finalBody: 'Describe the business impact. We will help translate it into a focused technical next step.',
        serviceType: 'Business software solutions',
    },
    softwareRescue: {
        title: 'Custom Software Development & Modernization Dallas | Empuls3',
        metaDescription:
            'Custom software development and modernization for DFW businesses: new applications, plus repair of fragile or undocumented systems, by a senior developer.',
        eyebrow: 'Software rescue and legacy modernization',
        heading: 'Stabilize critical software before risk dictates the roadmap',
        introduction:
            'When an application is fragile, undocumented, or dependent on a disappearing vendor, Empuls3 helps leadership understand the risk, restore control, and choose between repair, staged modernization, or replacement.',
        primaryAction: { label: 'Request a Software Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Discuss an Urgent System', href: 'tel:+19727988914' },
        problemHeading: 'Common reasons leaders call us',
        problemIntroduction: 'The system may still be running, but the business is paying for its uncertainty every day.',
        problems: [
            {
                title: 'Recurring failures',
                description: 'Incidents interrupt staff or customers, and each fix creates concern about what will break next.',
            },
            {
                title: 'Missing knowledge',
                description: 'Documentation is incomplete, the original developer is unavailable, or only one person knows how the system works.',
            },
            {
                title: 'Change has become dangerous',
                description:
                    'Necessary improvements are delayed because testing, deployment, dependencies, or data migrations are poorly understood.',
            },
        ],
        solutionHeading: 'A controlled rescue, not an automatic rebuild',
        solutionIntroduction: 'We separate immediate continuity needs from modernization decisions so the business can act with evidence.',
        solutions: [
            {
                title: 'Technical and operational assessment',
                description: 'Map architecture, dependencies, data, deployment, security, failure points, and the workflows the system supports.',
            },
            {
                title: 'Stabilization and knowledge recovery',
                description: 'Address urgent defects, improve visibility, document critical paths, and reduce dependence on undocumented knowledge.',
            },
            {
                title: 'Modernization roadmap',
                description: 'Compare repair, incremental replacement, and rebuild options with explicit sequencing, risk, and business constraints.',
            },
        ],
        processHeading: 'From inherited code to an owned system',
        processIntroduction: 'The first goal is dependable understanding. Delivery follows from that foundation.',
        process: seniorDelivery,
        fitHeading: 'Software rescue is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWork,
        proofAction: { label: 'View Case Studies', href: '/case-studies' },
        finalHeading: 'Do not wait for the next failure to force the decision',
        finalBody: 'Share what the system does, where it is failing, and who depends on it. We will help define the safest first step.',
        serviceType: 'Custom software development and modernization',
    },
    integration: {
        title: 'Backend, API & Integration Development Dallas | Empuls3',
        metaDescription:
            'Back-end, API, integration, and database development for Dallas–Fort Worth businesses, whether you are connecting existing systems or building a new app.',
        eyebrow: 'CRM, API, and workflow integration',
        heading: 'Make your systems exchange information without staff carrying the process',
        introduction:
            'Empuls3 designs and repairs integrations for established businesses whose teams are re-entering data, chasing status, reconciling reports, or compensating for brittle automation.',
        primaryAction: { label: 'Discuss Your Systems', href: '/contact#contact-form' },
        secondaryAction: { label: 'Request an Integration Call', href: '/contact#schedule-meeting' },
        problemHeading: 'Integration gaps hide in daily work',
        problemIntroduction: 'When systems do not agree, people become the integration layer and operational visibility suffers.',
        problems: [
            {
                title: 'Duplicate entry and reconciliation',
                description: 'The same customer, project, order, or financial information is maintained in multiple places.',
            },
            {
                title: 'Broken or partial automation',
                description: 'Jobs fail silently, edge cases require manual cleanup, or a vendor change has made an existing integration unreliable.',
            },
            {
                title: 'No trusted operational view',
                description: 'Reports arrive late or conflict because source systems, definitions, and timing are not aligned.',
            },
        ],
        solutionHeading: 'Integration that includes the business rules',
        solutionIntroduction:
            'Connecting endpoints is only part of the work. The implementation must handle ownership, validation, exceptions, security, and recovery.',
        solutions: [
            {
                title: 'System and data mapping',
                description: 'Define sources of truth, field ownership, identifiers, timing, validation, and the people responsible for exceptions.',
            },
            {
                title: 'API and workflow implementation',
                description: 'Build or repair dependable connections, transformations, business rules, and automation around your actual process.',
            },
            {
                title: 'Monitoring and recovery',
                description: 'Add logging, alerts, retries, reconciliation, and operating instructions so failures are visible and recoverable.',
            },
        ],
        processHeading: 'Connect the workflow, not just the endpoints',
        processIntroduction: 'We begin with the handoff the business needs, then design the technical movement around it.',
        process: seniorDelivery,
        fitHeading: 'Integration work is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Show us where information stops moving',
        finalBody: 'Bring the systems, the handoffs, and the manual workarounds. We will help define a reliable integration path.',
        serviceType: 'Backend, API, and integration development',
    },
    frontend: {
        title: 'Frontend Development & UX/UI Design Dallas | Empuls3',
        metaDescription:
            'Design and development of easy-to-use websites, web apps, and customer portals for Dallas–Fort Worth businesses, from early prototypes to accessible screens.',
        eyebrow: 'Business application UX and frontend engineering',
        heading: 'Remove the interface friction that slows customers and staff',
        introduction:
            'We improve operational applications, portals, and digital workflows where confusing navigation, inconsistent behavior, accessibility gaps, or fragile frontend code create measurable work.',
        primaryAction: { label: 'Request an Experience Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Discuss the Workflow', href: '/contact#schedule-meeting' },
        problemHeading: 'Interface problems have operating consequences',
        problemIntroduction: 'A polished screen is not enough. The experience must help the right user complete the right task with fewer errors.',
        problems: [
            {
                title: 'Staff work around the interface',
                description: 'Users keep side notes, spreadsheets, or unofficial steps because the application does not match the real workflow.',
            },
            {
                title: 'Customers abandon or call for help',
                description: 'Forms, portals, mobile behavior, or navigation create confusion at important points in the customer journey.',
            },
            {
                title: 'Frontend changes are fragile',
                description: 'Inconsistent components, poor test coverage, or outdated dependencies make routine improvements slow and risky.',
            },
        ],
        solutionHeading: 'Design and engineering in one operating context',
        solutionIntroduction:
            'We connect user behavior, business rules, accessibility, performance, and maintainability instead of treating them as separate projects.',
        solutions: [
            {
                title: 'Workflow and usability review',
                description: 'Observe the task, decision points, errors, device needs, and accessibility barriers before changing screens.',
            },
            {
                title: 'Interface system and implementation',
                description: 'Create clear flows and reusable components that reflect the product’s actual states and business rules.',
            },
            {
                title: 'Performance and maintainability',
                description: 'Improve load behavior, frontend structure, testability, and delivery practices for safer future changes.',
            },
        ],
        processHeading: 'Start with the task users must complete',
        processIntroduction: 'The interface follows the workflow and evidence, not design trends.',
        process: seniorDelivery,
        fitHeading: 'This work is best suited to',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Bring us the workflow users are fighting',
        finalBody:
            'We will help identify whether the problem is interaction design, frontend engineering, underlying business logic, or a combination.',
        serviceType: 'Frontend development and UX/UI design',
    },
    webModernization: {
        title: 'Website & E-commerce Development Dallas | Empuls3',
        metaDescription:
            'New websites, e-commerce builds, and modernization of hard-to-manage sites for Dallas–Fort Worth businesses. Responsive, accessible, and maintainable.',
        eyebrow: 'Website and e-commerce modernization',
        heading: 'Modernize a website that no longer serves the business',
        introduction:
            'For established service businesses, a website should explain the offer, support qualified inquiries, and remain manageable after launch. We repair or rebuild when the current platform no longer meets those needs.',
        primaryAction: { label: 'Request a Website Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'See Website Case Studies', href: '/case-studies' },
        problemHeading: 'Signs the website has become operational debt',
        problemIntroduction:
            'The issue is rarely visual alone. Content, structure, platform health, ownership, and conversion flow usually interact.',
        problems: [
            {
                title: 'The offer is hard to understand',
                description: 'Visitors cannot quickly identify who the company serves, what problem it solves, or what to do next.',
            },
            {
                title: 'Publishing and maintenance are difficult',
                description: 'Routine updates require developer intervention, plugins conflict, or the platform has become fragile.',
            },
            {
                title: 'Conversion paths are unclear',
                description: 'Calls to action, forms, scheduling, analytics, and follow-up expectations are inconsistent or incomplete.',
            },
        ],
        solutionHeading: 'A website modernization engagement',
        solutionIntroduction:
            'We align positioning, content, user flow, platform, performance, accessibility, analytics, and handoff around a defined business purpose.',
        solutions: [
            {
                title: 'Message and journey',
                description: 'Clarify the buyer, problem, offer, proof, and next step across the pages that matter most.',
            },
            {
                title: 'Design and platform',
                description: 'Implement a responsive, accessible experience on a maintainable platform appropriate to the operating team.',
            },
            {
                title: 'Measurement and ownership',
                description: 'Configure meaningful conversion tracking, document publishing, and establish responsibilities after launch.',
            },
        ],
        processHeading: 'Modernization with a defined purpose',
        processIntroduction: 'We agree on the business job of the website before choosing its structure or technology.',
        process: seniorDelivery,
        fitHeading: 'Website modernization is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWork,
        proofAction: { label: 'Review Website Work', href: '/case-studies' },
        finalHeading: 'Make the site easier to understand, operate, and trust',
        finalBody: 'Share the current site, the audience you need to reach, and the business action it should support.',
        serviceType: 'Website and e-commerce development and modernization',
    },
    mobile: {
        title: 'Mobile App Development Dallas | Empuls3',
        metaDescription:
            'iOS, Android, and cross-platform apps for Dallas–Fort Worth businesses, from field and inspection tools to customer self-service apps.',
        eyebrow: 'Mobile applications for defined business workflows',
        heading: 'Build a mobile product when the workflow truly needs one',
        introduction:
            'Empuls3 helps established organizations evaluate and deliver mobile experiences for field teams, customer self-service, inspections, approvals, data capture, and other device-dependent work.',
        primaryAction: { label: 'Discuss a Mobile Workflow', href: '/contact#contact-form' },
        secondaryAction: { label: 'Request a Product Call', href: '/contact#schedule-meeting' },
        problemHeading: 'A mobile app should solve a specific access problem',
        problemIntroduction:
            'We first determine whether native or cross-platform software is justified, or whether a responsive web experience would serve the workflow more responsibly.',
        problems: [
            {
                title: 'Field work happens away from a desk',
                description: 'Teams need reliable capture, lookup, photos, signatures, location, or offline behavior where the work occurs.',
            },
            {
                title: 'Customers need a focused self-service path',
                description: 'A recurring mobile interaction can reduce friction when it is integrated with the underlying business systems.',
            },
            {
                title: 'An existing app is difficult to maintain',
                description: 'Platform divergence, outdated dependencies, performance issues, or weak release practices are blocking improvements.',
            },
        ],
        solutionHeading: 'Mobile delivery tied to an operating model',
        solutionIntroduction: 'The app, APIs, security, support, release ownership, analytics, and store responsibilities are planned together.',
        solutions: [
            {
                title: 'Fit and workflow assessment',
                description: 'Define users, frequency, device capabilities, connectivity, security, and the systems the app must reach.',
            },
            {
                title: 'Product and integration delivery',
                description: 'Build the experience and the supporting APIs, identity, data movement, and administrative controls.',
            },
            {
                title: 'Release and support plan',
                description: 'Establish testing, store submission, monitoring, version support, feedback, and an accountable owner.',
            },
        ],
        processHeading: 'Validate the mobile need before building',
        processIntroduction: 'The goal is the simplest dependable way to support the workflow, not an app for its own sake.',
        process: seniorDelivery,
        fitHeading: 'Mobile development is a strong fit when',
        fit: establishedBusinessFit,
        notFit: shortNotFit,
        finalHeading: 'Bring the workflow, users, and system dependencies',
        finalBody: 'We will help determine the right mobile approach and the full operating responsibility behind it.',
        serviceType: 'Mobile application development',
    },
    crm: {
        title: 'HubSpot CRM Setup & Integration Dallas | Empuls3',
        metaDescription:
            'HubSpot setup, cleanup, and integration for Dallas–Fort Worth businesses dealing with missed follow-ups, duplicate contacts, or reports nobody trusts.',
        eyebrow: 'HubSpot and CRM workflow integration',
        heading: 'Make the CRM reflect how revenue work actually moves',
        introduction:
            'We help established service businesses repair CRM structure, connect surrounding systems, automate dependable handoffs, and create reporting leaders can trust.',
        primaryAction: { label: 'Discuss Your CRM', href: '/contact#contact-form' },
        secondaryAction: { label: 'Request a Systems Call', href: '/contact#schedule-meeting' },
        problemHeading: 'CRM problems usually cross teams and systems',
        problemIntroduction: 'Adding fields and automation without resolving ownership often creates more complexity, not better adoption.',
        problems: [
            {
                title: 'Data is incomplete or duplicated',
                description: 'Contacts, companies, deals, activities, and lifecycle definitions are inconsistent or difficult to trust.',
            },
            {
                title: 'Handoffs break between teams',
                description: 'Marketing, sales, service, finance, and operations depend on informal steps that are not visible in the CRM.',
            },
            {
                title: 'Reports do not answer leadership questions',
                description: 'Definitions, attribution, stage discipline, and system synchronization prevent a dependable view of performance.',
            },
        ],
        solutionHeading: 'CRM improvement from process to reporting',
        solutionIntroduction: 'Configuration, integration, governance, and adoption are treated as one operating system.',
        solutions: [
            {
                title: 'Lifecycle and data design',
                description: 'Define objects, properties, ownership, stages, sources of truth, and required decisions before automating.',
            },
            {
                title: 'Integration and automation',
                description: 'Connect the CRM to forms, scheduling, finance, delivery, support, and data tools with visible error handling.',
            },
            {
                title: 'Reporting and operating guidance',
                description: 'Create trustworthy dashboards, user instructions, administrative controls, and a plan for ongoing changes.',
            },
        ],
        processHeading: 'Fix the operating process and the CRM together',
        processIntroduction: 'A technically correct configuration still fails if teams cannot follow or govern it.',
        process: seniorDelivery,
        fitHeading: 'CRM work is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Show us where the customer journey loses continuity',
        finalBody: 'We will help map the handoffs, data, integrations, and reporting needed to restore confidence.',
        serviceType: 'HubSpot CRM setup and integration',
    },
    mvp: {
        title: 'MVP & First-Version Product Development Dallas | Empuls3',
        metaDescription:
            'Test your product idea and build a first version customers can use, with a senior developer based in Dallas–Fort Worth, from planning through launch.',
        eyebrow: 'MVP and first-version products',
        heading: 'Test your product idea and build a first version customers can use',
        introduction:
            'This service suits small businesses, startups, and established organizations with a defined user and a plan for the first version. Projects start at $2,500; the final estimate depends on scope.',
        primaryAction: { label: 'Discuss Product Fit', href: contactHref('new-project') },
        secondaryAction: { label: 'Review Engagement Questions', href: '/company/faqs' },
        problemHeading: 'The riskiest assumptions are not always technical',
        problemIntroduction: 'A first release needs a user, decision, distribution path, operating owner, and evidence plan—not just a feature list.',
        problems: [
            {
                title: 'Scope is driven by ideas instead of decisions',
                description: 'The team has many requested features but no agreement on the smallest release that tests the central value.',
            },
            {
                title: 'Operational ownership is unclear',
                description: 'Support, data, compliance, content, customer onboarding, and release responsibilities have not been assigned.',
            },
            {
                title: 'Success cannot be evaluated',
                description: 'The product lacks explicit adoption, workflow, revenue, or learning signals tied to the business case.',
            },
        ],
        solutionHeading: 'A first release built around evidence',
        solutionIntroduction: 'We define what the product must prove, then build the necessary experience and operating foundation.',
        solutions: [
            {
                title: 'Product and risk definition',
                description:
                    'Clarify users, jobs, assumptions, constraints, business rules, integrations, and the decision the first release must inform.',
            },
            {
                title: 'Full release delivery',
                description:
                    'Design and build the product, administration, identity, data, observability, security, deployment, and support foundations required for real use.',
            },
            {
                title: 'Launch and learning system',
                description:
                    'Instrument the critical journey, document ownership, support users, and translate evidence into the next product decision.',
            },
        ],
        processHeading: 'Sequence by risk and dependency',
        processIntroduction:
            'The first release is complete enough to operate responsibly, while later capability is sequenced by evidence rather than guesswork.',
        process: seniorDelivery,
        fitHeading: 'Product development is a strong fit when',
        fit: [
            'Someone can make product decisions, and there is a budget for a first version. Projects start at $2,500; the final estimate depends on scope.',
            'The target user and business problem have been researched beyond an internal idea session.',
            'The team is prepared to own launch, support, adoption, and decisions after release.',
        ],
        notFit: [
            'The request is an unfunded concept or speculative side project.',
            'The goal is the largest possible feature list for the smallest quote.',
            'No one is accountable for users, launch, or operations after delivery.',
        ],
        finalHeading: 'Start with the decision the product must enable',
        finalBody: 'We will help determine whether the problem is ready for product delivery and what a responsible first release requires.',
        serviceType: 'MVP and first-version product development',
    },
    services: {
        title: 'Website & Software Development Services in DFW | Empuls3',
        metaDescription:
            'Build a new website, web app, or business system, or improve, connect, and support the software you use now. An independent senior developer based in Dallas–Fort Worth.',
        eyebrow: 'Services',
        heading: 'Build something new or improve what you already use',
        introduction:
            'We design and build websites, web apps, and business systems—and improve the ones you already use. Work directly with a senior developer from the first plan through launch and ongoing support.',
        primaryAction: { label: 'Let’s Talk About Your Project', href: contactHref('project') },
        secondaryAction: { label: 'Compare Solutions', href: '/solutions' },
        problemHeading: 'Where most projects start',
        problemIntroduction: 'You do not need a technical brief. Tell us which of these sounds closest, and we will help shape the next step.',
        problems: [
            {
                title: 'A new website, web app, or first product version',
                description: 'You have a clear business need and want it planned, designed, built, and launched by the same senior developer.',
            },
            {
                title: 'Software you already use needs work',
                description:
                    'An existing site or application is slow, hard to change, or was left behind by another developer. We review it and recommend repair, staged improvement, or replacement.',
            },
            {
                title: 'Systems that should share information',
                description:
                    'Your CRM, website, finance, and operations tools hold the same information in different places, and staff re-enter it by hand.',
            },
        ],
        solutionHeading: 'Services and solutions: what is the difference?',
        solutionIntroduction:
            'Solutions describe what we build: websites, custom software, integrations, mobile apps, and HubSpot setups. Services describe how we work with you after or alongside a build: advice and ongoing engineering, release support, or IT help for your team.',
        solutions: [
            {
                title: 'Software engineering and IT consulting',
                description: 'Senior engineering advice, maintenance, and ongoing improvements to the software your business depends on.',
            },
            {
                title: 'Application delivery and DevOps',
                description: 'Safer, repeatable releases, with monitoring and a clear way to roll back when an update goes wrong.',
            },
            {
                title: 'Managed IT support',
                description: 'Scoped remote support for your team’s accounts, devices, access, and vendors, agreed before service begins.',
            },
        ],
        processHeading: 'How a project or support engagement starts',
        processIntroduction: 'The first steps are the same whether you are building something new or improving what you have.',
        process: servicesSteps,
        fitHeading: 'We are a good fit when',
        fit: [
            'You want to work directly with the senior developer who plans and builds the work.',
            'Someone on your side can make decisions and answer questions about how the business works.',
            'You want work your team can understand and run after launch.',
        ],
        notFit: shortNotFit,
        proofHeading: 'Published work',
        proofBody: publishedWork,
        proofAction: { label: 'View Case Studies', href: '/case-studies' },
        finalHeading: 'Tell us what you want to build or fix',
        finalBody: 'A short description is enough to start. We normally reply within one business day with a practical next step.',
        serviceType: 'Website, software, and IT services',
    },
    engineeringSupport: {
        title: 'Software Engineering & IT Consulting Dallas | Empuls3',
        metaDescription:
            'Senior engineering advice, maintenance, and ongoing improvements to the software your Dallas–Fort Worth business depends on.',
        eyebrow: 'Ongoing senior engineering support',
        heading: 'Give critical systems a dependable technical owner',
        introduction:
            'Empuls3 supports established businesses that need consistent senior engineering judgment and delivery but do not need—or cannot yet justify—a full internal software department.',
        primaryAction: { label: 'Discuss Engineering Support', href: '/contact#contact-form' },
        secondaryAction: { label: 'Request an Ownership Call', href: '/contact#schedule-meeting' },
        problemHeading: 'What an ownership gap looks like',
        problemIntroduction: 'Work keeps moving, but decisions, maintenance, and risk are spread across vendors and overloaded employees.',
        problems: [
            {
                title: 'Incidents are handled without prevention',
                description: 'Problems are fixed one at a time, but causes, monitoring, documentation, and follow-up improvements are not owned.',
            },
            {
                title: 'The roadmap is reactive',
                description: 'Requests accumulate without a clear method for weighing business impact, technical risk, and delivery dependencies.',
            },
            {
                title: 'Leadership lacks technical visibility',
                description: 'Executives receive tool-level updates instead of a clear view of system health, tradeoffs, risk, and decisions needed.',
            },
        ],
        solutionHeading: 'Senior-level ownership without unnecessary layers',
        solutionIntroduction:
            'The relationship can cover application maintenance, delivery, architecture, integrations, incidents, vendors, and planning within an agreed operating scope.',
        solutions: [
            {
                title: 'System stewardship',
                description: 'Maintain system knowledge, risk visibility, documentation, dependencies, and a prioritized technical roadmap.',
            },
            {
                title: 'Planned and responsive delivery',
                description: 'Balance improvements with incidents, defects, maintenance, security work, and release responsibilities.',
            },
            {
                title: 'Leadership communication',
                description: 'Translate technical conditions into business consequences, options, decisions, and accountable next steps.',
            },
        ],
        processHeading: 'Establish an operating rhythm',
        processIntroduction:
            'The engagement begins with system context and ownership boundaries, then moves into a predictable cycle of planning, delivery, and review.',
        process: seniorDelivery,
        fitHeading: 'Ongoing support is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Stop managing critical technology through scattered requests',
        finalBody: 'Let us review the systems, vendors, responsibilities, and backlog that need a consistent technical owner.',
        serviceType: 'Software engineering, IT consulting, and ongoing support',
    },
    devops: {
        title: 'Application Delivery & DevOps Dallas | Empuls3',
        metaDescription:
            'Safer, repeatable software releases for DFW teams: automated deployments, monitoring, and a clear way to roll back when an update goes wrong.',
        eyebrow: 'Application delivery and DevOps',
        heading: 'Make releases routine, visible, and recoverable',
        introduction:
            'We help established teams improve application delivery where manual steps, inconsistent environments, weak monitoring, or unclear rollback procedures make every release stressful.',
        primaryAction: { label: 'Request a Deployment Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Discuss Release Risk', href: '/contact#schedule-meeting' },
        problemHeading: 'Why releases feel risky',
        problemIntroduction:
            'Tools alone do not create dependable delivery. Ownership, environments, tests, secrets, visibility, and recovery must work together.',
        problems: [
            {
                title: 'Deployments depend on manual knowledge',
                description: 'Only certain people know the steps, and small differences between environments create unpredictable results.',
            },
            {
                title: 'Failures are discovered by users',
                description: 'Health checks, logs, alerts, release markers, and business-level monitoring do not reveal problems early enough.',
            },
            {
                title: 'Rollback and recovery are uncertain',
                description: 'Teams cannot confidently reverse code, configuration, infrastructure, or data changes after a failed release.',
            },
        ],
        solutionHeading: 'Delivery practices matched to the application',
        solutionIntroduction: 'We improve the highest-risk parts first instead of imposing a fashionable platform or unnecessary infrastructure.',
        solutions: [
            {
                title: 'Pipeline and environment review',
                description:
                    'Map source control, build, testing, artifacts, configuration, secrets, environments, approvals, and deployment responsibilities.',
            },
            {
                title: 'Automation and observability',
                description: 'Implement repeatable delivery, health signals, logs, alerts, release visibility, and practical operating dashboards.',
            },
            {
                title: 'Recovery and runbooks',
                description: 'Define rollback, data recovery, escalation, incident communication, and post-incident follow-through.',
            },
        ],
        processHeading: 'Reduce the riskiest release steps first',
        processIntroduction: 'The target is dependable change, not automation for its own sake.',
        process: seniorDelivery,
        fitHeading: 'DevOps work is a strong fit when',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Show us what makes releases stressful',
        finalBody: 'We will review the application, environments, delivery path, and recovery responsibilities before recommending changes.',
        serviceType: 'Application delivery and DevOps',
    },
    managedIt: {
        title: 'Managed IT Services for DFW Businesses | Empuls3',
        metaDescription:
            'Remote IT support for established DFW businesses: accounts, devices, access, and vendors, with coverage and escalation agreed before service begins.',
        eyebrow: 'Managed IT for established service businesses',
        heading: 'Reduce disruption from recurring workplace technology problems',
        introduction:
            'Empuls3 provides scoped remote IT support for business systems, users, devices, access, vendors, and recurring operational issues. We define coverage and escalation before service begins.',
        primaryAction: { label: 'Discuss Managed IT Fit', href: '/contact#contact-form' },
        secondaryAction: { label: 'Call About IT Support', href: 'tel:+19727988914' },
        problemHeading: 'Recurring IT issues consume more than support time',
        problemIntroduction: 'They interrupt customer work, delay employees, weaken security, and leave leadership unsure who is accountable.',
        problems: [
            {
                title: 'The same issues keep returning',
                description: 'Tickets are closed, but device, access, vendor, network, or configuration causes are not tracked and reduced.',
            },
            {
                title: 'Access and offboarding are inconsistent',
                description: 'Accounts, permissions, devices, and vendor systems are not managed through a dependable lifecycle.',
            },
            {
                title: 'Vendors point at one another',
                description: 'Internet, software, hardware, security, and application providers each address only their piece of an incident.',
            },
        ],
        solutionHeading: 'Scoped support with named responsibilities',
        solutionIntroduction:
            'We document the environment, coverage, service expectations, escalation paths, and exclusions so the business knows what is owned.',
        solutions: [
            {
                title: 'User and access operations',
                description: 'Support business users, onboarding, offboarding, permissions, devices, and common workplace systems within scope.',
            },
            {
                title: 'Environment and vendor coordination',
                description: 'Maintain an inventory, recurring issue history, vendor contacts, and escalation ownership across supported systems.',
            },
            {
                title: 'Risk and improvement planning',
                description:
                    'Identify patterns, security gaps, lifecycle concerns, and prioritized changes instead of treating every issue as isolated.',
            },
        ],
        processHeading: 'Define coverage before promising response',
        processIntroduction: 'Service targets are agreed after reviewing user count, systems, hours, locations, existing vendors, and criticality.',
        process: seniorDelivery,
        fitHeading: 'Managed IT is designed for',
        fit: [
            'Established service businesses with a defined workforce, supported systems, and accountable operational contact.',
            'Organizations that need remote-first support, vendor coordination, access discipline, and recurring issue ownership.',
            'Leadership willing to address root causes and lifecycle risk, not only individual tickets.',
        ],
        notFit: [
            'Residential or personal-device support.',
            'Walk-in repair, one-time password recovery, or emergency work without an established relationship.',
            'Organizations that cannot provide authorized contacts, inventory access, or clear decision ownership.',
        ],
        finalHeading: 'Define what the business needs supported',
        finalBody: 'Share the number of users, systems, current vendors, recurring issues, and coverage expectations so we can evaluate fit.',
        serviceType: 'Managed IT services',
    },
    industries: {
        title: 'Situations We Solve | Empuls3',
        metaDescription:
            'Common situations we help DFW businesses solve: a new website or app to build, software that is hard to change, disconnected systems, and nobody owning the whole system.',
        eyebrow: 'Situations we solve',
        heading: 'Common situations we help businesses solve',
        introduction:
            'Some businesses need something new built. Others need help with software they already rely on. We start with the situation, not the industry label.',
        primaryAction: { label: 'Discuss Your Situation', href: '/contact#contact-form' },
        secondaryAction: { label: 'Review Our Services', href: '/services' },
        problemHeading: 'The recurring situations we address',
        problemIntroduction: 'Industry context matters, but the engagement begins with the actual workflow, system, users, constraints, and risk.',
        problems: [
            {
                title: 'A new website, app, or system is needed',
                description:
                    'The business has a process, product, or customer need that current tools do not cover, and wants something built for it.',
            },
            {
                title: 'A service workflow depends on fragile software',
                description: 'Scheduling, intake, delivery, billing, reporting, or customer communication is constrained by an aging application.',
            },
            {
                title: 'Growth has outpaced system connections',
                description: 'New tools and teams have been added, but the handoffs and data model have not been redesigned.',
            },
            {
                title: 'Nobody owns the whole system',
                description: 'Employees and several vendors each know part of the picture, and nobody is responsible for how it all fits together.',
            },
        ],
        solutionHeading: 'Context we account for on every engagement',
        solutionIntroduction: 'We learn the business and its constraints before applying technical patterns.',
        solutions: [
            {
                title: 'What depends on the system',
                description: 'Who uses it, what happens when it fails, and what must keep working while it changes.',
            },
            {
                title: 'Data and access responsibility',
                description: 'What information is involved, who may access it, and what contractual or regulatory obligations the client identifies.',
            },
            {
                title: 'Change and adoption',
                description: 'How staff, customers, vendors, training, support, and existing commitments affect the delivery path.',
            },
        ],
        processHeading: 'Learn the environment before prescribing technology',
        processIntroduction:
            'When specialist legal, compliance, security, or sector guidance is required, we identify that dependency rather than implying expertise we do not hold.',
        process: seniorDelivery,
        fitHeading: 'The strongest client profile',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Tell us about the workflow and its consequences',
        finalBody:
            'We will tell you whether it fits our website, software, integration, or ongoing support work, and what a sensible first step looks like.',
    },
    about: {
        title: 'About Empuls3 | Independent Developer in Dallas–Fort Worth',
        metaDescription:
            'Founded in 2009 by Robert Thomas, Empuls3 designs and builds websites, web apps, and business systems, and improves the ones you already use. Work directly with Robert.',
        eyebrow: 'About Empuls3',
        heading: 'Direct access to a senior developer since 2009',
        introduction:
            'Empuls3 is a remote-first Dallas–Fort Worth software and technology firm founded in 2009 and run by independent developer Robert Thomas. We design and build websites, web apps, and business systems, and improve the ones you already use. You work directly with Robert from the first plan through launch and ongoing support.',
        primaryAction: { label: 'Discuss Your Situation', href: '/contact#contact-form' },
        secondaryAction: { label: 'Review Our Services', href: '/services' },
        problemHeading: 'Why the firm exists',
        problemIntroduction:
            'Many organizations have access to vendors but still lack a senior technical owner who understands the operating context and stays accountable to the decision.',
        problems: [
            {
                title: 'Too much distance from senior judgment',
                description: 'The people making architecture and risk decisions are often separated from the client and the daily business problem.',
            },
            {
                title: 'Projects end without durable ownership',
                description:
                    'Code may be delivered while documentation, operating knowledge, monitoring, and next-step responsibility remain unclear.',
            },
            {
                title: 'Technology language obscures decisions',
                description: 'Leadership needs consequences, options, and tradeoffs—not a stream of disconnected technical activity.',
            },
        ],
        solutionHeading: 'How we work',
        solutionIntroduction:
            'Our model is intentionally direct: understand the business condition, keep the senior developer involved, and make the state of the work visible.',
        solutions: [
            {
                title: 'Direct access',
                description: 'Clients communicate directly with Robert, who is responsible for analysis, delivery, and technical recommendations.',
            },
            {
                title: 'Evidence-led recommendations',
                description:
                    'We investigate the current system and constraints before recommending repair, integration, replacement, or ongoing support.',
            },
            {
                title: 'Documented handoff',
                description: 'Decisions, known limitations, operating instructions, and next priorities remain understandable after delivery.',
            },
        ],
        processHeading: 'A practical senior-led engagement',
        processIntroduction:
            'The approach is designed to reduce uncertainty and create ownership, whether the work is a focused project or an ongoing relationship.',
        process: seniorDelivery,
        fitHeading: 'The relationships we do best',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWork,
        proofAction: { label: 'See Published Work', href: '/case-studies' },
        finalHeading: 'Work directly with the developer responsible for the outcome',
        finalBody: 'Share the system, workflow, or ownership gap leadership needs to resolve.',
    },
    partners: {
        title: 'Collaboration Model: Working With Agencies & Teams | Empuls3',
        metaDescription:
            'How Empuls3 works with marketing and web agencies, in-house IT and product teams, and existing vendors, including subcontract and white-label development.',
        eyebrow: 'Collaboration model',
        heading: 'Development support for agencies and in-house teams',
        introduction:
            'We work alongside marketing and web agencies, internal IT and product teams, and the vendors already involved in a project. Agencies can bring us in as a subcontractor or white-label developer while they keep the client relationship.',
        primaryAction: { label: 'Discuss a Collaboration', href: '/contact#contact-form' },
        secondaryAction: { label: 'See How We Work', href: '/company/about' },
        problemHeading: 'Where shared projects get stuck',
        problemIntroduction:
            'Successful collaboration requires explicit authority, interfaces, decisions, access, and escalation—not logo lists or vague partnership language.',
        problems: [
            {
                title: 'Responsibility falls between vendors',
                description: 'Each provider owns a component, but nobody owns the full workflow or business consequence.',
            },
            {
                title: 'Access and approvals are unclear',
                description: 'Delivery stalls because environments, data, approvals, credentials, or authoritative contacts were never defined.',
            },
            {
                title: 'Specialist dependencies appear late',
                description: 'Legal, compliance, security, infrastructure, or platform expertise is discovered after scope and dates were assumed.',
            },
        ],
        solutionHeading: 'The relationship types we support',
        solutionIntroduction: 'Each engagement documents who is responsible, consulted, approving, and operating the result.',
        solutions: [
            {
                title: 'Client and internal teams',
                description: 'We work directly with business owners, operational leaders, IT staff, product teams, and subject-matter experts.',
            },
            {
                title: 'Incumbent vendors and agencies',
                description:
                    'We can assess, integrate with, or transition work from existing providers while keeping communication factual and professional.',
            },
            {
                title: 'Specialist and platform providers',
                description:
                    'When work requires additional expertise or vendor support, we define that dependency and the client’s approval before proceeding.',
            },
        ],
        processHeading: 'Make collaboration operational',
        processIntroduction: 'A shared plan, named owners, decision log, access model, and escalation path keep multi-party delivery accountable.',
        process: seniorDelivery,
        fitHeading: 'A collaboration is productive when',
        fit: establishedBusinessFit,
        notFit: [
            'The relationship requires us to imply endorsements, certifications, or formal partnerships that do not exist.',
            'The accountable client sponsor is unavailable to resolve cross-provider decisions.',
            'Access, authority, or commercial responsibilities cannot be documented.',
        ],
        finalHeading: 'Tell us who is involved',
        finalBody: 'Tell us which teams and providers are involved and where ownership is breaking down.',
    },
    dallasSoftware: {
        title: 'Software Development in Dallas–Fort Worth | Empuls3',
        metaDescription:
            'Custom software development for Dallas–Fort Worth businesses: new web apps and business systems, plus improvements to the software you already use.',
        eyebrow: 'Dallas–Fort Worth software development',
        heading: 'Custom software for Dallas–Fort Worth businesses',
        introduction:
            'We build new web applications and business systems, and improve the software you already rely on. You work directly with a senior developer from the first plan through launch and support.',
        primaryAction: { label: 'Let’s Talk About Your Project', href: contactHref('project') },
        secondaryAction: { label: 'Call (972) 798-8914', href: 'tel:+19727988914' },
        problemHeading: 'What DFW businesses bring to us',
        problemIntroduction:
            'We are based in Dallas–Fort Worth and work with businesses across Dallas, Fort Worth, Plano, Richardson, Irving, Arlington, and the rest of the Metroplex. Work happens remotely, through scheduled video sessions, secure system access, and written updates.',
        problems: [
            {
                title: 'A process that has outgrown spreadsheets',
                description:
                    'Scheduling, intake, quoting, billing, or reporting runs on spreadsheets and email, and the business needs software built around how it works.',
            },
            {
                title: 'Software that is hard to change',
                description: 'An existing application breaks often, depends on outdated components, or only one person understands how it works.',
            },
            {
                title: 'A developer or vendor who has moved on',
                description: 'You need someone to recover access, document the system, and take over maintenance or plan what comes next.',
            },
        ],
        solutionHeading: 'New builds and existing software',
        solutionIntroduction: 'Some projects start from a blank page. Others start with an application you already use. We handle both.',
        solutions: [
            {
                title: 'Build new software',
                description:
                    'Plan, design, and build web applications, customer portals, and internal tools around your workflow and the systems they connect to.',
            },
            {
                title: 'Improve existing software',
                description:
                    'Review the code, hosting, and data, fix urgent problems, and improve the application in stages rather than starting over by default.',
            },
            {
                title: 'Support after launch',
                description: 'Keep the software maintained, updated, and documented by the senior developer who already knows it.',
            },
        ],
        processHeading: 'How a software project runs',
        processIntroduction:
            'The details depend on whether you are starting new or improving an existing system. Both begin with understanding the work the software supports.',
        process: softwareSteps,
        fitHeading: 'A good fit for DFW businesses that',
        fit: [
            'Have a workflow, product, or system the business depends on.',
            'Want direct access to the senior developer doing the work.',
            'Can name someone to make decisions and answer questions during the project.',
        ],
        notFit: shortNotFit,
        proofHeading: 'Published work',
        proofBody: publishedWork,
        proofAction: { label: 'View Case Studies', href: '/case-studies' },
        finalHeading: 'Tell us what the software needs to do',
        finalBody:
            'Whether it is a new build or a system you already use, a few sentences are enough to start. We normally reply within one business day.',
        locationLabel: dfwLocation,
        serviceType: 'Custom software development',
    },
    dallasWeb: {
        title: 'Website Development in Dallas–Fort Worth | Empuls3',
        metaDescription:
            'New websites and website redesigns for Dallas–Fort Worth businesses: clear pages, working contact forms, and a site your team can update after launch.',
        eyebrow: 'Dallas–Fort Worth website development',
        heading: 'New websites and redesigns for Dallas–Fort Worth businesses',
        introduction:
            'We plan, design, and build new websites, and redesign sites that no longer fit the business. You get clear pages, working contact paths, and a site your team can update after launch.',
        primaryAction: { label: 'Let’s Talk About Your Project', href: contactHref('project') },
        secondaryAction: { label: 'See Website Work', href: '/case-studies' },
        problemHeading: 'Why DFW businesses contact us about their website',
        problemIntroduction:
            'We are based in Dallas–Fort Worth and build websites for businesses across the Metroplex. Most projects start in one of these places.',
        problems: [
            {
                title: 'You need a new website',
                description: 'The business has launched, grown, or changed direction, and needs a site that describes what it does now.',
            },
            {
                title: 'Visitors cannot tell what you offer',
                description: 'The site lists services but does not make clear who you serve, what you do, or how to get in touch.',
            },
            {
                title: 'The site is hard to update',
                description: 'Routine changes need a developer, plugins conflict, or the platform has become slow and fragile.',
            },
        ],
        solutionHeading: 'What a website project includes',
        solutionIntroduction: 'We cover the content, design, build, and handover so the site works on launch day and after.',
        solutions: [
            {
                title: 'Pages and content',
                description: 'Clarify who you serve, what you offer, and what visitors should do next, then organize the pages around that.',
            },
            {
                title: 'Design and build',
                description: 'A responsive, accessible site on a platform your team can manage, such as WordPress.',
            },
            {
                title: 'Forms, tracking, and handover',
                description: 'Working contact forms, analytics for the actions that matter, and documentation for publishing updates.',
            },
        ],
        processHeading: 'How a website project runs',
        processIntroduction:
            'The same steps apply to a new site and a redesign. For a redesign, we also review what the current site does well so it is not lost.',
        process: websiteSteps,
        fitHeading: 'A good fit for DFW businesses that',
        fit: [
            'Need a new website or a redesign that reflects how the business works today.',
            'Can tell us who their customers are and what a good inquiry looks like.',
            'Want a site their own team can update after launch.',
        ],
        notFit: shortNotFit,
        proofHeading: 'Published website work',
        proofBody: publishedWork,
        proofAction: { label: 'View Website Case Studies', href: '/case-studies' },
        finalHeading: 'Tell us about the website you need',
        finalBody:
            'Share your current site if you have one, who you want to reach, and what visitors should do. We normally reply within one business day.',
        locationLabel: dfwLocation,
        serviceType: 'Website development',
    },
    dallasConsulting: {
        title: 'IT Consulting in Dallas–Fort Worth | Empuls3',
        metaDescription:
            'Senior technical advice for Dallas–Fort Worth businesses facing a software, vendor, or systems decision. Get a written assessment and a recommended next step.',
        eyebrow: 'Dallas–Fort Worth IT consulting',
        heading: 'Senior technical advice before you commit to a big decision',
        introduction:
            'We help DFW owners, operations leaders, and IT managers compare vendor proposals, choose between repairing and replacing a system, and plan the technical work that follows.',
        primaryAction: { label: 'Request a Consultation', href: contactHref('consultation') },
        secondaryAction: { label: 'Read Engagement FAQs', href: '/company/faqs' },
        problemHeading: 'Decisions we help with',
        problemIntroduction:
            'We are based in Dallas–Fort Worth and advise businesses across the Metroplex. Work happens remotely, through scheduled video sessions and written updates.',
        problems: [
            {
                title: 'Comparing vendor proposals',
                description: 'Two quotes describe different scope, assumptions, and timelines, and you need to know what each one really includes.',
            },
            {
                title: 'Repair, replace, or rebuild',
                description: 'An important system is aging, and you need to understand the options, risks, and costs before choosing.',
            },
            {
                title: 'A project that has lost direction',
                description: 'Work is moving, but nobody is checking the technical plan, security, testing, or what “done” means.',
            },
        ],
        solutionHeading: 'What you receive from an assessment',
        solutionIntroduction:
            'We agree the question and scope first. The result is a written assessment you can act on and share with your team and vendors.',
        solutions: [
            {
                title: 'Findings',
                description: 'What we reviewed, how the system or proposal works today, and the risks and constraints that affect the decision.',
            },
            {
                title: 'Options compared',
                description: 'Each realistic option with its tradeoffs, dependencies, main cost drivers, and what it means for your team.',
            },
            {
                title: 'Recommendation and next steps',
                description: 'The option we recommend, what to do first, and what needs to be in place before the next stage.',
            },
        ],
        processHeading: 'From question to decision',
        processIntroduction: 'An assessment is scoped to the decision in front of you, not a general audit.',
        process: consultingSteps,
        fitHeading: 'A good fit for DFW leaders who',
        fit: [
            'Face a software, vendor, or systems decision with real cost or risk attached.',
            'Want a senior developer’s view before signing a proposal or starting a rebuild.',
            'Can give us access to the people, documents, and systems involved.',
        ],
        finalHeading: 'Bring the decision you need to make',
        finalBody: 'Describe the question, the systems involved, and your timing. We normally reply within one business day.',
        locationLabel: dfwLocation,
        serviceType: 'IT consulting and technical assessment',
    },
    dallasManagedIt: {
        title: 'Managed IT Services in Dallas–Fort Worth | Empuls3',
        metaDescription:
            'Scoped remote IT support for Dallas–Fort Worth businesses: users, devices, access, and vendor coordination, with coverage agreed before service begins.',
        eyebrow: 'Dallas–Fort Worth managed IT',
        heading: 'Remote IT support for Dallas–Fort Worth businesses',
        introduction:
            'We look after your team’s accounts, devices, access, and technology vendors, and work to stop the same problems from coming back. Coverage is documented and agreed before service begins.',
        primaryAction: { label: 'Discuss Managed IT Support', href: '/contact#contact-form' },
        secondaryAction: { label: 'Call About IT Support', href: 'tel:+19727988914' },
        problemHeading: 'Signs your business needs managed IT',
        problemIntroduction:
            'We are based in Dallas–Fort Worth and support businesses across the Metroplex remotely. We do not offer walk-in repair.',
        problems: [
            {
                title: 'The same issues keep coming back',
                description: 'Access, device, software, and network problems interrupt work, and nobody tracks the cause.',
            },
            {
                title: 'New hires and departures vary every time',
                description: 'Accounts, permissions, devices, and vendor access are set up and removed without a checklist or an owner.',
            },
            {
                title: 'Staff are stuck coordinating vendors',
                description: 'Someone in the office spends time passing problems between internet, software, hardware, and security providers.',
            },
        ],
        solutionHeading: 'What managed IT covers',
        solutionIntroduction: 'Exact coverage is agreed before service begins. It usually includes these three areas.',
        solutions: [
            {
                title: 'User and access support',
                description: 'Help for agreed users with accounts, permissions, devices, workplace tools, onboarding, and offboarding.',
            },
            {
                title: 'Vendor coordination',
                description: 'We handle triage and communication with supported providers so your staff are not the go-between.',
            },
            {
                title: 'Fewer repeat problems',
                description: 'We track recurring issues, keep an inventory, flag security and lifecycle concerns, and recommend fixes.',
            },
        ],
        processHeading: 'How getting started works',
        processIntroduction: 'Service targets are set after we understand your users, systems, hours, locations, and current vendors.',
        process: managedItSteps,
        fitHeading: 'A good fit for DFW businesses that',
        fit: [
            'Have an established team, named contacts, and business systems that need support.',
            'Are comfortable with remote support and can provide authorized access to the systems in scope.',
            'Want repeat problems fixed at the source, not only tickets closed.',
        ],
        notFit: [
            'Residential technology support.',
            'Walk-in repair or consumer device troubleshooting.',
            'Emergency-only support without an established service relationship.',
        ],
        finalHeading: 'Tell us what your team needs supported',
        finalBody: 'Share users, systems, vendors, recurring issues, and business hours. We normally reply within one business day.',
        locationLabel: dfwLocation,
        serviceType: 'Managed IT services',
    },
    dallasMobile: {
        title: 'Mobile App Development in Dallas–Fort Worth | Empuls3',
        metaDescription:
            'iOS, Android, and cross-platform apps for Dallas–Fort Worth businesses: field work, customer self-service, and tasks that happen away from a desk.',
        eyebrow: 'Dallas–Fort Worth mobile app development',
        heading: 'Mobile apps for your customers and field teams',
        introduction:
            'We plan, design, and build mobile apps for DFW businesses whose customers or staff need to get work done from a phone or tablet, and we improve existing apps that have become hard to maintain.',
        primaryAction: { label: 'Tell Us About Your App', href: contactHref('project') },
        secondaryAction: { label: 'See Mobile App Development', href: '/solutions/mobile-cross-platform-development' },
        problemHeading: 'Where a mobile app helps most',
        problemIntroduction:
            'We are based in Dallas–Fort Worth and build apps for businesses across the Metroplex. These are the most common reasons to build one.',
        problems: [
            {
                title: 'Work happens in the field',
                description:
                    'Teams need photos, signatures, inspections, location, or scanning where the work happens, and offline access where the project calls for it.',
            },
            {
                title: 'Customers repeat the same task',
                description: 'Customers check status, book, approve, or manage an account often enough that a focused app is worth building.',
            },
            {
                title: 'An existing app is hard to maintain',
                description: 'Outdated dependencies, separate iOS and Android codebases, or unreliable releases are slowing improvements.',
            },
        ],
        solutionHeading: 'What we build',
        solutionIntroduction: 'The app, the systems behind it, and the release plan are planned together.',
        solutions: [
            {
                title: 'Platform choice',
                description:
                    'We recommend native, cross-platform such as React Native, or a mobile web app based on your users, device features, and budget.',
            },
            {
                title: 'App and back end',
                description: 'We build the app along with the APIs, sign-in, data, and admin tools it needs to work with your existing systems.',
            },
            {
                title: 'Release and updates',
                description: 'We handle testing, App Store and Google Play submission, monitoring, and ongoing updates.',
            },
        ],
        processHeading: 'How a mobile project runs',
        processIntroduction: 'Mobile projects add devices, app stores, and release reviews to the usual build steps.',
        process: mobileSteps,
        fitHeading: 'A good fit for DFW businesses that',
        fit: [
            'Have staff or customers who need to do a specific task from a phone or tablet.',
            'Need the app to work with systems they already use, such as a CRM, scheduling, or billing tool.',
            'Want one developer to handle design, development, store release, and updates.',
        ],
        finalHeading: 'Tell us about your app',
        finalBody: 'Describe who will use it, what they need to do, and the systems it should connect to. We normally reply within one business day.',
        locationLabel: dfwLocation,
        serviceType: 'Mobile application development',
    },
} satisfies Record<string, LeadPageConfig>;
