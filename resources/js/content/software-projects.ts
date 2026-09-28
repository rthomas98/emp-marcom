// Software and platform projects shown on /case-studies (anchors, no detail routes).
// Copy is the coordinator-approved public wording from portfolio-source-evidence.md. It describes scope, not results:
// no private operational data, facility names, tools, outcome metrics, compliance guarantees, launch or sole-authorship claims.

export type SoftwareProjectStatus = 'live-and-in-development' | 'in-development';

export interface SoftwareProject {
    id: string;
    name: string;
    title: string;
    statusKind: SoftwareProjectStatus;
    statusLabel: string;
    attribution?: string;
    summary: string;
    scope: string[];
    capture?: { src: string; alt: string; width: number; height: number; caption: string };
    website?: { href: string; label: string };
    /** Short clarification shown on the card, e.g. to separate a live public site from the scope described. */
    note?: string;
}

export const softwareProjects: SoftwareProject[] = [
    {
        id: 'aec-unites',
        name: 'AEC Unites',
        title: 'AEC Unites — Website and Membership Platform',
        statusKind: 'live-and-in-development',
        statusLabel: 'Public website live; member hub in pilot',
        summary:
            'Rebuilt an outdated website for AEC Unites and developed a dedicated member hub. The public website is live, and the member hub is in its pilot phase.',
        scope: ['Public website and content pages', 'Member onboarding and organization profiles', 'Member and staff workflows'],
        website: { href: 'https://aecunites.org/', label: 'Visit AEC Unites website' },
        capture: {
            src: '/images/case-studies/aec-unites-live.png',
            alt: 'Screenshot of the AEC Unites public website homepage',
            width: 1281,
            height: 988,
            caption: 'Public website, captured September 27, 2026.',
        },
    },
    {
        id: 'carbon-capture',
        name: 'Carbon Capture',
        title: 'Carbon Capture — Environmental Reporting Software',
        statusKind: 'in-development',
        statusLabel: 'In development',
        attribution: 'Development work commissioned through CodeGig.',
        summary:
            'Development work on software for reviewing industrial emissions data, preparing environmental reports, and tracking material balances. The application brings equipment data, calculations, and reporting workflows into one interface.',
        scope: ['Environmental reporting screens and API workflows', 'Equipment and site data', 'Mass-balance views and calculations'],
    },
    {
        id: 'kinesics-health',
        name: 'Kinesics Health',
        title: 'Kinesics Health — Movement Assessment Software',
        statusKind: 'live-and-in-development',
        statusLabel: 'Public website live; ongoing development',
        attribution: 'Ongoing application development commissioned through CodeGig.',
        note: 'The public website is live, with ongoing application development and Azure DevOps support.',
        summary:
            'Improved an inherited codebase through application fixes and Azure DevOps work. Set up the CI/CD workflow, and deployments now run through CI/CD. Development and support continue across the movement-assessment applications.',
        scope: [
            'Range-of-motion assessment workflows',
            'Participant programs and exercise templates',
            'Reporting and administration tools',
            'Azure DevOps support',
            'CI/CD setup and deployments',
        ],
        website: { href: 'https://www.kinesicshealth.com/', label: 'Visit Kinesics Health website' },
        capture: {
            src: '/images/case-studies/kinesics-health-live.jpg',
            alt: 'Screenshot of the Kinesics Health public website homepage',
            width: 1276,
            height: 718,
            caption: 'Public website, captured September 27, 2026.',
        },
    },
    {
        id: 'ecoglobe',
        name: 'EcoGlobe',
        title: 'EcoGlobe — Feedstock and Biomass Marketplace',
        statusKind: 'in-development',
        statusLabel: 'In development',
        attribution: 'Development work commissioned through CodeGig.',
        summary:
            'Development work on a marketplace connecting feedstock and biomass sellers with buyers. The platform brings listings, buyer and seller workflows, sample requests, and delivery coordination into a shared application, with administration tools for managing the marketplace. The work also includes ongoing Azure DevOps support.',
        scope: ['Listings and buyer/seller portals', 'Sample requests and delivery tracking', 'Marketplace administration', 'Azure DevOps support'],
    },
];

export const SOFTWARE_PROJECTS_ANCHOR = 'software-projects';
