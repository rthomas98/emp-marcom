import type { LeadPageConfig } from '@/components/marketing/LeadPage';

const seniorDelivery = [
    {
        title: 'Understand the operating problem',
        description: 'We review the affected workflow, software, data, people, and business consequences before recommending a technical response.',
    },
    {
        title: 'Define the safest next move',
        description: 'You receive a practical scope that separates urgent stabilization from improvements that can be sequenced later.',
    },
    {
        title: 'Deliver with visible ownership',
        description:
            'Senior specialists remain directly involved, communicate tradeoffs, and leave your team with clear documentation and next steps.',
    },
];

const establishedBusinessFit = [
    'An established organization depends on the affected system or workflow to serve customers, manage operations, or protect revenue.',
    'A business or technical leader can explain the operational impact and participate in decisions.',
    'The team values a controlled diagnosis and durable implementation over the cheapest short-term patch.',
];

const standardNotFit = [
    'You need staff augmentation with no defined owner, outcome, or decision-maker.',
    'The only selection criterion is the lowest hourly rate.',
    'The request is a speculative idea without an accountable sponsor or realistic implementation budget.',
];

const publishedWorkNote =
    'Our currently published case studies document website modernization engagements. We do not publish savings, traffic, lead, or performance claims unless the supporting measurement has been verified and approved.';

