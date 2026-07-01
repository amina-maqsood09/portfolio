import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "FlyRank AI",
      period: "Jul 2026 – Present",
      location: "Remote",
      description: "Building AI-powered frontend projects as part of the core engineering team. Developing highly interactive UI components and integrating seamless AI features into modern web applications.",
      tags: ["React", "AI Integration", "UI/UX"]
    },
    {
      role: "Frontend Development Intern",
      company: "CodeAlpha",
      period: "Jun 2026 – Jul 2026",
      location: "Remote",
      description: "Delivered multiple production-ready frontend projects including a complex JavaScript Calculator with chained operations, a responsive CSS Grid Image Gallery, and a personal portfolio website with scroll animations.",
      tags: ["JavaScript", "CSS Grid", "HTML5", "Animations"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative" data-testid="section-experience">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Experience</h2>

        <div className="max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="glass-card p-6 md:p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
