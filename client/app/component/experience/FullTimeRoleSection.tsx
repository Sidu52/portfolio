"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { experiences } from "@/data/experience";
import { contactDetails } from "@/data/contact";
import Link from "next/link";
import { trackClickButton } from "@/app/utils/helper";

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-40 bg-gradient-to-b from-[#010f1d] to-[#011627]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0180e2] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Work Experience
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My career progression and contributions at each organization
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="bg-[#011627] border border-[#1E2D3D] rounded-xl overflow-hidden group transition-all duration-300 hover:border-[#0180e2]"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#0180e2] font-medium">
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#0180e2]/10 text-[#0180e2]">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>

                <p className="text-gray-400 mt-4">{exp.description}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium flex items-center gap-2">
                      <FiChevronDown className="text-[#0180e2]" />
                      Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="text-[#0180e2] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium flex items-center gap-2">
                      <FiChevronDown className="text-[#0180e2]" />
                      Key Achievements
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="text-[#0180e2] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-white font-medium mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-[#0180e2]/10 text-[#0180e2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to see more details? Check out my full resume.
          </p>
          <Link
            onClick={() => trackClickButton("Visit Github")} // Track Click Event
            href={contactDetails.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0180e2] text-white font-medium hover:bg-[#0168b3] transition-colors"
          >
            View Resume
            <FiExternalLink className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;