export const leadPages = {
    home: {
        title: 'Software Rescue & Integration for DFW Businesses | Empuls3',
        metaDescription:
            'Senior software rescue, systems integration, and ongoing engineering support for established Dallas–Fort Worth service businesses.',
        eyebrow: 'Senior engineering for established DFW businesses',
        heading: 'Fix the software and systems slowing your business down',
        introduction:
            'Empuls3 helps Dallas–Fort Worth owners, COOs, and IT leaders stabilize aging software, connect disconnected systems, automate manual work, and establish dependable technical ownership.',
        primaryAction: { label: 'Request a Software Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Discuss Your Systems', href: '/contact#schedule-meeting' },
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
        solutionHeading: 'Three ways we take ownership',
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
                description: 'Add accountable senior-level technical ownership for applications, releases, infrastructure, and improvement planning.',
            },
        ],
        processHeading: 'A clear path from uncertainty to control',
        processIntroduction:
            'We do not begin by prescribing a rebuild. We begin by learning what the business needs to protect and what the current system can support.',
        process: seniorDelivery,
        fitHeading: 'Best suited to established service businesses',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofHeading: 'Proof without inflated promises',
        proofBody: publishedWorkNote,
        proofAction: { label: 'Review Published Work', href: '/case-studies' },
        finalHeading: 'Start with the problem, not a technology shopping list',
        finalBody:
            'Tell us what is breaking, disconnected, delayed, or consuming too much staff time. We will respond within one business day with a practical next step.',
        serviceType: 'Software rescue, systems integration, and engineering support',
    },
    solutions: {
        title: 'Software Solutions for DFW Businesses | Empuls3',
        metaDescription:
            'Choose the right path for software rescue, systems integration, or ongoing senior engineering support in Dallas–Fort Worth.',
        eyebrow: 'Solutions organized by business problem',
        heading: 'Choose a path based on what is hurting the business',
        introduction:
            'You do not need to diagnose the technology before contacting us. Start with the operational symptom and we will help determine whether the next move is stabilization, integration, modernization, or ongoing ownership.',
        primaryAction: { label: 'Request a Software Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Talk Through the Problem', href: '/contact#schedule-meeting' },
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
        processIntroduction: 'The technology changes. The discipline does not.',
        process: seniorDelivery,
        fitHeading: 'A good solution engagement has',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWorkNote,
        proofAction: { label: 'See Current Case Studies', href: '/case-studies' },
        finalHeading: 'Not sure which solution fits?',
        finalBody: 'Describe the business impact. We will help translate it into a focused technical next step.',
        serviceType: 'Business software solutions',
    },
    softwareRescue: {
        title: 'Software Rescue & Legacy Modernization Dallas | Empuls3',
        metaDescription:
            'Stabilize aging or unreliable software, recover technical knowledge, and create a controlled modernization path with senior engineers.',
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
        proofBody: publishedWorkNote,
        proofAction: { label: 'Review Our Evidence Policy', href: '/case-studies' },
        finalHeading: 'Do not wait for the next failure to force the decision',
        finalBody: 'Share what the system does, where it is failing, and who depends on it. We will help define the safest first step.',
        serviceType: 'Software rescue and legacy modernization',
    },
    integration: {
        title: 'CRM, API & Workflow Integration Dallas | Empuls3',
        metaDescription: 'Connect CRM, finance, operations, reporting, and customer systems to reduce duplicate work and unreliable data movement.',
        eyebrow: 'CRM, API, and workflow integration',
        heading: 'Make your systems exchange information without staff carrying the process',
        introduction:
            'Empuls3 designs and repairs integrations for established businesses whose teams are re-entering data, chasing status, reconciling reports, or compensating for brittle automation.',
        primaryAction: { label: 'Discuss Your Systems', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book an Integration Call', href: '/contact#schedule-meeting' },
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
        serviceType: 'CRM, API, and workflow integration',
    },
    frontend: {
        title: 'Business Application UX & Frontend Development Dallas | Empuls3',
        metaDescription:
            'Improve confusing internal workflows, customer portals, accessibility, and maintainability with senior frontend and UX engineering.',
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
        serviceType: 'Business application UX and frontend development',
    },
    webModernization: {
        title: 'Website & E-commerce Modernization Dallas | Empuls3',
        metaDescription:
            'Modernize a business website or e-commerce experience that is difficult to manage, unclear to customers, or no longer supports growth.',
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
        proofBody: publishedWorkNote,
        proofAction: { label: 'Review Website Work', href: '/case-studies' },
        finalHeading: 'Make the site easier to understand, operate, and trust',
        finalBody: 'Share the current site, the audience you need to reach, and the business action it should support.',
        serviceType: 'Website and e-commerce modernization',
    },
    mobile: {
        title: 'Business Mobile App Development Dallas | Empuls3',
        metaDescription: 'Plan and build mobile applications for established businesses with a defined field, customer, or operational workflow.',
        eyebrow: 'Mobile applications for defined business workflows',
        heading: 'Build a mobile product when the workflow truly needs one',
        introduction:
            'Empuls3 helps established organizations evaluate and deliver mobile experiences for field teams, customer self-service, inspections, approvals, data capture, and other device-dependent work.',
        primaryAction: { label: 'Discuss a Mobile Workflow', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book a Product Call', href: '/contact#schedule-meeting' },
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
        notFit: ['You want an app primarily because competitors have one.', ...standardNotFit.slice(1)],
        finalHeading: 'Bring the workflow, users, and system dependencies',
        finalBody: 'We will help determine the right mobile approach and the full operating responsibility behind it.',
        serviceType: 'Business mobile application development',
    },
    crm: {
        title: 'HubSpot & CRM Workflow Integration Dallas | Empuls3',
        metaDescription: 'Improve CRM data quality, lifecycle handoffs, reporting, adoption, and integrations for established service businesses.',
        eyebrow: 'HubSpot and CRM workflow integration',
        heading: 'Make the CRM reflect how revenue work actually moves',
        introduction:
            'We help established service businesses repair CRM structure, connect surrounding systems, automate dependable handoffs, and create reporting leaders can trust.',
        primaryAction: { label: 'Discuss Your CRM', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book a Systems Call', href: '/contact#schedule-meeting' },
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
        serviceType: 'HubSpot and CRM workflow integration',
    },
    mvp: {
        title: 'Product Validation & MVP Development Dallas | Empuls3',
        metaDescription:
            'Product discovery and MVP development for funded teams with an accountable sponsor, validated problem, and realistic delivery budget.',
        eyebrow: 'Secondary offer: product validation and MVP delivery',
        heading: 'Turn a validated product problem into a responsible first release',
        introduction:
            'This service is for funded teams and established organizations that have a defined user, accountable sponsor, operational plan, and minimum project budget of $25,000.',
        primaryAction: { label: 'Discuss Product Fit', href: '/contact#contact-form' },
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
            'There is an accountable sponsor, funded delivery plan, and a minimum implementation budget of $25,000.',
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
        serviceType: 'Product validation and MVP development',
    },
    services: {
        title: 'Senior Engineering Services Dallas–Fort Worth | Empuls3',
        metaDescription:
            'Choose a focused rescue project, systems integration project, or ongoing senior engineering engagement for your DFW business.',
        eyebrow: 'Engagement models',
        heading: 'Get the level of technical ownership the situation requires',
        introduction:
            'Empuls3 works through focused rescue and integration projects or an ongoing senior engineering relationship. The right structure depends on urgency, uncertainty, and who will own the system afterward.',
        primaryAction: { label: 'Discuss an Engagement', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book a Consultation', href: '/contact#schedule-meeting' },
        problemHeading: 'Choose by ownership need, not a menu of technologies',
        problemIntroduction: 'The engagement should match the operating responsibility the business needs to establish.',
        problems: [
            {
                title: 'Focused rescue project',
                description: 'Use a bounded project to assess, stabilize, document, and create a modernization decision for a critical system.',
            },
            {
                title: 'Integration project',
                description: 'Use a defined project to connect systems, automate a workflow, establish monitoring, and hand over operating guidance.',
            },
            {
                title: 'Ongoing engineering relationship',
                description:
                    'Use retained senior support for continuous ownership across incidents, maintenance, releases, and prioritized improvements.',
            },
        ],
        solutionHeading: 'What every engagement includes',
        solutionIntroduction: 'Direct senior involvement, explicit scope, visible decisions, documentation, and a practical operating handoff.',
        solutions: [
            { title: 'Business context', description: 'The work is tied to the process, users, revenue, service, or risk it affects.' },
            {
                title: 'Technical discipline',
                description:
                    'Architecture, security, data, testing, deployment, observability, and recovery are addressed in proportion to the system.',
            },
            {
                title: 'Operational continuity',
                description: 'Responsibilities, documentation, known limitations, and next priorities remain visible after delivery.',
            },
        ],
        processHeading: 'Clear decisions at every stage',
        processIntroduction: 'You know what we learned, what we recommend, what is changing, and what remains.',
        process: seniorDelivery,
        fitHeading: 'Our services are designed for',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Describe the ownership gap',
        finalBody: 'We will recommend an engagement structure only after understanding what the business needs protected, changed, and owned.',
        serviceType: 'Senior engineering services',
    },
    engineeringSupport: {
        title: 'Ongoing Senior Engineering Support Dallas | Empuls3',
        metaDescription:
            'Add dependable senior engineering ownership for critical applications, releases, incidents, infrastructure, and technical planning.',
        eyebrow: 'Ongoing senior engineering support',
        heading: 'Give critical systems a dependable technical owner',
        introduction:
            'Empuls3 supports established businesses that need consistent senior engineering judgment and delivery but do not need—or cannot yet justify—a full internal software department.',
        primaryAction: { label: 'Discuss Engineering Support', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book an Ownership Call', href: '/contact#schedule-meeting' },
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
        serviceType: 'Ongoing senior engineering support',
    },
    devops: {
        title: 'Application Delivery & DevOps Dallas | Empuls3',
        metaDescription:
            'Reduce failed releases, manual deployment risk, and incident recovery time with practical CI/CD, observability, and operational ownership.',
        eyebrow: 'Application delivery and DevOps',
        heading: 'Make releases routine, visible, and recoverable',
        introduction:
            'We help established teams improve application delivery where manual steps, inconsistent environments, weak monitoring, or unclear rollback procedures make every release stressful.',
        primaryAction: { label: 'Request a Deployment Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Discuss Release Risk', href: '/contact#schedule-meeting' },
        problemHeading: 'Release risk is an operating condition',
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
            'Operational IT support for established DFW service businesses that need clear scope, escalation, security, and recurring issue ownership.',
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
        title: 'Business Situations We Solve | Empuls3',
        metaDescription:
            'Empuls3 supports established service businesses facing aging software, disconnected systems, manual workflows, and technical ownership gaps.',
        eyebrow: 'Business situations, not unsupported industry claims',
        heading: 'We specialize in operating problems that cross people, process, and software',
        introduction:
            'Empuls3 is most useful where technology directly affects service delivery, customer handoffs, staff productivity, reporting, or business continuity. We do not claim sector expertise without relevant evidence.',
        primaryAction: { label: 'Discuss Your Situation', href: '/contact#contact-form' },
        secondaryAction: { label: 'Review Our Services', href: '/services' },
        problemHeading: 'The recurring situations we address',
        problemIntroduction: 'Industry context matters, but the engagement begins with the actual workflow, system, users, constraints, and risk.',
        problems: [
            {
                title: 'A service workflow depends on fragile software',
                description: 'Scheduling, intake, delivery, billing, reporting, or customer communication is constrained by an aging application.',
            },
            {
                title: 'Growth has outpaced system connections',
                description: 'New tools and teams have been added, but the handoffs and data model have not been redesigned.',
            },
            {
                title: 'Technical responsibility is fragmented',
                description: 'Internal employees and several vendors each hold part of the picture, leaving no accountable system owner.',
            },
        ],
        solutionHeading: 'Context we account for on every engagement',
        solutionIntroduction: 'We learn the business and its constraints before applying technical patterns.',
        solutions: [
            {
                title: 'Operational criticality',
                description: 'Who depends on the system, what happens when it fails, and which continuity needs must be protected.',
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
        finalBody: 'We will help determine whether the problem matches our software rescue, integration, or engineering ownership capabilities.',
    },
    about: {
        title: 'About Empuls3 | Senior Engineering for DFW Businesses',
        metaDescription: 'Learn how Empuls3 provides direct senior engineering support for established Dallas–Fort Worth businesses.',
        eyebrow: 'About Empuls3',
        heading: 'Senior technical ownership without unnecessary layers',
        introduction:
            'Empuls3 is a remote-first Dallas–Fort Worth software and technology firm founded in 2009. We help established service businesses regain control of critical software, system connections, and ongoing technical decisions.',
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
            'Our model is intentionally direct: understand the business condition, keep senior specialists involved, and make the state of the work visible.',
        solutions: [
            {
                title: 'Direct access',
                description: 'Clients communicate with the people responsible for analysis, delivery, and technical recommendations.',
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
        proofBody: publishedWorkNote,
        proofAction: { label: 'See Published Work', href: '/case-studies' },
        finalHeading: 'Work directly with the people responsible for the outcome',
        finalBody: 'Share the system, workflow, or ownership gap leadership needs to resolve.',
    },
    partners: {
        title: 'Technology Collaboration & Partners | Empuls3',
        metaDescription: 'How Empuls3 works with client teams, incumbent vendors, specialist advisors, and technology providers during delivery.',
        eyebrow: 'Collaboration model',
        heading: 'Clear roles across client teams, vendors, and specialists',
        introduction:
            'Empuls3 collaborates with the people and providers already responsible for a client environment. We distinguish client engagements, delivery collaborators, and technology providers rather than presenting every relationship as a formal partnership.',
        primaryAction: { label: 'Discuss a Collaboration', href: '/contact#contact-form' },
        secondaryAction: { label: 'See How We Work', href: '/company/about' },
        problemHeading: 'Multi-provider work fails when ownership is implied',
        problemIntroduction:
            'Successful collaboration requires explicit authority, interfaces, decisions, access, and escalation—not logo lists or vague partnership language.',
        problems: [
            {
                title: 'Responsibility falls between vendors',
                description: 'Each provider owns a component, but nobody owns the full workflow or business consequence.',
            },
            {
                title: 'Access and decision rights are unclear',
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
        finalHeading: 'Bring the full delivery environment into view',
        finalBody: 'Tell us which teams and providers are involved and where ownership is breaking down.',
    },
    dallasSoftware: {
        title: 'Dallas Software Rescue & Modernization | Empuls3',
        metaDescription: 'Senior software rescue and legacy modernization for established Dallas–Fort Worth service businesses.',
        eyebrow: 'Dallas software rescue',
        heading: 'Restore control of critical business software in Dallas–Fort Worth',
        introduction:
            'Remote-first senior engineers help DFW leadership assess fragile applications, stabilize immediate risk, and define a controlled modernization path.',
        primaryAction: { label: 'Request a Software Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'Call the Dallas Team', href: 'tel:+19727988914' },
        problemHeading: 'When local business continuity depends on old software',
        problemIntroduction:
            'We support organizations across Dallas, Fort Worth, Plano, Richardson, Irving, Arlington, and the wider Metroplex without implying a walk-in office.',
        problems: [
            {
                title: 'A core application has become fragile',
                description:
                    'Failures, outdated dependencies, or missing knowledge put scheduling, service, billing, reporting, or customer work at risk.',
            },
            {
                title: 'A vendor relationship is ending',
                description: 'The business needs to recover access, documentation, deployment knowledge, and a realistic transition plan.',
            },
            {
                title: 'Modernization feels too risky',
                description: 'Leadership needs repair, staged replacement, and rebuild options grounded in the current system.',
            },
        ],
        solutionHeading: 'Senior software rescue for DFW operators',
        solutionIntroduction: 'We combine technical assessment with the operating context the system must protect.',
        solutions: [
            { title: 'Assess', description: 'Map architecture, dependencies, data, failures, deployment, access, and business-critical workflows.' },
            { title: 'Stabilize', description: 'Address urgent risk, improve visibility, and document the knowledge required for continuity.' },
            { title: 'Modernize', description: 'Sequence repair, replacement, or rebuild work around business constraints and ownership.' },
        ],
        processHeading: 'Remote delivery with direct senior access',
        processIntroduction: 'Meetings, system access, decisions, documentation, and delivery are managed remotely with named client contacts.',
        process: seniorDelivery,
        fitHeading: 'Best suited to DFW businesses that',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWorkNote,
        proofAction: { label: 'Review Published Work', href: '/case-studies' },
        finalHeading: 'Start before the next failure narrows your options',
        finalBody: 'Tell us what the software supports and where leadership has lost confidence.',
        locationLabel: 'Remote service across Dallas–Fort Worth',
        serviceType: 'Software rescue and modernization',
    },
    dallasWeb: {
        title: 'Dallas Website Modernization | Empuls3',
        metaDescription:
            'Website modernization for established Dallas–Fort Worth service businesses that need clearer positioning and dependable conversion paths.',
        eyebrow: 'Dallas website modernization',
        heading: 'Build a clearer digital front door for your DFW business',
        introduction:
            'Empuls3 modernizes websites for established service businesses whose current message, platform, content, or conversion flow no longer supports the company they have become.',
        primaryAction: { label: 'Request a Website Review', href: '/contact#contact-form' },
        secondaryAction: { label: 'See Website Work', href: '/case-studies' },
        problemHeading: 'A credible business can still have an unclear website',
        problemIntroduction: 'The strongest redesign case is tied to buyer understanding, operational ownership, and a measurable conversion path.',
        problems: [
            {
                title: 'Visitors cannot identify the fit',
                description: 'The site lists capabilities but does not clearly explain the target buyer, urgent problem, or primary offer.',
            },
            {
                title: 'The site is difficult to maintain',
                description: 'Publishing, plugins, performance, or ownership make routine changes slow and risky.',
            },
            {
                title: 'Leads are not measured reliably',
                description: 'Forms, calls, email, scheduling, analytics, and follow-up expectations are incomplete or inconsistent.',
            },
        ],
        solutionHeading: 'A website built around the buyer decision',
        solutionIntroduction:
            'We align message, information architecture, design, platform, analytics, and handoff around the business action the site must support.',
        solutions: [
            {
                title: 'Positioning and content',
                description: 'Clarify who the company serves, the problem it owns, the proof available, and the right next step.',
            },
            {
                title: 'Design and development',
                description: 'Create a responsive, accessible, maintainable site on a platform the operating team can support.',
            },
            {
                title: 'Conversion and ownership',
                description: 'Instrument meaningful actions and document publishing, follow-up, and ongoing responsibility.',
            },
        ],
        processHeading: 'Modernize with a defined business purpose',
        processIntroduction: 'We agree on audience and outcomes before designing pages.',
        process: seniorDelivery,
        fitHeading: 'Best suited to DFW businesses that',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        proofBody: publishedWorkNote,
        proofAction: { label: 'Review Website Case Studies', href: '/case-studies' },
        finalHeading: 'Make the site match the business you operate today',
        finalBody: 'Share the current website, target buyer, and the action a qualified visitor should take.',
        locationLabel: 'Remote service across Dallas–Fort Worth',
        serviceType: 'Website modernization',
    },
    dallasConsulting: {
        title: 'Dallas Senior Engineering & IT Consulting | Empuls3',
        metaDescription:
            'Senior engineering and IT consulting for DFW leaders facing software risk, systems decisions, and fragmented technical ownership.',
        eyebrow: 'Dallas senior engineering consulting',
        heading: 'Turn technical uncertainty into accountable business decisions',
        introduction:
            'Empuls3 helps DFW owners, COOs, and IT leaders assess software risk, vendor recommendations, architecture choices, delivery plans, and ownership gaps.',
        primaryAction: { label: 'Discuss a Technical Decision', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book a Consultation', href: '/contact#schedule-meeting' },
        problemHeading: 'Leadership needs more than technical activity',
        problemIntroduction: 'The value of consulting is a clear decision, responsible plan, and accountable owner.',
        problems: [
            {
                title: 'Conflicting vendor recommendations',
                description: 'Leadership cannot compare proposals because assumptions, scope, risk, and future ownership are not explicit.',
            },
            {
                title: 'A major system decision is approaching',
                description: 'Repair, replace, integrate, migrate, or build options need to be evaluated against the operating reality.',
            },
            {
                title: 'Delivery lacks technical governance',
                description: 'Projects move without clear architecture, security, data, testing, deployment, or acceptance responsibility.',
            },
        ],
        solutionHeading: 'Consulting that produces a usable operating decision',
        solutionIntroduction: 'We investigate enough to make tradeoffs visible and translate them into sequenced action.',
        solutions: [
            {
                title: 'Independent assessment',
                description: 'Review the system, workflow, proposal, architecture, vendor, or delivery condition in scope.',
            },
            {
                title: 'Options and recommendation',
                description: 'Compare consequences, assumptions, dependencies, risks, cost drivers, and ownership needs.',
            },
            {
                title: 'Execution support',
                description: 'Help leadership govern delivery, coordinate providers, validate progress, and maintain decision visibility.',
            },
        ],
        processHeading: 'Advice grounded in the actual environment',
        processIntroduction: 'We do not sell a predetermined platform as the answer to every problem.',
        process: seniorDelivery,
        fitHeading: 'Best suited to DFW leaders who',
        fit: establishedBusinessFit,
        notFit: standardNotFit,
        finalHeading: 'Bring the decision leadership needs to make',
        finalBody: 'We will identify the evidence, stakeholders, and technical analysis required to make it responsibly.',
        locationLabel: 'Remote service across Dallas–Fort Worth',
        serviceType: 'Senior engineering and IT consulting',
    },
    dallasManagedIt: {
        title: 'Dallas Managed IT Services | Empuls3',
        metaDescription:
            'Remote managed IT for established DFW service businesses needing user support, access discipline, vendor coordination, and recurring issue ownership.',
        eyebrow: 'Dallas managed IT services',
        heading: 'Give recurring IT issues a clear owner across DFW',
        introduction:
            'Empuls3 provides remote-first managed IT for established Dallas–Fort Worth service businesses with defined users, systems, vendors, and operational expectations.',
        primaryAction: { label: 'Discuss Managed IT Fit', href: '/contact#contact-form' },
        secondaryAction: { label: 'Call About IT Support', href: 'tel:+19727988914' },
        problemHeading: 'Support should reduce recurring disruption',
        problemIntroduction:
            'We define coverage after reviewing the environment instead of advertising an unlimited promise disconnected from scope.',
        problems: [
            {
                title: 'Employees lose time to recurring issues',
                description: 'Access, devices, software, network, and vendor problems repeatedly interrupt customer-facing work.',
            },
            {
                title: 'Onboarding and offboarding vary',
                description: 'Accounts, permissions, devices, and vendor access lack a documented lifecycle and owner.',
            },
            {
                title: 'No one coordinates providers',
                description: 'Leadership or office staff spend time moving incidents between internet, software, hardware, and security vendors.',
            },
        ],
        solutionHeading: 'Remote IT operations with defined responsibility',
        solutionIntroduction:
            'Coverage, service targets, authorized contacts, escalation, exclusions, and improvement priorities are documented before service begins.',
        solutions: [
            {
                title: 'User and access support',
                description: 'Support agreed users, devices, accounts, permissions, onboarding, offboarding, and workplace tools.',
            },
            {
                title: 'Vendor and issue coordination',
                description: 'Own triage and communication across supported providers so the business is not the go-between.',
            },
            {
                title: 'Environment improvement',
                description: 'Track issue patterns, inventory, lifecycle, security concerns, and prioritized risk reduction.',
            },
        ],
        processHeading: 'Scope first, then service targets',
        processIntroduction:
            'User count, locations, hours, systems, vendors, criticality, and current condition determine the responsible support model.',
        process: seniorDelivery,
        fitHeading: 'Best suited to DFW businesses that',
        fit: [
            'Operate an established team with accountable contacts and a defined business technology environment.',
            'Can support remote-first service and provide authorized access to the systems in scope.',
            'Want root-cause improvement alongside day-to-day issue resolution.',
        ],
        notFit: [
            'Residential technology support.',
            'Walk-in repair or consumer device troubleshooting.',
            'Emergency-only support without an established service relationship.',
        ],
        finalHeading: 'Tell us what needs to be supported and owned',
        finalBody: 'Share users, systems, vendors, recurring issues, business hours, and current coverage.',
        locationLabel: 'Remote service across Dallas–Fort Worth',
        serviceType: 'Managed IT services',
    },
    dallasMobile: {
        title: 'Dallas Business Mobile App Development | Empuls3',
        metaDescription:
            'Mobile application planning and delivery for established DFW businesses with defined field, customer, or operational workflows.',
        eyebrow: 'Dallas business mobile applications',
        heading: 'Put the right business workflow where the work happens',
        introduction:
            'Empuls3 plans and builds mobile experiences for DFW organizations with a defined field, customer, approval, inspection, or data-capture need.',
        primaryAction: { label: 'Discuss a Mobile Workflow', href: '/contact#contact-form' },
        secondaryAction: { label: 'Book a Product Call', href: '/contact#schedule-meeting' },
        problemHeading: 'The strongest mobile cases begin with access and context',
        problemIntroduction: 'We evaluate whether a mobile app is necessary before choosing native, cross-platform, or responsive web delivery.',
        problems: [
            {
                title: 'Field teams need device capabilities',
                description: 'Photos, signatures, location, offline work, scanning, or timely data capture are central to the job.',
            },
            {
                title: 'Customers repeat a focused action',
                description: 'Self-service, status, approvals, communication, or account work needs a reliable mobile experience.',
            },
            {
                title: 'An existing app needs responsible modernization',
                description: 'Maintenance, release, platform, performance, or integration conditions are blocking product improvement.',
            },
        ],
        solutionHeading: 'Mobile product and operating responsibility together',
        solutionIntroduction:
            'The experience, APIs, identity, data, security, deployment, store management, monitoring, and support are planned as one system.',
        solutions: [
            {
                title: 'Workflow and platform decision',
                description: 'Define users, context, connectivity, device needs, integrations, security, and the simplest viable delivery approach.',
            },
            {
                title: 'Application and systems delivery',
                description: 'Build the user experience and the backend services required to support it reliably.',
            },
            {
                title: 'Release and lifecycle ownership',
                description: 'Plan testing, distribution, monitoring, analytics, support, updates, and platform responsibilities.',
            },
        ],
        processHeading: 'Validate the mobile case before development',
        processIntroduction: 'A responsible recommendation may be an app, a mobile web experience, or an improvement to the underlying workflow.',
        process: seniorDelivery,
        fitHeading: 'Best suited to DFW businesses that',
        fit: establishedBusinessFit,
        notFit: ['Want an app primarily as a branding exercise.', ...standardNotFit.slice(1)],
        finalHeading: 'Bring the workflow and the systems behind it',
        finalBody: 'We will help determine whether mobile delivery is justified and what operating responsibility it requires.',
        locationLabel: 'Remote service across Dallas–Fort Worth',
        serviceType: 'Business mobile application development',
    },
} satisfies Record<string, LeadPageConfig>;
