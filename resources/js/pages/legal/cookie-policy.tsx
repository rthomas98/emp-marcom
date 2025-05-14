"use client";

import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function CookiePolicy() {
  return (
    <>
      <Head title="Cookie Policy | Empuls3" />
      <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="mb-6 text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <p className="mb-6 text-lg text-gray-700">
              This Cookie Policy explains how Empuls3 ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at <a href="https://www.empuls3.com" className="text-[#BD1550] hover:underline">www.empuls3.com</a> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">What are cookies?</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-lg text-gray-700">
                Cookies set by the website owner (in this case, Empuls3) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Types of cookies we use</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We use the following types of cookies:
              </p>
              
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946]">Essential cookies</h3>
                <p className="text-lg text-gray-700">
                  These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946]">Performance and functionality cookies</h3>
                <p className="text-lg text-gray-700">
                  These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946]">Analytics and customization cookies</h3>
                <p className="text-lg text-gray-700">
                  These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you in order to enhance your experience.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold text-[#1F1946]">Targeting and advertising cookies</h3>
                <p className="text-lg text-gray-700">
                  These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">How we use cookies</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We use cookies for the following purposes:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li><span className="font-semibold">Authentication:</span> We use cookies to identify you when you visit our Website and as you navigate our Website.</li>
                <li><span className="font-semibold">Status:</span> We use cookies to help us determine if you are logged into our Website.</li>
                <li><span className="font-semibold">Personalization:</span> We use cookies to store information about your preferences and to personalize the Website for you.</li>
                <li><span className="font-semibold">Security:</span> We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our Website and services generally.</li>
                <li><span className="font-semibold">Advertising:</span> We use cookies to help us to display advertisements that will be relevant to you.</li>
                <li><span className="font-semibold">Analysis:</span> We use cookies to help us to analyze the use and performance of our Website and services.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Cookies used by our service providers</h2>
            <div className="mb-8 max-w-4xl">
              <p className="text-lg text-gray-700">
                Our service providers use cookies and those cookies may be stored on your computer when you visit our Website. We use Google Analytics to analyze the use of our Website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our Website is used to create reports about the use of our Website. Google's privacy policy is available at: <a href="https://www.google.com/policies/privacy/" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">How to manage cookies</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" className="text-[#BD1550] hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
              <p className="mt-4 text-lg text-gray-700">
                Please note that blocking cookies may have a negative impact on the functions of many websites, including our Website. Some features of the Website may cease to be available to you.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Your choices regarding cookies</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p className="text-lg text-gray-700">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Changes to this Cookie Policy</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="text-lg text-gray-700">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Contact Us</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-6 text-lg text-gray-700">
                If you have any questions about our use of cookies or other technologies, please contact us:
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

CookiePolicy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Cookie Policy | Empuls3" />;
