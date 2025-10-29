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
              <strong>What We Do:</strong> Sprin7 is a digital-native tech startup offering two interconnected
              platforms: <strong>Sprin7 Delivery</strong>—an eco-friendly last-mile logistics solution connecting
              customers with verified, sustainable couriers for fast, reliable deliveries—and{' '}
              <strong>Sprin7 Sustainable Marketing</strong>—an AI-powered influencer marketing platform that matches
              ethical brands with verified creators to drive authentic, impactful campaigns.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify mb-6"
            >
              <strong>Problems We Solve:</strong> Urban logistics contribute significantly to emissions and congestion,
              while small businesses struggle to access affordable, sustainable delivery and marketing solutions. Our
              platforms address these challenges by providing eco-conscious delivery options through verified couriers
              and democratizing influencer marketing through AI-driven matching, helping UK SMEs grow sustainably without
              the high costs and complexity of traditional services.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify mb-6"
            >
              <strong>Target Audience:</strong> We serve UK-based small and medium enterprises (SMEs), ethical brands,
              e-commerce businesses, and individual customers who prioritize sustainability. Our creator community includes
              verified influencers and content creators passionate about promoting responsible consumption and sustainable lifestyles.
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
          <div className="relative bg-white rounded-xl p-4 md:p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10 md:min-h-[280px]">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-deep-teal">{value.title}</h3>
            <p className="text-gray-700 leading-snug text-sm text-justify">{value.description}</p>
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
              and empowered local communities—all contributing to the UK's
              net-zero mission.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Meet the Team
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Yuanita */}
            <motion.div
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg border-2 border-deep-teal/10">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-xl ring-4 ring-deep-teal/20">
                    <img
                      src="/yuanita.png"
                      alt="Yuanita Intan Paramitasari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-teal text-center">
                    Yuanita Intan Paramitasari
                  </h3>
                  <p className="text-lg font-semibold text-signal-blue mt-2">
                    Co-founder & CEO
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  With over seven years of experience in corporate transition strategies, AI research, ESG compliance, voluntary carbon markets, and sustainable consumption across startups, government, and policy institutions, Yuanita has led ESG research, reporting, educational initiatives, and AI-driven big data sustainability projects for policymaking. She has published research papers and patents in finance, governance, sustainability, and AI. After earning her Master's in Climate Change Management and Finance from Imperial College Business School, she joined the British Standards Institution (BSI) as Lead Standards Development Manager, overseeing voluntary carbon market and sustainability standards. Combining her public-sector experience and passion for education, Yuanita is inspired building a community-led and education in action sustainability venture that promotes sustainable lifestyles and empowers UK SMEs through AI-powered inclusive services and educational initiatives to easily adopt responsible and sustainable practices.
                </p>
              </div>
            </motion.div>

            {/* Satyam */}
            <motion.div
              variants={fadeInUp}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg border-2 border-deep-teal/10">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-xl ring-4 ring-deep-teal/20">
                    <img
                      src="/satyam.png"
                      alt="Satyam Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-teal text-center">
                    Satyam Sharma
                  </h3>
                  <p className="text-lg font-semibold text-signal-blue mt-2">
                    Co-founder & CTO
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  With over three years of experience in AI systems engineering, cloud architecture, and full-stack product development across international organizations, research institutions, and startups, Satyam has built and deployed intelligent platforms advancing digital governance, logistics, and sustainability. After earning his M.Sc. in Big Data Science (Distinction) from Queen Mary University of London, he joined the Commonwealth Secretariat as an AI Researcher, leading AI-driven initiatives for data-informed policymaking and digital transformation across 56 member states. His published research on machine learning–driven urban analytics applies predictive models to enhance infrastructure efficiency, resilience, and environmental decision-making. Combining technical expertise with a passion for sustainability, innovation, and inclusion, Satyam is building an AI-powered venture that drives cleaner innovation and empowers UK SMEs and communities to confidently adopt responsible, future-ready, and impactful sustainable business practices.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
