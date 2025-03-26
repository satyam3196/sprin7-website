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

const requirements = [
  "18+ years of age",
  "Smartphone with reliable internet connection",
  "Valid ID and right to work in the UK",
  "Clean background check",
  "Your own transportation method (walking, bicycle, e-bike, or electric/hybrid vehicle)",
  "Commitment to sustainability and excellent service"
];

const benefits = [
  "Flexible working hours",
  "Competitive compensation rates",
  "Be part of an eco-conscious community",
  "Reduced carbon footprint",
  "Exercise while you earn (for walking/cycling Sprin7ers)",
  "Contribute to cleaner air in London"
];

const applicationSteps = [
  "Complete the online application",
  "Submit required documentation",
  "Attend virtual onboarding session",
  "Complete training modules",
  "Start accepting deliveries!"
];

export default function BecomeSprin7er() {
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
              Become a Sprin7er
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed"
            >
              Become part of London's sustainable delivery revolution. As a Sprin7er, you'll earn competitive compensation and benefits while contributing to a greener future for urban logistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Requirements
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                }}
                className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg"
              >
                <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full" />
                <p className="text-purple-100">{requirement}</p>
              </motion.div>
            ))}
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
            Benefits
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
                <div className="relative bg-gray-900 rounded-xl p-6 text-center hover:transform hover:scale-[1.02] transition duration-300">
                  <p className="text-purple-100">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Application Process
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="flex items-center space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-xl text-purple-100">{step}</p>
                </motion.div>
              ))}
            </div>
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
              href="#apply"
              className="relative px-12 py-4 bg-black rounded-full text-xl text-white font-semibold hover:bg-gray-900 transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 