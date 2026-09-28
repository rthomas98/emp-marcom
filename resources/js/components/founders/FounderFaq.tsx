import { FOUNDER_FAQ_CATEGORY_ID, faqCategories } from '@/components/company/faqs-content';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export const founderFaqs = faqCategories.find((category) => category.id === FOUNDER_FAQ_CATEGORY_ID)?.faqs ?? [];

export function FounderFaq() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="founder-faq-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Founder Questions</p>
                    <h2 id="founder-faq-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Common questions from first-time founders
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        If your question is not here, send it with your project note and Robert will answer it.
                    </p>
                    <Link href="/company/faqs" className="text-primary hover:text-accent-pink mt-6 inline-flex items-center font-medium">
                        See All FAQs
                        <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                    </Link>
                </div>
                <div className="divide-y divide-gray-200 border-y border-gray-200">
                    {founderFaqs.map((faq) => (
                        <details key={faq.question} className="group py-2">
                            <summary className="text-primary flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] [&::-webkit-details-marker]:hidden">
                                {faq.question}
                                <span aria-hidden="true" className="text-accent-pink text-2xl leading-none group-open:hidden">
                                    +
                                </span>
                                <span aria-hidden="true" className="text-accent-pink hidden text-2xl leading-none group-open:inline">
                                    −
                                </span>
                            </summary>
                            <p className="pb-4 leading-7 text-gray-700">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
