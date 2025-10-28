// Local Business Schema Generator for Dallas, Texas
export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  "@id"?: string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification?: Array<{
    "@type": string;
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  image?: string | string[];
  logo?: string;
  sameAs?: string[];
  areaServed?: Array<{
    "@type": string;
    name: string;
  }>;
  hasOfferCatalog?: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
}

// Dallas business information
export const dallasBusinessInfo = {
  name: "Empuls3",
  description: "Premier remote software development and IT consulting agency serving Dallas, Texas businesses. Specializing in custom software solutions, web development, and managed IT services for Dallas companies.",
  // Remote agency - no physical address
  streetAddress: "",
  addressLocality: "Dallas",
  addressRegion: "TX",
  postalCode: "75201",
  addressCountry: "US",
  telephone: "+1-972-798-8914",
  email: "info@empuls3.com",
  // Dallas coordinates (city center for service area)
  latitude: 32.7767,
  longitude: -96.7970,
  priceRange: "$$$$",
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    }
  ],
  socialProfiles: [
    "https://www.linkedin.com/company/empuls3-dallas",
    "https://twitter.com/empuls3dallas",
    "https://www.facebook.com/empuls3dallas"
  ]
};

// Generate Local Business Schema
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://empuls3.com/#organization",
    name: dallasBusinessInfo.name,
    description: dallasBusinessInfo.description,
    url: "https://empuls3.com",
    telephone: dallasBusinessInfo.telephone,
    email: dallasBusinessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: dallasBusinessInfo.addressLocality,
      addressRegion: dallasBusinessInfo.addressRegion,
      postalCode: dallasBusinessInfo.postalCode,
      addressCountry: dallasBusinessInfo.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: dallasBusinessInfo.latitude,
      longitude: dallasBusinessInfo.longitude
    },
    openingHoursSpecification: dallasBusinessInfo.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes
    })),
    priceRange: dallasBusinessInfo.priceRange,
    image: [
      "https://empuls3.com/images/empuls3-dallas-office.jpg",
      "https://empuls3.com/images/dallas-team.jpg"
    ],
    logo: "https://empuls3.com/images/logo.png",
    sameAs: dallasBusinessInfo.socialProfiles,
    areaServed: [
      {
        "@type": "City",
        name: "Dallas"
      },
      {
        "@type": "City",
        name: "Fort Worth"
      },
      {
        "@type": "City",
        name: "Arlington"
      },
      {
        "@type": "City",
        name: "Plano"
      },
      {
        "@type": "City",
        name: "Irving"
      },
      {
        "@type": "City",
        name: "Richardson"
      },
      {
        "@type": "City",
        name: "Frisco"
      },
      {
        "@type": "City",
        name: "McKinney"
      },
      {
        "@type": "State",
        name: "Texas"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development and IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development Dallas",
            description: "Enterprise software solutions tailored for Dallas businesses"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development Dallas",
            description: "Professional web development services for Dallas companies"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting Dallas",
            description: "Expert IT consulting for Dallas-Fort Worth businesses"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services Dallas",
            description: "24/7 managed IT support for Dallas metro area"
          }
        }
      ]
    }
  };
}

// Service-specific schemas
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "ProfessionalService",
      "name": dallasBusinessInfo.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dallas",
        "addressRegion": "TX"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dallas"
    },
    "description": service.description,
    "url": service.url,
    "image": service.image,
    ...(service.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": service.aggregateRating.ratingValue,
        "reviewCount": service.aggregateRating.reviewCount
      }
    })
  };
}

// FAQ Schema generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// BreadcrumbList Schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
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
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    ...(article.image && { "image": article.image }),
    "datePublished": article.datePublished,
    ...(article.dateModified && { "dateModified": article.dateModified }),
    ...(article.author && { "author": { "@type": "Person", "name": article.author } }),
    "publisher": article.publisher || {
      "@type": "Organization",
      "name": dallasBusinessInfo.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://empuls3.com/images/logo.png"
      }
    }
  };
}

// AggregateRating Schema generator
export function generateAggregateRatingSchema(rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating.ratingValue,
    "reviewCount": rating.reviewCount,
    ...(rating.bestRating && { "bestRating": rating.bestRating }),
    ...(rating.worstRating && { "worstRating": rating.worstRating })
  };
}