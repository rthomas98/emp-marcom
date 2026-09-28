import { portfolioCaptures } from '@/content/portfolio-captures';
import { SOFTWARE_PROJECTS_ANCHOR, softwareProjects } from '@/content/software-projects';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

type WorkItem = {
    heading: string;
    description: string;
    href: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
        capturedOn: string;
    };
};

// Published website case studies only. Scope wording follows the delivered outcomes in pages/case-study.tsx.
// Do not add engagements that are not published as case studies.
const hebertCapture = portfolioCaptures['hebert-thomas-law-website-refresh'];
const codegigCapture = portfolioCaptures['codegig-strategic-pivot-new-website-for-new-audiences'];

const workItems: WorkItem[] = [
    {
        heading: 'Hebert Thomas Law Website Refresh',
        description:
            'Website refresh for Hebert-Thomas Law, PLLC. We delivered a responsive WordPress website with updated information architecture, service presentation, and calls to action.',
        href: '/case-studies/hebert-thomas-law-website-refresh',
        image: {
            src: hebertCapture.src,
            alt: 'Screenshot of the Hebert-Thomas Law, PLLC website homepage with the headline “Empowering Your Business Through Legal Excellence”',
            width: hebertCapture.width,
            height: hebertCapture.height,
            capturedOn: hebertCapture.capturedOn,
        },
    },
    {
        heading: 'CodeGig Website',
        description:
            'Commissioned website work for CodeGig. We delivered a new website, message structure, and service architecture aligned to CodeGig’s AI and machine-learning positioning.',
        href: '/case-studies/codegig-strategic-pivot-new-website-for-new-audiences',
        image: {
            src: codegigCapture.src,
            alt: 'Screenshot of the CodeGig website homepage with the headline “Empowering Your Business with Intelligent Solutions”',
            width: codegigCapture.width,
            height: codegigCapture.height,
            capturedOn: codegigCapture.capturedOn,
        },
    },
];

type TabItemProps = {
    tabItem: WorkItem;
    index: number;
    activeTab: number;
};

const TabItem = ({ tabItem, index, activeTab }: TabItemProps) => {
    if (index !== activeTab) {
        return null;
    }
    return (
        <motion.figure
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative mb-6 flex size-full flex-col items-center justify-center md:mb-0"
        >
            <img
                src={tabItem.image.src}
                alt={tabItem.image.alt}
                className="w-full rounded-lg border border-gray-200"
                loading="lazy"
                width={tabItem.image.width}
                height={tabItem.image.height}
            />
            <figcaption className="mt-3 self-start text-sm text-gray-600">Live site captured {tabItem.image.capturedOn}</figcaption>
        </motion.figure>
    );
};

const intro = {
    tagline: 'Recent Work',
    heading: 'Websites We Have Delivered',
    description: 'Published case studies from our website work. Select a project to see the delivered scope, then read the full case study.',
};

export function Partners() {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef<Array<HTMLDivElement | null>>([]);

    const activeItem = workItems[activeTab];

    const setActiveTabSetter = (index: number) => () => setActiveTab(index);

    const focusTab = (index: number) => {
        const nextIndex = (index + workItems.length) % workItems.length;
        setActiveTab(nextIndex);
        tabRefs.current[nextIndex]?.focus();
    };

    const handleTabKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveTab(index);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            focusTab(index + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            focusTab(index - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            focusTab(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            focusTab(workItems.length - 1);
        }
    };

    const getActiveTabButtonStyles = (index: number) => {
        return clsx('cursor-pointer border-b border-gray-200 py-4', {
            'border-primary opacity-100': activeTab === index,
            'opacity-50 hover:opacity-75': activeTab !== index,
        });
    };

    const getActiveTabButtonContentStyles = (index: number) => {
        return {
            height: activeTab === index ? 'auto' : 0,
            opacity: activeTab === index ? 1 : 0,
        };
    };

    return (
        <section id="partners" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="partners-heading">
            <div className="container mx-auto">
                <div className="relative flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-6 lg:pr-10">
                        <div className="mb-8 md:hidden">
                            <p className="text-accent-pink mb-3 font-semibold md:mb-4">{intro.tagline}</p>
                            <h2 id="partners-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                                {intro.heading}
                            </h2>
                            <p className="text-gray-700 md:text-lg">{intro.description}</p>
                        </div>
                        <AnimatePresence initial={false}>
                            {workItems.map((item, index) => (
                                <TabItem key={item.href} tabItem={item} index={index} activeTab={activeTab} />
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
                        <div className="mb-8 hidden md:block">
                            <p className="text-accent-pink mb-3 font-semibold md:mb-4">{intro.tagline}</p>
                            <h2 className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">{intro.heading}</h2>
                            <p className="text-gray-700 md:text-lg">{intro.description}</p>
                        </div>
                        <div className="static flex flex-col flex-wrap justify-stretch md:block">
                            <div
                                className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch"
                                role="tablist"
                                aria-label="Published website projects"
                                aria-orientation="vertical"
                            >
                                {workItems.map((item, index) => (
                                    <div
                                        key={item.href}
                                        ref={(el) => {
                                            tabRefs.current[index] = el;
                                        }}
                                        onClick={setActiveTabSetter(index)}
                                        className={getActiveTabButtonStyles(index)}
                                        role="tab"
                                        id={`work-tab-${index}`}
                                        aria-selected={activeTab === index}
                                        aria-controls={`work-tabpanel-${index}`}
                                        tabIndex={activeTab === index ? 0 : -1}
                                        onKeyDown={handleTabKeyDown(index)}
                                    >
                                        <h3 className="text-primary text-xl font-bold md:text-2xl">{item.heading}</h3>
                                        <motion.div
                                            initial={false}
                                            animate={getActiveTabButtonContentStyles(index)}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                            role="tabpanel"
                                            id={`work-tabpanel-${index}`}
                                            aria-labelledby={`work-tab-${index}`}
                                            hidden={activeTab !== index}
                                        >
                                            <p className="mt-2 text-gray-700">{item.description}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Case study links">
                            <Link
                                href={activeItem.href}
                                className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label={`Read the ${activeItem.heading} case study`}
                            >
                                Read the Case Study
                            </Link>
                            <Link href="/case-studies" className="text-primary hover:text-accent-pink inline-flex items-center">
                                View All Case Studies
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5 md:mt-10">
                            <h3 className="text-primary text-lg font-bold">Software in progress</h3>
                            <p className="mt-1 text-sm text-gray-700">Current software and platform projects, with status and scope for each.</p>
                            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Current software projects">
                                {softwareProjects.map((project) => (
                                    <li key={project.id}>
                                        <Link
                                            href={`/case-studies#${project.id}`}
                                            className="text-primary hover:border-accent-pink focus-visible:ring-accent-pink inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2"
                                        >
                                            {project.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`/case-studies#${SOFTWARE_PROJECTS_ANCHOR}`}
                                className="text-primary hover:text-accent-pink mt-4 inline-flex items-center text-sm font-medium"
                            >
                                See All Software Projects
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
