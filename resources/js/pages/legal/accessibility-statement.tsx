"use client";

import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function AccessibilityStatement() {
  return (
    <>
      <Head title="Accessibility Statement | Empuls3" />
      <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="mb-6 text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">Accessibility Statement</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <p className="mb-6 text-lg text-gray-700">
              Empuls3 is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Conformance status</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="text-lg text-gray-700">
                The Empuls3 website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Accessibility features</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Empuls3 strives to ensure that our website is accessible to all users. Some of the accessibility features we have implemented include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Semantic HTML: We use proper HTML elements to ensure that content is properly structured and can be interpreted by assistive technologies.</li>
                <li>Color contrast: We maintain sufficient color contrast between text and background to ensure readability.</li>
                <li>Keyboard navigation: Our website can be navigated using a keyboard, without requiring a mouse.</li>
                <li>Alternative text: Images on our website include alternative text descriptions for users who cannot see the images.</li>
                <li>Resizable text: Text can be resized without loss of content or functionality.</li>
                <li>Focus indicators: Visual indicators are provided for keyboard focus.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Technical specifications</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Accessibility of the Empuls3 website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p className="mt-4 text-lg text-gray-700">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Assessment approach</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Empuls3 assesses the accessibility of our website through the following approaches:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Self-evaluation: Our development team regularly reviews our website for accessibility issues.</li>
                <li>Automated testing: We use automated tools to identify potential accessibility issues.</li>
                <li>User testing: We gather feedback from users with disabilities to identify areas for improvement.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Limitations and alternatives</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Despite our best efforts to ensure accessibility of the Empuls3 website, there may be some limitations:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Some older PDF documents may not be fully accessible. We are working to remediate these documents or provide alternative formats upon request.</li>
                <li>Some embedded third-party content may not be fully accessible. We are working with our partners to improve the accessibility of these components.</li>
              </ul>
              <p className="mt-4 mb-4 text-lg text-gray-700">
                If you encounter any accessibility barriers on our website, please contact us. We are committed to providing the information you need in an accessible format:
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Mail className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Email</p>
                    <a href="mailto:info@empuls3.com" className="text-[#BD1550] hover:underline">info@empuls3.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Phone className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Phone</p>
                    <a href="tel:9727988914" className="text-[#BD1550] hover:underline">972.798.8914</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Feedback</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We welcome your feedback on the accessibility of the Empuls3 website. Please let us know if you encounter accessibility barriers:
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Mail className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Email</p>
                    <a href="mailto:info@empuls3.com" className="text-[#BD1550] hover:underline">info@empuls3.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Phone className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Phone</p>
                    <a href="tel:9727988914" className="text-[#BD1550] hover:underline">972.798.8914</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <ExternalLink className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Contact Form</p>
                    <Link href="/contact" className="text-[#BD1550] hover:underline">Contact Us</Link>
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-lg text-gray-700">
                We try to respond to feedback within 2 business days.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Continuous improvement</h2>
            <div className="mb-8 max-w-4xl">
              <p className="text-lg text-gray-700">
                Empuls3 is committed to continually improving the accessibility of our website. We are actively working to increase the accessibility and usability of our website and in doing so, adhere to many of the available standards and guidelines.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Contact Us</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-6 text-lg text-gray-700">
                If you have any questions about our accessibility efforts or need assistance, please contact us:
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Mail className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Email</p>
                    <a href="mailto:info@empuls3.com" className="text-[#BD1550] hover:underline">info@empuls3.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <Phone className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Phone</p>
                    <a href="tel:9727988914" className="text-[#BD1550] hover:underline">972.798.8914</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#BD1550]/10">
                    <ExternalLink className="h-5 w-5 text-[#BD1550]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#1F1946]">Contact Form</p>
                    <Link href="/contact" className="text-[#BD1550] hover:underline">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

AccessibilityStatement.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Accessibility Statement | Empuls3" />;
