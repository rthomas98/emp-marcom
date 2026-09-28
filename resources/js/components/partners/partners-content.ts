// Derived from leadPages.partners. Describes how collaboration works; never list formal partners, endorsements, certifications, clients or outcomes.

export const partnersImages = {
    panorama: {
        src: '/images/partners/partners-collaboration-panorama.webp',
        alt: 'Watercolor illustration of client staff, vendors and specialists planning together around a shared table',
        width: 1916,
        height: 821,
    },
};

// Visible hero copy. leadPages.partners still supplies the title and meta description.
export const partnersHero = {
    heading: 'Development support for agencies and in-house teams',
    introduction:
        'We work alongside marketing and web agencies, internal IT and product teams, and the vendors already involved in a project. Agencies can bring us in as a subcontractor or white-label developer while they keep the client relationship. We agree on client communication, attribution, and what may be shared publicly before work begins.',
};

export type RelationshipId = 'agencies' | 'internal-teams' | 'vendors-specialists';

export const relationships: {
    id: RelationshipId;
    title: string;
    shortTitle: string;
    description: string;
    whoItIncludes: string[];
    howWeWork: string;
}[] = [
    {
        id: 'agencies',
        title: 'Agencies and development firms',
        shortTitle: 'Agencies',
        description:
            'Marketing, design, and web agencies can bring us in for development work they do not handle in-house, as a subcontractor or white-label developer.',
        whoItIncludes: ['Marketing and design agencies', 'Web and digital agencies', 'Development firms that need another senior developer'],
        howWeWork:
            'You keep the client relationship. We agree the scope, how we communicate, and whose name appears on the work, then build to your process.',
    },
    {
        id: 'internal-teams',
        title: 'Internal teams',
        shortTitle: 'Internal teams',
        description: 'We work directly with business owners, operations leaders, IT staff, product teams, and subject-matter experts.',
        whoItIncludes: ['Business owners and sponsors', 'Operations leaders', 'IT staff and product teams', 'Subject-matter experts'],
        howWeWork: 'Your team sets priorities and approves the work. We handle the technical plan and delivery, and keep you updated in writing.',
    },
    {
        id: 'vendors-specialists',
        title: 'Existing vendors and specialists',
        shortTitle: 'Vendors',
        description:
            'We can review, integrate with, or take over work from current providers, and coordinate with specialists when a project needs them.',
        whoItIncludes: ['Current software or hosting vendors', 'Previous development teams', 'Security, legal, or compliance advisors'],
        howWeWork: 'Handoffs between providers are written down. Specialist help is identified early and added only with your approval.',
    },
];

export const responsibilityQuestions = [
    {
        question: 'Who decides?',
        answer: 'Your project sponsor, or the agency lead for white-label work, sets priorities and approves scope, access, and changes.',
    },
    {
        question: 'Who delivers each part?',
        answer: 'Each part of the work has a named person responsible for it before dates are set.',
    },
    {
        question: 'Who runs it after launch?',
        answer: 'Who runs the system, where the documentation lives, and what comes next are agreed before handoff.',
    },
];

export const responsibilityParties = ['client', 'empuls3', 'vendor', 'specialist'] as const;

export type ResponsibilityParty = (typeof responsibilityParties)[number];

export type ResponsibilityRole = 'Responsible' | 'Approves' | 'Consulted' | 'Operates' | 'Not involved';

export const responsibilityPartyLabels: Record<ResponsibilityParty, string> = {
    client: 'Client or agency lead',
    empuls3: 'Empuls3',
    vendor: 'Existing vendor',
    specialist: 'Specialist',
};

// Illustrative only. Every engagement documents its own version.
export const responsibilityGuide: { activity: string; roles: Record<ResponsibilityParty, ResponsibilityRole> }[] = [
    {
        activity: 'Priorities and approvals',
        roles: { client: 'Approves', empuls3: 'Consulted', vendor: 'Consulted', specialist: 'Consulted' },
    },
    {
        activity: 'Technical plan and delivery',
        roles: { client: 'Approves', empuls3: 'Responsible', vendor: 'Consulted', specialist: 'Consulted' },
    },
    {
        activity: 'Existing system components',
        roles: { client: 'Approves', empuls3: 'Consulted', vendor: 'Responsible', specialist: 'Not involved' },
    },
    {
        activity: 'Operating after launch',
        roles: { client: 'Operates', empuls3: 'Consulted', vendor: 'Consulted', specialist: 'Not involved' },
    },
];

export const collaborationSteps = [
    { title: 'Map who is involved', description: 'List the teams, providers, systems, and client contacts in the project.' },
    { title: 'Agree who does what', description: 'Decide who builds, who reviews, who approves, and who runs the result after launch.' },
    {
        title: 'Set up access and contacts',
        description: 'Write down environments, credentials, approvals, and who to contact when something is blocked.',
    },
    { title: 'Build with shared notes', description: 'Keep decisions, changes, and next steps in one place every party can see.' },
];

export const collaborationAgreements = [
    { title: 'One person who approves', description: 'A single contact who can settle questions between providers.' },
    { title: 'Access and approvals in writing', description: 'Environments, credentials, approvals, and escalation are written down.' },
    { title: 'Accurate scope and relationships', description: 'Each provider’s role is described as it is, with no implied partnerships.' },
];

export const conversationPrep = [
    'Whether this is white-label, subcontracted, or direct work',
    'The teams and providers involved today',
    'The systems, environments, and data in scope',
    'Any timing, approvals, or constraints you already know',
];
