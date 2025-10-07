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
    transition: { staggerChildren: 0.1 }
  }
};

const earnPaths = [
  {
    title: "Deliveries",
    blurb:
      "Accept jobs that suit your schedule—walk, cycle, e-bike, or EV. Get paid per delivery with tips and surge during busy hours.",
    points: ["Instant jobs", "Keep tips", "Insurance & safety support"]
  },
  {
    title: "Creator Campaigns",
    blurb:
      "Match with brands that fit your audience and values. Earn from fixed deliverables or performance (clicks/sales).",
    points: ["AI matching", "ASA-compliant tools", "Transparent analytics"]
  }
];

const courierRequirements = [
  "18+ years of age",
  "Smartphone with reliable internet connection",
  "Valid ID and right to work in the UK",
  "Clean background check",
  "Own transport (walk, cycle, e-bike, or EV)",
  "Commitment to sustainability and excellent service"
];

const creatorRequirements = [
  "18+ years of age",
  "Valid ID and right to work in the UK",
  "Public social profiles with authentic engagement",
  "Willing to follow ASA/FTC disclosure rules",
  "Pass brand-safety & content quality review",
  "Alignment with sustainable values"
];

const benefits = [
  // Shared / delivery-leaning
  "Flexible hours—work when you want",
  "Competitive earnings with surge & tips",
  "Be part of an eco-conscious community",
  "Reduced carbon footprint while you earn",
  "Stay active: walk or cycle jobs",
  "Insurance & safety features in-app",
  // Creator-leaning
  "Campaign bonuses & rewards",
  "Build your portfolio with ethical brands",
  "Live analytics to learn & grow"
];

const deliverySteps = [
  "Complete the online application",
  "Submit right-to-work & ID for verification",
  "Attend virtual onboarding",
  "Complete safety & transport training",
  "Start accepting deliveries!"
];

const creatorSteps = [
  "Create your creator profile & link socials",
  "Pass verification & brand-safety checks",
  "Set your deliverables and rates",
  "Receive AI-matched briefs & apply",
  "Launch, track results, and get paid"
];

export default function BecomeSprin7er() {
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
              Build Income
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify"
            >
              Earn on your terms with Sprin7. Choose Deliveries for flexible local jobs—or become a Creator
              to collaborate with ethical brands. Either way, you’ll be part of London’s swift, safe, and sustainable
              movement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Earn */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Two Ways to Earn
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {earnPaths.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-8 shadow-md border-2 border-deep-teal/10 h-full">
                  <h3 className="text-2xl font-bold mb-3 text-deep-teal">{card.title}</h3>
                  <p className="text-gray-700 mb-4 text-justify">{card.blurb}</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {card.points.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Requirements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Delivery Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-md border-2 border-deep-teal/10">
                <h3 className="text-2xl font-semibold text-deep-teal mb-4">Delivery Sprin7er</h3>
                <div className="grid sm:grid-cols-1 gap-3">
                  {courierRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-deep-teal/10"
                    >
                      <div className="h-2 w-2 bg-electric-lime rounded-full" />
                      <p className="text-gray-700">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Creator Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-md border-2 border-deep-teal/10">
                <h3 className="text-2xl font-semibold text-deep-teal mb-4">Creator Sprin7er</h3>
                <div className="grid sm:grid-cols-1 gap-3">
                  {creatorRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-deep-teal/10"
                    >
                      <div className="h-2 w-2 bg-electric-lime rounded-full" />
                      <p className="text-gray-700">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
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
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.05 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 text-center shadow-md border-2 border-deep-teal/10">
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Application Process
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Delivery Track */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-deep-teal">Delivery Track</h3>
              {deliverySteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="flex items-center space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-xl text-gray-700">{step}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Creator Track */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-deep-teal">Creator Track</h3>
              {creatorSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="flex items-center space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-xl text-gray-700">{step}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#apply-delivery"
              className="px-10 py-4 bg-deep-teal rounded-full text-lg text-white font-semibold hover:bg-deep-teal/90 transition"
            >
              Delivery — Coming Soon
            </Link>
            <Link
              href="#apply-creator"
              className="px-10 py-4 bg-deep-teal rounded-full text-lg text-white font-semibold hover:opacity-90 transition"
            >
              Creator — Coming Soon
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
