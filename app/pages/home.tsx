'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function Home() {
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
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2 space-y-8">
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
              >
                Wanna get something? Just Sprin7 it!
              </motion.h1>
              <motion.h2 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-purple-200"
              >
                Swift Safe Sustainable Delivery Service
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-purple-100/80"
              >
                Sprin7 is a game-changer delivery service with eco-conscious and secured verification system
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link href="#download" className="relative inline-flex group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                  <button className="relative px-8 py-3 bg-black rounded-full text-white font-semibold hover:bg-gray-900 transition">
                    Download App
                  </button>
                </Link>
                <Link href="/become-sprin7er" className="relative inline-flex group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                  <button className="relative px-8 py-3 bg-purple-900 rounded-full text-white font-semibold hover:bg-purple-800 transition">
                    Become a Sprin7er
                  </button>
                </Link>
                <Link href="#features" className="px-8 py-3 border-2 border-purple-400 text-purple-200 rounded-full font-semibold hover:bg-purple-400/10 transition">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
                <Image
                  src="/phone-mockup.jpg"
                  alt="Sprin7 App"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Just Sprin7 it!
          </motion.h2>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 hover:transform hover:scale-[1.02] transition duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">{step.title}</h3>
                  <p className="text-purple-100/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cool Way Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900/50"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative"
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              'Cool' Way to Get your Stuff and Save the Earth
            </h2>
            <p className="text-xl text-purple-100/80 leading-relaxed text-justify">
              At Sprin7, both as a user and Sprin7er, we're together committed to revolutionising urban logistics through swift, safe, and sustainable practices. Our system will ensure the delivery process meets the zero or low-emission transportation methods, reduce the carbon footprint. Just use and enjoy our delivery service, you will experience how 'easy peasy lemon squeezy' to manifest cleaner, greener, and safer communities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
          >
            Features
          </motion.h2>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-6 h-full hover:transform hover:scale-[1.02] transition duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">{feature.title}</h3>
                  <p className="text-purple-100/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900/50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Experience Sprin7 today
          </h2>
          <p className="text-xl mb-12 text-purple-200">
            Download our app and join London's sustainable delivery revolution.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* iOS Download */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 w-full max-w-sm">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/apple-14-white.png"
                    alt="iOS App"
                    width={60}
                    height={60}
                    className="relative"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-purple-200 mb-2">Download on App Store</h3>
                <p className="text-purple-100/70 mb-6">Get the Sprin7 app on iPhone today!</p>
                <Link 
                  href="#" 
                  className="relative inline-flex group w-full justify-center"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                  <span className="relative px-8 py-3 bg-black rounded-full text-white font-semibold w-full hover:bg-gray-900 transition">
                    Download for iOS
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Android Download */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 w-full max-w-sm">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src="/android-official.svg"
                    alt="Android App"
                    width={60}
                    height={60}
                    className="relative"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-purple-200 mb-2">Get it on Google Play</h3>
                <p className="text-purple-100/70 mb-6">Get the Sprin7 app on Android today!</p>
                <Link 
                  href="#" 
                  className="relative inline-flex group w-full justify-center"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition"></div>
                  <span className="relative px-8 py-3 bg-black rounded-full text-white font-semibold w-full hover:bg-gray-900 transition">
                    Download for Android
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

const steps = [
  {
    title: "Request a Delivery",
    description: "Enter pickup and drop-off locations in the Sprin7 app"
  },
  {
    title: "Choose Your Time of Delivery",
    description: "Now or customise your desired time"
  },
  {
    title: "Pick Your Delivery Option",
    description: "Opt for walk, cycle, electric bike, or eco-friendly vehicle"
  },
  {
    title: "Track in Real-Time",
    description: "Follow your delivery's journey from pickup point to destination"
  },
  {
    title: "Share your Feedback",
    description: "Give us your honest feedback on how you find the Sprin7er who delivers your items"
  }
]

const features = [
  {
    title: "Eco-Friendly Options",
    description: "Choose from walking, cycling, electric bikes, or hybrid/electric vehicles"
  },
  {
    title: "Sustainable Marketplace",
    description: "Shop and get your preferred eco-conscious retailers in a blink of an eye"
  },
  {
    title: "Carbon Footprint Tracker",
    description: "Brag about how big environmental impact you have made from your delivery choices!"
  },
  {
    title: "IRL Sprin7ers",
    description: "Say No More to Catfish Couriers! Enough of receiving deliveries from different faces"
  },
  {
    title: "Real-Time Updates",
    description: "Follow your package every step of the way"
  },
  {
    title: "Emergency Dial",
    description: "We care about our users and sprin7ers. Any suspicious activities or not feeling safe, click our emergency dial"
  }
] 