import { FiCode, FiTool, FiServer, FiUsers } from "react-icons/fi";

export const skills = [
  {
    title: "🌐 Frontend",
    icon: <FiCode className="text-2xl" />,
    skills: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "TypeScript, React.js, Next.js",
      "TailwindCSS, Bootstrap",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "🧰 Tools & Libraries",
    icon: <FiTool className="text-2xl" />,
    skills: [
      "Redux Toolkit, webSocket, web push notifications",
      "Axios, Framer Motion, Mixpannel",
      "React Hook Form, Zod, Postman",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "🔧 Backend & APIs",
    icon: <FiServer className="text-2xl" />,
    skills: [
      "Node.js, Express.js",
      "RESTful APIs, Authentication (JWT)",
      "File Uploads, Form Validation, MySQL",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "🤝 Soft Skills & Workflow",
    icon: <FiUsers className="text-2xl" />,
    skills: [
      "Git & GitHub for version control",
      "Agile/Scrum workflow",
      "Communication, documentation, clean PRs",
    ],
    color: "from-emerald-500 to-teal-400",
  },
];
