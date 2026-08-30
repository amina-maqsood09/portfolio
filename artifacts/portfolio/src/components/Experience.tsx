import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "FlyRank AI",
    period: "Jul 2026 – Present",
    location: "Remote",
    description: "Building AI-powered frontend features and interactive UI components as part of the core engineering team, integrating intelligent capabilities into modern web applications.",
    tags: ["React", "AI Integration", "UI/UX"],
    current: true,
  },
  {
    role: "AI/Machine Learning Intern",
    company: "Zynvex Solutions",
    period: "15 Jul 2026 – 23 Aug 2026",
    location: "Remote",
    description: "Completed a 6-week AI/ML internship program covering exploratory data analysis, regression modeling, and deep learning, including EDA on an NYC Airbnb dataset, a regression model on a medical insurance cost dataset, and a deep learning customer churn prediction model built with Keras. Certificate: ZYNVEX-CERT-0481 (online verifiable).",
    tags: ["Python", "Pandas", "Keras", "Machine Learning"],
    current: false,
  },
  {
    role: "Frontend Development Intern",
    company: "CodeAlpha",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    description: "Delivered multiple production-ready frontend projects: a JavaScript Calculator with chained operations and keyboard support, a CSS Grid Image Gallery with lightbox and filtering, and a portfolio website with scroll animations live on GitHub Pages.",
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Work History</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Experience</h2>
        </motion.div>

        <div className="max-w-4xl relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-9 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-slate-200 dark:via-slate-700 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 md:left-6 top-6 w-5 h-5 rounded-full bg-primary ring-4 ring-white dark:ring-background shadow-md shadow-amber-500/30 flex-shrink-0" />

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 md:p-7 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-primary border border-amber-200 dark:border-amber-800/60">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[15px] font-semibold text-primary">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-slate-500 dark:text-slate-400 md:text-right shrink-0">
                      <span className="flex items-center gap-1.5 md:justify-end"><Calendar size={12} />{exp.period}</span>
                      <span className="flex items-center gap-1.5 md:justify-end"><MapPin size={12} />{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 text-[15px]">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
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
