import React from 'react';
import { Head, Link } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function Sitemap() {
  return (
    <>
      <Head title="Sitemap | Empuls3" />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-4xl font-bold font-header text-primary md:text-5xl">Sitemap</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-semibold font-header text-primary">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link href={route('home')} className="text-primary hover:text-accent-pink">Home</Link></li>
              <li><Link href={route('solutions')} className="text-primary hover:text-accent-pink">Solutions</Link></li>
              <li><Link href={route('services')} className="text-primary hover:text-accent-pink">Services</Link></li>
              <li><Link href={route('industries')} className="text-primary hover:text-accent-pink">Industries</Link></li>
              <li><Link href={route('company.about')} className="text-primary hover:text-accent-pink">About Us</Link></li>
              <li><Link href={route('contact')} className="text-primary hover:text-accent-pink">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-semibold font-header text-primary">Solutions</h2>
            <ul className="space-y-2">
              <li><Link href={route('solutions.software-development-design')} className="text-primary hover:text-accent-pink">Software Development & Design</Link></li>
              <li><Link href={route('solutions.web-ecommerce-development')} className="text-primary hover:text-accent-pink">Web & E-commerce Development</Link></li>
              <li><Link href={route('solutions.backend-api-development')} className="text-primary hover:text-accent-pink">Back-End & API Development</Link></li>
              <li><Link href={route('solutions.frontend-development-uxui-design')} className="text-primary hover:text-accent-pink">Front-End Development & UX/UI Design</Link></li>
              <li><Link href={route('solutions.mvp-product-development')} className="text-primary hover:text-accent-pink">MVP & Product Development</Link></li>
              <li><Link href={route('solutions.mobile-cross-platform-development')} className="text-primary hover:text-accent-pink">Mobile & Cross-Platform Development</Link></li>
              <li><Link href={route('solutions.hubspot-crm-development')} className="text-primary hover:text-accent-pink">HubSpot & CRM Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-semibold font-header text-primary">Services</h2>
            <ul className="space-y-2">
              <li><Link href={route('services.software-engineering-it-consulting')} className="text-primary hover:text-accent-pink">Software Engineering & IT Consulting</Link></li>
              <li><Link href={route('services.application-devops-services')} className="text-primary hover:text-accent-pink">Application & DevOps Services</Link></li>
              <li><Link href={route('services.managed-it-support-services')} className="text-primary hover:text-accent-pink">Managed IT & Support Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-semibold font-header text-primary">Company</h2>
            <ul className="space-y-2">
              <li><Link href={route('company.about')} className="text-primary hover:text-accent-pink">About Us</Link></li>
              <li><Link href={route('company.partners')} className="text-primary hover:text-accent-pink">Partners</Link></li>
              <li><Link href={route('company.faqs')} className="text-primary hover:text-accent-pink">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-semibold font-header text-primary">Legal</h2>
            <ul className="space-y-2">
              <li><Link href={route('legal.privacy-policy')} className="text-primary hover:text-accent-pink">Privacy Policy</Link></li>
              <li><Link href={route('legal.terms-of-service')} className="text-primary hover:text-accent-pink">Terms of Service</Link></li>
              <li><Link href={route('legal.cookie-policy')} className="text-primary hover:text-accent-pink">Cookie Policy</Link></li>
              <li><Link href={route('legal.accessibility-statement')} className="text-primary hover:text-accent-pink">Accessibility Statement</Link></li>
              <li><Link href={route('legal.sitemap')} className="text-primary hover:text-accent-pink">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Sitemap.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Sitemap | Empuls3" />;
