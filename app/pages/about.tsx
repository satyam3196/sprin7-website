'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const values = [
  {
    title: "Swift",
    description:
      "Speed meets efficiency. We connect you with the closest available Sprin7er to ensure timely deliveries and seamless influencer–brand campaigns without compromising our values.",
  },
  {
    title: "Safe",
    description:
      "Your packages, data, and brand reputation are paramount. We use rigorous verification, real-time tracking, and transparent systems to keep everyone protected.",
  },
  {
    title: "Sustainable",
    description:
      "Eco-friendly delivery methods and conscious partnerships at our core. We actively reduce emissions and promote sustainable practices across every Sprin7 service.",
  },
  {
    title: "Shared Prosperity",
    description:
      "Through AI-driven influencer matching, we empower creators and help ethical businesses grow—sharing success and impact across our community.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero / Our Story */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-32 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center justify-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold text-center mb-16 text-deep-teal"
            >
              Our Story
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify mb-6"
            >
              Sprin7 was born from a simple idea: cities deserve services that are faster, safer, and
              more sustainable. Founded in London in 2025, we created a platform that connects users
              and businesses with eco-conscious couriers—Sprin7ers—who deliver packages swiftly while
              reducing urban pollution.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify mb-6"
            >
              Alongside our delivery network, we launched <strong>Sustainable Marketing</strong>—an AI-powered
              system that matches verified creators with ethical brands. Every campaign and every
              delivery work together toward a smarter, greener, and fairer economy.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify"
            >
              Our mission is to transform last-mile logistics and digital growth through innovation,
              safety, and sustainability—proving that convenience and commerce can uplift people and
              the planet at the same time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
<section className="py-20 relative bg-cloud-gray">
  <div className="container mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-bold text-center mb-16 text-deep-teal"
    >
      Our Values
    </motion.h2>

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 },
            },
          }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10 min-h-[280px]">
            <h3 className="text-xl font-bold mb-3 text-deep-teal">{value.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Our Vision */}
      <section className="py-20 relative bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold mb-4 text-deep-teal text-center">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
              We envision a future where urban logistics and digital marketing
              move hand-in-hand toward a sustainable economy. Starting in London
              and expanding across the UK, Sprin7 aims to pioneer a connected
              network of zero-emission deliveries, transparent creator campaigns,
              and empowered local communities—all contributing to the UK’s
              net-zero mission.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
