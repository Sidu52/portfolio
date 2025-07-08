"use client";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#0180e2] rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[200px]"></div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#011627] border border-[#1E2D3D] rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-2">Send Me a Message</h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and I'll get back to you as soon as possible
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#0180e2] rounded-lg font-medium hover:bg-[#0168b3] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;