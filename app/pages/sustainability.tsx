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

const initiatives = [
  {
    title: "Zero-emission transport prioritization",
    description: "We prioritize walking, cycling, and electric vehicles for deliveries."
  },
  {
    title: "Carbon offset programs",
    description: "For vehicle deliveries, we invest in carbon offset programs."
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
    title: "Community clean-up events",
    description: "Regular events to keep our communities clean and green."
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
              Our Commitment
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-purple-100/80 leading-relaxed"
            >
              Sustainability isn't just a feature of Sprin7—it's our foundation. We're dedicated to proving that speed and convenience can go hand-in-hand with environmental responsibility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Our Impact
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-purple-100/80 italic">
              Coming soon: Real-time metrics on carbon emissions saved and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Initiatives
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {initiatives.map((initiative, index) => (
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
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{initiative.title}</h3>
                  <p className="text-purple-100/70">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Goals for 2027
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-8 text-center hover:transform hover:scale-[1.02] transition duration-300">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
                    {goal.metric}
                  </div>
                  <p className="text-purple-100">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 