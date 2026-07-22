import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

export interface LegalSection {
    heading: string;
    content: ReactNode;
}

interface LegalPageProps {
    title: string;
    description: string;
    introduction: string;
    sections: LegalSection[];
}

export function LegalPage({ title, description, introduction, sections }: LegalPageProps) {
    return (
        <SiteLayout title={`${title} | Empuls3`}>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:title" content={`${title} | Empuls3`} />
                <meta property="og:description" content={description} />
            </Head>
            <section className="px-[5%] py-16 md:py-24">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-primary text-4xl font-bold md:text-6xl">{title}</h1>
                    <p className="mt-4 text-sm text-gray-500">Last updated: July 22, 2026</p>
                    <p className="mt-8 text-lg leading-8 text-gray-700">{introduction}</p>

                    <div className="mt-12 space-y-12">
                        {sections.map((section) => (
                            <section key={section.heading}>
                                <h2 className="text-primary text-2xl font-bold md:text-3xl">{section.heading}</h2>
                                <div className="mt-4 space-y-4 leading-7 text-gray-700">{section.content}</div>
                            </section>
                        ))}
                    </div>

                    <div className="mt-14 rounded-xl bg-gray-50 p-6 text-gray-700">
                        <h2 className="text-primary text-xl font-bold">Contact</h2>
                        <p className="mt-3">
                            Questions about this page may be sent to{' '}
                            <a href="mailto:info@empuls3.com" className="text-accent-pink font-semibold hover:underline">
                                info@empuls3.com
                            </a>{' '}
                            or discussed at{' '}
                            <a href="tel:+19727988914" className="text-accent-pink font-semibold hover:underline">
                                (972) 798-8914
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
