import { contactHref } from '@/utils/contact-intent';
import { Dialog, Popover } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { BarChart3, ChevronDown, Code, Database, Globe, Layers, LineChart, Menu, Rocket, Smartphone, X } from 'lucide-react';
import { useState } from 'react';

const solutions = [
    { name: 'Solutions Overview', href: '/solutions', description: 'What we build and improve', icon: LineChart },
    {
        name: 'Custom Software Development',
        href: '/solutions/software-development-design',
        description: 'New business software or improvements to yours',
        icon: Code,
    },
    {
        name: 'Back-End, API & Integrations',
        href: '/solutions/backend-api-development',
        description: 'Connect systems and reduce manual work',
        icon: Database,
    },
    {
        name: 'Website & E-commerce Development',
        href: '/solutions/web-ecommerce-development',
        description: 'New websites or updates to the one you have',
        icon: Globe,
    },
    {
        name: 'Frontend & UX/UI Design',
        href: '/solutions/frontend-development-uxui-design',
        description: 'Easy-to-use screens for websites and apps',
        icon: Layers,
    },
    {
        name: 'HubSpot CRM Setup & Integration',
        href: '/solutions/hubspot-crm-development',
        description: 'Cleaner contacts, handoffs, and reports',
        icon: BarChart3,
    },
    {
        name: 'Mobile App Development',
        href: '/solutions/mobile-cross-platform-development',
        description: 'Apps for your customers and field teams',
        icon: Smartphone,
    },
    {
        name: 'MVP & First-Version Products',
        href: '/solutions/mvp-product-development',
        description: 'Plan, test, and launch a first version',
        icon: Rocket,
    },
];

const services = [
    { name: 'Services Overview', href: '/services', description: 'How we work with you, project or ongoing', icon: LineChart },
    {
        name: 'Software Engineering & IT Consulting',
        href: '/services/software-engineering-it-consulting',
        description: 'Senior engineering advice and ongoing support',
        icon: Code,
    },
    {
        name: 'Application Delivery & DevOps',
        href: '/services/application-devops-services',
        description: 'Release software updates safely',
        icon: Layers,
    },
    {
        name: 'Managed IT Services',
        href: '/services/managed-it-support-services',
        description: 'Remote support for your team and systems',
        icon: Smartphone,
    },
];

const FOUNDERS_HREF = '/for-founders';

const company = [
    { name: 'About Empuls3', href: '/company/about', description: 'Founded in 2009 by Robert Thomas', icon: Rocket },
    { name: 'Collaboration Model', href: '/company/partners', description: 'Working with agencies and in-house teams', icon: Globe },
    { name: 'FAQs', href: '/company/faqs', description: 'Getting started, cost, ownership, and security', icon: Database },
];

function normalizeUrl(urlString: string) {
    try {
        const urlObject = new URL(urlString, window.location.origin);
        return urlObject.pathname.replace(/\/$/, '');
    } catch {
        return urlString.replace(/\/$/, '');
    }
}

interface MainMenuProps {
    className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Check if a link is active
    const isActive = (href: string) => {
        const currentPath = normalizeUrl(url);
        const linkPath = normalizeUrl(href);

        // Direct match only - no parent route matching
        return currentPath === linkPath;
    };

