"use client";

import { motion } from "framer-motion";
import { FiCode, FiTool, FiServer, FiUsers } from "react-icons/fi";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🌐 Frontend",
      icon: <FiCode className="text-2xl" />,
      skills: [
        "HTML5, CSS3, JavaScript (ES6+)",
        "TypeScript, React.js, Next.js",
        "TailwindCSS, Chakra UI, Bootstrap",
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "🧰 Tools & Libraries",
      icon: <FiTool className="text-2xl" />,
      skills: [
        "Redux Toolkit, Zustand, React Query",
        "Axios, Framer Motion, SwiperJS",
        "React Hook Form, Zod",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "🔧 Backend & APIs",
      icon: <FiServer className="text-2xl" />,
      skills: [
        "Node.js, Express.js",
        "RESTful APIs, Authentication (JWT)",
        "File Uploads, Form Validation, MySQL",
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "🤝 Soft Skills & Workflow",
      icon: <FiUsers className="text-2xl" />,
      skills: [
        "Git & GitHub for version control",
        "Agile/Scrum workflow",
        "Communication, documentation, clean PRs",
      ],
      color: "from-emerald-500 to-teal-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-42 bg-gradient-to-b from-[#010f1d] to-[#011627] relative overflow-hidden h-screen flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
            My Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Technical & Professional Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of technologies and methodologies I've mastered to
            deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#011627] border border-[#1E2D3D] rounded-xl overflow-hidden hover:border-[#0180e2] transition-all duration-300 group"
            >
              <div
                className={`h-2 bg-gradient-to-r ${category.color} w-full`}
              ></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#0180e2]/10 text-[#0180e2]">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start gap-2 text-gray-400"
                    >
                      <span className="text-[#0180e2] mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#0180e2]/10 border border-[#0180e2]/30 text-[#0180e2]">
            <span className="animate-pulse">✨</span>
            <span className="ml-2 font-medium">
              Continuously learning new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
