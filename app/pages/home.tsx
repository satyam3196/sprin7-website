'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Script from 'next/script';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CY5S612NZT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CY5S612NZT');
        `}
      </Script>
      
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
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                  'Cool' Way to Get your Stuff and Save the Earth
                </h2>
                <p className="text-xl text-purple-100/80 leading-relaxed text-justify">
                  At Sprin7, both as a user and Sprin7er, we're together committed to revolutionising urban logistics through swift, safe, and sustainable practices. Our system will ensure the delivery process meets the zero or low-emission transportation methods, reduce the carbon footprint. Just use and enjoy our delivery service, you will experience how 'easy peasy lemon squeezy' to manifest cleaner, greener, and safer communities.
                </p>
              </div>
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
                  <div className="relative bg-gray-900 rounded-xl p-4 md:p-6 h-full hover:transform hover:scale-[1.02] transition duration-300 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-purple-200">{feature.title}</h3>
                    <p className="text-sm md:text-base text-purple-100/70">{feature.description}</p>
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
              Experience Sprin7 today!
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
                className="group relative w-full max-w-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/apple-14-white.png"
                      alt="iOS App"
                      width={60}
                      height={60}
                      className="relative"
                    />
                  </div>
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
                className="group relative w-full max-w-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/android-official.svg"
                      alt="Android App"
                      width={60}
                      height={60}
                      className="relative"
                    />
                  </div>
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

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto grid gap-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="group relative"
                  onClick={() => handleFaqClick(index)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gray-900 rounded-xl p-6 hover:transform hover:scale-[1.01] transition duration-300 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-purple-200 pr-8">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          className="text-purple-400"
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
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-purple-100/70 mt-4">{faq.answer}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
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
          title: "Get Instant Proof of Delivery",
          description: "Receive immediate confirmation and digital receipt of your completed delivery"
        },
  {
    title: "Share your Feedback",
    description: "Give us your honest feedback on how you find the Sprin7er who delivers your items"
  }
]

const features = [
  {
    title: "Eco-Friendly Options",
    description: "Choose from walking, cycling, electric bikes, or hybrid/electric vehicles",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Sustainable Marketplace",
    description: "Shop and get your preferred eco-conscious retailers in a blink of an eye",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Carbon Footprint Tracker",
    description: "Brag about how big environmental impact you have made from your delivery choices!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "IRL Sprin7ers",
    description: "Say No More to Catfish Couriers! Enough of receiving deliveries from different faces",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Real-Time Updates",
    description: "Follow your package every step of the way",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Emergency Dial",
    description: "We care about our users and sprin7ers. Any suspicious activities or not feeling safe, click our emergency dial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  }
]

const faqs = [
  {
    question: "How does Sprin7 ensure delivery safety?",
    answer: "We implement a rigorous verification system for all Sprin7ers, real-time tracking, and an emergency dial feature. Each delivery is insured, and our platform maintains transparent communication between users and Sprin7ers throughout the delivery process."
  },
  {
    question: "What are the requirements to become a Sprin7er?",
    answer: "To become a Sprin7er, you must be 18+ years old, pass our background check, have a valid ID, provide proof of right to work in the UK, and complete our safety training program. For vehicle deliveries, you'll need appropriate licenses and insurance."
  },
  {
    question: "How are delivery prices calculated?",
    answer: "Prices are calculated based on distance, delivery method (walking, cycling, or vehicle), package size, and delivery urgency. We offer transparent pricing with no hidden fees, and you can see the exact cost before confirming your delivery."
  },
  {
    question: "What types of items can I send through Sprin7?",
    answer: "You can send most legal items that can be safely transported by our Sprin7ers. This includes documents, packages, food, and small to medium-sized items. Dangerous goods, illegal items, and oversized packages are not permitted."
  },
  {
    question: "How does Sprin7 contribute to sustainability?",
    answer: "We prioritize eco-friendly delivery methods like walking and cycling, use electric vehicles when motorized transport is necessary, and track carbon savings for each delivery. Our marketplace also promotes local, sustainable businesses."
  },
  {
    question: "What happens if my package is damaged or lost?",
    answer: "All deliveries through Sprin7 are insured. If your package is damaged or lost, report it immediately through the app. Our support team will investigate and process your claim within 24-48 hours."
  }
]; 