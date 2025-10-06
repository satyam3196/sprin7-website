'use client';

import React from 'react';
import Image from 'next/image';
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

const initiatives = [
  {
    title: "Zero-emission transport prioritisation",
    description: "We prioritize walking, cycling, and electric vehicles for deliveries."
  },
  {
    title: "Sustainable packaging",
    description: "We provide recommendations for eco-friendly packaging solutions."
  },
  {
    title: "Eco-conscious partnerships",
    description: "We partner with retailers who share our environmental values."
  },
  {
    title: "Green Marketplace",
    description: "We connect eco-conscious SMEs with our users who value sustainable products."
  },
  {
    title: "Sustainable Marketing for Boosting Sustainable Values",
    description: "We help businesses promote their sustainable practices and values."
  }
];

const goals = [
  {
    metric: "75%",
    description: "Zero-emission deliveries by 2027"
  },
  {
    metric: "5",
    description: "Major UK cities with Sprin7 operations"
  },
  {
    metric: "30%",
    description: "Reduction in urban delivery carbon footprint"
  }
];

export default function Sustainability() {
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-32 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center justify-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold text-center mb-16 text-deep-teal"
            >
              Sustainability
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid - Row 1 */}
      <section className="py-12 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-xl overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-electric-lime/10 rounded-xl h-full shadow-md border-2 border-deep-teal/10 overflow-hidden">
                <Image
                  src="/2.png"
                  alt="Sustainability Initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative h-[350px]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-8 h-full shadow-md flex flex-col justify-center border-2 border-deep-teal/10">
                <h2 className="text-3xl font-bold mb-4 text-deep-teal">Our Commitment</h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Sustainability isn't just a feature of Sprin7—it's our foundation. We're dedicated to proving that speed, 
                  safety, and convenience can go hand-in-hand with environmental responsibility and economy growth.
                </p>
              </div>
            </motion.div>

            {/* Our Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-[350px]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-8 h-full shadow-md flex flex-col justify-center border-2 border-deep-teal/10">
                <h2 className="text-3xl font-bold mb-4 text-deep-teal">Our Impact</h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Real-time metrics on avoided carbon emissions reporting
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid - Row 2 */}
      <section className="py-12 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-xl overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-signal-blue/10 rounded-xl h-full shadow-md border-2 border-deep-teal/10 overflow-hidden">
                <Image
                  src="/3.png"
                  alt="Sustainability Goals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>

            {/* Initiatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative h-[350px]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-8 h-full shadow-md flex flex-col justify-center border-2 border-deep-teal/10 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4 text-deep-teal">Initiatives</h2>
                <ul className="space-y-2">
                  {initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-electric-lime text-xl mr-2">✓</span>
                      <span className="text-gray-700">{initiative.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Goals for 2027 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative h-[350px]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-8 h-full shadow-md flex flex-col justify-center border-2 border-deep-teal/10">
                <h2 className="text-3xl font-bold mb-6 text-deep-teal">Goals for 2027</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-electric-lime mb-2">75%</div>
                    <p className="text-gray-700">Zero-emission deliveries</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-electric-lime mb-2">5</div>
                    <p className="text-gray-700">Major UK cities with Sprin7 operations</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-electric-lime mb-2">30%</div>
                    <p className="text-gray-700">Reduction in urban delivery carbon footprint</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 