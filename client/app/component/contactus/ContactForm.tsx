"use client";
import { handleSendEmail } from "@/app/utils/email";
import { NotificationType } from "@/app/utils/enum/notification_enum";
import {
  formFieldInfomation,
  handleNotification,
  trackClickButton,
} from "@/app/utils/helper";
import { motion } from "framer-motion";
import { useReducer, useState, useRef } from "react";
import { FiSend } from "react-icons/fi";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [api_process, setApiProcess] = useState<boolean>(false);
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);
  const initialErrorState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const initialFormData: FormFields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Form Reducer
  const formReducer = (
    state: FormFields,
    action: { type: string; field: string; value: string }
  ) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET":
        return initialFormData;
      default:
        return state;
    }
  };

  // Error Reducer
  const errorReducer = (
    errorsState: any,
    action: { type: string; field: string; error: string }
  ) => {
    const { type, field, error } = action;
    switch (type) {
      case "UPDATE_ERROR":
        return { ...errorsState, [field]: error };
      case "CLEAR_ERROR":
        return initialErrorState;
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialFormData);
  const [errorsState, dispatchError] = useReducer(
    errorReducer,
    initialErrorState
  );
  // Change Field Value
  const handleChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    trackUserEvents(id, value);
    dispatch({ type: "UPDATE_FIELD", field: id, value });

    if (value.trim() !== "") {
      dispatchError({ type: "UPDATE_ERROR", field: id, error: "" });
    }
  };

  // handle Submit
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    (Object.entries(state) as [keyof FormFields, string][]).forEach(
      ([field, value]) => {
        if (!value.trim()) {
          dispatchError({
            type: "UPDATE_ERROR",
            field,
            error: `${
              field.charAt(0).toUpperCase() + field.slice(1)
            } is required.`,
          });
          isValid = false;
        }
      }
    );
    if (!isValid) return;
    if (api_process) return;
    setApiProcess(true);
    try {
      const response = await handleSendEmail(state);
      if (response.success) {
        handleNotification({
          navigationLink: "",
          title: "Message Sent Successfully!",
          description:
            "Thank you for reaching out. I'll get back to you shortly.",
          type: NotificationType.NOTIFICATION_SUCCESS,
        });
        dispatch({ type: "RESET", field: "", value: "" });
        dispatchError({ type: "CLEAR_ERROR", field: "", error: "" });
      }
    } catch (err) {
      handleNotification({
        navigationLink: "",
        title: "Failed to Send Message",
        description:
          "Something went wrong while sending your message. Please try again later or check your email us.",
        type: NotificationType.NOTIFICATION_FAILED,
      });
    } finally {
      setApiProcess(false);
    }
  };

  // Track User Information
  const trackUserEvents = (type: string, value: string) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (!value) return;
    timeOutRef.current = setTimeout(() => {
      formFieldInfomation(type, value);
    }, 2000);
  };

  return (
    <section id="contact-form" className="py-20 relative">
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
            Fill out the form below and I&apos;ll get back to you as soon as
            possible
          </p>

          <form className="space-y-6" onSubmit={handleSubmitForm}>
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
                  value={state.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
                <span className="text-red-500 text-sm font-medium">
                  {errorsState?.name}
                </span>
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
                  value={state.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
                <span className="text-red-500 text-sm font-medium">
                  {errorsState?.email}
                </span>
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
                value={state.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                placeholder="What's this about?"
              />
              <span className="text-red-500 text-sm font-medium">
                {errorsState?.subject}
              </span>
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
                value={state.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#010f1d] border border-[#1E2D3D] rounded-lg focus:border-[#0180e2] focus:outline-none transition-colors"
                placeholder="Your message here..."
              ></textarea>
              <span className="text-red-500 text-sm font-medium">
                {errorsState?.message}
              </span>
            </div>

            <motion.button
              type="submit"
              onClick={() => trackClickButton("Send Email")} // Track Click Event
              className="flex items-center gap-2 px-6 py-3 bg-[#0180e2] rounded-lg font-medium hover:bg-[#0168b3] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend />
              Send Message
              {api_process && (
                <span className="w-5 h-5 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
