"use client"
import React from "react";
import { Hammer, Wrench, Droplet, Search } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Sectors from "@/components/Sectors";
import TextImage from "@/components/TextImage";
import MainContact from "@/components/MainContact";

const services = [
  {
    title: "Roof Installation",
    description:
      "Expert roof installation using high-quality materials ensuring durability and long-term performance.",
    icon: Hammer,
  },
  {
    title: "Roof Repair",
    description:
      "Prompt and professional repair services to fix leaks, storm damage, and wear & tear.",
    icon: Wrench,
  },
  {
    title: "Gutter Services",
    description:
      "Installation, cleaning, and repair of gutters to protect your property from water damage.",
    icon: Droplet,
  },
  {
    title: "Roof Inspection",
    description:
      "Comprehensive inspections to assess roof conditions and prevent costly repairs.",
    icon: Search,
  },
];

const page = () => {
  return (
    <div className="bg-white">
      {/* Head section for SEO */}
      <Head>
        <title>Thomson Roofers | Services</title>
        <meta name="description" content="Explore the professional roofing services we offer at Thomson Roofers." />
      </Head>
      <TextImage
        topPara="Professional Roofing Solutions for Every Home & Business"
        title="Reliable, High-Quality Roofing Services Tailored to Your Needs"
        descriptionOne="At Thomson Roofers, we specialize in delivering dependable and durable roofing services. Whether you need a new roof installation, emergency repairs, or expert inspections, our team works with precision and care to ensure your property is well-protected. We use premium materials and modern techniques to guarantee long-lasting results and customer satisfaction."
        descriptionTwo="Based in the heart of the community, Thomson Roofers proudly serves residential and commercial clients across the region. From leak repairs and storm damage restoration to seamless gutter installations and comprehensive roof inspections, we offer a full spectrum of services tailored to your requirements. Our commitment to quality, safety, and reliability makes us your trusted roofing partner."
        linkHref="/about"
        linkText="Learn More"
      />

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-yellow-900 mb-4">Our Roofing Services</h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            With decades of experience, Thomson Roofers provides exceptional roofing solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="rounded-2xl shadow-lg p-8 border hover:shadow-2xl transition-shadow bg-yellow-50"
                whileHover={{ scale: 1.02 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Icon className="text-yellow-900 w-10 h-10" />
                  <h2 className="text-2xl font-semibold text-yellow-900">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <button className="bg-yellow-900 text-white hover:bg-yellow-800 transition-all rounded-xl px-6 py-2">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-yellow-900 mb-4">Need Expert Advice?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contact our professional team for a free consultation and find out how we can help protect your home or business.
          </p>
          <button className="bg-yellow-900 text-white hover:bg-yellow-800 transition-all text-lg px-8 py-3 rounded-2xl">
            Get a Free Quote
          </button>
        </motion.div>
      </div>
      <Sectors />
                  <MainContact />
      
    </div>
  );
};

export default page;
