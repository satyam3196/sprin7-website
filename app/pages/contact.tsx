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

const contactMethods = [
  {
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "team@sprin7.com",
    icon: "📧"
  },
  {
    title: "Call Us",
    description: "Speak with our team",
    contact: "Coming Soon",
    icon: "📞"
  },
  {
    title: "Visit Us",
    description: "London, United Kingdom",
    contact: "Address details coming soon",
    icon: "📍"
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link to team@sprin7.com
    const mailtoLink = `mailto:team@sprin7.com?subject=${encodeURIComponent(
      `Sprin7 Contact Form - ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    // Open default email client
    window.location.href = mailtoLink;
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Modal Alert */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-cloud-gray rounded-2xl shadow-xl p-8 max-w-sm mx-auto text-center">
            <h3 className="text-2xl font-bold text-deep-teal mb-4">Your email client will open</h3>
            <p className="text-gray-800 mb-6">Please send the email to complete your message submission.</p>
            <button
              className="px-6 py-2 bg-deep-teal text-white rounded-full font-semibold hover:bg-deep-teal/90 transition"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
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
              Contact Support
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-center text-justify"
            >
              Have questions or want to learn more about Sprin7? We'd love to hear from you. Get in touch with our team and we'll respond as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      {/* <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative h-[250px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-deep-teal to-signal-blue rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 h-full shadow-md flex flex-col items-center justify-center text-center border-2 border-deep-teal/10">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-deep-teal">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="text-gray-700 font-semibold">{method.contact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 relative bg-cloud-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-deep-teal"
          >
            Send Us a Message
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-deep-teal focus:outline-none transition text-gray-900 placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-deep-teal focus:outline-none transition text-gray-900 placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-deep-teal focus:outline-none transition text-gray-900"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Customer Support</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-deep-teal focus:outline-none transition resize-none text-gray-900 placeholder:text-gray-500"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-4 bg-deep-teal rounded-full text-xl text-white font-semibold hover:bg-deep-teal/90 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
