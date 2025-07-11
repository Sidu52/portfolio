"use client";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certifications } from "@/data/education";
import { trackClickButton } from "@/app/utils/helper";

const CertificationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative py-16 bg-[#011627] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#0180e2] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
            Professional Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Learning Milestones
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Verified credentials that demonstrate my commitment to continuous
            learning and skill development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              variants={containerVariants}
              key={index}
              whileHover="hover"
              className="bg-[#010f1d] border border-[#1E2D3D] rounded-xl overflow-hidden relative group hover:scale-110 transition-all ease-in-out duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0180e2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-gray-400">
                      <FiAward className="text-[#0180e2] flex-shrink-0" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-[#0180e2] text-sm font-medium">
                    {cert.year}
                  </span>
                  <motion.a
                   onClick={() => trackClickButton("Visit"+cert.title+"Certificate")} // Track Click Event
                    href={cert.link}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-full bg-[#0180e2]/10 flex items-center justify-center text-[#0180e2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0180e2] to-cyan-500 text-white shadow-lg">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-xl"
            >
              🏆
            </motion.span>
            <span className="ml-3 font-medium">
              Earned 4 specialized tech certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
