"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MainImage from "@/public/assets/images/about/about_us.jpg";
import { aboutMe } from "@/data/about";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const AboutMeSection = () => {
  return (
    <section className={`relative py-48 overflow-hidden z-1 bg-[#010f1d]`}>
      {/* Background elements */}
      <div className="absolute -top-32 left-1/4 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[300px] opacity-20"></div>
      <div className="absolute bottom-20 -right-20 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-72 h-72 blur-[350px] opacity-15"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div {...fadeIn}>
              <span className="text-[#0180e2] font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
                About Me
              </span>
            </motion.div>

            <motion.h2
              {...fadeIn}
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
            >
              {aboutMe.heading1}{" "}
              <span className="text-[#0180e2]">{aboutMe.heading2}</span>
            </motion.h2>

            <motion.p {...fadeIn} className="text-lg text-gray-400 mb-6">
              {aboutMe.subHeading1}
            </motion.p>

            <motion.p {...fadeIn} className="text-lg text-gray-400 mb-8">
              {aboutMe.subHeading2}
            </motion.p>

            <motion.div {...fadeIn}>
              <Link
                href=""
                className="inline-flex items-center px-6 py-3 bg-transparent text-white font-medium rounded-full border border-[#0180e2] hover:bg-[#0180e2]/10 transition-colors group"
              >
                Read Full Story
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Placeholder for developer image/illustration */}
              <div className=" bg-gradient-to-br from-[#0180e2]/10 to-[#010f1d] border border-[#0180e2]/20 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-center">
                  <Image
                    className="w-full max-w-[680px]"
                    src={MainImage}
                    width={1200}
                    height={1100}
                    alt="mobile logo"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Animated floating elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-[#0180e2]/10 border border-[#0180e2]/20 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-2xl">⚛️</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl bg-[#0180e2]/10 border border-[#0180e2]/20 flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="text-3xl">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
