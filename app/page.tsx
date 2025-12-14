"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroTyping from "@/components/HeroTyping";

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-24 hero-margin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <HeroTyping />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            UX/UI Designer crafting beautiful, intuitive digital experiences
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/portfolio"
              className="glass-strong px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="glass px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6 text-gradient-accent">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  I'm a passionate UX/UI designer with over 5 years of experience creating
                  digital products that users love. I specialize in user research, interface
                  design, and creating seamless user experiences across web and mobile platforms.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  My approach combines data-driven insights with creative problem-solving to
                  deliver designs that are both beautiful and functional. I believe in the power
                  of design to make technology more accessible and enjoyable for everyone.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Design Philosophy</h3>
                  <p className="text-gray-600 text-sm">
                    Simplicity, clarity, and user-centered design are at the core of everything I create.
                  </p>
                </div>
                <div className="glass rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Skills</h3>
                  <p className="text-gray-600 text-sm">
                    User Research • Wireframing • Prototyping • Visual Design • Design Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Work Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gradient-accent">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Project {item}</h3>
                  <p className="text-gray-600 text-sm">
                    A beautiful and intuitive design solution
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="glass px-6 py-3 rounded-xl font-medium inline-block hover:scale-105 transition-transform"
            >
              View All Projects →
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

