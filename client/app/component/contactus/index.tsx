"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section className="relative py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0180e2] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
            Let's <span className="text-[#0180e2]">Connect</span>
          </h1>
          <p className="text-gray-400 text-center text-lg mb-8">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Get in touch using the form or contact details below.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-[#0180e2] rounded-lg font-medium hover:bg-[#0168b3] transition-colors">
              Send Message
            </button>
            <button className="px-6 py-3 border border-[#1E2D3D] rounded-lg font-medium hover:border-[#0180e2] transition-colors">
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
