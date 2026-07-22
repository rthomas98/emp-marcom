import React, { useState } from 'react';

export function LeadCapture() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // This would submit to your backend
        // For now, just simulate success
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 1000);
    };

    if (submitted) {
        return (
            <section className="bg-primary px-[5%] py-16 text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">Check Your Inbox!</h2>
                    <p className="text-xl">We just sent you "The Software Rescue Readiness Guide"</p>
                    <p className="mt-4 text-white/80">
                        P.S. We'll also send you weekly tips on not getting screwed by tech vendors. Unsubscribe anytime.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="from-primary to-primary/90 bg-gradient-to-r px-[5%] py-16 text-white">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="mb-8">
                    <p className="text-accent-pink mb-4 font-semibold">FREE GUIDE</p>
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">The Software Rescue Readiness Guide</h2>
                    <p className="mb-2 text-xl text-white/90">What to document before a critical system fails</p>
                    <p className="mx-auto max-w-2xl text-lg text-white/80">
                        Learn what access, documentation, ownership, and recovery information your business should have before a vendor disappears or
                        a critical system fails. Get it free:
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="focus:ring-accent-pink flex-1 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:outline-none"
                            aria-label="Email address"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-accent-pink hover:bg-accent-pink/90 rounded-lg px-6 py-3 font-semibold text-white transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Get Free Guide'}
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-white/70">No spam, ever. Plus weekly tips on avoiding tech disasters.</p>
                </form>

                <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
                    <div className="rounded-lg bg-white/10 p-4">
                        <h3 className="mb-2 font-semibold">Chapter 1</h3>
                        <p className="text-sm text-white/80">The "Disappearing Developer" Scam (And Why It Keeps Happening)</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4">
                        <h3 className="mb-2 font-semibold">Chapter 2</h3>
                        <p className="text-sm text-white/80">Why Your "Simple" Feature Costs $25K (Spoiler: It Shouldn't)</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4">
                        <h3 className="mb-2 font-semibold">Chapter 3</h3>
                        <p className="text-sm text-white/80">The Red Flags Every Dallas Business Ignores (Until It's Too Late)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
