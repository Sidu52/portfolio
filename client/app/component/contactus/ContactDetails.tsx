"use client";
import { motion } from "framer-motion";
import { contactMethods } from "@/data/contact";
import { trackClickButton } from "@/app/utils/helper";

 const ContactDetails = () => {


  return (
    <section className="py-20 bg-[#011627]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-[#0180e2]">Information</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reach out to me through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#010f1d] border border-[#1E2D3D] rounded-xl p-6 text-center hover:border-[#0180e2] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
               onClick={() => trackClickButton(`Visit ${method.title}`)} // Track Click Event
            >
              <div className="flex justify-center mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-400">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;