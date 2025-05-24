"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Users2, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Head from "next/head";
import TextImage from "@/components/TextImage";
import Sectors from "@/components/Sectors";
import MainContact from "@/components/MainContact";

const features = [
  {
    icon: Building2,
    title: "Decades of Experience",
    description: "We’ve built a legacy of trusted roofing solutions grounded in quality and integrity."
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Your safety and satisfaction are protected through certified, fully insured services."
  },
  {
    icon: Users2,
    title: "Client-Centered Approach",
    description: "We prioritize transparent communication and tailored solutions for every project."
  },
  {
    icon: Star,
    title: "Exceptional Craftsmanship",
    description: "Our team delivers precision workmanship using top-tier materials and modern techniques."
  }
];

const Page = () => {
  return (
    <>
      <Head>
        <title>About Thomson Roofers</title>
        <meta name="description" content="Learn more about Thomson Roofers, our values, mission, and commitment to excellence in roofing." />
      </Head>

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-yellow-900 mb-4">About Thomson Roofers</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Trusted by homeowners and businesses alike, we’ve made it our mission to provide high-quality, reliable roofing services backed by experience, integrity, and exceptional customer service.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TextImage
  topPara="Trusted Roofing Experts with Decades of Experience"
  title="About Thomson Roofers – Built on Integrity, Quality, and Craftsmanship"
  descriptionOne="Thomson Roofers was founded with a clear mission: to deliver exceptional roofing solutions with honesty, professionalism, and unmatched craftsmanship. Our team of skilled roofers brings decades of experience to every project, combining traditional values with modern techniques to ensure every roof we build or repair stands the test of time."
  descriptionTwo="We are more than just a roofing company — we're your local experts dedicated to protecting homes and businesses with care and precision. Our commitment to customer satisfaction, safety, and high standards of work has earned us a strong reputation across the region. At Thomson Roofers, your peace of mind is our highest priority."
  linkHref="/services"
  linkText="View Our Services"
/>

        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-yellow-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="text-yellow-900 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold text-yellow-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-yellow-900 mb-4">Get in Touch with Us</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you're planning a roof replacement or need an urgent repair, we're here to help. Reach out today to speak with one of our experts.
          </p>
          <button className="bg-yellow-900 text-white hover:bg-yellow-800 transition px-8 py-3 text-lg rounded-2xl">
            Contact Us
          </button>
        </motion.div>

        {/* <Sectors /> */}
                    <MainContact />

      </div>
      
    </>
  );
};

export default Page;
