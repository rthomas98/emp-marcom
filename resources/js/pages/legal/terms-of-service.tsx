import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function TermsOfService() {
  return (
    <>
      <Head title="Terms of Service | Empuls3" />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-4xl font-bold font-header text-primary md:text-5xl">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Empuls3 website.</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>Content to be added.</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>Content to be added.</p>
          
          <h2>3. User Representations</h2>
          <p>Content to be added.</p>
          
          <h2>4. Prohibited Activities</h2>
          <p>Content to be added.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>Content to be added.</p>
          
          <h2>6. Governing Law</h2>
          <p>Content to be added.</p>
          
          <h2>7. Changes to Terms</h2>
          <p>Content to be added.</p>
          
          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us.</p>
        </div>
      </div>
    </>
  );
}

TermsOfService.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Terms of Service | Empuls3" />;
