'use client';

import React, { useState } from 'react';
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

const programs = [
  {
    title: "University Sustainability Programs",
    description:
      "Long-term collaborations with UK universities to co-design low-emission delivery pilots, creator-led awareness campaigns, and campus ‘living lab’ projects. Students gain real-world experience while institutions advance their net-zero goals with measurable outcomes."
  },
  {
    title: "Community Workshops",
    description:
      "Hands-on sessions covering zero-waste habits, repair & reuse, safe cycling, and sustainable marketing for local SMEs. Participants leave with practical toolkits and a clear plan to reduce impact at home, on campus, and in the community."
  },
  {
    title: "Green Marketing Campaigns",
    description:
      "AI-matched partnerships between verified student creators and ethical businesses. Campaigns are ASA-compliant, track clicks and sales, and spotlight sustainable choices—driving real footfall and revenue for local retailers."
  }
];

const upcomingEvents = [
  {
    title: "Sustainable Campus Initiative",
    date: "Coming Soon",
    description:
      "A campus ‘living lab’ pilot combining walking/cycling deliveries with creator content challenges. Includes carbon-saving dashboards for students and departments."
  },
  {
    title: "Eco-Innovation Summit",
    date: "Coming Soon",
    description:
      "Half-day forum with universities, SMEs, and creators. Talks on low-emission logistics, measurable green marketing, and funding pathways for student-led projects."
  },
  {
    title: "Zero-Waste Challenge",
    date: "Coming Soon",
    description:
      "A 30-day challenge promoting refill, repair, and reuse. Weekly workshops, creator stories, and community rewards tracked via the Sprin7 app."
  }
];

export default function EventsPrograms() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
              Events & Programs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-justify"
            >
              Join our practical, results-driven initiatives that move sustainability from talk to action.
              We partner with universities, creators, and local businesses to pilot low-emission logistics,
              run measurable green marketing, and build skills that last.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Our Programs
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative md:h-[300px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-4 md:p-6 h-full shadow-md flex flex-col border-2 border-deep-teal/10">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-deep-teal">{program.title}</h3>
                  <p className="text-gray-700 leading-snug text-sm text-justify">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Upcoming Events
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {upcomingEvents.map((event, index) => (
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
                      <h3 className="text-xl font-semibold text-deep-teal pr-8">{event.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-electric-lime bg-deep-teal px-4 py-2 rounded-full whitespace-nowrap">{event.date}</span>
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
                      <p className="text-gray-700 mt-4">{event.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Marketing Programs Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            University Sustainability Marketing
          </motion.h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold text-deep-teal">Empowering Students for a Greener Future</h3>
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              We collaborate with universities, student unions, and societies to run creator-led campaigns,
              on-campus delivery pilots, and research projects that demonstrate measurable carbon savings
              and community benefit. Students gain portfolio-ready experience, while local businesses and
              departments see real outcomes—reduced emissions, higher engagement, and transparent reporting.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Programs include brief writing and disclosure training, safety & verification, content quality
              reviews, and performance dashboards (clicks, conversions, and impact metrics). Our goal is simple:
              make sustainable choices the easy choices—on campus and beyond—through practical projects that
              improve daily life and support the UK’s net-zero mission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
