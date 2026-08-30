import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

const featuredProjects = [
  {
    title: "JavaScript Calculator",
    description: "Full-featured calculator with chained operations, keyboard support, real-time input validation, and a sleek dark UI.",
    gradient: "from-slate-800 via-slate-900 to-blue-950",
    symbol: "{ }",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "https://github.com/amina-maqsood09",
    githubLink: "https://github.com/amina-maqsood09",
  },
  {
    title: "Modern Image Gallery",
    description: "CSS Grid layout with category-based filtering, lightbox viewer, keyboard navigation, and smooth scroll animations.",
    gradient: "from-blue-950 via-slate-900 to-slate-800",
    symbol: "[ ]",
    tags: ["JavaScript", "CSS Grid", "HTML"],
    demoLink: "https://github.com/amina-maqsood09",
    githubLink: "https://github.com/amina-maqsood09",
  },
  {
    title: "Portfolio Website v1",
    description: "Responsive personal portfolio with scroll-triggered animations and a spinning ring photo effect — live on GitHub Pages.",
    gradient: "from-slate-900 via-blue-950 to-slate-800",
    symbol: "< />",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://amina-maqsood09.github.io/portfolio",
    githubLink: "https://github.com/amina-maqsood09/portfolio",
  },
  {
    title: "Ledgerly — SaaS Landing Page",
    description: "A modern SaaS landing page demo for a fictional accounting platform, featuring animated hero sections, feature grids, pricing tables, and a polished responsive layout.",
    gradient: "from-blue-950 via-slate-900 to-slate-800",
    symbol: "$/",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
    githubLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
  },
  {
    title: "Product List App",
    description: "A clean, interactive product listing application with filtering, cart management, and a responsive card-based UI — demonstrating core React state management patterns.",
    gradient: "from-slate-800 via-slate-900 to-blue-950",
    symbol: "[ * ]",
    tags: ["React", "JavaScript", "CSS"],
    demoLink: "https://github.com/amina-maqsood09/product-list-app",
    githubLink: "https://github.com/amina-maqsood09/product-list-app",
  },
   {
    title: "UXLens AI",
    description: "AI-powered UX reviewer that analyzes any live website, flags usability and accessibility issues, and generates actionable design improvement recommendations using computer vision and the Gemini API.",
    gradient: "from-blue-950 via-blue-900 to-slate-900",
    symbol: "UX",
    tags: ["React", "Node.js", "Puppeteer", "Gemini API"],
    demoLink: "https://uxlens-ai-server.vercel.app",
    githubLink: "https://github.com/amina-maqsood09/uxlens-ai",
  },
  {
    title: "FluentBuddy AI",
    description: "An AI-powered English learning companion with conversational practice, instant feedback, and progress tracking, built with the Gemini API and Firebase.",
    gradient: "from-slate-900 via-blue-950 to-blue-900",
    symbol: "EN",
    tags: ["React", "TypeScript", "Firebase", "Gemini API"],
    demoLink: "https://fluentbuddy-ai.vercel.app",
    githubLink: "https://github.com/amina-maqsood09/fluentbuddy-ai",
  },
];

const academicProjects = [
  { title: "Smart Study Planner Agent", description: "Goal-based AI agent implementing BFS, DFS, Hill Climbing, and A* for intelligent study scheduling with a Tkinter GUI.", tags: ["Python", "Tkinter", "AI Algorithms"] },
  { title: "End-to-End Encrypted Chat", description: "Secure multi-client chat with AES-256 encryption, RSA-2048 key exchange, and SHA-256 digital signatures.", tags: ["Python", "AES-256", "RSA-2048"] },
  { title: "University Complaint Management System", description: "Desktop application for managing student complaints with an intuitive GUI interface and a robust SQL backend.", tags: ["Java", "OOP", "SQL", "GUI"] },
  { title: "NETSOL Enterprise Network", description: "3-layer hierarchical network with 7 VLANs, OSPF routing, DHCP/DNS, and ASA 5505 firewall. Built as a team of 4.", tags: ["Cisco Packet Tracer", "OSPF", "VLANs", "Networking"] },
  { title: "UX Lens AI Capstone", description: "AI-powered UX analysis tool that evaluates user interfaces, highlights accessibility issues, and generates actionable design improvement recommendations.", tags: ["Python", "AI/ML", "UX Analysis"] },
  { title: "Vision AI — Image Classification", description: "Deep learning image classification system trained to identify and categorise visual content using convolutional neural networks and transfer learning techniques.", tags: ["Python", "TensorFlow", "CNN", "Computer Vision"] },
  { title: "Fire Brigade Robot", description: "Autonomous fire-detecting and extinguishing robot using flame sensors, servo motors, and microcontroller logic to navigate towards and suppress fire sources.", tags: ["Arduino", "C++", "Robotics", "Sensors"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28 bg-slate-50/70 dark:bg-muted/20" data-testid="section-projects">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">Selected Works</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            A mix of live frontend applications, AI capstones, and complex academic engineering projects.
          </p>
        </motion.div>

        {/* Featured — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col group cursor-default border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md hover:shadow-blue-500/8 transition-all duration-200"
              data-testid={`card-project-${idx}`}
            >
              {/* Thumbnail */}
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="font-mono text-5xl font-bold text-blue-400 opacity-35 select-none group-hover:opacity-55 group-hover:scale-110 transition-all duration-300">
                  {project.symbol}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-display font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-blue-700 transition-colors duration-150">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors duration-150">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic heading */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white"
        >
          <span className="w-6 h-px bg-primary inline-block" />
          Academic &amp; Engineering Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-4">
          {academicProjects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-l-4 border-l-blue-500 hover:shadow-md hover:shadow-blue-500/8 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-200 cursor-default"
              data-testid={`card-academic-${idx}`}
            >
              <h4 className="text-[15px] font-display font-bold mb-1.5 text-slate-900 dark:text-white">{project.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
