"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Design",
    description: "Complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
    image: "🛒",
    tags: ["Figma", "User Research", "Prototyping"],
    year: "2024",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Design",
    description: "Designing a modern, secure mobile banking experience with focus on accessibility and ease of use.",
    image: "💳",
    tags: ["Sketch", "iOS", "Accessibility"],
    year: "2023",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Design",
    description: "Creating an intuitive dashboard interface for a SaaS product with complex data visualization needs.",
    image: "📊",
    tags: ["Figma", "Design System", "Data Viz"],
    year: "2023",
  },
  {
    id: 4,
    title: "Fitness App",
    category: "Mobile Design",
    description: "Designing a motivational fitness tracking app with social features and gamification elements.",
    image: "🏃",
    tags: ["Adobe XD", "Mobile", "Gamification"],
    year: "2022",
  },
  {
    id: 5,
    title: "Healthcare Portal",
    category: "Web Design",
    description: "User-friendly healthcare portal design focusing on patient experience and information clarity.",
    image: "🏥",
    tags: ["Figma", "Healthcare", "UX Research"],
    year: "2022",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    category: "Web Design",
    description: "Streamlined travel booking experience with focus on search and booking flow optimization.",
    image: "✈️",
    tags: ["Sketch", "Travel", "E-commerce"],
    year: "2021",
  },
];

const categories = ["All", "Web Design", "Mobile Design"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 hero-margin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title font-bold mb-4 text-gradient">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent design work and projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? "glass-strong scale-105"
                  : "glass hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-8xl">{project.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{project.category}</span>
                  <span className="text-sm text-gray-600">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full glass text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

