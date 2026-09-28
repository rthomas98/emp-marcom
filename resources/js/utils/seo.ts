// SEO Utilities for Dallas Local Optimization

// Dallas-focused meta tags generator
export interface MetaTags {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

// Generate location-optimized title
export function generateLocalTitle(pageTitle: string, includeLocation: boolean = true): string {
    const alreadyNamesLocation = /\b(Dallas|DFW|Fort Worth)\b/i.test(pageTitle);
    const location = includeLocation && !alreadyNamesLocation ? ' Dallas, TX' : '';
    const brandName = ' | Empuls3';

    // Ensure title is under 60 characters for optimal SEO
    const fullTitle = `${pageTitle}${location}${brandName}`;

    if (fullTitle.length > 60) {
        // Shorten if needed, prioritize keywords over location if too long
        if (pageTitle.length + brandName.length + 3 > 60) {
            return `${pageTitle} | Empuls3`;
        }
        return `${pageTitle}${location} | Empuls3`;
    }

    return fullTitle;
}

// Generate meta description with validation
export function generateMetaDescription(description: string, maxLength: number = 160): string {
    if (description.length <= maxLength) {
        return description;
    }

    // Truncate at last complete sentence or word
    const truncated = description.substring(0, maxLength - 3);
    const lastSentence = truncated.lastIndexOf('.');
    const lastWord = truncated.lastIndexOf(' ');

    if (lastSentence > maxLength - 50) {
        return truncated.substring(0, lastSentence + 1);
    }

    if (lastWord > 0) {
        return truncated.substring(0, lastWord) + '...';
    }

    return truncated + '...';
}

// Generate location-optimized description
export function generateLocalDescription(baseDescription: string, includeLocation: boolean = true): string {
    const locationContext = includeLocation ? ' Based in Dallas–Fort Worth and working with DFW businesses since 2009.' : '';

    // Ensure description is under 160 characters
    const fullDescription = `${baseDescription}${locationContext}`;

    if (fullDescription.length > 160) {
        // Try shorter location context
        const shortContext = includeLocation ? ' Based in Dallas–Fort Worth since 2009.' : '';
        const shorterDescription = `${baseDescription}${shortContext}`;

        return generateMetaDescription(shorterDescription);
    }

    return generateMetaDescription(fullDescription);
}

// Dallas-specific keywords for different services
export const dallasKeywords = {
    general: [
        'Dallas software development',
        'Dallas IT consulting',
        'Dallas web development',
        'Dallas tech company',
        'Dallas software company',
        'DFW software development',
        'Fort Worth IT services',
        'Dallas custom software',
        'Dallas digital transformation',
        'Dallas IT solutions',
    ],
    softwareDevelopment: [
        'custom software development Dallas',
        'Dallas software engineer',
        'enterprise software Dallas',
        'Dallas app development',
        'software development company Dallas TX',
        'Dallas software consulting',
        'Dallas software solutions',
        'custom application development Dallas',
        'Dallas software development services',
        'Dallas coding company',
    ],
    webDevelopment: [
        'web development Dallas',
        'Dallas web design',
        'Dallas website development',
        'ecommerce development Dallas',
        'Dallas web developer',
        'website design Dallas TX',
        'Dallas responsive web design',
        'Dallas web application development',
        'professional web development Dallas',
        'Dallas website company',
    ],
    itConsulting: [
        'IT consulting Dallas',
        'Dallas IT consultants',
        'technology consulting Dallas',
        'Dallas IT advisory',
        'IT strategy Dallas',
        'Dallas technology consultants',
        'IT consulting firms Dallas',
        'Dallas IT solutions consulting',
        'enterprise IT consulting Dallas',
        'Dallas tech consulting',
    ],
    managedIT: [
        'managed IT services Dallas',
        'Dallas managed IT',
        'IT support Dallas',
        'Dallas IT management',
        'remote IT support Dallas',
        'Dallas managed services provider',
        'outsourced IT Dallas',
        'Dallas IT help desk',
        'managed IT support Dallas TX',
        'Dallas IT services company',
    ],
    mobile: [
        'mobile app development Dallas',
        'Dallas app developer',
        'iOS development Dallas',
        'Android development Dallas',
        'Dallas mobile development',
        'mobile app company Dallas',
        'Dallas app development company',
        'cross-platform development Dallas',
        'Dallas mobile app design',
        'app developer Dallas TX',
    ],
};

// Generate service-specific meta tags
export function generateServiceMetaTags(service: string, baseTitle: string, baseDescription: string): MetaTags {
    const keywords = dallasKeywords[service as keyof typeof dallasKeywords] || dallasKeywords.general;

    return {
        title: generateLocalTitle(baseTitle),
        description: generateLocalDescription(baseDescription),
        keywords: keywords.join(', '),
        ogTitle: `${baseTitle} | Empuls3 Dallas–Fort Worth`,
        ogDescription: baseDescription,
        twitterTitle: `${baseTitle} | Empuls3 Dallas`,
        twitterDescription: baseDescription,
    };
}

// Generate location pages data
export const dallasServicePages = [
    {
        slug: 'software-development-dallas',
        title: 'Custom Software Development',
        description: 'New business software and improvements to existing applications for DFW businesses',
        keywords: dallasKeywords.softwareDevelopment,
    },
    {
        slug: 'web-development-dallas',
        title: 'Web Development Services',
        description: 'New websites and updates to existing sites for DFW businesses',
        keywords: dallasKeywords.webDevelopment,
    },
    {
        slug: 'it-consulting-dallas',
        title: 'IT Consulting Services',
        description: 'Senior technical advice for Dallas–Fort Worth businesses',
        keywords: dallasKeywords.itConsulting,
    },
    {
        slug: 'managed-it-services-dallas',
        title: 'Managed IT Services',
        description: 'Scoped remote IT support for Dallas–Fort Worth businesses',
        keywords: dallasKeywords.managedIT,
    },
    {
        slug: 'mobile-app-development-dallas',
        title: 'Mobile App Development',
        description: 'iOS and Android apps for DFW businesses',
        keywords: dallasKeywords.mobile,
    },
];

// Generate local content snippets
export const dallasContent = {
    hero: {
        title: 'Websites and software built around your business',
        subtitle: 'Independent senior developer based in Dallas–Fort Worth',
        description:
            'We design and build websites, web apps, and business systems, and improve the ones you already use. Work directly with a senior developer from the first plan through launch and ongoing support.',
    },
    about: {
        title: 'Independent senior developer based in Dallas–Fort Worth',
        description:
            'Robert Thomas founded Empuls3 in 2009. We work remotely with DFW businesses through scheduled video sessions, secure system access, and written updates.',
    },
    services: {
        title: 'Build new, improve what you have',
        description:
            'New websites, web apps, and business systems, plus improvements, integrations, and ongoing support for the software you already use.',
    },
    contact: {
        title: 'Tell us about your project',
        description: 'Send a short description through the contact form or by email. We normally reply within one business day.',
    },
};

// Local business directories for citations (for remote agencies)
export const dallasDirectories = [
    {
        name: 'Google My Business',
        url: 'https://business.google.com',
        priority: 'high',
    },
    {
        name: 'Bing Places',
        url: 'https://www.bingplaces.com',
        priority: 'high',
    },
    {
        name: 'Yelp Dallas',
        url: 'https://www.yelp.com/dallas',
        priority: 'high',
    },
    {
        name: 'Dallas Chamber of Commerce',
        url: 'https://www.dallaschamber.org',
        priority: 'high',
    },
    {
        name: 'Better Business Bureau Dallas',
        url: 'https://www.bbb.org/us/tx/dallas',
        priority: 'high',
    },
    {
        name: 'Dallas Business Journal',
        url: 'https://www.bizjournals.com/dallas',
        priority: 'medium',
    },
    {
        name: 'D Magazine Business Directory',
        url: 'https://directory.dmagazine.com',
        priority: 'medium',
    },
    {
        name: 'Dallas Tech Hub',
        url: 'https://www.dallastechhub.com',
        priority: 'medium',
    },
];
