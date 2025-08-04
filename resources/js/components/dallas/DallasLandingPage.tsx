import React from 'react';
import { Link } from '@inertiajs/react';
import { dallasContent } from '@/utils/seo';

interface DallasLandingPageProps {
  service: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    cta: string;
  };
}

export function DallasLandingPage({ service }: DallasLandingPageProps) {
  return (
    <>
      {/* Hero Section with Dallas Focus */}
      <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-5 text-5xl font-bold text-secondary md:text-7xl lg:text-8xl">
                {service.title} <span className="text-primary">Dallas</span>
              </h1>
              <p className="mb-6 text-lg text-secondary md:text-xl">
                {service.description}
              </p>
              <div className="mb-8">
                <p className="mb-4 text-base text-secondary/80">
                  Proudly serving Dallas businesses remotely across:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-secondary/70">
                  <li>• Downtown Dallas</li>
                  <li>• Uptown & Victory Park</li>
                  <li>• Deep Ellum Tech District</li>
                  <li>• Las Colinas</li>
                  <li>• Plano Legacy West</li>
                  <li>• Richardson Telecom Corridor</li>
                  <li>• Fort Worth</li>
                  <li>• Arlington</li>
                </ul>
                <p className="mt-4 text-sm text-secondary/60 italic">
                  100% Remote Service - No office visits required
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
                <a
                  href="tel:+12145550100"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Call Dallas Team
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/dallas-skyline.jpg"
                alt="Dallas Skyline"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold mb-1">Since 2009</p>
                <p className="text-sm">Serving Dallas Remotely</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust Indicators */}
      <section className="px-[5%] py-16 bg-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-secondary">Dallas Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">16+</p>
              <p className="text-secondary">Years in Dallas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.9★</p>
              <p className="text-secondary">Google Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-secondary">Remote Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4 md:text-5xl">
              Why Dallas Businesses Choose Empuls3
            </h2>
            <p className="text-lg text-secondary/80">
              We understand the unique needs of Dallas companies, from startups in Deep Ellum 
              to enterprises in Downtown Dallas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-secondary/10">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{feature}</h3>
                <p className="text-secondary/70">
                  Tailored solutions for Dallas businesses with local expertise and understanding.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dallas-Specific Benefits */}
      <section className="px-[5%] py-16 bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center md:text-5xl">
              Local Dallas Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Case Studies Preview */}
      <section className="px-[5%] py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4 md:text-5xl">
              Dallas Success Stories
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              See how we've helped Dallas businesses transform their technology and achieve remarkable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary/10">
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">Healthcare • Dallas Medical District</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Medical Practice Management System
              </h3>
              <p className="text-secondary/70 mb-4">
                Streamlined operations for a 50-physician practice, reducing administrative time by 40%.
              </p>
              <Link href="/case-studies" className="text-primary font-medium hover:underline">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary/10">
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">Finance • Downtown Dallas</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Investment Platform Modernization
              </h3>
              <p className="text-secondary/70 mb-4">
                Rebuilt legacy system with modern architecture, improving performance by 300%.
              </p>
              <Link href="/case-studies" className="text-primary font-medium hover:underline">
                Read Case Study →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary/10">
              <div className="mb-4">
                <span className="text-sm text-primary font-medium">Retail • NorthPark Center</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Omnichannel Retail Solution
              </h3>
              <p className="text-secondary/70 mb-4">
                Integrated online and in-store experiences, increasing sales by 45%.
              </p>
              <Link href="/case-studies" className="text-primary font-medium hover:underline">
                Read Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[5%] py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4 md:text-5xl">
            Ready to Transform Your Dallas Business?
          </h2>
          <p className="text-lg text-secondary/80 mb-8 max-w-2xl mx-auto">
            {service.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+12145550100"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-secondary border-2 border-secondary rounded-lg hover:bg-secondary/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (214) 555-0100
            </a>
          </div>
          <p className="mt-6 text-sm text-secondary/60">
            100% Remote Service • Virtual Meetings • Flexible Hours • No Commute Required
          </p>
        </div>
      </section>
    </>
  );
}