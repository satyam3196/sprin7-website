'use client';

import React, { useState } from 'react';
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 py-8 md:py-12 relative">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
            >
              <div className="space-y-3 md:space-y-4">
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-bold leading-tight text-deep-teal"
                >
                  Time to Sprin7 ! 
                </motion.h1>
                <motion.h2 
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-gray-800 font-semibold"
                >
                  AI-Powered Swift, Safe, and Sustainable Services
                </motion.h2>
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-gray-700 max-w-3xl"
                >
                  Connecting people in getting swift, safe, sustainable services to have an easy sustainable lifestyle and boost the economy. 
                </motion.p>
              </div>
              
              {/* Hero Image */}
              <motion.div 
                className="mt-4 md:mt-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-[17/7]">
                  <Image
                    src="/5.png"
                    alt="Sprin7 Hero - AI-Powered Swift, Safe, and Sustainable Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Just Sprin7 it! Section */}
        <section className="py-20 relative overflow-hidden bg-cloud-gray">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-deep-teal"
            >
              Just Sprin7 it!
            </motion.h2>

            {/* 3x2 Grid: 6 cards total */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
            >
              {/* Row 1 - Column 1: Image 1 */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.1 } }
                }}
                className="relative rounded-xl overflow-hidden shadow-lg h-[300px]"
              >
                <Image
                  src="/2.png"
                  alt="Sustainability Initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </motion.div>

              {/* Row 1 - Column 2: Card 1 - Our Commitment */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                }}
                className="group relative h-[300px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-xl font-bold mb-3 text-deep-teal">Our Commitment</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Sustainability isn't just a feature of Sprin7—it's our foundation. We're dedicated to proving that speed, safety, and convenience can go hand-in-hand with environmental responsibility and economy growth.
                  </p>
                </div>
              </motion.div>

              {/* Row 1 - Column 3: Card 2 - Our Impact */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.3 } }
                }}
                className="group relative h-[300px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-xl font-bold mb-3 text-deep-teal">Our Impact</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Real-time metrics on avoided carbon emissions reporting.
                  </p>
                </div>
              </motion.div>

              {/* Row 2 - Column 1: Image 2 */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.4 } }
                }}
                className="relative rounded-xl overflow-hidden shadow-lg h-[300px]"
              >
                <Image
                  // src="/4.jpg"
                  src="/3.png"
                  alt="Sustainability Goals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              {/* Row 2 - Column 2: Card 3 - Initiatives */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.5 } }
                }}
                className="group relative h-[300px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-xl font-bold mb-3 text-deep-teal">Initiatives</h3>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-electric-lime mr-2">•</span>
                      Zero-emission transport prioritisation
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-lime mr-2">•</span>
                      Sustainable packaging
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-lime mr-2">•</span>
                      Eco-conscious partnerships
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-lime mr-2">•</span>
                      Green Marketplace
                    </li>
                    <li className="flex items-start">
                      <span className="text-electric-lime mr-2">•</span>
                      Sustainable Marketing for Boosting Sustainable Values
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Row 2 - Column 3: Card 4 - Goals for 2027 */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: 0.6 } }
                }}
                className="group relative h-[300px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-xl font-bold mb-3 text-deep-teal">Goals for 2027</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-3xl font-bold text-electric-lime mb-1">75%</div>
                      <p className="text-gray-700 text-sm">Zero-emission deliveries</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-electric-lime mb-1">5</div>
                      <p className="text-gray-700 text-sm">Major UK cities with Sprin7 operations</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-electric-lime mb-1">30%</div>
                      <p className="text-gray-700 text-sm">Reduction in urban delivery carbon footprint</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 relative bg-gradient-to-br from-deep-teal via-deep-teal to-deep-teal/90">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-white"
            >
              Our Swift, Safe, and Sustainable
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
                  <div className="absolute -inset-0.5 bg-electric-lime/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-deep-teal/95 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full hover:transform hover:scale-[1.02] transition duration-300 flex flex-col items-center justify-center text-center shadow-lg border-2 border-electric-lime/30">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-electric-lime to-signal-blue rounded-full flex items-center justify-center mb-3 md:mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{feature.title}</h3>
                    <p className="text-sm md:text-base text-white/90">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 relative overflow-hidden bg-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center relative"
          >
            <h2 className="text-5xl font-bold mb-6 text-deep-teal">
              Coming Soon!
            </h2>
            <p className="text-xl mb-12 text-gray-700">
              It will be available soon on iOS and Android
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* iOS Download */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative w-full max-w-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-deep-teal/20 shadow-md">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/apple-14.svg"
                      alt="iOS App"
                      width={60}
                      height={60}
                      className="relative"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold">
                      Available soon on iOS
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Android Download */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative w-full max-w-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-deep-teal/20 shadow-md">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/android-official.svg"
                      alt="Android App"
                      width={60}
                      height={60}
                      className="relative"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold">
                      Available soon on Android
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative bg-cloud-gray">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-16 text-deep-teal"
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl p-6 hover:transform hover:scale-[1.01] transition duration-300 cursor-pointer shadow-md border-2 border-deep-teal/10">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-deep-teal pr-8">{faq.question}</h3>
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
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mt-4">{faq.answer}</p>
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
    title: "Sustainable Marketing",
    description: "AI-matched creators for ROI-driven campaigns; brands grow, Sprin7ers earn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    title: "Verified Sprin7ers Network",
    description: "Each Sprin7er is verified before every pickup, promoting transparency and eco-conscious service.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
    question: "How does Sprin7 ensure delivery and campaign safety?",
    answer: "We verify every Sprin7er (couriers and creators), use real-time tracking for deliveries, and provide an in-app Emergency Dial. Campaigns run through brand-safe briefs, content checks, and performance dashboards. All deliveries and eligible campaigns are covered by our policies."
  },
  {
    question: "What are the requirements to become a Sprin7er (courier or creator)?",
    answer: "You must be 18+, pass our verification, and complete training. Couriers need right-to-work in the UK and (if applicable) valid licenses/insurance. Creators connect social profiles, pass brand-safety checks, and agree to disclosure guidelines."
  },
  {
    question: "How are delivery prices calculated?",
    answer: "By distance, delivery method (walking, cycling, or vehicle), package size, and urgency. Pricing is transparent—see the exact cost before confirming."
  },
  {
    question: "How does influencer matching work on Sprin7?",
    answer: "Share your campaign brief and goals; our AI matches you with verified creators by audience fit, location, and brand values. Approve matches, track clicks/sales in real time, and pay on milestones or results. Creators earn from successful campaigns."
  },
  {
    question: "How are campaign fees and creator payouts set?",
    answer: "Campaign pricing depends on creator reach/engagement, deliverables, format, and performance goals (e.g., CPA/CPS). Payouts are handled securely in-app with clear milestones and reporting."
  },
  {
    question: "What types of items can I send through Sprin7?",
    answer: "Most legal items that are safe for transport: documents, packages, food, and small/medium goods. No dangerous goods, illegal items, or oversize packages."
  },
  {
    question: "How does Sprin7 contribute to sustainability?",
    answer: "We prioritize walking/cycling and EVs, track carbon savings per delivery, and spotlight eco-friendly merchants. Our marketing network promotes sustainable brands and behaviors."
  },
  {
    question: "What happens if my package is damaged or lost?",
    answer: "Deliveries are insured. Report issues in-app and our team will investigate and process your claim, typically within 24–48 hours."
  },
  {
    question: "Do creators need to disclose sponsored content?",
    answer: "Yes—creators must follow ASA/FTC disclosure rules. We provide disclosure prompts and tools in the brief flow."
  }
]; 