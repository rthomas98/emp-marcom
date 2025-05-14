"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "web-development"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "web-development"
    });
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section id="contact-form" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#1F1946] md:text-4xl lg:text-5xl">
              Contact Information
            </h2>
            <p className="mb-8 text-gray-700 md:text-md">
              Fill out the form and our team will get back to you within 24 hours. You can also reach us directly using the contact information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                  <Mail className="h-6 w-6 text-[#BD1550]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Email</h3>
                  <p className="text-gray-700">info@empuls3.com</p>
                  <p className="text-gray-700">support@empuls3.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                  <Phone className="h-6 w-6 text-[#BD1550]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                  <p className="text-gray-700">(555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                  <MapPin className="h-6 w-6 text-[#BD1550]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Office</h3>
                  <p className="text-gray-700">123 Innovation Drive</p>
                  <p className="text-gray-700">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-[#1F1946] md:text-3xl">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1F1946]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1F1946]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1F1946]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#1F1946]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#1F1946]">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                  required
                >
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consulting">Strategic Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1F1946]">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
