import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export const contactIntro = "Let's build something awesome together!";

export const contactDetails = {
  resume:
    "https://drive.google.com/drive/folders/15tL9LlhsKSaBF7wdssxFhJ42dB3Hy8bB",
};

export const contactMethods = [
  {
    icon: <FiMail className="text-2xl text-[#0180e2]" />,
    title: "Email",
    value: "siddhantsharma9926@gmail.com",
    link: "mailto:siddhantsharma9926@gmail.com",
  },
  {
    icon: <FiPhone className="text-2xl text-[#0180e2]" />,
    title: "Phone",
    value: "+91-8085984844",
    link: "tel:+918085984844",
  },
  {
    icon: <FiMapPin className="text-2xl text-[#0180e2]" />,
    title: "Location",
    value: "India (Remote Friendly)",
    link: "https://maps.google.com",
  },
];

export const socialLinks = [
  { platform: "GitHub", url: "https://github.com/sidhu-alston" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/sidhu-alston" },
  { platform: "Email", url: "mailto:sidhu@example.com" },
];
