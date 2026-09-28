// Approved founder-offer copy for /for-founders. Pricing rule: Product Blueprint planning starts at $2,500; the first release
// is scoped and estimated separately. Never promise a complete app, timelines, outcomes, discounts or a larger team.

export const BLUEPRINT_PRICE = '$2,500';

export const founderHero = {
    eyebrow: 'For Founders',
    heading: 'Plan and build your first app with an experienced developer',
    introduction:
        'You have a business idea and customers in mind, but no technical co-founder. Empuls3 helps nontechnical founders decide what to build first, understand the scope and cost, and move toward launch with clear milestones. You work directly with Robert, the developer who plans and builds it.',
    image: {
        src: '/images/site-images/new-project-planning-watercolor.webp',
        alt: 'Business owner and engineer sketching plans for a new web application',
        width: 1456,
        height: 832,
    },
};

export const founderStages = [
    { title: 'Just an idea', description: 'You know the problem and who has it, but nothing is written down or designed yet.' },
    {
        title: 'Talking to customers',
        description: 'You are testing the idea with potential customers and want to know what a first version would take.',
    },
    {
        title: 'Designs or a prototype',
        description: 'You have mockups, a no-code prototype, or a spec, and need someone to turn it into working software.',
    },
    { title: 'Already live', description: 'An early version exists, but it needs fixes, a clearer plan, or a developer who will stay involved.' },
];

export type FounderPathStep = {
    step: string;
    title: string;
    price: string;
    description: string;
};

export const founderPath: FounderPathStep[] = [
    {
        step: '1',
        title: 'Product Blueprint',
        price: `From ${BLUEPRINT_PRICE}`,
        description:
            'A paid planning engagement that turns your idea into a clear plan for a first release, with a written estimate for the build. Its scope is agreed before it starts.',
    },
    {
        step: '2',
        title: 'First release',
        price: 'Scoped and estimated separately',
        description: 'We build the first usable version of your product in agreed milestones, test it with you, and prepare it for launch.',
    },
    {
        step: '3',
        title: 'Ongoing support',
        price: 'Priced once needs are known',
        description: 'After launch, we can keep fixing, improving, and supporting the product as you learn from real customers.',
    },
];

export const blueprintIncludes = [
    'Who the product is for and the main problem it solves for them',
    'What the first release must do, and what can wait until later',
    'The key screens and user flows, sketched so you can react to them',
    'A practical technical approach, including any outside services it depends on',
    'A written estimate and milestone plan for building the first release',
];

export const blueprintBoundaries = [
    `Product Blueprint planning starts at ${BLUEPRINT_PRICE}. The exact scope, deliverables, and price are agreed in writing before work begins.`,
    'The Blueprint is planning. It is not a finished app, and building the first release is estimated separately.',
    'Completing a Blueprint does not commit you to the build. You decide whether and when to continue.',
];

export const mvpExplainer = {
    heading: 'What we mean by an MVP',
    body: 'MVP stands for minimum viable product. We use it to mean your first usable release: the smallest version of the product that real customers can use for the main task, built well enough to support and improve. It is not a clickable mockup or a throwaway demo, and it is not every feature on your list.',
};

export const buildPractices = [
    {
        title: 'Milestones',
        description:
            'The first release is split into milestones agreed up front, so you can see progress and costs in stages rather than all at the end.',
    },
    {
        title: 'Testing',
        description:
            'You try working software at each milestone. We test the main tasks on the devices your customers use before anything goes live.',
    },
    {
        title: 'Communication',
        description:
            'Regular check-ins and written updates in plain language. If something falls outside the agreed scope, we tell you before doing the extra work.',
    },
    {
        title: 'Launch',
        description: 'We help you launch, including app store submissions for mobile apps, and help with the issues that come up afterward.',
    },
];

export const ownershipPoints = [
    'Ownership and licensing of the code are set out in your agreement before the build starts.',
    'Where possible, the code repository, hosting, domain, and app store accounts are set up under your business, so you hold the keys.',
    'You receive documentation on how the product is built and run, so another developer could pick it up if you ever need one.',
];
