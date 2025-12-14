"use client";

import { motion } from "framer-motion";

export default function Contact() {

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 hero-margin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title font-bold mb-4 text-gradient">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's collaborate on your next project or just say hello
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="glass-strong rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gradient-accent">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  hello@example.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-700">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Social Links</h3>
            <div className="flex gap-4 flex-wrap">
              {["LinkedIn", "Dribbble", "Behance", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="glass px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

