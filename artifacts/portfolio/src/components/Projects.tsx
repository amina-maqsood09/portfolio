import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "JavaScript Calculator",
      description: "Full-featured calculator with chained operations, keyboard support, real-time input validation, and a sleek dark UI.",
      gradient: "from-violet-600/30 via-purple-600/20 to-indigo-600/30",
      accent: "text-violet-400",
      symbol: "{ }",
      tags: ["JavaScript", "HTML", "CSS"],
      demoLink: "https://github.com/amina-maqsood09",
      githubLink: "https://github.com/amina-maqsood09"
    },
    {
      title: "Modern Image Gallery",
      description: "CSS Grid layout with category-based filtering, lightbox viewer, keyboard navigation, and smooth animations.",
      gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/30",
      accent: "text-cyan-400",
      symbol: "[ ]",
      tags: ["JavaScript", "CSS Grid", "HTML"],
      demoLink: "https://github.com/amina-maqsood09",
      githubLink: "https://github.com/amina-maqsood09"
    }
  ];

  const academicProjects = [
    {
      title: "Smart Study Planner Agent",
      description: "Goal-based AI agent implementing BFS, DFS, Hill Climbing, and A* algorithms for intelligent study scheduling.",
      tags: ["Python", "Tkinter", "AI Algorithms"]
    },
    {
      title: "End-to-End Encrypted Chat",
      description: "Secure multi-client chat app featuring AES-256 encryption, RSA-2048 key exchange, and SHA-256 digital signatures.",
      tags: ["Python", "AES-256", "RSA-2048"]
    },
    {
      title: "University Complaint System",
      description: "Desktop application for managing student complaints with an intuitive GUI interface and robust SQL backend.",
      tags: ["Java", "OOP", "SQL", "GUI"]
    },
    {
      title: "Enterprise Network Design",
      description: "3-layer hierarchical network with 7 VLANs, OSPF routing, DHCP/DNS, and ASA 5505 firewall implementation.",
      tags: ["Cisco Packet Tracer", "OSPF", "VLANs"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30" data-testid="section-projects">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">A showcase of my recent frontend applications and complex academic engineering projects.</p>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className={`font-mono text-7xl font-bold ${project.accent} opacity-60 select-none group-hover:scale-110 transition-transform duration-500`}>
                  {project.symbol}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-background border border-border rounded-md text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold mb-8">Academic Engineering Projects</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {academicProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">
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
