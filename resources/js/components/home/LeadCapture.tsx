import React, { useState } from 'react';
import { router } from '@inertiajs/react';

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
      <section className="px-[5%] py-16 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Check Your Inbox!</h2>
          <p className="text-xl">
            We just sent you "The $50K Software Disasters Dallas Businesses Make (And How to Avoid Them)"
          </p>
          <p className="mt-4 text-white/80">
            P.S. We'll also send you weekly tips on not getting screwed by tech vendors. Unsubscribe anytime.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[5%] py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <p className="text-accent-pink font-semibold mb-4">FREE GUIDE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The $50K Software Disasters Dallas Businesses Make
          </h2>
          <p className="text-xl text-white/90 mb-2">
            (And How to Avoid Them)
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Based on 200+ Dallas software rescues, this guide reveals the expensive mistakes 
            companies make with developers, agencies, and tech vendors. Get it free:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-pink"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-accent-pink text-white font-semibold rounded-lg hover:bg-accent-pink/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Get Free Guide'}
            </button>
          </div>
          <p className="mt-4 text-sm text-white/70">
            No spam, ever. Plus weekly tips on avoiding tech disasters.
          </p>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Chapter 1</h3>
            <p className="text-sm text-white/80">
              The "Disappearing Developer" Scam (And Why It Keeps Happening)
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Chapter 2</h3>
            <p className="text-sm text-white/80">
              Why Your "Simple" Feature Costs $25K (Spoiler: It Shouldn't)
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Chapter 3</h3>
            <p className="text-sm text-white/80">
              The Red Flags Every Dallas Business Ignores (Until It's Too Late)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}