import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-primary px-[5%] py-12 text-white md:py-18 lg:py-20">
            <div className="container mx-auto">
                <div className="border-b border-white/20">
                    <div className="mb-12 grid grid-cols-1 gap-x-[8vw] gap-y-12 md:mb-18 md:gap-y-16 lg:mb-20 lg:grid-cols-[1fr_0.5fr] lg:gap-y-20">
                        <div className="rb-6 max-w-md">
                            <h2 className="font-header mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                                Senior Engineering Support for Dallas–Fort Worth Businesses
                            </h2>
                            <p className="text-white/80">
                                Serving established Dallas–Fort Worth businesses since 2009, Empuls3 rescues aging software, connects critical
                                systems, and provides ongoing senior-level engineering support.
                            </p>
                            <div className="mt-4 space-y-2 text-white/80">
                                <div className="flex items-center gap-2">
                                    <MapPin className="size-5" />
                                    <span>Serving Dallas, TX Remotely</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="size-5" />
                                    <a href="tel:+19727988914" className="hover:text-white">
                                        (972) 798-8914
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="size-5" />
                                    <a href="mailto:info@empuls3.com" className="hover:text-white">
                                        info@empuls3.com
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                                <Link
                                    href={route('solutions')}
                                    className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                >
                                    Review Our Solutions
                                </Link>
                                <Link
                                    href={route('contact')}
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                                >
                                    Request a Software Review
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
                            <ul>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('legal.privacy-policy')}>Privacy Policy</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('legal.terms-of-service')}>Terms of Service</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('legal.cookie-policy')}>Cookie Policy</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('legal.accessibility-statement')}>Accessibility Statement</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('legal.sitemap')}>Sitemap</Link>
                                </li>
                            </ul>
                            <ul>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('contact')}>Contact Us</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('case-studies.index')}>Case Studies</Link>
                                </li>
                                <li className="py-2 text-sm font-semibold">
                                    <Link href={route('company.about')}>About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rb-6 col-span-1 flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8 lg:col-span-2">
                        <Link href={route('home')} className="flex items-center">
                            <img src="/images/w-emp-logo.svg" alt="Empuls3 Logo" className="mb-6 inline-block h-8 sm:mb-0" />
                            <span className="font-header ml-2 text-xl font-bold text-white">Empuls3</span>
                        </Link>
                        <div className="ml-3 flex">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_developers_development_standing_76853597-7d40-4b8f-be75-50c1ad6629b1_3 (1).png"
                                alt="Empuls3 team member - Software developer"
                                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
                                loading="lazy"
                            />
                            <img
                                src="/images/site-images/rob_thomas23_An_African_American_developer_holding_an_iPhone__a97a063e-c229-46b4-842d-bcf7c11542ff_2.png"
                                alt="Empuls3 team member - Mobile developer"
                                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
                                loading="lazy"
                            />
                            <img
                                src="/images/site-images/rob_thomas23_Young_African_American_designer_developing_websi_2331add1-208d-4bd5-94de-874c37b309b8_2 (1).png"
                                alt="Empuls3 team member - Web designer"
                                className="relative -ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
                    <p className="text-white/70">© {new Date().getFullYear()} Empuls3. All rights reserved.</p>
                    <div className="mb-4 grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 md:mb-0">
                        <a href="https://www.facebook.com/empuls3/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="hover:text-accent-pink size-6 text-white transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/empuls3/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="hover:text-accent-pink size-6 text-white transition-colors" />
                        </a>
                        <a href="https://x.com/empuls3" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="hover:text-accent-pink size-6 text-white transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/empuls3/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="hover:text-accent-pink size-6 text-white transition-colors" />
                        </a>
                        <a href="https://www.youtube.com/@empuls3" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube className="hover:text-accent-pink size-6 text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
