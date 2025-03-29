'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaTruck, 
  FaBolt, 
  FaBicycle 
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
    description: "Need something right now? Our Sprin7ers can collect and deliver packages within less an hour. Perfect for urgent documents, forgotten items, or last-minute gifts."
  },
  {
    title: "Custom Delivery",
    description: "Schedule a pickup and delivery for later today or other day. Ideal for planned shipments."
  }
];

const transportMethods = [
  {
    title: "Walking",
    description: "For short distances in congested areas, our walking Sprin7ers navigate pedestrian routes for the ultimate zero-emission delivery.",
    icon: FaUser
  },
  {
    title: "Cycling",
    description: "Our cycling Sprin7ers carry small to medium packages quickly through urban areas, bypassing traffic while producing zero emissions.",
    icon: FaBicycle
  },
  {
    title: "Electric Bikes",
    description: "For slightly larger items or longer distances, electric bikes offer speed and sustainability without exhausting our Sprin7ers.",
    icon: FaBolt
  },
  {
    title: "Electric/Hybrid Vehicles",
    description: "When packages are larger or distances greater, our eco-friendly vehicles ensure your delivery remains as sustainable as possible.",
    icon: FaTruck
  }
];

const partners = [
  {
    name: "Vinted",
    description: "Pre-loved fashion items"
  },
  {
    name: "Preloved",
    description: "Second-hand goods"
  },
  {
    name: "Sustainable Groceries",
    description: "Locally-sourced, organic food"
  },
  {
    name: "eBay",
    description: "Second-hand electronics and more"
  },
  {
    name: "Gumtree",
    description: "Local community marketplace"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Delivery Options Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
            >
              Delivery Options
            </motion.h1>
            <motion.div
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
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gray-900 rounded-xl p-8 h-full hover:transform hover:scale-[1.02] transition duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-200">{option.title}</h3>
                    <p className="text-purple-100/70">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transportation Methods Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Transportation Methods
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {transportMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative aspect-square"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-4 h-full hover:transform hover:scale-[1.02] transition duration-300 flex flex-col items-center justify-center text-center">
                  <method.icon className="w-12 h-12 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-purple-200">{method.title}</h3>
                  <p className="text-sm text-purple-100/70">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainable Marketplace Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900/50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                Sustainable Marketplace
              </h2>
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-purple-200">How It Works</h3>
                <p className="text-xl text-purple-100/80 leading-relaxed">
                  Browse products from our curated selection of sustainable retailers directly in the Sprin7 app. Purchase with ease, and a Sprin7er will collect and deliver your items using our eco-friendly transport options.
                </p>
              </div>
            </div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-3xl font-semibold text-center text-purple-200 mb-12">Our Partners</h3>
              <div className="grid grid-cols-5 gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                    }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-gray-900 rounded-xl p-4 text-center hover:transform hover:scale-[1.02] transition duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-purple-200">{partner.name}</h4>
                      <p className="text-sm text-purple-100/70">{partner.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 