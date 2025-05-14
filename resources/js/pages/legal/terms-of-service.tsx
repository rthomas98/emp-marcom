"use client";

import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Head title="Terms of Service | Empuls3" />
      <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="mb-6 text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <p className="mb-6 text-lg text-gray-700">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the <a href="https://www.empuls3.com" className="text-[#BD1550] hover:underline">www.empuls3.com</a> website ("Website") operated by Empuls3 ("us", "we", or "our").
            </p>
            <p className="text-lg text-gray-700">
              Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Website. By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Website.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">1. Agreement to Terms</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                By accessing our Website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this Website are protected by applicable copyright and trademark law.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">2. Intellectual Property Rights</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Unless otherwise stated, Empuls3 and/or its licensors own the intellectual property rights for all material on the Website. All intellectual property rights are reserved. You may access this from the Website for your own personal use subjected to restrictions set in these Terms of Service.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                You must not:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Republish material from the Website</li>
                <li>Sell, rent, or sub-license material from the Website</li>
                <li>Reproduce, duplicate, or copy material from the Website</li>
                <li>Redistribute content from the Website</li>
              </ul>
              <p className="mt-4 text-lg text-gray-700">
                This Agreement does not begin a licensing relationship, transfer of intellectual property rights, or grant any license to use the material on our Website without the express written permission of Empuls3.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">3. User Representations</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                By using the Website, you represent and warrant that:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Website through automated or non-human means, whether through a bot, script, or otherwise</li>
                <li>You will not use the Website for any illegal or unauthorized purpose</li>
                <li>Your use of the Website will not violate any applicable law or regulation</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">4. Prohibited Activities</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                As a user of the Website, you agree not to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Systematically retrieve data or other content from the Website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
                <li>Make any unauthorized use of the Website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses</li>
                <li>Use the Website to advertise or offer to sell goods and services</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Website</li>
                <li>Engage in unauthorized framing of or linking to the Website</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
                <li>Interfere with, disrupt, or create an undue burden on the Website or the networks or services connected to the Website</li>
                <li>Attempt to impersonate another user or person or use the username of another user</li>
                <li>Use any information obtained from the Website in order to harass, abuse, or harm another person</li>
                <li>Use the Website as part of any effort to compete with us or otherwise use the Website and/or the Content for any revenue-generating endeavor or commercial enterprise</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">5. Limitation of Liability</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                In no event shall Empuls3, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Your access to or use of or inability to access or use the Website</li>
                <li>Any conduct or content of any third party on the Website</li>
                <li>Any content obtained from the Website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mt-4 text-lg text-gray-700">
                Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">6. Governing Law</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                These Terms shall be governed and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">7. Changes to Terms</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Website.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">8. Contact Us</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-6 text-lg text-gray-700">
                If you have any questions about these Terms of Service, please contact us:
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

TermsOfService.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Terms of Service | Empuls3" />;
