"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { goals } from "@/data/education";

const Card3DTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Header */}
      <motion.div
        className="container mx-auto px-6 text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Career Journey
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Scroll to explore my professional evolution through interactive 3D
          cards
        </p>
      </motion.div>

      {/* 3D Card Timeline */}
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            className="flex gap-8 w-full px-8"
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["50%", "0%"]),
            }}
          >
            {goals.map((item, index) => {
              const cardProgress = useTransform(
                scrollYProgress,
                [index * 0.2, (index + 1) * 0.2],
                [0, 2]
              );

              const y = useTransform(cardProgress, [0, 1], [100, 0]);
              const opacity = useTransform(
                cardProgress,
                [0, 0.3, 1],
                [0, 1, 1]
              );
              const scale = useTransform(cardProgress, [0, 1], [0.9, 1]);
              const rotateX = useTransform(cardProgress, [0, 1], [15, 0]);

              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 h-96 relative"
                  style={{
                    y,
                    opacity,
                    scale,
                    rotateX,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl overflow-hidden"
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: `0 25px 50px -12px ${item.color}40`,
                    }}
                  >
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <div
                        className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-2xl"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-mono text-gray-400">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div
                      className="absolute right-0 top-0 w-1 h-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Card3DTimeline;
