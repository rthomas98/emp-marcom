import { Check, Clock, Code, Presentation } from 'lucide-react';
import { incubatorOffers, incubatorSteps } from './incubator-content';

const offerIcons = [Presentation, Clock, Code];

export function IncubatorOffers() {
    return (
        <>
            <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="incubator-offers-heading">
                <div className="container mx-auto">
                    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">What We Can Offer</p>
                        <h2 id="incubator-offers-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                            Three ways to support your founders
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Each is agreed with your program in advance, with a clear format and limits, so founders know what to expect.
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {incubatorOffers.map((offer, index) => {
                            const Icon = offerIcons[index];
                            return (
                                <li key={offer.title} className="flex flex-col rounded-lg bg-white p-6 md:p-8">
                                    <Icon className="text-accent-pink mb-5 size-9" aria-hidden="true" />
                                    <h3 className="text-primary text-2xl font-bold">{offer.title}</h3>
                                    <p className="mt-2 text-gray-700">{offer.summary}</p>
                                    <ul className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                                        {offer.points.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <Check className="text-accent-pink mt-0.5 size-5 shrink-0" aria-hidden="true" />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            <section className="px-[5%] py-16 md:py-24" aria-labelledby="incubator-steps-heading">
                <div className="container mx-auto max-w-5xl">
                    <h2 id="incubator-steps-heading" className="font-header text-primary mb-10 text-center text-4xl font-bold md:mb-12 md:text-5xl">
                        How to get started
                    </h2>
                    <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {incubatorSteps.map((step, index) => (
                            <li key={step.title}>
                                <span
                                    className="bg-accent-pink mb-4 flex size-12 items-center justify-center rounded-full text-lg font-bold text-white"
                                    aria-hidden="true"
                                >
                                    {index + 1}
                                </span>
                                <h3 className="text-primary mb-2 text-xl font-bold">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
