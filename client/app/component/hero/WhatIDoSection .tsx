import { motion } from "framer-motion";
import { whatIDo } from "@/data/home";

const topAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const itemAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export const WhatIDoSection = () => {
  return (
    <section className="relative p-32 overflow-hidden z-1 bg-[#01152a]">
      {/* Background elements */}
      <div className="absolute -bottom-32 left-1/4 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[389px] opacity-20"></div>
      <div className="absolute top-1/3 -left-20 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-48 h-48 blur-[300px] opacity-15"></div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Optional: You could add an illustration or image on the right side */}
          <div className="hidden lg:block flex-shrink-0">
            {/* Placeholder for visual element */}
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0180e2]/20 to-[#00050A] border border-[#0180e2]/20"></div>
          </div>

          <motion.div
            className="space-y-8 max-w-2xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div {...topAnimation}>
              <span className="text-[#0180e2] font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
                What I Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Crafting Digital Experiences That Matter
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {whatIDo.map((data, index) => (
                <motion.div
                  {...itemAnimation}
                  className="flex gap-4"
                  key={index}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#0180e2]"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {data.title}
                    </h3>
                    <p className="text-gray-400 mt-1">{data.des}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
