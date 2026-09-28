import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { faqCategories } from './faqs-content';

export function FAQsCategories() {
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({ [faqCategories[0].id]: true });
    const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

    const toggleCategory = (id: string) => setOpenCategories((previous) => ({ ...previous, [id]: !previous[id] }));
    const toggleQuestion = (id: string) => setOpenQuestions((previous) => ({ ...previous, [id]: !previous[id] }));

    return (
        <section id="faq-categories" className="scroll-mt-24 bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="faq-categories-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <header className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Frequently Asked Questions</p>
                        <h2 id="faq-categories-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl">
                            Answers Before You Reach Out
                        </h2>
                        <p className="md:text-md text-gray-700">
                            Browse by topic: getting started, how assessments and delivery work, project size, and how access and ownership are
                            handled.
                        </p>
                    </header>
                </div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {faqCategories.map((category) => {
                        const isOpen = !!openCategories[category.id];
                        const buttonId = `faq-category-${category.id}`;
                        const panelId = `faq-category-${category.id}-panel`;

                        return (
                            <div key={category.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                                <h3>
                                    <button
                                        type="button"
                                        id={buttonId}
                                        className="flex w-full items-center justify-between bg-white p-6 text-left transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 md:p-8"
                                        onClick={() => toggleCategory(category.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        <span>
                                            <span className="block text-xl font-bold text-[#1F1946] md:text-2xl">{category.title}</span>
                                            <span className="mt-2 block text-gray-700">{category.description}</span>
                                        </span>
                                        <span
                                            className="ml-4 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10 text-[#BD1550]"
                                            aria-hidden="true"
                                        >
                                            {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                                        </span>
                                    </button>
                                </h3>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    hidden={!isOpen}
                                    className="border-t border-gray-200 px-6 py-4 md:px-8"
                                >
                                    <ul className="divide-y divide-gray-200">
                                        {category.faqs.map((faq, index) => {
                                            const questionId = `faq-${category.id}-q${index + 1}`;
                                            const answerId = `${questionId}-answer`;
                                            const isQuestionOpen = !!openQuestions[questionId];

                                            return (
                                                <li key={faq.question} className="py-4">
                                                    <h4>
                                                        <button
                                                            type="button"
                                                            id={questionId}
                                                            className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                                            onClick={() => toggleQuestion(questionId)}
                                                            aria-expanded={isQuestionOpen}
                                                            aria-controls={answerId}
                                                        >
                                                            <span className="text-lg font-medium text-[#1F1946]">{faq.question}</span>
                                                            <span className="flex-shrink-0 text-[#BD1550]" aria-hidden="true">
                                                                {isQuestionOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                                                            </span>
                                                        </button>
                                                    </h4>
                                                    <div id={answerId} hidden={!isQuestionOpen} className="mt-3 pr-9 leading-7 text-gray-700">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
