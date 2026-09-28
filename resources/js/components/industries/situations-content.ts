import { contactHref } from '@/utils/contact-intent';
import { Activity, KeyRound, Users } from 'lucide-react';

// Derived from leadPages.industries. Situations, not sectors: never claim industries served, clients, outcomes, logos or certifications.

export const situationsImage = {
    src: '/images/industries/situations-hero-engineers-watercolor.webp',
    alt: 'Watercolor illustration of two professionals reviewing a business system together on a laptop',
    width: 1536,
    height: 1024,
};

export type Situation = {
    id: string;
    title: string;
    description: string;
    signs: string[];
    startingPoint: { label: string; href: string };
    // Optional second link, e.g. a contact intent for situations that are ready to start.
    action?: { label: string; href: string };
};

export const situations: Situation[] = [
    {
        id: 'new-build',
        title: 'You are planning a new website or app',
        description:
            'You have a new service, product, or process to support and need a website, web app, or first product version built around how your business works.',
        signs: [
            'You know what it needs to do but not how it should be built',
            'You need a clear plan and cost before committing',
            'Off-the-shelf tools do not fit the way you work',
        ],
        startingPoint: { label: 'Website and e-commerce development', href: '/solutions/web-ecommerce-development' },
        action: { label: 'Start a New Project', href: contactHref('new-project') },
    },
    {
        id: 'fragile-software',
        title: 'A service workflow depends on fragile software',
        description: 'Scheduling, intake, delivery, billing, reporting, or customer communication is constrained by an aging application.',
        signs: [
            'Staff work around the system instead of with it',
            'Changes feel risky or slow to make',
            'Knowledge of the application sits with a few people',
        ],
        startingPoint: { label: 'Software rescue and modernization', href: '/solutions/software-development-design' },
    },
    {
        id: 'outgrown-connections',
        title: 'Growth has outpaced system connections',
        description: 'New tools and teams have been added, but the handoffs and data model have not been redesigned.',
        signs: ['Information is re-entered between tools', 'Reports need manual reconciliation', 'Handoffs between teams are missed or delayed'],
        startingPoint: { label: 'CRM, API, and workflow integration', href: '/solutions/backend-api-development' },
    },
    {
        id: 'fragmented-ownership',
        title: 'Nobody owns the whole system',
        description: 'Your staff and several vendors each know part of how things work, but no one can answer for the whole system.',
        signs: [
            'Vendors each own a component, not the outcome',
            'Nobody can explain the full system end to end',
            'Decisions stall waiting for the right person',
        ],
        startingPoint: { label: 'Ongoing senior engineering support', href: '/services/software-engineering-it-consulting' },
    },
];

export const contextLenses = [
    {
        title: 'What depends on the system',
        icon: Activity,
        description: 'Who relies on it, what happens when it goes down, and what must keep running while it changes.',
    },
    {
        title: 'Data and access',
        icon: KeyRound,
        description: 'What information is involved, who may access it, and what contractual or regulatory obligations the client identifies.',
    },
    {
        title: 'Change and adoption',
        icon: Users,
        description: 'How staff, customers, vendors, training, support, and existing commitments affect the delivery path.',
    },
];

export const approachSteps = [
    {
        title: 'Understand the goal or problem',
        description:
            'We review the workflow, the people involved, the software and data, and what is at stake for the business before recommending an approach.',
    },
    {
        title: 'Agree a written scope',
        description:
            'You receive a practical scope: a realistic first release for a new build, or a plan that separates urgent fixes from improvements that can wait.',
    },
    {
        title: 'Build, launch, and support',
        description: 'A senior developer stays directly involved, checks in regularly, and leaves your team with documentation and next steps.',
    },
];

export const clientProfile = [
    'You are building something new, or an existing system or workflow supports your customers, operations, or revenue.',
    'A business or technical leader can explain the goal and take part in decisions.',
    'You value careful planning and durable work over the cheapest short-term fix.',
];
