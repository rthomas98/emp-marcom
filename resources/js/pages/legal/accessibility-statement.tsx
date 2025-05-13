import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function AccessibilityStatement() {
  return (
    <>
      <Head title="Accessibility Statement | Empuls3" />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-4xl font-bold font-header text-primary md:text-5xl">Accessibility Statement</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p>Empuls3 is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          
          <h2>Conformance status</h2>
          <p>Content to be added.</p>
          
          <h2>Accessibility features</h2>
          <p>Content to be added.</p>
          
          <h2>Technical specifications</h2>
          <p>Content to be added.</p>
          
          <h2>Assessment approach</h2>
          <p>Content to be added.</p>
          
          <h2>Feedback</h2>
          <p>Content to be added.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about our accessibility efforts, please contact us.</p>
        </div>
      </div>
    </>
  );
}

AccessibilityStatement.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Accessibility Statement | Empuls3" />;
