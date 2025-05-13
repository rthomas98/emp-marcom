import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function CookiePolicy() {
  return (
    <>
      <Head title="Cookie Policy | Empuls3" />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-4xl font-bold font-header text-primary md:text-5xl">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p>This Cookie Policy explains how Empuls3 ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website.</p>
          
          <h2>What are cookies?</h2>
          <p>Content to be added.</p>
          
          <h2>Types of cookies we use</h2>
          <p>Content to be added.</p>
          
          <h2>How we use cookies</h2>
          <p>Content to be added.</p>
          
          <h2>How to manage cookies</h2>
          <p>Content to be added.</p>
          
          <h2>Changes to this Cookie Policy</h2>
          <p>Content to be added.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us.</p>
        </div>
      </div>
    </>
  );
}

CookiePolicy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Cookie Policy | Empuls3" />;
