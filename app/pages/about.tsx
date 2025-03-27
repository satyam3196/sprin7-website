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

const values = [
  {
    title: "Swift",
    description: "Speed meets efficiency. We connect you with the closest available Sprin7er to ensure timely deliveries without compromising on our values."
  },
  {
    title: "Safe",
    description: "Your packages and data safety are paramount. We employ rigorous security measures and verification processes."
  },
  {
    title: "Sustainable",
    description: "We prioritize eco-friendly delivery methods and partners, constantly seeking ways to reduce our carbon footprint."
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Hero Section - Our Story */}
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
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 mb-8"
            >
              Our Story
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed text-justify"
            >
              Sprin7 was born from a simple observation: urban deliveries could be faster, more efficient, and significantly more sustainable. Founded in London in 2025, we've built a platform that connects users with eco-conscious couriers—Sprin7ers—who deliver packages swiftly with minimum pollutions.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed text-justify"
            >
              Our mission is to transform last-mile logistics through innovation, safety, and sustainability, proving that convenience doesn't have to come at the planet's expense.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Our Values
          </motion.h1>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 h-full hover:transform hover:scale-[1.02] transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-200">{value.title}</h3>
                  <p className="text-purple-100/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900/50"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative"
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Our Vision
            </h1>
            <p className="text-xl text-purple-100/80 leading-relaxed text-justify">
              We envision a future where urban deliveries contribute to help our communities to achieve their own net-zero target. Starting in London and expanding across the UK, Sprin7 aims to be the pioneer in making the UK achieve their net-zero target and be safe again!
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 