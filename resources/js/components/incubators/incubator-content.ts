// Copy for /for-incubators. Describes what Empuls3 can offer; do not claim existing program partnerships, availability,
// cohort discounts, or outcomes. Format, schedule, and fees are agreed with each program in writing.

export const incubatorHero = {
    eyebrow: 'For Incubators and Founder Programs',
    heading: 'Practical technical guidance for the founders you support',
    introduction:
        'Many founders in early-stage programs have a strong business idea but no technical background. Empuls3 can help them understand what to build first, how software projects are scoped, and how to work with a developer, through workshops, scheduled technical office hours, and separately scoped development support.',
    image: {
        src: '/images/about/about-workbench-watercolor.webp',
        alt: 'Watercolor illustration of hands sketching a system diagram beside a laptop',
        width: 1536,
        height: 1024,
    },
};

export type IncubatorOffer = {
    title: string;
    summary: string;
    points: string[];
};

export const incubatorOffers: IncubatorOffer[] = [
    {
        title: 'Workshops',
        summary: 'Group sessions for a cohort, on topics agreed with your program team.',
        points: [
            'Deciding what a first release should include',
            'How web and mobile app projects are scoped and estimated',
            'Working with developers and reading a technical proposal',
        ],
    },
    {
        title: 'Technical office hours',
        summary: 'Short one-to-one sessions where founders can ask technical questions about their idea.',
        points: [
            'A fixed number of sessions and a set length, agreed with the program in advance',
            'General guidance on approach, tools, and next steps',
            'Not a development engagement: no code is written or reviewed in depth during office hours',
        ],
    },
    {
        title: 'Scoped founder development support',
        summary: 'For founders who want to go further, work continues directly between the founder and Empuls3.',
        points: [
            'Starts with Product Blueprint planning, from $2,500',
            'Building the first release is scoped and estimated separately',
            'Each founder has their own written agreement with Empuls3',
        ],
    },
];

export const incubatorSteps = [
    {
        title: 'Tell us about your program',
        description: 'Share the program type, the stage your founders are at, how many are in a cohort, and what kind of support you have in mind.',
    },
    {
        title: 'Agree the format in writing',
        description: 'We confirm what we can offer, the format, schedule, and any fees, before anything is announced to founders.',
    },
    {
        title: 'Deliver and follow up',
        description: 'We run the agreed sessions. Founders who want development help contact Empuls3 directly, and that work is scoped separately.',
    },
];
