import { motion } from "framer-motion";
import Link from "next/link";
import { constactSection } from "@/data/home";
import { trackClickButton } from "@/app/utils/helper";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden z-1 bg-[#010f1d] py-32">
      {/* Background elements */}
      <div className="absolute -top-32 left-1/4 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[300px] opacity-20"></div>
      <div className="absolute bottom-20 -right-20 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-72 h-72 blur-[350px] opacity-15"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div {...fadeInUp} className="mb-4">
            <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 rounded-full border-2 border-[#0180e2] inline-flex items-center justify-center"
              >
                <span className="w-2 h-2 rounded-full bg-[#0180e2]"></span>
              </motion.span>
              Let&apos;s Collaborate
            </span>
          </motion.div>

          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Build Something{" "}
            <span className="text-[#0180e2]">Amazing?</span>
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Let&apos;s connect and bring your vision to life. I&apos;m open to freelance,
            full-time roles, and collaborations.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={staggerContainer}
          >
            <motion.div {...fadeInUp} whileHover={{ y: -3 }}>
              <Link
                href="/contact-us"
                className="px-8 py-3 bg-[#0180e2] text-white font-medium rounded-full hover:bg-[#0169c2] transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
                <motion.span
                 onClick={() => trackClickButton("Contact us Home")} // Track Click Event
                  className="absolute inset-0 bg-[#0169c2] rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} whileHover={{ y: -3 }}
             onClick={() => trackClickButton("Visit Github")} // Track Click Event
             >
              
              <Link
                href={constactSection.gitHub}
                target="_blank"
                className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-[#0180e2] hover:bg-[#0180e2]/10 transition-colors flex items-center gap-2"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </motion.svg>
                GitHub
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} whileHover={{ y: -3 }}
             onClick={() => trackClickButton("Visit Linkedin")} // Track Click Event
             >
              <Link
                href={constactSection.linkedin}
                target="_blank"
                className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-[#0180e2] hover:bg-[#0180e2]/10 transition-colors flex items-center gap-2"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </motion.svg>
                LinkedIn
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating animated elements */}
          <motion.div
            className="absolute -left-20 top-1/3 w-10 h-10 rounded-full bg-[#0180e2]/20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-10 bottom-1/4 w-6 h-6 rounded-full bg-[#0180e2]/30"
            animate={{
              y: [0, -15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
