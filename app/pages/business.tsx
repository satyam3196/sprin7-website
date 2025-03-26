'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const benefits = [
  {
    title: "Reduce your carbon footprint",
    description: "Make your business more sustainable with eco-friendly deliveries"
  },
  {
    title: "Meet growing customer demand",
    description: "Satisfy the increasing demand for sustainable services"
  },
  {
    title: "Real-time tracking",
    description: "Follow deliveries in real-time for you and your customers"
  },
  {
    title: "Flexible delivery windows",
    description: "Choose delivery times that work best for your business"
  },
  {
    title: "Custom integration",
    description: "Seamlessly integrate with your e-commerce platform"
  },
  {
    title: "Dedicated support",
    description: "Get assistance from our dedicated support team"
  }
];

const industries = [
  {
    name: "Retail",
    description: "From boutiques to department stores"
  },
  {
    name: "Food & Beverage",
    description: "Restaurants, cafes, and food suppliers"
  },
  {
    name: "Professional Services",
    description: "Law firms, consultancies, and agencies"
  },
  {
    name: "Healthcare",
    description: "Pharmacies, clinics, and medical supplies"
  },
  {
    name: "E-commerce",
    description: "Online retailers and marketplaces"
  },
  {
    name: "Local Independent Businesses",
    description: "Small businesses and local shops"
  }
];

export default function Business() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
            >
              Partner With Sprin7
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed"
            >
              Enhance your business's sustainability credentials while offering customers faster, greener delivery options.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Benefits for Business Partners
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 h-full hover:transform hover:scale-[1.02] transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{benefit.title}</h3>
                  <p className="text-purple-100/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-[1.02] transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{industry.name}</h3>
                  <p className="text-purple-100/70">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative inline-flex group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
            <Link
              href="#partner"
              className="relative px-12 py-4 bg-black rounded-full text-xl text-white font-semibold hover:bg-gray-900 transition"
            >
              Request Business Partnership
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 