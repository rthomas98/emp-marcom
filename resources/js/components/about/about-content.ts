import { Dribbble, Linkedin, Twitter } from 'lucide-react';

// Verified facts only. Founder details mirror CompanyTeam/FounderIntro; do not add unverified biography, clients, outcomes or headcount.
export const founder = {
    name: 'Robert Thomas',
    role: 'Founder',
    portrait: '/images/682c9204c876aa4ebe43910b-HeadshotPro.png',
    bio: 'Robert founded Empuls3 in 2009 as an independent development practice where clients work directly with the developer doing the work.',
    links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/robert-thomas-1b110216/', icon: Linkedin },
        { label: 'X', href: 'https://x.com/rob_thomas10', icon: Twitter },
        { label: 'Dribbble', href: 'https://dribbble.com/robt84', icon: Dribbble },
    ],
};

// Visible page heading. leadPages.about still supplies the title and meta description.
export const aboutHero = {
    heading: 'Direct access to a senior developer since 2009',
    introduction:
        'Empuls3 is a remote-first Dallas–Fort Worth software and technology firm founded in 2009 and run by independent developer Robert Thomas. We design and build websites, web apps, and business systems, and improve the ones you already use. You work directly with Robert from the first plan through launch and ongoing support.',
};

export const aboutImages = {
    hero: {
        src: '/images/about/about-hero-dfw-watercolor.webp',
        alt: 'Watercolor illustration of the Dallas–Fort Worth skyline linked by network lines',
        width: 1122,
        height: 1402,
    },
    workbench: {
        src: '/images/about/about-workbench-watercolor.webp',
        alt: 'Watercolor illustration of hands sketching a system diagram beside a laptop',
        width: 1536,
        height: 1024,
    },
};

export const principles = [
    {
        title: 'Direct access',
        description: 'You work directly with Robert, the developer responsible for your project.',
    },
    {
        title: 'We look before we recommend',
        description:
            'Before suggesting a new build, a repair, or an integration, we review how your team works today and what your current systems can do.',
    },
    {
        title: 'Documentation you keep',
        description: 'At handoff you receive notes on what was built, how to run it, known limitations, and what we suggest next.',
    },
];

export const processSteps = [
    {
        title: 'A direct conversation about the goal',
        description:
            'We talk through what you want to build or fix, who uses it, the systems and data involved, and your timing. You talk with Robert, the developer who will do the work.',
    },
    {
        title: 'A written scope before work starts',
        description:
            'You receive a written scope that sets out what the first release or fix includes, what is left for later, and how the work is priced.',
    },
    {
        title: 'Regular check-ins while we build',
        description:
            'We agree how often to meet and send written updates, so you can see progress, review the work, and make decisions as they come up.',
    },
    {
        title: 'Launch and ongoing support',
        description:
            'We launch with your team, hand over documentation and access, and can continue with support or further improvements if you want us to.',
    },
];
