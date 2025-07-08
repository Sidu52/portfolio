"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Legacy App Migration",
      description: "Migrated 3 legacy apps to modern Next.js stack",
      impact: "Improved performance by 60% and reduced maintenance costs",
      icon: "🔄",
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Reduced load time by 40% with optimization techniques",
      impact: "Enhanced user experience and increased conversion rates",
      icon: "⚡",
    },
    {
      id: 3,
      title: "CRM System Development",
      description: "Built CRM with 4 access levels from scratch",
      impact: "Streamlined internal processes for 50+ users",
      icon: "💼",
    },
    {
      id: 4,
      title: "Component Library",
      description: "Created reusable UI component library",
      impact: "Reduced development time by 30% for new features",
      icon: "🧩",
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
        duration: 0.6,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(1, 128, 226, 0.3)",
    },
  };

  return (
    <section className="relative py-20 bg-[#011627]">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
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
            <FiAward className="text-lg" />
            Professional Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Key Achievements
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Notable accomplishments that demonstrate my technical expertise and
            impact
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-[#010f1d] border border-[#1E2D3D] rounded-xl p-6 relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0180e2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#0180e2]/10 flex items-center justify-center text-2xl mb-4">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>

              <div className="mt-4 pt-4 border-t border-[#1E2D3D]">
                <p className="text-sm text-[#0180e2] font-medium">Impact:</p>
                <p className="text-gray-400 text-sm mt-1">
                  {achievement.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
