// SEO Utilities for Dallas Local Optimization
import { dallasBusinessInfo } from './schema';

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
  const location = includeLocation ? ' Dallas, TX' : '';
  const brandName = ' | Empuls3';
  
  // Ensure title is under 60 characters for optimal SEO
  const fullTitle = `${pageTitle}${location}${brandName}`;
  
  if (fullTitle.length > 60) {
    // Shorten if needed
    return `${pageTitle}${location} | Empuls3`;
  }
  
  return fullTitle;
}

// Generate location-optimized description
export function generateLocalDescription(baseDescription: string, includeLocation: boolean = true): string {
  const locationContext = includeLocation 
    ? ' Serving Dallas, Fort Worth, and the greater DFW metroplex with excellence since 2009.' 
    : '';
  
  // Ensure description is under 160 characters
  const fullDescription = `${baseDescription}${locationContext}`;
  
  if (fullDescription.length > 160) {
    return `${baseDescription} Serving Dallas-Fort Worth businesses.`;
  }
  
  return fullDescription;
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
    'Dallas IT solutions'
  ],
  softwareDevelopment: [
    'custom software development Dallas',
    'Dallas software engineers',
    'enterprise software Dallas',
    'Dallas app development',
    'software development company Dallas TX',
    'Dallas software consulting',
    'Dallas software solutions',
    'custom application development Dallas',
    'Dallas software development services',
    'Dallas coding company'
  ],
  webDevelopment: [
    'web development Dallas',
    'Dallas web design',
    'Dallas website development',
    'ecommerce development Dallas',
    'Dallas web developers',
    'website design Dallas TX',
    'Dallas responsive web design',
    'Dallas web application development',
    'professional web development Dallas',
    'Dallas website company'
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
    'Dallas tech consulting'
  ],
  managedIT: [
    'managed IT services Dallas',
    'Dallas managed IT',
    'IT support Dallas',
    'Dallas IT management',
    '24/7 IT support Dallas',
    'Dallas managed services provider',
    'outsourced IT Dallas',
    'Dallas IT help desk',
    'managed IT support Dallas TX',
    'Dallas IT services company'
  ],
  mobile: [
    'mobile app development Dallas',
    'Dallas app developers',
    'iOS development Dallas',
    'Android development Dallas',
    'Dallas mobile development',
    'mobile app company Dallas',
    'Dallas app development company',
    'cross-platform development Dallas',
    'Dallas mobile app design',
    'app developers Dallas TX'
  ]
};

// Generate service-specific meta tags
export function generateServiceMetaTags(
  service: string,
  baseTitle: string,
  baseDescription: string
): MetaTags {
  const keywords = dallasKeywords[service as keyof typeof dallasKeywords] || dallasKeywords.general;
  
  return {
    title: generateLocalTitle(baseTitle),
    description: generateLocalDescription(baseDescription),
    keywords: keywords.join(', '),
    ogTitle: `${baseTitle} | Dallas's Premier Tech Agency`,
    ogDescription: `${baseDescription} Trusted by Dallas businesses for exceptional results.`,
    twitterTitle: `${baseTitle} | Empuls3 Dallas`,
    twitterDescription: baseDescription
  };
}

// Generate location pages data
export const dallasServicePages = [
  {
    slug: 'software-development-dallas',
    title: 'Custom Software Development',
    description: 'Expert custom software development services for Dallas businesses',
    keywords: dallasKeywords.softwareDevelopment
  },
  {
    slug: 'web-development-dallas',
    title: 'Web Development Services',
    description: 'Professional web development and design for Dallas companies',
    keywords: dallasKeywords.webDevelopment
  },
  {
    slug: 'it-consulting-dallas',
    title: 'IT Consulting Services',
    description: 'Strategic IT consulting for Dallas-Fort Worth enterprises',
    keywords: dallasKeywords.itConsulting
  },
  {
    slug: 'managed-it-services-dallas',
    title: 'Managed IT Services',
    description: '24/7 managed IT support for Dallas metro businesses',
    keywords: dallasKeywords.managedIT
  },
  {
    slug: 'mobile-app-development-dallas',
    title: 'Mobile App Development',
    description: 'iOS and Android app development for Dallas companies',
    keywords: dallasKeywords.mobile
  }
];

// Generate local content snippets
export const dallasContent = {
  hero: {
    title: "Dallas's Premier Remote Software Development & IT Consulting Agency",
    subtitle: "Empowering Dallas Businesses with Custom Technology Solutions",
    description: "Remote-first agency serving Dallas, Fort Worth, and the greater DFW metroplex with enterprise-grade software development, web solutions, and IT consulting services."
  },
  about: {
    title: "Your Remote Technology Partner for Dallas",
    description: "Empuls3 has been serving Dallas businesses remotely since 2009. As a fully remote agency, we provide the same high-quality service without the overhead of physical offices, passing the savings to our Dallas clients."
  },
  services: {
    title: "Remote Technology Services for Dallas Businesses",
    description: "We provide comprehensive technology solutions tailored to Dallas companies across all industries, delivered remotely with the flexibility modern businesses need."
  },
  contact: {
    title: "Connect with Our Remote Team",
    description: "Available for virtual meetings across all time zones. We use modern collaboration tools to stay connected with our Dallas clients and deliver exceptional results remotely."
  }
};

// Local business directories for citations (for remote agencies)
export const dallasDirectories = [
  {
    name: "Google My Business",
    url: "https://business.google.com",
    priority: "high"
  },
  {
    name: "Bing Places",
    url: "https://www.bingplaces.com",
    priority: "high"
  },
  {
    name: "Yelp Dallas",
    url: "https://www.yelp.com/dallas",
    priority: "high"
  },
  {
    name: "Dallas Chamber of Commerce",
    url: "https://www.dallaschamber.org",
    priority: "high"
  },
  {
    name: "Better Business Bureau Dallas",
    url: "https://www.bbb.org/us/tx/dallas",
    priority: "high"
  },
  {
    name: "Dallas Business Journal",
    url: "https://www.bizjournals.com/dallas",
    priority: "medium"
  },
  {
    name: "D Magazine Business Directory",
    url: "https://directory.dmagazine.com",
    priority: "medium"
  },
  {
    name: "Dallas Tech Hub",
    url: "https://www.dallastechhub.com",
    priority: "medium"
  }
];