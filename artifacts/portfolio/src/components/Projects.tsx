import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const featuredProjects = [
  {
    title: "Modern Image Gallery",
    description: "CSS Grid layout with category-based filtering, lightbox viewer, keyboard navigation, and smooth scroll animations.",
    gradient: "from-green-950 via-stone-900 to-stone-800",
    symbol: "[ ]",
    tags: ["JavaScript", "CSS Grid", "HTML"],
    demoLink: "https://github.com/amina-maqsood09",
    githubLink: "https://github.com/amina-maqsood09",
  },
  {
    title: "Portfolio Website v1",
    description: "Responsive personal portfolio with scroll-triggered animations and a spinning ring photo effect — live on GitHub Pages.",
    gradient: "from-stone-900 via-green-950 to-stone-800",
    symbol: "< />",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://amina-maqsood09.github.io/portfolio",
    githubLink: "https://github.com/amina-maqsood09/portfolio",
  },
  {
    title: "Ledgerly — SaaS Landing Page",
    description: "A modern SaaS landing page demo for a fictional accounting platform, featuring animated hero sections, feature grids, pricing tables, and a polished responsive layout.",
    gradient: "from-green-950 via-stone-900 to-stone-800",
    symbol: "$/",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
    githubLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
  },
  {
    title: "Product List App",
    description: "A clean, interactive product listing application with filtering, cart management, and a responsive card-based UI — demonstrating core React state management patterns.",
    gradient: "from-stone-800 via-stone-900 to-green-950",
    symbol: "[ * ]",
    tags: ["React", "JavaScript", "CSS"],
    demoLink: "https://github.com/amina-maqsood09/product-list-app",
    githubLink: "https://github.com/amina-maqsood09/product-list-app",
  },
  {
    title: "UXLens AI",
    description: "AI-powered UX reviewer that analyzes any live website, flags usability and accessibility issues, and generates actionable design improvement recommendations using computer vision and the Gemini API.",
    gradient: "from-green-950 via-green-900 to-stone-900",
    symbol: "UX",
    tags: ["React", "Node.js", "Puppeteer", "Gemini API"],
    demoLink: "https://uxlens-ai-server.vercel.app",
    githubLink: "https://github.com/amina-maqsood09/uxlens-ai",
  },
  {
    title: "FluentBuddy AI",
    description: "An AI-powered English learning companion with conversational practice, instant feedback, and progress tracking, built with the Gemini API and Firebase.",
    gradient: "from-stone-900 via-green-950 to-green-900",
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
  { title: "Vision AI — Image Classification", description: "Deep learning image classification system trained to identify and categorise visual content using convolutional neural networks and transfer learning techniques.", tags: ["Python", "TensorFlow", "CNN", "Computer Vision"] },
  { title: "Fire Brigade Robot", description: "Autonomous fire-detecting and extinguishing robot using flame sensors, servo motors, and microcontroller logic to navigate towards and suppress fire sources.", tags: ["Arduino", "C++", "Robotics", "Sensors"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28 bg-slate-50/70 dark:bg-muted/20 scroll-mt-24" data-testid="section-projects">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">Selected Works</h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
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
              data-testid={`card-project-${idx}`}
            >
              <TiltCard className="h-full group">
                <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full cursor-default border border-border group-hover:border-green-300 dark:group-hover:border-green-700/60 group-hover:shadow-xl group-hover:shadow-green-500/10 transition-all duration-200">
                  {/* Thumbnail */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="font-mono text-5xl font-bold text-green-400 opacity-35 select-none group-hover:opacity-55 group-hover:scale-110 transition-all duration-300">
                      {project.symbol}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-display font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-muted border border-border rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-5">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-green-700 transition-colors duration-150">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors duration-150">
                        <Github size={14} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Academic heading */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-display font-bold mb-8 flex items-center gap-3 text-foreground"
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
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-border border-l-4 border-l-green-500 hover:shadow-md hover:shadow-green-500/8 hover:border-green-300 dark:hover:border-green-700/50 transition-all duration-200 cursor-default"
              data-testid={`card-academic-${idx}`}
            >
              <h4 className="text-[15px] font-display font-bold mb-1.5 text-foreground">{project.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-muted rounded text-muted-foreground">
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