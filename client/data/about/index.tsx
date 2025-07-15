import { FaInstagram, FaBrain, FaPalette } from "react-icons/fa";


export const aboutMe = {
  heading1: "Frontend Developer",
  heading2: " Focused on Results",
  subHeading1: "I'm a performance-driven Frontend Developer with hands-on experience building scalable and user-focused web and mobile apps using React.js, Next.js, TypeScript, and Tailwind CSS.",
  subHeading2: "I enjoy solving real-world problems through clean code and thoughtful UI/UX. I&apos;m also skilled in React Native, backend integration with Node.js, MongoDB, MySQL, and tools like Git, Postman, Vercel, Figma.",
};

export const timeline = [
  {
       year: "2019-2022",
       title: "Completed Bachelor of Science in Computer Science.",
       description: "Graduated with honors specializing in web technologies",
       icon: "🎓",
     },
     {
       year: "2022-2023",
       title: "Full Stack Developer - Coding Ninjas Bootcamp",
       description:
         "Built 2 production apps with React.js, Node.js, and MongoDB stack",
       icon: "💻",
     },
     {
       year: "2023-2024",
       title: "MERN Developer Intern - Gravit Infosystem Pvt. Ltd.",
       description:
         "Built 3 production apps with React.js, Next.js, Node.js and MongoDB stack",
       icon: "💻",
     },
     {
       year: "2024-Present",
       title: "Full Stack Developer - Repill",
       description: "Led development of 4 web application scratch to production using Next.js",
       icon: "🚀",
     },
];

export const interests = [
  {
      icon: <FaInstagram className="text-2xl" />,
      title: "AI-Generated Content",
      description: "I create spiritual videos using AI tools on Instagram",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Create Projects",
      description: "I love building projects that solve real world problems",
      color: "bg-gradient-to-br from-blue-500 to-teal-400",
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "Design Inspiration",
      description: "Regularly browse Dribbble/Behance for UI/UX ideas",
      color: "bg-gradient-to-br from-amber-500 to-red-500",
    },
];
