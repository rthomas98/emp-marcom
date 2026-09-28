type Testimonial = {
    quote: string;
    name: string;
    position: string;
    companyName: string;
    avatar: string;
    relationship: 'Client' | 'Colleague recommendation';
};

// Verbatim excerpts from the approved quotes in components/home/Testimonials.tsx.
const testimonials: Testimonial[] = [
    {
        quote: 'I gladly managed and collaborated with Rob at Monkeytag. When Rob joined our company, he jumped right into a fast-moving project for a large client.',
        name: 'Anthony Bearden',
        position: 'Founder',
        companyName: 'Marketer | Consultant | Investor',
        avatar: '/images/1723665299718.jpeg',
        relationship: 'Colleague recommendation',
    },
    {
        quote: 'Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that.',
        name: 'Palmer Dean',
        position: 'Founder',
        companyName: 'Wash Metrix',
        avatar: '/images/1638545534787.jpeg',
        relationship: 'Client',
    },
    {
        quote: 'Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.',
        name: 'James McElroy',
        position: 'Founder, CEO',
        companyName: 'frienzy.io',
        avatar: '/images/image-800x800.webp',
        relationship: 'Client',
    },
];

export function BackendTestimonials() {
    return (
        <section id="backend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="backend-testimonials-heading">
            <div className="container mx-auto">
                <div className="mb-12 w-full md:mb-18 lg:mb-20">
                    <h2
                        id="backend-testimonials-heading"
                        className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                    >
                        Client feedback and recommendations
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        What clients and former colleagues say about working with Rob Thomas, Empuls3&rsquo;s founder.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.name} className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                            <p className="mb-6 rounded-full bg-[#BD1550]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#BD1550] uppercase md:mb-8">
                                {testimonial.relationship}
                            </p>
                            <blockquote className="text-md text-primary leading-[1.4] font-bold md:text-xl">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                            <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                                <figure className="mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name} portrait`}
                                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                                        width="56"
                                        height="56"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="mb-3 md:mb-4">
                                    <p className="text-primary font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-700">{testimonial.position}</p>
                                </div>
                                <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                                    <p className="text-primary font-semibold">{testimonial.companyName}</p>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
