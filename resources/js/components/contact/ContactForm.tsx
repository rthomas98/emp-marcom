"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import axios from "axios";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    formType: "general",
    projectType: "web-development",
    projectDescription: "",
    requirements: "",
    budget: "",
    timeline: "",
    website: "", // Honeypot field - should remain empty
    submit_time: 0
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ""
  });
  
  // Set the initial timestamp when component mounts
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      submit_time: Math.floor(Date.now() / 1000)
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ""
    });
    
    console.log('Submitting form data:', formData);
    
    try {
      // Get CSRF token from meta tag
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      // Configure axios with CSRF token
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
      
      // Send form data to backend
      console.log('Sending request to /contact/submit');
      const response = await axios.post('/contact/submit', formData);
      
      if (response.data.success) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          formType: "general",
          projectType: "web-development",
          projectDescription: "",
          requirements: "",
          budget: "",
          timeline: "",
          website: "",
          submit_time: Math.floor(Date.now() / 1000)
        });
        
        // Show success message
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: response.data.message || "Thank you for your message. We'll get back to you soon!"
        });
      } else {
        throw new Error(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Log more detailed error information
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          headers: error.response?.headers
        });
      }
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: axios.isAxiosError(error) && error.response?.data?.message 
          ? error.response.data.message 
          : error instanceof Error 
            ? error.message 
            : "Something went wrong. Please try again."
      });
    }
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
            
            {formStatus.isSubmitted ? (
              <div className="rounded-md bg-green-50 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{formStatus.message}</p>
                  </div>
                </div>
              </div>
            ) : formStatus.isError ? (
              <div className="rounded-md bg-red-50 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{formStatus.message}</p>
                  </div>
                </div>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website (Leave this empty)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
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
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#1F1946]">
                  Service Interested In *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
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
                disabled={formStatus.isSubmitting}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
