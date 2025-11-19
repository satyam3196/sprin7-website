'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    title: "Marketing Campaigns",
    blurb:
      "Match with brands that fit your audiences. Earn from required deliverables or performance (clicks/sales).",
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
  "Reduce carbon footprint while you earn",
  "Stay active: walk or cycle jobs",
  "Safety features in-app",
  // Creator-leaning
  "Campaign bonuses & rewards",
  "Build your portfolio with ethical brands",
  "Sprin7 sustainability learning hub access"
];

const deliverySteps = [
  "Complete the online application",
  "Submit right-to-work & ID for verification",
  // "Attend virtual onboarding",
  "Complete safety & transport training",
  "Start accepting deliveries!"
];

const creatorSteps = [
  "Create your creator profile & link socials",
  "Pass verification & brand-safety checks",
  //"Set your deliverables and rates",
  "Receive AI-matched briefs & apply",
  "Launch, track results, and get paid"
];

// Sprin7er Journey Images
const sprin7erJourneySlides = [
  {
    images: ['/application/17.png', '/application/18.png'],
    caption: 'Sprin7 couriers onboarding with compliance checks and eco-mode selection.',
  },
  {
    images: ['/application/19.png', '/application/20.png'],
    caption: '3-step facial recognition ensures secure access and platform integrity.',
  },
  {
    images: ['/application/21.png', '/application/22.png'],
    caption: 'Courier dashboard displays weekly performance metrics and user profile details. The "S" tag denotes a student Sprin7 courier, with the working hours tracker ensuring compliance with the UK\'s 20-hour work limit for students. The profile section allows users to view personal information, while sensitive fields (e.g., date of birth, right-to-work code) can only be updated via support for data security.',
  },
  {
    images: ['/application/23.png', '/application/24.png'],
    caption: 'Couriers will have their own secure QR codes, allowing potential users to connect with them instantly during in-person interactions. This feature enables direct courier assignment and verified identity matching. The earnings dashboard allows drivers to track income, withdraw instantly, or reinvest before the payment cycle — promoting financial flexibility and trust.',
  },
  {
    images: ['/application/25.jpg', '/application/26.png'],
    caption: 'Couriers can turn on and off their availability through their dashboard. The dashboard is also displaying live eco-delivery opportunities and earnings in real time.',
  },
  {
    images: ['/application/27.png', '/application/28.png'],
    caption: 'Before accepting a delivery, Couriers complete secure face verification to confirm identity. Once verified, they can begin the job and track progress in real time.',
  },
  {
    images: ['/application/29.png', '/application/30.png'],
    caption: 'Couriers track their active delivery from pickup to drop-off, with live status updates and instant payment confirmation upon completion — ensuring transparency, safety, and fair earnings.',
  },
  {
    images: ['/application/31.png', '/application/32.png'],
    caption: 'Built-in safety and support features protect Couriers during live operations.',
  },
  {
    images: ['/application/33.jpg', '/application/34.png'],
    caption: 'The integrated Influencer Marketplace allows verified creators and users to discover brand campaigns. Through AI-assisted matching, ethical brands can connect with relevant creators based on niche, audience, and platform preferences.',
  },
];

export default function BecomeSprin7er() {
  const [sprin7erSlideIndex, setSprin7erSlideIndex] = useState(0);

  const nextSprin7erSlide = () => {
    setSprin7erSlideIndex((prev) => (prev + 1) % sprin7erJourneySlides.length);
  };

  const prevSprin7erSlide = () => {
    setSprin7erSlideIndex((prev) => (prev - 1 + sprin7erJourneySlides.length) % sprin7erJourneySlides.length);
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
              Build Income
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify"
            >
              Start your green job with Sprin7. Choose Deliveries for flexible local jobs—or become a Creator
              to collaborate with ethical brands. Either way, you’ll be part of UK’s sustainability accelerator.
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
                  <ul className="list-disc pl-5 space-y-1 text-lg text-gray-700">
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
                <h3 className="text-2xl font-semibold text-deep-teal mb-4">Delivery Couriers</h3>
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
                <h3 className="text-2xl font-semibold text-deep-teal mb-4">Marketing Creator/Influencer</h3>
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

      {/* Sprin7er Journey Section */}
      <section className="pt-12 pb-20 bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-deep-teal"
          >
            Join our network to earn sustainably
          </motion.h2>  

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Image Container */}
              <motion.div
                key={sprin7erSlideIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {sprin7erJourneySlides[sprin7erSlideIndex].images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-2xl shadow-2xl bg-white p-4"
                  >
                    <div className="aspect-[9/16] relative">
                      <img
                        src={image}
                        alt={`Sprin7er journey step ${sprin7erSlideIndex * 2 + idx + 1}`}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mb-6">
                <button
                  onClick={prevSprin7erSlide}
                  className="bg-deep-teal text-white p-3 rounded-full hover:bg-signal-blue transition-colors shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {sprin7erJourneySlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSprin7erSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === sprin7erSlideIndex ? 'w-8 bg-deep-teal' : 'w-2 bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSprin7erSlide}
                  className="bg-deep-teal text-white p-3 rounded-full hover:bg-signal-blue transition-colors shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Caption */}
              <motion.div
                key={`caption-${sprin7erSlideIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
              >
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  <strong></strong> {sprin7erJourneySlides[sprin7erSlideIndex].caption}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
