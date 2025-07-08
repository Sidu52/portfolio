"use client";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";
import { companyProjects, personalProjects, Project } from "@/data/projects";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="bg-[#010f1d] text-white min-h-screen py-44">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-[#0180e2]">Work</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Professional projects and personal explorations
          </motion.p>
        </div>
      </section>

      {/* Company Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <FiBriefcase className="text-2xl text-[#0180e2]" />
            <h2 className="text-3xl font-bold">Professional Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showRole={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <FiUser className="text-2xl text-[#0180e2]" />
            <h2 className="text-3xl font-bold">Personal Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showRole={false}
                features={project.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  showRole: boolean;
  features?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  showRole,
  features,
}) => {
  return (
    <motion.div
      className="bg-[#011627] border border-[#1E2D3D] rounded-xl overflow-hidden hover:border-[#0180e2] transition-colors h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image src={project.image || ""} alt="Project Image" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.type === "company"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-purple-500/20 text-purple-400"
            }`}
          >
            {project.type === "company" ? "Professional" : "Personal"}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        {showRole && project.role && (
          <p className="text-sm text-[#0180e2] mb-2">{project.role}</p>
        )}

        <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

        {project.metrics && (
          <div className="mb-4 space-y-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#0180e2] mt-1">•</span>
                <span className="text-sm text-gray-300">{metric}</span>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        {project.features && (
          <div className="mb-4 space-y-2">
            {project.features.map((feathre, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#0180e2] mt-1">•</span>
                <span className="text-sm text-gray-300">{feathre}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-[#0180e2]/10 text-[#0180e2]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#0180e2] hover:bg-[#0168b3] transition-colors text-sm"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#1E2D3D] hover:border-[#0180e2] transition-colors text-sm"
            >
              <FiGithub /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[#1E2D3D] text-gray-500 text-sm">
              <FiCode /> Private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
