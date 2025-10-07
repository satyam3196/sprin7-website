'use client';

import React, { useState } from 'react';
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

// Kept 3 sustainability topics + added 3 influencer topics (total = 6)
const learningTopics = [
  {
    title: "Sustainable Transportation",
    description:
      "Learn eco-friendly ways to move—walking, cycling, and EV options—and how route choices can cut emissions without slowing life down."
  },
  {
    title: "Zero-Waste Living",
    description:
      "Practical steps to reduce waste at home and work: repair, reuse, refill, compost, and recycle more effectively."
  },
  {
    title: "Conscious Consumption",
    description:
      "Shop with intention. Read labels, spot greenwashing, choose durable goods, and support ethical, local brands."
  },
  {
    title: "Creator Marketing Essentials",
    description:
      "How creators and brands collaborate on Sprin7: briefs, audience fit, deliverables, and setting clear goals for authentic, effective campaigns."
  },
  {
    title: "Ethical & Compliant Promotions",
    description:
      "ASA/FTC disclosure basics, claims you must avoid, and content safety standards—build trust while promoting sustainable products."
  },
  {
    title: "Performance & Analytics",
    description:
      "Move beyond vanity metrics. Use UTMs, define KPIs (reach, CTR, conversions), read dashboards, and iterate for measurable results."
  }
];

const resources = [
  {
    title: "Beginner's Guide to Sustainability",
    type: "Article",
    description:
      "Start your sustainability journey with simple, actionable steps—habits you can build this week."
  },
  {
    title: "Carbon Footprint Calculator",
    type: "Tool",
    description:
      "Estimate the impact of transport, energy, and consumption—and track your reductions over time."
  },
  {
    title: "Sustainable Living Podcast",
    type: "Podcast",
    description:
      "Weekly conversations with practitioners and creators who make greener choices work in real life."
  }
];

export default function LearningHub() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
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
              Learning Hub
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify"
            >
              Discover practical ways to live sustainably—and how ethical creator marketing drives real impact.
              From low-emission living to compliant, performance-driven campaigns, learn the skills that make a
              difference for people, planet, and the local economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Learning Topics Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Topics to Explore
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
          >
            {learningTopics.map((topic, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative h-[280px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-xl font-bold mb-3 text-deep-teal">{topic.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Resources & Tools
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="group relative"
                  onClick={() => handleFaqClick(index)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-6 hover:transform hover:scale-[1.01] transition duration-300 cursor-pointer shadow-md border-2 border-deep-teal/10">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-deep-teal pr-8">{resource.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-white bg-deep-teal px-4 py-2 rounded-full whitespace-nowrap">{resource.type}</span>
                        <div className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            className="text-deep-teal"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 9l-7 7-7-7" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mt-4">{resource.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainable Habits Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Building Sustainable Habits
          </motion.h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold text-deep-teal">Start Small, Think Big</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Small, consistent actions create momentum—choose low-emission travel, plan meals to cut waste,
              and support transparent brands. If you’re a creator, apply the same mindset to your work:
              disclose clearly, partner with values-aligned brands, and measure real outcomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sprin7 helps you track progress and celebrate wins—whether that’s fewer car miles, less landfill,
              or a campaign that moved people to choose greener. Learn, test, iterate, repeat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-4xl font-bold text-deep-teal">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-700">
              Join our community and access workshops, tools, and guides—for greener living and ethical,
              results-driven creator marketing.
            </p>
            <button className="px-12 py-4 bg-deep-teal rounded-full text-xl text-white font-semibold hover:bg-deep-teal/90 transition">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
