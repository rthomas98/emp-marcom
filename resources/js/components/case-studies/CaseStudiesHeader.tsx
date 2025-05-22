"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@inertiajs/react";

export function CaseStudiesHeader() {
  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h1 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
                Transformative Case Studies That Inspire Growth
              </h1>
              <p className="text-white md:text-md">
                Explore our case studies to see how Empuls3 has empowered
                businesses to overcome challenges and achieve remarkable
                results. Each story highlights our commitment to delivering
                innovative solutions that drive success.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Link 
                  href="#case-studies-list" 
                  className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-5 py-3 text-base font-medium text-white transition hover:bg-[#BD1550]/90"
                >
                  View Case Studies
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-[#BD1550] transition hover:bg-gray-100"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-[#1F1946]/70"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_African_American_developers_working_in_an_agency.__75a77e13-82e4-4da4-aa89-3f854e38c79d.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative">
              <img
                src="/images/site-images/rob_thomas23_African_American_front-end_developers_development__76be193d-31cc-4dcc-9acf-814ccfe788bb.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_31b61ffe-cc01-4adc-81dd-e6e0a1f5674e_1.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative">
              <img
                src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_African_American_developers_development_standing_243d8528-ebd1-48c4-a195-30f798b6d091_3.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative">
              <img
                src="/images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                alt="Case study image"
                className="absolute inset-0 size-full object-cover border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesHeader;
