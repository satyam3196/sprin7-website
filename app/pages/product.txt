'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// User Journey Images (1-16, showing 2 at a time = 8 slides)
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
    caption: 'Users begin by entering pickup and drop-off details, uploading item information, and selecting how to assign their delivery — either by automatically requesting a nearby Sprin7er or scanning a Sprin7er’s QR code for direct assignment. ',
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

// Sprin7er Journey Images (17-34, showing 2 at a time = 9 slides)
const sprin7erJourneySlides = [
  {
    images: ['/application/17.png', '/application/18.png'],
    caption: 'Sprin7er onboarding with compliance checks and eco-mode selection.',
  },
  {
    images: ['/application/19.png', '/application/20.png'],
    caption: '3-step facial recognition ensures secure access and platform integrity.',
  },
  {
    images: ['/application/21.png', '/application/22.png'],
    caption: 'Sprin7er dashboard displays weekly performance metrics and user profile details. The “S” tag denotes a student Sprin7er, with the working hours tracker ensuring compliance with the UK’s 20-hour work limit for students. The profile section allows users to view personal information, while sensitive fields (e.g., date of birth, right-to-work code) can only be updated via support for data security.',
  },
  {
    images: ['/application/23.png', '/application/24.png'],
    caption: 'Sprin7ers can instantly generate secure QR codes to link deliveries with users. This feature integrates with the user-side “Scan Sprin7er QR” functionality, enabling direct courier assignment and verified identity matching. The earnings dashboard allows drivers to track income, withdraw instantly, or reinvest before the payment cycle — promoting financial flexibility and trust.',
  },
  {
    images: ['/application/25.png', '/application/26.png'],
    caption: 'Sprin7er dashboard lets drivers toggle between offline and online modes, displaying live eco-delivery opportunities, earnings, and CO₂ savings in real time.',
  },
  {
    images: ['/application/27.png', '/application/28.png'],
    caption: 'Before accepting a delivery, Sprin7ers complete secure face verification to confirm identity. Once verified, they can begin the job and track progress in real time.',
  },
  {
    images: ['/application/29.png', '/application/30.png'],
    caption: 'Sprin7ers track their active delivery from pickup to drop-off, with live status updates and instant payment confirmation upon completion — ensuring transparency, safety, and fair earnings.',
  },
  {
    images: ['/application/31.png', '/application/32.png'],
    caption: 'Built-in safety and support features protect Sprin7ers during live operations.',
  },
  {
    images: ['/application/33.png', '/application/34.png'],
    caption: 'The integrated Influencer Marketplace allows verified Sprin7ers and users to discover brand campaigns. Through AI-assisted matching, ethical brands can connect with relevant creators based on niche, audience, and platform preferences.',
  },
];

export default function Product() {
  const [userSlideIndex, setUserSlideIndex] = useState(0);
  const [sprin7erSlideIndex, setSprin7erSlideIndex] = useState(0);

  const nextUserSlide = () => {
    setUserSlideIndex((prev) => (prev + 1) % userJourneySlides.length);
  };

  const prevUserSlide = () => {
    setUserSlideIndex((prev) => (prev - 1 + userJourneySlides.length) % userJourneySlides.length);
  };

  const nextSprin7erSlide = () => {
    setSprin7erSlideIndex((prev) => (prev + 1) % sprin7erJourneySlides.length);
  };

  const prevSprin7erSlide = () => {
    setSprin7erSlideIndex((prev) => (prev - 1 + sprin7erJourneySlides.length) % sprin7erJourneySlides.length);
  };

  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-teal to-signal-blue py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Product
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore Sprin7's digital platform—a tech-native solution combining eco-friendly delivery
              services with AI-powered sustainable marketing. Currently in active development with MVP features live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-deep-teal mb-6 text-center">
              What We're Building
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-justify">
              Sprin7 is a digital-native mobile and web application offering two core platforms:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cloud-gray p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-deep-teal mb-3">Sprin7 Delivery</h3>
                <p className="text-gray-700">
                  An eco-friendly last-mile logistics platform connecting customers with verified,
                  sustainable couriers (Sprin7ers) for fast, reliable, and environmentally conscious deliveries.
                </p>
              </div>
              <div className="bg-cloud-gray p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-deep-teal mb-3">Sprin7 Marketing</h3>
                <p className="text-gray-700">
                  An AI-powered influencer marketing platform matching ethical brands with verified creators
                  to drive authentic, impactful campaigns promoting sustainable consumption.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Current Stage:</strong> Technology Readiness Level (TRL) 6 – MVP in active development with validated core features undergoing testing in relevant environments.
              The mobile app, built with React Native (Expo), is available for both iOS and Android platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* User Journey Section */}
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
                  <strong>Caption:</strong> {userJourneySlides[userSlideIndex].caption}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sprin7er Journey Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-deep-teal"
          >
            Sprin7er Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Join our network of eco-conscious couriers and earn sustainably
          </motion.p>

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
                  <strong>Caption:</strong> {sprin7erJourneySlides[sprin7erSlideIndex].caption}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-deep-teal mb-6">
              Built With Modern Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-deep-teal mb-2">Mobile App</h3>
                <p className="text-gray-700">React Native (Expo) for iOS & Android</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-deep-teal mb-2">AI & Cloud</h3>
                <p className="text-gray-700">AI-powered matching & cloud infrastructure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-deep-teal mb-2">Real-time</h3>
                <p className="text-gray-700">Live tracking & instant notifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
