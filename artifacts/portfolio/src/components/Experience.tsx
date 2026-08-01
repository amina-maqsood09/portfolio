import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "FlyRank AI",
    period: "Jul 2026 – Present",
    location: "Remote",
    description:
      "Building AI-powered frontend features and interactive UI components as part of the core engineering team, integrating intelligent capabilities into modern web applications.",
    tags: ["React", "AI Integration", "UI/UX"],
    current: true,
  },
  {
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    description:
      "Delivered multiple production-ready frontend projects: a JavaScript Calculator with chained operations and keyboard support, a CSS Grid Image Gallery with lightbox and filtering, and a portfolio website with scroll animations live on GitHub Pages.",
    tags: ["JavaScript", "CSS Grid", "HTML5", "Animations"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-28 relative" data-testid="section-experience">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Work History</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Experience</h2>
        </motion.div>

        <div className="max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-9 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline dot — solid blue */}
                <div className="absolute left-1.5 md:left-6 top-6 w-5 h-5 rounded-full bg-primary ring-4 ring-background flex-shrink-0 shadow-lg shadow-primary/30" />

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="glass-card p-6 md:p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
