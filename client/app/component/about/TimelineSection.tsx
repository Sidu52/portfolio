"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2019-2022",
      title: "Completed B.Sc. Computer Science",
      description: "Graduated with honors specializing in web technologies",
      icon: "🎓",
    },
    {
      year: "2022-2023",
      title: "Full Stack Developer - Coding Ninjas Bootcamp",
      description:
        "Built 2 production apps with React, Node.js, and MongoDB stack",
      icon: "💻",
    },
    {
      year: "2023-2024",
      title: "MERN Developer Intern - Gravit Infosystem Pvt. Ltd.",
      description:
        "Built 3 production apps with React, Next.js, Node.js and MongoDB stack",
      icon: "💻",
    },
    {
      year: "2024-Present",
      title: "Full Stack Developer - Repill",
      description: "Led development of 4 apps from scratch using Next.js",
      icon: "🚀",
    },
    // You can add more items here and it will work automatically
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Dynamic animation values based on item count
  const getItemOpacity = (index: number) => {
    const totalItems = timelineData.length;
    const segment = 1 / totalItems;
    const start = index * segment;
    const end = (index + 1) * segment;
    const mid = (start + end) / 2;

    return useTransform(
      scrollYProgress,
      [
        Math.max(0, start - segment * 0.5),
        mid,
        Math.min(1, end + segment * 0.5),
      ],
      [0, 1, index === totalItems - 1 ? 1 : 0.8] // Keep last item fully visible
    );
  };

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          className="text-center mb-20"
        >
          <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Professional Journey
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#0180e2] to-transparent">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#0180e2] h-full origin-top"
              style={{ scaleY: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-24 pl-8 md:pl-0">
            {timelineData.map((item, index) => {
              // Determine position (alternating for desktop)
              const positionClass =
                index % 3 === 0
                  ? "md:mr-auto md:ml-0"
                  : index % 3 === 1
                  ? "md:mx-auto"
                  : "md:ml-auto md:mr-0";

              // Calculate connector position
              const connectorPosition =
                index % 3 === 1
                  ? "md:left-1/2 md:-translate-x-1/2"
                  : index % 3 === 0
                  ? "md:left-1/2 md:-translate-x-1/2"
                  : "md:left-1/2 md:-translate-x-1/2";

              return (
                <motion.div
                  key={index}
                  className={`relative md:w-[45%] ${positionClass}`}
                  style={{
                    opacity: getItemOpacity(index),
                  }}
                  initial={{
                    x: index % 3 === 1 ? 0 : index % 3 === 0 ? -50 : 50,
                  }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Connector dot */}
                  <div
                    className={`absolute top-6 -left-8 w-5 h-5 rounded-full bg-[#0180e2] border-4 border-[#010f1d] z-10 ${connectorPosition}`}
                  ></div>

                  {/* Connector line (for mobile) */}
                  <div className="absolute top-6 -left-8 w-8 h-0.5 bg-[#0180e2] md:hidden"></div>

                  <div className="bg-[#011627] p-6 rounded-xl border border-[#1E2D3D] relative overflow-hidden group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#0180e2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon */}
                    <div className="absolute -top-4 -right-4 text-7xl opacity-10">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <span className="text-[#0180e2] font-bold block mb-1">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
