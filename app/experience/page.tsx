"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Senior UX/UI Designer",
    period: "2022 - Present",
    description: "Leading design initiatives for enterprise products, collaborating with cross-functional teams to deliver exceptional user experiences.",
    achievements: [
      "Increased user engagement by 40% through improved interface design",
      "Established design system used across 10+ products",
      "Mentored junior designers and conducted design workshops",
    ],
  },
  {
    id: 2,
    company: "Creative Studio",
    role: "UX Designer",
    period: "2020 - 2022",
    description: "Designed user interfaces for web and mobile applications, focusing on accessibility and user-centered design principles.",
    achievements: [
      "Designed 15+ successful product launches",
      "Conducted user research and usability testing",
      "Collaborated with developers to ensure design implementation",
    ],
  },
  {
    id: 3,
    company: "Startup Labs",
    role: "Junior UI Designer",
    period: "2019 - 2020",
    description: "Created visual designs and prototypes for early-stage products, learning the fundamentals of UX/UI design.",
    achievements: [
      "Designed mobile app interfaces from concept to launch",
      "Created design assets and style guides",
      "Participated in design critiques and feedback sessions",
    ],
  },
];

const skills = [
  { category: "Design Tools", items: ["Figma", "Sketch", "Adobe XD", "Principle", "Framer"] },
  { category: "Research", items: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics"] },
  { category: "Prototyping", items: ["Interactive Prototypes", "Wireframing", "User Flows", "Journey Mapping"] },
  { category: "Development", items: ["HTML/CSS", "React Basics", "Design Systems", "Component Libraries"] },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 hero-margin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title font-bold mb-4 text-gradient">Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in design and the skills I've developed along the way
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gradient-accent">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-8 border-l-2 border-blue-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-lg text-gray-700">{exp.company}</p>
                      </div>
                      <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gradient-accent">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <h3 className="font-bold text-lg mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full glass text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

