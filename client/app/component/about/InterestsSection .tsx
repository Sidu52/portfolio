"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaBrain, FaPalette } from "react-icons/fa";

const InterestsSection = () => {
  const interests = [
    {
      icon: <FaInstagram className="text-2xl" />,
      title: "AI-Generated Content",
      description: "I create spiritual videos using AI tools on Instagram",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Mind Exploration",
      description: "Deeply interested in philosophy and psychology",
      color: "bg-gradient-to-br from-blue-500 to-teal-400",
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "Design Inspiration",
      description: "Regularly browse Dribbble/Behance for UI/UX ideas",
      color: "bg-gradient-to-br from-amber-500 to-red-500",
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#010f1d]">
      {/* Background elements */}
      <div className="absolute -top-32 left-1/4 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[300px] opacity-20"></div>
      <div className="absolute bottom-20 -right-20 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-72 h-72 blur-[350px] opacity-15"></div>

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
            Outside Tech
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Creative Pursuits
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              className="group"
            >
              <div className="h-full bg-[#011627] rounded-xl border border-[#1E2D3D] p-8 relative overflow-hidden transition-all duration-300 hover:border-[#0180e2]/50">
                {/* Gradient overlay */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${interest.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                ></div>

                {/* Floating icon background */}
                <div
                  className={`absolute -top-4 -right-4 text-8xl ${interest.color} bg-clip-text text-transparent opacity-5`}
                >
                  {interest.icon}
                </div>

                <div className="relative z-10">
                  {/* Icon container */}
                  <div
                    className={`w-14 h-14 rounded-lg ${interest.color} flex items-center justify-center mb-6 text-white`}
                  >
                    {interest.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400">{interest.description}</p>

                  {/* Animated underline */}
                  <div className="mt-4">
                    <div className="w-0 h-0.5 bg-[#0180e2] group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/3 left-10 w-6 h-6 rounded-full bg-[#0180e2]/30"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-4 h-4 rounded-full bg-[#0180e2]/40"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </section>
  );
};

export default InterestsSection;
