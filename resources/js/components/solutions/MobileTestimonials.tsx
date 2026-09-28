type Testimonial = {
    quote: string;
    author: string;
    position: string;
    companyName: string;
    avatar: string;
};

// Quotes, names, roles and portraits are copied verbatim from the approved home page testimonials.
const testimonials: Testimonial[] = [
    {
        quote: 'Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.',
        author: 'James McElroy',
        position: 'Founder, CEO',
        companyName: 'frienzy.io',
        avatar: '/images/image-800x800.webp',
    },
    {
        quote: 'I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.',
        author: 'John Knight',
        position: 'Founder',
        companyName: '24peekview.com',
        avatar: '/images/305620519_446536930828187_8773084213258704960_n.jpg',
    },
    {
        quote: 'Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive.',
        author: 'Theron Williams',
        position: 'Client',
        companyName: 'Owner at Theron J Williams Consulting LLC',
        avatar: '/images/fx-gs.webp',
    },
];

export function MobileTestimonials() {
    return (
        <section id="mobile-testimonials" className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-testimonials-heading">
            <div className="container mx-auto">
                <header className="mb-12 w-full md:mb-18 lg:mb-20">
                    <h2
                        id="mobile-testimonials-heading"
                        className="text-primary mb-5 text-3xl font-bold break-words sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
                    >
                        Client Feedback About Rob
                    </h2>
                    <p className="md:text-md max-w-4xl text-gray-700">
                        Feedback from founders and business owners who have worked with Rob Thomas and Empuls3.
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.author} className="flex h-full max-w-lg flex-col items-start justify-start text-left">
                            <p className="mb-6 text-sm font-semibold tracking-wide text-[#BD1550] uppercase md:mb-8">Client</p>
                            <blockquote className="text-md text-primary leading-[1.4] font-bold md:text-xl">"{testimonial.quote}"</blockquote>
                            <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                                <figure className="mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={`${testimonial.author} portrait`}
                                        className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                                        width="56"
                                        height="56"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="mb-3 md:mb-4">
                                    <cite className="text-primary font-semibold not-italic">{testimonial.author}</cite>
                                    <p className="text-gray-700">
                                        {testimonial.position}, {testimonial.companyName}
                                    </p>
                                </div>
                                <div className="hidden w-px self-stretch bg-gray-300 md:block" aria-hidden="true" />
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
