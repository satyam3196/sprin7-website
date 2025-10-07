'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaTruck, 
  FaBolt, 
  FaBicycle,
  FaShieldAlt,
  FaCheckCircle,
  FaChartLine,
  FaGlobeEurope
} from "react-icons/fa";

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

const deliveryOptions = [
  {
    title: "'Now' Delivery",
    description:
      "Need something right now? Our Sprin7ers can collect and deliver packages in an hour or less. Perfect for urgent documents, forgotten items, or last-minute gifts."
  },
  {
    title: "Custom Delivery",
    description:
      "Schedule a pickup and delivery for later today or another day. Ideal for planned shipments and recurring runs."
  }
];

const transportMethods = [
  {
    title: "Walking",
    description:
      "For short distances in congested areas, our walking Sprin7ers navigate pedestrian routes for the ultimate zero-emission delivery.",
    icon: FaUser
  },
  {
    title: "Cycling",
    description:
      "Our cycling Sprin7ers carry small to medium packages quickly through urban areas, bypassing traffic while producing zero emissions.",
    icon: FaBicycle
  },
  {
    title: "Electric Bikes",
    description:
      "For slightly larger items or longer distances, electric bikes offer speed and sustainability without exhausting our Sprin7ers.",
    icon: FaBolt
  },
  {
    title: "Electric/Hybrid Vehicles",
    description:
      "When packages are larger or distances greater, our eco-friendly vehicles ensure your delivery remains as sustainable as possible.",
    icon: FaTruck
  }
];

const marketingFeatures = [
  {
    title: "AI Matching Engine",
    description:
      "We pair brands with verified creators who align on audience, location, and sustainability values—so every collaboration feels native and credible.",
    icon: FaCheckCircle
  },
  {
    title: "Verified & Brand-Safe",
    description:
      "Creators and businesses are identity-verified and screened for brand safety and disclosure compliance to protect reputation and trust.",
    icon: FaShieldAlt
  },
  {
    title: "Performance You Can See",
    description:
      "Track clicks, views, and sales in real time. Pay for deliverables or results—your choice—backed by transparent metrics.",
    icon: FaChartLine
  },
  {
    title: "Local Roots, National Reach",
    description:
      "Activate creators near your store for footfall—or scale nationwide for launches. Grow where your audience actually lives.",
    icon: FaGlobeEurope
  }
];

const marketingSteps = [
  {
    step: "1",
    title: "Create a Campaign",
    description:
      "Share your goals, audience, budget, timeline, and sustainability angle."
  },
  {
    step: "2",
    title: "Get Matched",
    description:
      "Our AI proposes verified creators who fit your brief. Review, chat, and approve."
  },
  {
    step: "3",
    title: "Launch & Track",
    description:
      "Publish deliverables, monitor performance live, and pay on milestones or results."
  }
];

// Optional partner placeholders (kept for future use)
/*
const partners = [
  { name: "Vinted", description: "Pre-loved fashion items" },
  { name: "Preloved", description: "Second-hand goods" },
  { name: "Sustainable Groceries", description: "Locally sourced, organic food" },
  { name: "eBay", description: "Second-hand electronics and more" },
  { name: "Gumtree", description: "Local community marketplace" }
];
*/

export default function Services() {
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Delivery Options */}
      <section className="py-12 md:py-16 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Delivery Options
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-8 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-2xl font-bold mb-4 text-deep-teal">{option.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transportation Methods */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Transportation Methods
          </motion.h2>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {transportMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
              }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col items-center justify-center text-center border-2 border-deep-teal/10 min-h-[220px]">
                <method.icon className="w-8 h-8 md:w-12 md:h-12 text-deep-teal mb-3" />
                <h3 className="text-lg font-bold mb-2 text-deep-teal">{method.title}</h3>
                <p className="text-sm text-gray-700 text-justify">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
      
      {/* Sustainable Marketing Service */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Sustainable Marketing Service
          </motion.h2>

          {/* What We Offer */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-deep-teal">What We Offer</h3>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Sprin7 connects eco-conscious brands with verified creators through our
                  AI-powered matching engine—turning authentic stories into measurable sales.
                  Every campaign fuels local economies and strengthens sustainable choices.
                </p>
                <ul className="space-y-4">
                  {marketingFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <f.icon className="mt-1 shrink-0 w-5 h-5 text-deep-teal" />
                      <div>
                        <p className="font-semibold text-gray-900">{f.title}</p>
                        <p className="text-gray-700 text-sm text-justify">{f.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketing Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-deep-teal/10 shadow-md h-[400px] md:h-[500px]">
                <Image
                  src="/4.jpg"
                  alt="Sustainable Marketing on Sprin7"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 90vw"
                />
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-deep-teal text-center mb-10">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {marketingSteps.map((s, i) => (
                <div key={i} className="relative bg-white rounded-xl p-6 h-full shadow-md border-2 border-deep-teal/10">
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-deep-teal text-white flex items-center justify-center font-bold shadow">
                    {s.step}
                  </div>
                  <h4 className="text-xl font-semibold text-deep-teal mt-4 mb-2">{s.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Marketplace */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Sustainable Marketplace
          </motion.h2>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold text-deep-teal">How It Works</h3>
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              Browse products from our curated selection of sustainable retailers directly in the Sprin7 app.
              Purchase with ease, and a Sprin7er will collect and deliver your items using our eco-friendly
              transport options. Real-time tracking and carbon-impact insights come as standard.
            </p>
          </div>

          {/* Partners showcase (optional, enable when ready) */}
          {/*
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center text-deep-teal mb-12">Our Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="relative bg-white rounded-xl p-4 text-center shadow-md border-2 border-deep-teal/10">
                  <h4 className="text-lg font-bold mb-2 text-deep-teal">{partner.name}</h4>
                  <p className="text-sm text-gray-700">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>
    </main>
  );
}
