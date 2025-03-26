'use client';

import React from 'react';
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

const customerSecurity = [
  {
    title: "Verified Sprin7ers",
    description: "All Sprin7ers undergo thorough background checks"
  },
  {
    title: "Facescan Verification",
    description: "Sprin7ers must complete a facescan before every delivery"
  },
  {
    title: "Real-time Tracking",
    description: "Track your delivery's progress in real-time with delivery confirmation"
  },
  {
    title: "Secure Payments",
    description: "Industry-standard encryption for all payment processing"
  },
  {
    title: "Package Insurance",
    description: "Optional insurance coverage for your valuable items"
  },
  {
    title: "Data Protection",
    description: "Advanced encryption and privacy protection measures"
  }
];

const sprin7erSecurity = [
  {
    title: "Customer Verification",
    description: "Ensure safe and legitimate delivery transactions"
  },
  {
    title: "Safe Protocols",
    description: "Established procedures for secure pickup and dropoff"
  },
  {
    title: "Emergency Support",
    description: "Quick access to emergency assistance when needed"
  },
  {
    title: "Earnings Protection",
    description: "Secure payment system to protect your earnings"
  }
];

export default function Security() {
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
              Your Safety Is Our Priority
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed"
            >
              At Sprin7, we've built security into every aspect of our platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Customer Security Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            For Customers
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {customerSecurity.map((feature, index) => (
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
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{feature.title}</h3>
                  <p className="text-purple-100/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sprin7er Security Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            For Sprin7ers
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {sprin7erSecurity.map((feature, index) => (
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
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{feature.title}</h3>
                  <p className="text-purple-100/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gray-900/50 rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="text-2xl font-semibold text-purple-200 mb-4">
              Your Trust, Our Commitment
            </div>
            <p className="text-purple-100/70">
              We continuously update our security measures to ensure the safety of our community.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 