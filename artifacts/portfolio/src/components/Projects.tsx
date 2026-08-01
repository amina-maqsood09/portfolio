import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const featuredProjects = [
  {
    title: "JavaScript Calculator",
    description:
      "Full-featured calculator with chained operations, keyboard support, real-time input validation, and a sleek dark UI.",
    gradient: "from-violet-600/30 via-purple-600/20 to-indigo-600/30",
    accent: "text-violet-400",
    symbol: "{ }",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "https://github.com/amina-maqsood09",
    githubLink: "https://github.com/amina-maqsood09",
  },
  {
    title: "Modern Image Gallery",
    description:
      "CSS Grid layout with category-based filtering, lightbox viewer, keyboard navigation, and smooth scroll animations.",
    gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/30",
    accent: "text-cyan-400",
    symbol: "[ ]",
    tags: ["JavaScript", "CSS Grid", "HTML"],
    demoLink: "https://github.com/amina-maqsood09",
    githubLink: "https://github.com/amina-maqsood09",
  },
  {
    title: "Portfolio Website v1",
    description:
      "Responsive personal portfolio with scroll-triggered animations and a spinning ring photo effect — live on GitHub Pages.",
    gradient: "from-rose-600/30 via-pink-600/20 to-fuchsia-600/30",
    accent: "text-rose-400",
    symbol: "< />",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://amina-maqsood09.github.io/portfolio",
    githubLink: "https://github.com/amina-maqsood09/portfolio",
  },
  {
    title: "Ledgerly — SaaS Landing Page",
    description:
      "A modern SaaS landing page demo for a fictional accounting platform, featuring animated hero sections, feature grids, pricing tables, and a polished responsive layout.",
    gradient: "from-indigo-600/30 via-blue-600/20 to-violet-600/30",
    accent: "text-indigo-400",
    symbol: "$/",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
    githubLink: "https://github.com/amina-maqsood09/saas-landing-page-demo",
  },
  {
    title: "Product List App",
    description:
      "A clean, interactive product listing application with filtering, cart management, and a responsive card-based UI — demonstrating core React state management patterns.",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
    accent: "text-emerald-400",
    symbol: "[ * ]",
    tags: ["React", "JavaScript", "CSS"],
    demoLink: "https://github.com/amina-maqsood09/product-list-app",
    githubLink: "https://github.com/amina-maqsood09/product-list-app",
  },
  {
    title: "FlyRank AI Capstone",
    description:
      "Capstone project built during the FlyRank AI internship — an AI-powered web application integrating intelligent frontend features and dynamic UI components for real-world production use.",
    gradient: "from-purple-600/30 via-violet-600/20 to-fuchsia-600/30",
    accent: "text-purple-400",
    symbol: "AI",
    tags: ["React", "AI Integration", "TypeScript"],
    demoLink: "https://github.com/amina-maqsood09/flyrank-capstone",
    githubLink: "https://github.com/amina-maqsood09/flyrank-capstone",
  },
];

const academicProjects = [
  {
    title: "Smart Study Planner Agent",
    description:
      "Goal-based AI agent implementing BFS, DFS, Hill Climbing, and A* for intelligent study scheduling with a Tkinter GUI.",
    tags: ["Python", "Tkinter", "AI Algorithms"],
    accent: "border-l-violet-500",
  },
  {
    title: "End-to-End Encrypted Chat",
    description:
      "Secure multi-client chat with AES-256 encryption, RSA-2048 key exchange, and SHA-256 digital signatures.",
    tags: ["Python", "AES-256", "RSA-2048"],
    accent: "border-l-cyan-500",
  },
  {
    title: "University Complaint Management System",
    description:
      "Desktop application for managing student complaints with an intuitive GUI interface and a robust SQL backend.",
    tags: ["Java", "OOP", "SQL", "GUI"],
    accent: "border-l-emerald-500",
  },
  {
    title: "NETSOL Enterprise Network",
    description:
      "3-layer hierarchical network with 7 VLANs, OSPF routing, DHCP/DNS, and ASA 5505 firewall. Built as a team of 4.",
    tags: ["Cisco Packet Tracer", "OSPF", "VLANs", "Networking"],
    accent: "border-l-orange-500",
  },
  {
    title: "UX Lens AI Capstone",
    description:
      "AI-powered UX analysis tool that evaluates user interfaces, highlights accessibility issues, and generates actionable design improvement recommendations.",
    tags: ["Python", "AI/ML", "UX Analysis"],
    accent: "border-l-pink-500",
  },
  {
    title: "Vision AI — Image Classification",
    description:
      "Deep learning image classification system trained to identify and categorise visual content using convolutional neural networks and transfer learning techniques.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    accent: "border-l-indigo-500",
  },
  {
    title: "Fire Brigade Robot",
    description:
      "Autonomous fire-detecting and extinguishing robot using flame sensors, servo motors, and microcontroller logic to navigate towards and suppress fire sources.",
    tags: ["Arduino", "C++", "Robotics", "Sensors"],
    accent: "border-l-red-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-muted/30" data-testid="section-projects">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            A mix of live frontend applications, AI capstones, and complex academic engineering projects.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-default"
              data-testid={`card-project-${idx}`}
            >
              {/* Thumbnail */}
              <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <motion.span
                  className={`font-mono text-6xl font-bold ${project.accent} opacity-50 select-none`}
                  whileHover={{ scale: 1.15, opacity: 0.75 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {project.symbol}
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 bg-background border border-border rounded-md text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={15} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-primary inline-block" />
          Academic &amp; Engineering Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-5">
          {academicProjects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`p-6 rounded-2xl bg-card border border-border border-l-4 ${project.accent} hover:shadow-lg hover:shadow-black/10 transition-shadow duration-300 cursor-default`}
              data-testid={`card-academic-${idx}`}
            >
              <h4 className="text-lg font-display font-bold mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground"
                  >
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
