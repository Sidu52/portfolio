import { motion } from "framer-motion";
import { featuredProjects } from "@/data/home";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const FeaturedProjects = () => {
  return (
    <section className="relative overflow-hidden z-1 bg-[#010f1d] py-32">
      <div className="absolute -top-96 left-16 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-72 h-72 blur-[389px] opacity-20"></div>
      <div className="absolute top-[30%] -right-28 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-64 h-64 blur-[389px] opacity-20"></div>
      <div className="absolute bottom-0 left-1/2 bg-[#0180e2] rounded-full rotate-[120deg] aspect-[1055/678] w-80 h-80 blur-[400px] opacity-15"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeInAnimation} className="text-center mb-20">
          <span className="text-[#0180e2] font-medium flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#0180e2]"></span>
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            My Recent Work
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              className="bg-[#011627] rounded-xl overflow-hidden border border-[#1E2D3D] hover:border-[#0180e2] transition-all duration-300 group"
            >
              <div
                className="h-2 w-full"
                style={{ backgroundColor: project.accentColor }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0180e2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0180e2] mb-3">
                    FEATURES
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#0180e2] mr-2">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
