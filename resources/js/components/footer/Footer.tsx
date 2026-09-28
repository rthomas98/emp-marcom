import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const companyLinks = [
    { label: 'Solutions', routeName: 'solutions' },
    { label: 'Case Studies', routeName: 'case-studies.index' },
    { label: 'About Us', routeName: 'company.about' },
    { label: 'FAQs', routeName: 'company.faqs' },
    { label: 'Contact Us', routeName: 'contact' },
];

const legalLinks = [
    { label: 'Privacy Policy', routeName: 'legal.privacy-policy' },
    { label: 'Terms of Service', routeName: 'legal.terms-of-service' },
    { label: 'Cookie Policy', routeName: 'legal.cookie-policy' },
    { label: 'Accessibility Statement', routeName: 'legal.accessibility-statement' },
    { label: 'Sitemap', routeName: 'legal.sitemap' },
];

const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/empuls3/', icon: Facebook },
    { label: 'Instagram', href: 'https://www.instagram.com/empuls3/?hl=en', icon: Instagram },
    { label: 'X (Twitter)', href: 'https://x.com/empuls3', icon: Twitter },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/empuls3/?viewAsMember=true', icon: Linkedin },
    { label: 'YouTube', href: 'https://www.youtube.com/@empuls3', icon: Youtube },
];

const groupHeadingClass = 'mb-4 text-sm font-semibold tracking-wide text-white/60 uppercase';
const linkClass = 'text-sm text-white/85 transition-colors hover:text-white focus:outline-none focus-visible:underline';

export default function Footer() {
    return (
        <footer id="footer" className="bg-primary px-[5%] pt-12 pb-8 text-white md:pt-16 lg:pt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 lg:grid-cols-12 lg:gap-x-12 lg:pb-14">
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-5">
                        <Link href={route('home')} className="inline-flex items-center">
                            <img src="/images/w-emp-logo.svg" alt="" className="h-8 w-auto" width="32" height="32" />
                            <span className="font-header ml-2 text-xl font-bold">Empuls3</span>
                        </Link>
                        <h2 className="font-header mt-6 text-3xl leading-tight font-bold lg:text-4xl">Let&rsquo;s Talk About Your Next Project</h2>
                        <p className="mt-4 max-w-md text-white/80">
                            Planning a new website or app, or need help with software you already rely on? Empuls3 has worked directly with
                            Dallas–Fort Worth businesses since 2009.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href={contactHref('project')}
                                className="bg-accent-pink hover:bg-accent-pink/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                            >
                                Let’s Talk About Your Project
                            </Link>
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-white/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                            >
                                Start a New Project
                            </Link>
                        </div>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1 lg:col-span-3">
                        <h3 className={groupHeadingClass}>Contact</h3>
                        <ul className="space-y-3 text-sm text-white/85">
                            <li className="flex items-start gap-2">
                                <Phone className="mt-0.5 size-4 flex-none text-white/60" aria-hidden="true" />
                                <a href="tel:+19727988914" className={linkClass}>
                                    (972) 798-8914
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="mt-0.5 size-4 flex-none text-white/60" aria-hidden="true" />
                                <a href="mailto:info@empuls3.com" className={linkClass}>
                                    info@empuls3.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 size-4 flex-none text-white/60" aria-hidden="true" />
                                <span>Serving Dallas–Fort Worth remotely</span>
                            </li>
                        </ul>
                    </div>

                    <nav aria-label="Company" className="lg:col-span-2">
                        <h3 className={groupHeadingClass}>Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.routeName}>
                                    <Link href={route(link.routeName)} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Legal" className="lg:col-span-2">
                        <h3 className={groupHeadingClass}>Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.routeName}>
                                    <Link href={route(link.routeName)} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex flex-col-reverse items-start justify-between gap-4 pt-6 text-sm md:flex-row md:items-center">
                    <p className="text-white/70">© {new Date().getFullYear()} Empuls3. All rights reserved.</p>
                    <ul className="flex items-center gap-3" aria-label="Empuls3 on social media">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Empuls3 on ${label} (opens in a new tab)`}
                                    className="hover:text-accent-pink inline-flex size-9 items-center justify-center rounded-full text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    <Icon className="size-5" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
