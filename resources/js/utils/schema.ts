// Local Business Schema Generator for Dallas, Texas
export interface LocalBusinessSchema {
    '@context': string;
    '@type': string;
    '@id'?: string;
    name: string;
    description: string;
    url: string;
    telephone: string;
    email: string;
    address: {
        '@type': string;
        streetAddress?: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        '@type': string;
        latitude: number;
        longitude: number;
    };
    openingHoursSpecification?: Array<{
        '@type': string;
        dayOfWeek: string | string[];
        opens: string;
        closes: string;
    }>;
    priceRange?: string;
    image?: string | string[];
    logo?: string;
    sameAs?: string[];
    areaServed?: Array<{
        '@type': string;
        name: string;
    }>;
    hasOfferCatalog?: {
        '@type': string;
        name: string;
        itemListElement: Array<{
            '@type': string;
            itemOffered: {
                '@type': string;
                name: string;
                description: string;
            };
        }>;
    };
}

// Dallas business information
export const dallasBusinessInfo = {
    name: 'Empuls3',
    description:
        'Dallas–Fort Worth independent developer practice, run by Robert Thomas, that designs and builds websites, web apps, and business systems, and improves, connects, and supports the ones businesses already use.',
    // Remote agency - no physical address
    streetAddress: '',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75201',
    addressCountry: 'US',
    telephone: '+1-972-798-8914',
    email: 'info@empuls3.com',
    // Dallas coordinates (city center for service area)
    latitude: 32.7767,
    longitude: -96.797,
    priceRange: 'From $2,500',
    openingHours: [
        {
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
        },
    ],
    // Matches the social links published in the site footer.
    socialProfiles: [
        'https://www.linkedin.com/company/empuls3/',
        'https://x.com/empuls3',
        'https://www.facebook.com/empuls3/',
        'https://www.instagram.com/empuls3/',
        'https://www.youtube.com/@empuls3',
    ],
};

// Generate Local Business Schema
export function generateLocalBusinessSchema(): LocalBusinessSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://www.empuls3.com/#organization',
        name: dallasBusinessInfo.name,
        description: dallasBusinessInfo.description,
        url: 'https://www.empuls3.com',
        telephone: dallasBusinessInfo.telephone,
        email: dallasBusinessInfo.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: dallasBusinessInfo.addressLocality,
            addressRegion: dallasBusinessInfo.addressRegion,
            postalCode: dallasBusinessInfo.postalCode,
            addressCountry: dallasBusinessInfo.addressCountry,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: dallasBusinessInfo.latitude,
            longitude: dallasBusinessInfo.longitude,
        },
        openingHoursSpecification: dallasBusinessInfo.openingHours.map((hours) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: hours.dayOfWeek,
            opens: hours.opens,
            closes: hours.closes,
        })),
        priceRange: dallasBusinessInfo.priceRange,
        image: 'https://www.empuls3.com/images/emp-logo.svg',
        logo: 'https://www.empuls3.com/images/emp-logo.svg',
        sameAs: dallasBusinessInfo.socialProfiles,
        areaServed: [
            {
                '@type': 'City',
                name: 'Dallas',
            },
            {
                '@type': 'City',
                name: 'Fort Worth',
            },
            {
                '@type': 'City',
                name: 'Arlington',
            },
            {
                '@type': 'City',
                name: 'Plano',
            },
            {
                '@type': 'City',
                name: 'Irving',
            },
            {
                '@type': 'City',
                name: 'Richardson',
            },
            {
                '@type': 'City',
                name: 'Frisco',
            },
            {
                '@type': 'City',
                name: 'McKinney',
            },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Website, Software, and IT Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'New Website and Web App Development',
                        description:
                            'New websites, web applications, and business systems planned, designed, and built by a senior developer for Dallas–Fort Worth businesses',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Software Improvement and Modernization',
                        description:
                            'Review, repair, and staged improvement of existing websites and applications, including software taken over from another developer',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'CRM, API, and Workflow Integration',
                        description: 'Connecting CRM, website, finance, and operations systems so information moves without manual re-entry',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Ongoing Senior Developer Support',
                        description:
                            'Maintenance, updates, technical advice, and ongoing improvements from the senior developer who knows the software',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Managed IT Services',
                        description: 'Scoped remote IT support for users, devices, access, and vendors across the Dallas–Fort Worth area',
                    },
                },
            ],
        },
    };
}

// Service-specific schemas
export function generateServiceSchema(service: { name: string; description: string; url: string; image?: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.name,
        provider: {
            '@type': 'ProfessionalService',
            name: dallasBusinessInfo.name,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
            },
        },
        areaServed: {
            '@type': 'City',
            name: 'Dallas',
        },
        description: service.description,
        url: service.url,
        image: service.image,
    };
}

// FAQ Schema generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// BreadcrumbList Schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Article Schema generator for case studies and blog posts
export function generateArticleSchema(article: {
    headline: string;
    description: string;
    image?: string | string[];
    datePublished: string;
    dateModified?: string;
    author?: string;
    publisher?: {
        name: string;
        logo?: string;
    };
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        ...(article.image && { image: article.image }),
        datePublished: article.datePublished,
        ...(article.dateModified && { dateModified: article.dateModified }),
        ...(article.author && { author: { '@type': 'Person', name: article.author } }),
        publisher: article.publisher || {
            '@type': 'Organization',
            name: dallasBusinessInfo.name,
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.empuls3.com/images/emp-logo.svg',
            },
        },
    };
}

// Review and AggregateRating schema are intentionally not generated: the site has no verified rating source.
