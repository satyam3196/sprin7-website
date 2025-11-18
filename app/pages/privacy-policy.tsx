'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-32 relative">
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold text-center mb-8 text-deep-teal"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
            >
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-cloud-gray">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">1. Introduction</h2>
              <p className="text-justify leading-relaxed mb-4">
                Welcome to Sprin7™. Newmint Technologies Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                mobile application and website (collectively, the "Service").
              </p>
              <p className="text-justify leading-relaxed">
                By using Sprin7, you agree to the collection and use of information in accordance with this policy. If you do not 
                agree with our policies and practices, please do not use our Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-justify leading-relaxed mb-3">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Profile information (profile picture, bio, preferences)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communications you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-justify leading-relaxed mb-3">
                When you use our Service, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (pages viewed, features used, time spent on the app)</li>
                <li>Location data (with your permission)</li>
                <li>Log data (IP address, browser type, access times)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-justify leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to track activity on our Service and store 
                certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">3. How We Use Your Information</h2>
              <p className="text-justify leading-relaxed mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our Service</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices, updates, and support messages</li>
                <li>To respond to your comments, questions, and customer service requests</li>
                <li>To communicate with you about products, services, offers, and events</li>
                <li>To monitor and analyze trends, usage, and activities</li>
                <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Google Analytics */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">4. Google Analytics</h2>
              <p className="text-justify leading-relaxed mb-4">
                We use Google Analytics to understand how users interact with our Service. Google Analytics collects information 
                such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to 
                our site.
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Google Analytics uses cookies to collect this information. The information generated by the cookie about your use 
                of the Service (including your IP address) will be transmitted to and stored by Google on servers in the United States.
              </p>
              <p className="text-justify leading-relaxed">
                You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-signal-blue underline" target="_blank" rel="noopener noreferrer">
                  https://tools.google.com/dlpage/gaoptout
                </a>.
              </p>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-justify leading-relaxed mb-3">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>With Your Consent:</strong> We may share information with third parties when you give us explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">6. Data Security</h2>
              <p className="text-justify leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">7. Data Retention</h2>
              <p className="text-justify leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. When we no longer need your information, we will 
                securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights (GDPR) */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">8. Your Rights (GDPR & UK GDPR)</h2>
              <p className="text-justify leading-relaxed mb-3">
                If you are a resident of the European Economic Area (EEA) or the United Kingdom, you have certain data protection rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> You can request a copy of your personal data</li>
                <li><strong>Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> You can request deletion of your personal data</li>
                <li><strong>Restriction:</strong> You can request restriction of processing your personal data</li>
                <li><strong>Data Portability:</strong> You can request transfer of your data to another organization</li>
                <li><strong>Object:</strong> You can object to processing of your personal data</li>
                <li><strong>Withdraw Consent:</strong> You can withdraw consent at any time where we relied on consent</li>
              </ul>
              <p className="text-justify leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:team@sprin7.com" className="text-signal-blue underline">team@sprin7.com</a>.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">9. Children's Privacy</h2>
              <p className="text-justify leading-relaxed">
                Our Service is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect 
                personal information from children under these ages. If you are a parent or guardian and believe your child has 
                provided us with personal information, please contact us so we can delete it.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">10. International Data Transfers</h2>
              <p className="text-justify leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These 
                countries may have data protection laws that are different from the laws of your country. We take appropriate 
                safeguards to ensure that your personal data remains protected in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-justify leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
                for any changes. Changes are effective when posted on this page.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-4">12. Contact Us</h2>
              <p className="text-justify leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg border-2 border-deep-teal/20">
                <p className="font-semibold text-gray-800 mb-2">Newmint Technologies Ltd</p>
                <p className="text-gray-700">Email: <a href="mailto:team@sprin7.com" className="text-signal-blue underline">team@sprin7.com</a></p>
                {/* <p className="text-gray-700">Phone: +44 xxxxxxxxxx</p> */}
                <p className="text-gray-700 mt-2">Registered in England and Wales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
