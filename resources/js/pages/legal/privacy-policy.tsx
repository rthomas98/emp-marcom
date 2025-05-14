"use client";

import React from 'react';
import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head title="Privacy Policy | Empuls3" />
      <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="mb-6 text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <div className="mb-16 max-w-4xl">
            <p className="mb-6 text-lg text-gray-700">
              This Privacy Policy describes how Empuls3 ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website at <a href="https://www.empuls3.com" className="text-[#BD1550] hover:underline">www.empuls3.com</a> ("Website") or use our services.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Information we collect</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We collect several types of information from and about users of our Website, including information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>By which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                <li>That is about you but individually does not identify you, such as job title, industry, and preferred marketing channels; and/or</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
              
              <h3 className="mb-3 mt-8 text-2xl font-bold text-[#1F1946]">Information You Provide to Us</h3>
              <p className="mb-4 text-lg text-gray-700">
                The information we collect on or through our Website may include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Information that you provide by filling in forms on our Website. This includes information provided at the time of requesting services, subscribing to our communications, posting material, or requesting further services.</li>
                <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
                <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                <li>Details of transactions you carry out through our Website and of the fulfillment of your orders.</li>
                <li>Your search queries on the Website.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="mb-3 text-2xl font-bold text-[#1F1946]">Information We Collect Through Automatic Data Collection Technologies</h3>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.</li>
                <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
              </ul>
              
              <p className="mb-4 mt-6 text-lg text-gray-700">
                The information we collect automatically is only statistical data and does not include personal information. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>Estimate our audience size and usage patterns.</li>
                <li>Store information about your preferences, allowing us to customize our Website according to your individual interests.</li>
                <li>Speed up your searches.</li>
                <li>Recognize you when you return to our Website.</li>
              </ul>
              
              <p className="mb-4 mt-6 text-lg text-gray-700">
                The technologies we use for this automatic data collection may include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li><span className="font-semibold">Cookies (or browser cookies).</span> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.</li>
                <li><span className="font-semibold">Flash Cookies.</span> Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies.</li>
                <li><span className="font-semibold">Web Beacons.</span> Pages of our Website and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">How we use your information</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To provide you with notices about your account/subscription, including expiration and renewal notices.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                <li>To allow you to participate in interactive features on our Website.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
              
              <p className="mt-6 text-lg text-gray-700">
                We may also use your information to contact you about our own and third-parties' goods and services that may be of interest to you. If you do not want us to use your information in this way, please check the relevant box located on the form on which we collect your data or adjust your user preferences in your account profile.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">How we share your information</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
              </p>
              
              <p className="mb-4 text-lg text-gray-700">
                We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Empuls3's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Empuls3 about our Website users is among the assets transferred.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>
              
              <p className="mb-4 mt-6 text-lg text-gray-700">
                We may also disclose your personal information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li>To enforce or apply our terms of use and other agreements, including for billing and collection purposes.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Empuls3, our customers, or others.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Your rights</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:
              </p>
              
              <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                <li><span className="font-semibold">Tracking Technologies and Advertising.</span> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.</li>
                <li><span className="font-semibold">Promotional Offers from the Company.</span> If you do not wish to have your email address/contact information used by the Company to promote our own or third parties' products or services, you can opt-out by checking the relevant box located on the form on which we collect your data or by sending us an email stating your request. If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions.</li>
              </ul>
              
              <p className="mb-4 mt-6 text-lg text-gray-700">
                We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way.
              </p>
              
              <h3 className="mb-3 mt-8 text-2xl font-bold text-[#1F1946]">Accessing and Correcting Your Information</h3>
              <p className="mb-4 text-lg text-gray-700">
                You can review and change your personal information by logging into the Website and visiting your account profile page.
              </p>
              
              <p className="text-lg text-gray-700">
                You may also send us an email to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Data retention</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              
              <p className="text-lg text-gray-700">
                We will also retain usage data for internal analysis purposes. Usage data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer time periods.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Data security</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-4 text-lg text-gray-700">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
              
              <p className="mb-4 text-lg text-gray-700">
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
              </p>
              
              <p className="text-lg text-gray-700">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Changes to this Privacy Policy</h2>
            <div className="mb-8 max-w-4xl">
              <p className="text-lg text-gray-700">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl">Contact Us</h2>
            <div className="mb-8 max-w-4xl">
              <p className="mb-6 text-lg text-gray-700">
                If you have any questions about this Privacy Policy, please contact us:
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

PrivacyPolicy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Privacy Policy | Empuls3" />;
