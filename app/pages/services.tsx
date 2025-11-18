'use client';

import React, { useState } from 'react';
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
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

// User Journey Images (from product page)
const userJourneySlides = [
  {
    images: ['/application/1.png', '/application/2.png'],
    caption: 'App entry point letting users choose between sending a delivery or joining as a Sprin7er courier.',
  },
  {
    images: ['/application/3.png', '/application/4.png'],
    caption: 'Main dashboard summarising deliveries, CO₂ savings, and access to the sustainable influencer marketplace.',
  },
  {
    images: ['/application/5.png', '/application/6.png'],
    caption: 'Users begin by entering pickup and drop-off details, uploading item information, and selecting how to assign their delivery — either by automatically requesting a nearby Sprin7er or scanning a Sprin7er\'s QR code for direct assignment.',
  },
  {
    images: ['/application/7.png', '/application/8.png'],
    caption: 'After requesting a Sprin7er, users select their preferred eco-friendly delivery mode with real-time pricing, estimated delivery time, and visible carbon savings — empowering sustainable delivery choices.',
  },
  {
    images: ['/application/9.png', '/application/10.png'],
    caption: 'Alternatively, through real-time QR scanning, users can connect instantly with verified Sprin7ers in their vicinity — ensuring transparency, convenience, and secure job assignment.',
  },
  {
    images: ['/application/11.png', '/application/12.png'],
    caption: 'Secure payment and instant delivery posting powered by Stripe.',
  },
  {
    images: ['/application/13.png', '/application/14.png'],
    caption: 'Real-time delivery tracking allows users to monitor progress and confirm successful drop-offs with full transparency.',
  },
  {
    images: ['/application/15.png', '/application/16.png'],
    caption: 'Integrated Influencer Marketplace powered by Sprin7 AI — helping ethical brands find verified creators by analysing campaign details and brand values.',
  },
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
  const [userSlideIndex, setUserSlideIndex] = useState(0);

  const nextUserSlide = () => {
    setUserSlideIndex((prev) => (prev + 1) % userJourneySlides.length);
  };

  const prevUserSlide = () => {
    setUserSlideIndex((prev) => (prev - 1 + userJourneySlides.length) % userJourneySlides.length);
  };

  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Container 1: Sustainable Delivery Services */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Sustainable Delivery Services
          </motion.h2>

          {/* Delivery Options */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-deep-teal">Delivery Options</h3>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                    <h4 className="text-2xl font-bold mb-4 text-deep-teal">{option.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-base">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Transportation Methods */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10 text-deep-teal">Transportation Methods</h3>
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
                    <h4 className="text-lg font-bold mb-2 text-deep-teal">{method.title}</h4>
                    <p className="text-sm text-gray-700 text-justify">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Container 2: Sustainable Marketing Service */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Sustainable Marketing Service
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                {/* <h3 className="text-3xl font-bold text-deep-teal">What We Offer</h3> 
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Sprin7 connects eco-conscious brands with verified creators through our
                  AI-powered matching engine—turning authentic stories into measurable sales.
                  Every campaign fuels local economies and strengthens sustainable choices.
                </p> */}
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
        </div>
      </section>

      {/* Container 3: Sustainable Marketplace */}
      <section className="py-20 relative bg-white">
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
            {/* <h3 className="text-3xl font-bold text-deep-teal">How It Works</h3> */}
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              Browse products from our curated selection of sustainable retailers directly in the Sprin7 app.
              Purchase with ease, and a Sprin7er will collect and deliver your items using our eco-friendly
              transport options. Real-time tracking and carbon-impact insights come as standard.
            </p>
          </div>
        </div>
      </section>

      {/* Container 4: User Journey */}
      <section className="py-20 bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-deep-teal"
          >
            User Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Experience seamless, eco-friendly delivery from registration to completion
          </motion.p>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Image Container */}
              <motion.div
                key={userSlideIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {userJourneySlides[userSlideIndex].images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-2xl shadow-2xl bg-white p-4"
                  >
                    <div className="aspect-[9/16] relative">
                      <img
                        src={image}
                        alt={`User journey step ${userSlideIndex * 2 + idx + 1}`}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mb-6">
                <button
                  onClick={prevUserSlide}
                  className="bg-deep-teal text-white p-3 rounded-full hover:bg-signal-blue transition-colors shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {userJourneySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setUserSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === userSlideIndex ? 'w-8 bg-deep-teal' : 'w-2 bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextUserSlide}
                  className="bg-deep-teal text-white p-3 rounded-full hover:bg-signal-blue transition-colors shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Caption */}
              <motion.div
                key={`caption-${userSlideIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
              >
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                   {userJourneySlides[userSlideIndex].caption}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
