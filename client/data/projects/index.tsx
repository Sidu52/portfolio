type ProjectType = "company" | "personal";
import RepillImage from "@/public/assets/images/project/repill_main_web.png";
import PharmacyImage from "@/public/assets/images/project/pharmacy_website.png";
import ReconnectImage from "@/public/assets/images/project/reconnect_web.png";
import AIAssistantImage from "@/public/assets/images/project/ai_assistant_web.png";
import StickNinjasImage from "@/public/assets/images/project/stickNinjaGame.tsx.png";
import SocialMediaImage from "@/public/assets/images/project/social_media_website.png";
import GravitImage from "@/public/assets/images/project/gravitImage.png";
import PortfolioImage from "@/public/assets/images/project/portfolio.png";

import { StaticImageData } from "next/image";
export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  link?: string;
  github?: string;
  image: StaticImageData;
  role?: string;
  metrics?: string[];
  features?: string[];
}

export const companyProjects: Project[] = [
  {
    id: 1,
    title: "Repill – B2C Health Platform",
    description:
      "A modern healthcare platform that enables patients to consult doctors, order medicines, and track deliveries in real-time with a seamless web experience.",
    type: "company",
    tech: [
      "Next.js",
      "Redux",
      "TailwindCSS",
      "Mixpanel",
      "Web Push Notification",
      "Web Services",
      "TypeScript",
    ],
    link: "",
    image: RepillImage,
    role: "Lead Frontend Developer",
    metrics: [
      "Integrated Mixpanel analytics improving campaign ROI tracking by 35%",
      "Improved mobile experience and reduced bounce rate by 40%",
    ],
  },
  {
    id: 2,
    title: "Pharmacy Order Management Portal",
    description:
      "An internal platform to manage pharmacy orders, dispatch tracking, payment reconciliation, and delivery assignments for medical partners and logistics teams.",
    type: "company",
    tech: [
      "Next.js",
      "Redux",
      "TailwindCSS",
      "Mixpanel",
      "Web Push Notification",
      "Web Services",
      "TypeScript",
    ],
    link: "",
    image: PharmacyImage,
    role: "Frontend Developer",
    metrics: [
      "Reduced order management time by 50% through improved workflows",
      "Simple flow to order recived to delivery",
      "Enabled push-based alerts for order delays and exceptions",
      "Enhanced user experience with real-time order tracking",
    ],
  },
  {
    id: 3,
    title: "Company CRM Portal",
    description:
      "A role-based CRM platform for managing pharmacists, doctors, delivery agents, users, and product catalogs. Included dashboards for Admin, Support, Supervisor, and Sales teams.",
    type: "company",
    tech: [
      "Next.js",
      "Redux",
      "TailwindCSS",
      "Mixpanel",
      "Web Push Notification",
      "Web Services",
      "TypeScript",
    ],
    link: "",
    image: ReconnectImage,
    role: "Frontend Developer",
    metrics: [
      "Built dynamic dashboards for 5+ user roles using reusable UI components",
      "Boosted task automation efficiency by 60% with role-based flows",
      "Implemented granular permission controls using RBAC logic",
      "Enhanced data security with role-based access controls",
    ],
  },
  {
    id: 4,
    title: "Gravit Infosystems Corporate Website",
    description:
      "A fully responsive and SEO-optimized company website showcasing services, projects, and team information for Gravit Infosystems.",
    type: "company",
    tech: ["React.js", "Redux", "TailwindCSS", "TypeScript"],
    link: "https://gravitinfosystems.com/",
    image: GravitImage,
    role: "Frontend Developer",
    metrics: [
      "Designed and developed all pages using reusable and modular React components",
      "Implemented responsive layout with Tailwind CSS, ensuring mobile-first experience",
      "Optimized performance and SEO for better Google indexing",
      "Integrated dynamic team and project sections from backend APIs",
    ],
  },
];

export const personalProjects: Project[] = [
  {
    id: 9,
    title: "Portfolio",
    description: `This is my personal portfolio website. It features a user event tracking system to monitor every interaction, a dynamic contact form with email integration.
      And work on chatbot for engaging user experience, and an admin panel for real-time content control.`,
    type: "personal",
    tech: ["Next.js", "Redux", "TailwindCSS", "TypeScript", "Mixpanel"],
    link: "https://siddhantsharmacv.netlify.app",
    github: "https://github.com/Sidu52/portfolio",
    image: PortfolioImage,
    role: "Frontend Developer",
    metrics: [
      "Built the entire website using reusable, modular React components",
      "Implemented responsive design using Tailwind CSS",
      "Integrated Mixpanel to track user behavior on click, scroll, and form events",
      "Added contact form with email sending capability using EmailJS or Nodemailer",
      "Optimized performance and SEO for better Google indexing",
    ],
  },
  {
    id: 6,
    title: "AI Voice Assistant",
    description:
      "Voice assistant that interprets user commands without using any paid AI APIs. It uses custom NPL logic to understand input and execute tasks like opening apps, replying, or fetching weather/news.",
    type: "personal",
    tech: ["Node.js", "Express", "JavaScript", "Socket.IO", "MongoDB", "NLP"],
    link: "https://siddhantsharmavoiceassistant.netlify.app/",
    github: "https://github.com/Sidu52/Vocie-Asstainer",
    image: AIAssistantImage,
    features: [
      "Voice input processing using browser APIs",
      "Custom NLP logic to understand and respond to user commands",
      "Real-time interaction powered by Socket.IO",
      "Speech synthesis for spoken replies using Web Speech API",
      "Supports music playback, video suggestions, games, Q&A, astrology insights, and more",
    ],
  },
  {
    id: 5,
    title: "Social Media Web App",
    description:
      "A fully responsive social media platform where users can post, like, comment, and follow other users, built from scratch using MERN stack principles.",
    type: "personal",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Cloudinary",
    ],
    link: "",
    github: "https://github.com/Sidu52/Social-media.git",
    image: SocialMediaImage,
    features: [
      "Authentication with JWT",
      "Real-time post feed and like system",
      "User profile, follow/unfollow functionality",
      "Mobile responsive layout with dark mode",
      "60 Secound Reels watch and upload",
    ],
  },
  {
    id: 7,
    title: "Stick Ninjas – 2D Game",
    description:
      "A fun, browser-based 2D action game built using pure JavaScript and HTML5 Canvas. Features player combat, enemy AI, and health system.",
    type: "personal",
    tech: ["HTML5 Canvas", "JavaScript"],
    link: "https://stickninjas.netlify.app/",
    github: "https://github.com/Sidu52/Stick-ninja-game.git",
    image: StickNinjasImage,
    features: [
      "Responsive canvas rendering",
      "Character movement, attack, and jump",
      "Enemy AI and score system",
      "Keyboard controls and animation loop",
    ],
  },
];
