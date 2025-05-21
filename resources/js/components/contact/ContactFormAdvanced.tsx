"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Toast } from "@/components/common/Toast";
import axios from "axios";

type FormType = "general" | "project";

export function ContactFormAdvanced() {
  const [formType, setFormType] = useState<FormType>("general");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Thank you for your message. We'll get back to you soon!");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Common fields
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    formType: "general",
    
    // Project request specific fields
    projectType: "web-development",
    budget: "",
    timeline: "",
    projectDescription: "",
    requirements: "",
    
    // Hidden fields for spam protection
    website: "", // Honeypot field
    submit_time: 0
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

  const handleFormTypeChange = (type: FormType) => {
    setFormType(type);
    setFormData(prev => ({
      ...prev,
      formType: type
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setIsSubmitting(true);
    
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
          formType: formType,
          projectType: "web-development",
          budget: "",
          timeline: "",
          projectDescription: "",
          requirements: "",
          website: "",
          submit_time: Math.floor(Date.now() / 1000)
        });
        
        // Show success toast notification
        setToastType("success");
        setToastMessage(response.data.message || "Thank you for your message. We'll get back to you soon!");
        setShowToast(true);
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
      
      // Show error toast notification
      setToastType("error");
      setToastMessage(axios.isAxiosError(error) && error.response?.data?.message 
        ? error.response.data.message 
        : error instanceof Error 
          ? error.message 
          : "Something went wrong. Please try again.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <section id="contact-form" className="px-[5%] py-16 md:py-24 lg:py-28">
      <Toast
        isVisible={showToast}
        title={toastType === "success" ? "Success" : "Error"}
        message={toastMessage}
        onClose={handleCloseToast}
        duration={5000}
        type={toastType}
      />
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
                  <p className="text-gray-700">972.798.8914</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#BD1550]/10">
                  <MapPin className="h-6 w-6 text-[#BD1550]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[#1F1946]">Remote Agency</h3>
                  <p className="text-gray-700">We operate as a fully remote agency, serving clients worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-[#1F1946] md:text-3xl">
              Send Us a Message
            </h2>
            
            <div className="mb-6 flex space-x-4">
              <button
                type="button"
                onClick={() => handleFormTypeChange("general")}
                className={`flex-1 rounded-md border px-4 py-2 text-center transition ${
                  formType === "general"
                    ? "border-[#BD1550] bg-[#BD1550] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                General Enquiry
              </button>
              <button
                type="button"
                onClick={() => handleFormTypeChange("project")}
                className={`flex-1 rounded-md border px-4 py-2 text-center transition ${
                  formType === "project"
                    ? "border-[#BD1550] bg-[#BD1550] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Project Request
              </button>
            </div>
            
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                  />
                </div>
              </div>
              
              {formType === "general" && (
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                    required
                  ></textarea>
                </div>
              )}
              
              {formType === "project" && (
                <>
                  <div className="mb-6">
                    <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#1F1946]">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                      required
                    >
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="e-commerce">E-Commerce</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[#1F1946]">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#1F1946]">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Urgent (ASAP)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-plus-months">6+ months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="projectDescription" className="mb-2 block text-sm font-medium text-[#1F1946]">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                      required
                      placeholder="Please describe your project, including its goals and objectives."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="requirements" className="mb-2 block text-sm font-medium text-[#1F1946]">
                      Specific Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-[#1F1946] focus:border-[#BD1550] focus:outline-none focus:ring-1 focus:ring-[#BD1550]"
                      placeholder="Any specific features, technologies, or requirements for your project."
                    ></textarea>
                  </div>
                </>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  formType === "general" ? "Send Message" : "Submit Project Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