    return (
        <header className={`fixed top-0 right-0 left-0 z-50 bg-white ${className}`}>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex xl:flex-1">
                    <Link href={route('home')} className="-m-1.5 flex items-center gap-2 p-1.5">
                        <span className="sr-only">Empuls3</span>
                        <img alt="Empuls3" src="/images/emp-logo.svg" className="h-8 w-auto border-0" style={{ border: 'none' }} />
                        <span className="text-primary text-xl font-bold">Empuls3</span>
                    </Link>
                </div>
                <div className="flex xl:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-primary -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="size-6" />
                    </button>
                </div>
                <Popover.Group className="hidden xl:flex xl:items-center xl:gap-x-10">
                    <Link
                        href={FOUNDERS_HREF}
                        className={`text-sm font-semibold ${isActive(FOUNDERS_HREF) ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                    >
                        For Founders
                    </Link>

                    <Popover className="relative">
                        <Popover.Button
                            className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/solutions') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                        >
                            Solutions
                            <ChevronDown className="size-5 flex-none text-gray-400" />
                        </Popover.Button>

                        <Popover.Panel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {solutions.map((item) => (
                                    <div
                                        key={item.name}
                                        className={`group relative rounded-lg p-4 text-sm hover:bg-[#1F1946] ${isActive(item.href) ? 'bg-[#1F1946]' : ''}`}
                                    >
                                        <div className="flex items-start gap-x-3">
                                            <div
                                                className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${isActive(item.href) ? 'bg-[#BD1550]/20' : 'bg-[#BD1550]/10 group-hover:bg-[#BD1550]/20'}`}
                                            >
                                                <item.icon className="h-6 w-6 text-[#BD1550] group-hover:text-[#BD1550]" />
                                            </div>
                                            <div>
                                                <Link
                                                    href={item.href}
                                                    className={`block text-sm font-semibold ${isActive(item.href) ? 'text-white' : 'text-primary group-hover:text-white'}`}
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p
                                                    className={`mt-1 text-sm ${isActive(item.href) ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button
                            className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/services') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                        >
                            Services
                            <ChevronDown className="size-5 flex-none text-gray-400" />
                        </Popover.Button>

                        <Popover.Panel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {services.map((item) => (
                                    <div
                                        key={item.name}
                                        className={`group relative rounded-lg p-4 text-sm hover:bg-[#1F1946] ${isActive(item.href) ? 'bg-[#1F1946]' : ''}`}
                                    >
                                        <div className="flex items-start gap-x-3">
                                            <div
                                                className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${isActive(item.href) ? 'bg-[#BD1550]/20' : 'bg-[#BD1550]/10 group-hover:bg-[#BD1550]/20'}`}
                                            >
                                                <item.icon className="h-6 w-6 text-[#BD1550] group-hover:text-[#BD1550]" />
                                            </div>
                                            <div>
                                                <Link
                                                    href={item.href}
                                                    className={`block text-sm font-semibold ${isActive(item.href) ? 'text-white' : 'text-primary group-hover:text-white'}`}
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p
                                                    className={`mt-1 text-sm ${isActive(item.href) ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Popover>

                    <Link
                        href={route('industries')}
                        className={`text-sm font-semibold ${isActive('/industries') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                    >
                        Situations We Solve
                    </Link>

                    <Link
                        href={route('case-studies.index')}
                        className={`text-sm font-semibold ${isActive('/case-studies') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                    >
                        Case Studies
                    </Link>

                    <Popover className="relative">
                        <Popover.Button
                            className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/company') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                        >
                            Company
                            <ChevronDown className="size-5 flex-none text-gray-400" />
                        </Popover.Button>

                        <Popover.Panel className="absolute top-full -left-8 z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                            {company.map((item) => (
                                <div
                                    key={item.name}
                                    className={`group relative rounded-lg p-4 hover:bg-[#1F1946] ${isActive(item.href) ? 'bg-[#1F1946]' : ''}`}
                                >
                                    <div className="flex items-start gap-x-3">
                                        <div
                                            className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${isActive(item.href) ? 'bg-[#BD1550]/20' : 'bg-[#BD1550]/10 group-hover:bg-[#BD1550]/20'}`}
                                        >
                                            {item.icon && <item.icon className="h-6 w-6 text-[#BD1550] group-hover:text-[#BD1550]" />}
                                        </div>
                                        <div>
                                            <Link
                                                href={item.href}
                                                className={`block text-sm font-semibold ${isActive(item.href) ? 'text-white' : 'text-primary group-hover:text-white'}`}
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p
                                                className={`mt-1 text-sm ${isActive(item.href) ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Popover.Panel>
                    </Popover>
                </Popover.Group>
                <div className="hidden xl:flex xl:flex-1 xl:justify-end">
                    <Link
                        href={contactHref('project')}
                        className="bg-accent-pink hover:bg-accent-pink/90 rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm"
                    >
                        Let’s Talk About Your Project
                    </Link>
                </div>
            </nav>

            <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href={route('home')} className="-m-1.5 flex items-center p-1.5">
                            <span className="sr-only">Empuls3</span>
                            <img alt="Empuls3" src="/images/emp-logo.svg" className="h-8 w-auto" />
                        </Link>
                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="text-primary -m-2.5 rounded-md p-2.5">
                            <span className="sr-only">Close menu</span>
                            <X className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href={FOUNDERS_HREF}
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive(FOUNDERS_HREF) ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    For Founders
                                </Link>

                                <div className="mt-4">
                                    <Link
                                        href={route('solutions')}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive('/solutions') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                    >
                                        Solutions Overview
                                    </Link>
                                    {solutions.slice(1).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 pl-6 text-base font-semibold ${isActive(item.href) ? 'text-accent-pink bg-[#1F1946]/10' : 'text-primary/80 hover:text-accent-pink'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href={route('services')}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive('/services') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                    >
                                        Services Overview
                                    </Link>
                                    {services.slice(1).map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 pl-6 text-base font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary/80 hover:text-accent-pink'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href={route('industries')}
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive('/industries') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Situations We Solve
                                </Link>

                                <Link
                                    href={route('case-studies.index')}
                                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive('/case-studies') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Case Studies
                                </Link>

                                <div className="mt-4">
                                    {company.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky bottom-0 grid grid-cols-1 bg-gray-50 text-center">
                        <Link
                            href={contactHref('project')}
                            className="bg-accent-pink hover:bg-accent-pink/90 p-3 text-base font-semibold text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Let’s Talk About Your Project
                        </Link>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
