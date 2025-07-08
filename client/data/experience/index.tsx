export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Repill",
    period: "Mar 2024 – Present",
    current: true,
    description:
      "Led development of production-grade web applications handling both frontend and backend.",
    responsibilities: [
      "Developed and deployed 4 full-featured web apps using Next.js (App Router), React, and Node.js",
      "Designed responsive and modular UI components using Tailwind CSS and TypeScript",
      "Implemented scalable state management using Redux Toolkit",
      "Integrated RESTful APIs and handled secure authentication flows with JWT",
      "Set up real-time features using WebSockets and Server-Sent Events",
      "Worked closely with product and design teams in an Agile environment",
    ],
    achievements: [
      "Built a role-based CRM system for 5 user types, improving workflow efficiency by 60%",
      "Implemented live order tracking using WebSockets and Push Notifications, reducing support queries by 25%",
      "Integrated Mixpanel analytics, resulting in a 35% increase in marketing insights",
      "Built a secure doctor-patient dashboard enabling real-time consultations and chat sync",
      "Optimized API payloads and lazy loading, reducing average page load time by 40%",
    ],
    techStack: [
      "Next.js",
      "React",
      "Redux",
      "TailwindCSS",
      "Socket.IO",
      "MixPanel",
      "Node.js",
      "Web Push Notifications",
      "MongoDB",
      "JWT Auth",
    ],
  },

  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Gravit Infosystem Pvt. Ltd.",
    period: "Sep 2023 – Mar 2024",
    current: false,
    description:
      "Contributed to full-stack development projects, focusing on frontend performance, backend integration, and feature implementation to support business goals.",
    responsibilities: [
      "Developed and deployed the official company website using React.js, optimizing for performance and SEO, which led to a 45% increase in website traffic.",
      "Built a freelancer job portal with a real-time bidding system and integrated PayPal API, reducing manual bid processing efforts by 70%.",
      "Collaborated cross-functionally with UI/UX designers and backend teams to deliver a fully functional MVP within 6 weeks under tight deadlines.",
    ],
    achievements: [
      "Successfully launched two major client-facing platforms during the internship.",
      "Improved user experience and reduced load time by optimizing React components.",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PayPal API",
    ],
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Freelance Project",
    period: "Apr 2024 – Jun 2024",
    current: false,
    description:
      "Built a scalable full-stack social media application to demonstrate expertise in real-time features, user interaction, and media content handling.",
    responsibilities: [
      "Launched a full-stack social media platform using MongoDB, Express.js, React.js, and Node.js with user authentication, feeds, and profile management.",
      "Integrated real-time messaging with online/offline presence detection using Socket.IO, leading to a 30% increase in user engagement.",
      "Implemented a Reels module for short-form video content (up to 60 seconds), increasing average session time by 18%.",
    ],
    achievements: [
      "Delivered a fully functional MVP within 8 weeks with seamless real-time features.",
      "Demonstrated strong understanding of scalable architecture and component reusability in React.",
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Cloudinary",
    ],
  },
];


export const achievements = [
  {
    id: 1,
    title: "Social Media Platform Launch",
    description: "Developed and launched a full-stack social media platform with real-time messaging and Reels feature.",
    impact: "Boosted user engagement by 30% and increased time spent on platform by 18%.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Performance Optimization",
    description: "Refactored frontend components and optimized API calls to improve speed and responsiveness.",
    impact: "Achieved a 45% increase in website traffic and reduced load times by 35%.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "CRM System Development",
    description: "Built an internal CRM system for managing leads, tasks, and customer interactions.",
    impact: "Increased team productivity and reduced manual tracking efforts by 60%.",
    icon: "💼",
  },
  {
    id: 4,
    title: "Real-Time Bid System",
    description: "Implemented a freelancer job portal with live bidding functionality and PayPal API integration.",
    impact: "Reduced manual bid handling by 70% and streamlined the bidding process.",
    icon: "🧩",
  },
];
