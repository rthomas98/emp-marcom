import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head title="Privacy Policy | Empuls3" />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="mb-8 text-4xl font-bold font-header text-primary md:text-5xl">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <p>This Privacy Policy describes how Empuls3 ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website or use our services.</p>
          
          <h2>Information We Collect</h2>
          <p>Content to be added.</p>
          
          <h2>How We Use Your Information</h2>
          <p>Content to be added.</p>
          
          <h2>Information Sharing and Disclosure</h2>
          <p>Content to be added.</p>
          
          <h2>Your Rights</h2>
          <p>Content to be added.</p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>Content to be added.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </div>
    </>
  );
}

PrivacyPolicy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Privacy Policy | Empuls3" />;
