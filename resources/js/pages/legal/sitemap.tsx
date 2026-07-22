import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Sitemap() {
    return (
        <>
            <Head title="Sitemap | Empuls3">
                <meta
                    name="description"
                    content="Browse the public pages for Empuls3 solutions, services, client work, company information, Dallas resources, and legal policies."
                />
            </Head>
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <h1 className="font-header text-primary mb-8 text-4xl font-bold md:text-5xl">Sitemap</h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Main Pages</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('home')} className="text-primary hover:text-accent-pink">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions')} className="text-primary hover:text-accent-pink">
                                    Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href={route('services')} className="text-primary hover:text-accent-pink">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href={route('industries')} className="text-primary hover:text-accent-pink">
                                    Industries
                                </Link>
                            </li>
                            <li>
                                <Link href={route('case-studies.index')} className="text-primary hover:text-accent-pink">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href={route('company.about')} className="text-primary hover:text-accent-pink">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={route('contact')} className="text-primary hover:text-accent-pink">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Published Work</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/case-studies/hebert-thomas-law-website-refresh" className="text-primary hover:text-accent-pink">
                                    Hebert Thomas Law Website Refresh
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies/solushiens-modern-website-redesign" className="text-primary hover:text-accent-pink">
                                    Solushiens Website Redesign
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies/codegig-strategic-pivot-new-website-for-new-audiences"
                                    className="text-primary hover:text-accent-pink"
                                >
                                    CodeGig Website Repositioning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Dallas–Fort Worth</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('dallas.software-development')} className="text-primary hover:text-accent-pink">
                                    Software Rescue & Modernization
                                </Link>
                            </li>
                            <li>
                                <Link href={route('dallas.web-development')} className="text-primary hover:text-accent-pink">
                                    Website Modernization
                                </Link>
                            </li>
                            <li>
                                <Link href={route('dallas.it-consulting')} className="text-primary hover:text-accent-pink">
                                    Senior Engineering Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href={route('dallas.managed-it-services')} className="text-primary hover:text-accent-pink">
                                    Managed IT Services
                                </Link>
                            </li>
                            <li>
                                <Link href={route('dallas.mobile-app-development')} className="text-primary hover:text-accent-pink">
                                    Business Mobile Applications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Solutions</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('solutions.software-development-design')} className="text-primary hover:text-accent-pink">
                                    Software Development & Design
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.web-ecommerce-development')} className="text-primary hover:text-accent-pink">
                                    Web & E-commerce Development
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.backend-api-development')} className="text-primary hover:text-accent-pink">
                                    Back-End & API Development
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.frontend-development-uxui-design')} className="text-primary hover:text-accent-pink">
                                    Front-End Development & UX/UI Design
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.mvp-product-development')} className="text-primary hover:text-accent-pink">
                                    MVP & Product Development
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.mobile-cross-platform-development')} className="text-primary hover:text-accent-pink">
                                    Mobile & Cross-Platform Development
                                </Link>
                            </li>
                            <li>
                                <Link href={route('solutions.hubspot-crm-development')} className="text-primary hover:text-accent-pink">
                                    HubSpot & CRM Development
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('services.software-engineering-it-consulting')} className="text-primary hover:text-accent-pink">
                                    Software Engineering & IT Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href={route('services.application-devops-services')} className="text-primary hover:text-accent-pink">
                                    Application & DevOps Services
                                </Link>
                            </li>
                            <li>
                                <Link href={route('services.managed-it-support-services')} className="text-primary hover:text-accent-pink">
                                    Managed IT & Support Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Company</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('company.about')} className="text-primary hover:text-accent-pink">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={route('company.partners')} className="text-primary hover:text-accent-pink">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href={route('company.faqs')} className="text-primary hover:text-accent-pink">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-header text-primary mb-4 text-2xl font-semibold">Legal</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('legal.privacy-policy')} className="text-primary hover:text-accent-pink">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={route('legal.terms-of-service')} className="text-primary hover:text-accent-pink">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href={route('legal.cookie-policy')} className="text-primary hover:text-accent-pink">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={route('legal.accessibility-statement')} className="text-primary hover:text-accent-pink">
                                    Accessibility Statement
                                </Link>
                            </li>
                            <li>
                                <Link href={route('legal.sitemap')} className="text-primary hover:text-accent-pink">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

Sitemap.layout = (page: React.ReactNode) => <SiteLayout title="Sitemap | Empuls3">{page}</SiteLayout>;
