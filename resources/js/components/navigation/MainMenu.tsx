import { useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { Dialog, Popover } from '@headlessui/react'
import { ChevronDown, Menu, X, Code, Globe, Database, Layers, Rocket, Smartphone, BarChart3, LineChart } from 'lucide-react'

interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {
  const { url } = usePage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Solutions dropdown items
  const solutions = [
    { name: 'Solutions Overview', href: route('solutions'), description: 'Explore our full range of solutions', icon: LineChart },
    { name: 'Software Development & Design', href: route('solutions.software-development-design'), description: 'Custom software solutions tailored to your needs', icon: Code },
    { name: 'Web & E-commerce Development', href: route('solutions.web-ecommerce-development'), description: 'Build powerful online stores and web applications', icon: Globe },
    { name: 'Back-End & API Development', href: route('solutions.backend-api-development'), description: 'Robust backend systems and API integrations', icon: Database },
    { name: 'Front-End Development & UX/UI Design', href: route('solutions.frontend-development-uxui-design'), description: 'Beautiful, intuitive user interfaces and experiences', icon: Layers },
    { name: 'MVP & Product Development', href: route('solutions.mvp-product-development'), description: 'Bring your product ideas to market quickly', icon: Rocket },
    { name: 'Mobile & Cross-Platform Development', href: route('solutions.mobile-cross-platform-development'), description: 'Native and cross-platform mobile applications', icon: Smartphone },
    { name: 'HubSpot & CRM Development', href: route('solutions.hubspot-crm-development'), description: 'Customized CRM solutions and integrations', icon: BarChart3 },
  ];

  // Services dropdown items
  const services = [
    { name: 'Services Overview', href: route('services'), description: 'Explore our comprehensive service offerings', icon: LineChart },
    { name: 'Software Engineering & IT Consulting', href: route('services.software-engineering-it-consulting'), description: 'Expert guidance for your technology needs', icon: Code },
    { name: 'Application & DevOps Services', href: route('services.application-devops-services'), description: 'Streamline your development and operations', icon: Layers },
    { name: 'Managed IT & Support Services', href: route('services.managed-it-support-services'), description: 'Ongoing support and maintenance for your systems', icon: Smartphone },
  ];

  // Company dropdown items
  const company = [
    { name: 'About Us', href: route('company.about'), description: 'Learn more about our company values and mission' },
    { name: 'Partners', href: route('company.partners'), description: 'Meet our strategic technology partners' },
    { name: 'FAQs', href: route('company.faqs'), description: 'Answers to commonly asked questions' },
  ];



  // Check if a link is active
  const isActive = (href: string) => {
    return url.startsWith(href);
  };

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${className}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={route('home')} className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Empuls3</span>
            <img
              alt="Empuls3"
              src="/images/emp-logo.svg"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-primary font-header hidden lg:inline">Empuls3</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="size-6" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/solutions') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}>
              Solutions
              <ChevronDown className="size-5 flex-none text-gray-400" />
            </Popover.Button>

            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm hover:bg-muted"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="size-6 text-primary group-hover:text-accent-pink" />
                    </div>
                    <div className="flex-auto">
                      <Link 
                        href={item.href} 
                        className={`block font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary group-hover:text-accent-pink'}`}
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-700 group-hover:text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>

          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/services') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}>
              Services
              <ChevronDown className="size-5 flex-none text-gray-400" />
            </Popover.Button>

            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm hover:bg-muted"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="size-6 text-primary group-hover:text-accent-pink" />
                    </div>
                    <div className="flex-auto">
                      <Link 
                        href={item.href} 
                        className={`block font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary group-hover:text-accent-pink'}`}
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-700 group-hover:text-white">{item.description}</p>
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
            Industries
          </Link>

          <Popover className="relative">
            <Popover.Button className={`flex items-center gap-x-1 text-sm font-semibold ${isActive('/company') ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}>
              Company
              <ChevronDown className="size-5 flex-none text-gray-400" />
            </Popover.Button>

            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
              {company.map((item) => (
                <div key={item.name} className="relative rounded-lg p-4 hover:bg-muted">
                  <Link 
                    href={item.href} 
                    className={`block text-sm font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary hover:text-accent-pink'}`}
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-sm text-gray-700 group-hover:text-white">{item.description}</p>
                </div>
              ))}
            </Popover.Panel>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href={route('contact')} 
            className="rounded-md bg-accent-pink px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-pink/90"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href={route('home')} className="-m-1.5 p-1.5">
                <span className="sr-only">Empuls3</span>
                <img
                  alt="Empuls3"
                  src="/images/emp-logo.svg"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-primary"
              >
                <span className="sr-only">Close menu</span>
                <X className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div>
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
                        className={`-mx-3 block rounded-lg px-3 py-2 pl-6 text-base font-semibold ${isActive(item.href) ? 'text-accent-pink' : 'text-primary/80 hover:text-accent-pink'}`}
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
                    Industries
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
          </div>
          <div className="sticky bottom-0 grid grid-cols-1 bg-gray-50 text-center">
            <Link
              href={route('contact')}
              className="p-3 text-base font-semibold text-white bg-accent-pink hover:bg-accent-pink/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
