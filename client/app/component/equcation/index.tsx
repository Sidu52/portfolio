"use client";

import { motion } from "framer-motion";
import { FiAward, FiBook, FiCalendar } from "react-icons/fi";
import { educationData } from "@/data/education";

const EducationPage = () => {
  return (
    <section className="relative py-44 bg-[#010f1d] overflow-hidden">
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
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Education & Qualifications
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My formal education and additional certifications that have shaped
            my technical expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#0180e2]/10 text-[#0180e2] mt-1">
                  <FiAward className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiBook className="text-[#0180e2]" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-[#0180e2]" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="mt-3 px-1 py-2 bg-[#0180e2]/10 text-[#0180e2] inline-block rounded-md text-sm font-medium">
                    {item.city}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <span className="text-[#0180e2] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#0180e2]/10 border border-[#0180e2]/30 text-[#0180e2]">
            <span className="animate-pulse">📚</span>
            <span className="ml-2 font-medium">
              Committed to lifelong learning and skill development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPage;
