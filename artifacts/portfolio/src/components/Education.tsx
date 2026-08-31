import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Building2, Trophy } from "lucide-react";

export default function Education() {
  const education = [
    { degree: "BS Software Engineering", institution: "COMSATS University Islamabad, Vehari Campus", period: "Aug 2024 – Present", details: "CGPA: 3.57 / 4.00 | Semester 5 | 3rd Year BSE", highlight: true, icon: <GraduationCap className="w-4 h-4" /> },
    { degree: "Intermediate ICS (Physics)", institution: "Superior College", period: "2022 – 2024", details: "Percentage: 75%", highlight: false, icon: <BookOpen className="w-4 h-4" /> },
    { degree: "Matriculation", institution: "Dawn School System", period: "2020 – 2022", details: "Percentage: 80%", highlight: false, icon: <Building2 className="w-4 h-4" /> },
  ];

  const certifications = [
    { title: "Advanced Software Engineering", issuer: "Walmart Global Tech", date: "Jun 2026", desc: "Advanced Data Structures, Software Architecture (UML, SOLID), Relational DB Design." },
    { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia", date: "Jun 2026", desc: "Machine telemetry analysis with Tableau, data classification using Excel." },
    { title: "AI Professional Development", issuer: "Anthropic", date: "2026", desc: "Completed Anthropic AI courses as part of ongoing professional development." },
    { title: "Build an AI That Sees", issuer: "DevTown × Google Developers Group", date: "Aug 2025", desc: "Image Recognition and AI fundamentals." },
  ];

  return (
    <section id="education" className="py-24 md:py-28 relative" data-testid="section-education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-950/50">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Education</h2>
            </motion.div>

            <div className="relative space-y-5 pl-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[27px] top-5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-background shadow-sm ${edu.highlight ? "bg-primary text-white shadow-violet-500/25" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`}>
                    {edu.icon}
                  </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    className={`p-5 rounded-xl border transition-all duration-200 ${edu.highlight ? "border-violet-200 dark:border-violet-800/60 bg-violet-50/50 dark:bg-violet-950/20 shadow-sm shadow-violet-500/8" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-200 dark:hover:border-slate-700 hover:shadow-sm"}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
                      <h3 className="font-bold text-[15px] leading-tight text-slate-900 dark:text-white">{edu.degree}</h3>
                      <span className="font-mono text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1.5">{edu.institution}</p>
                    <p className={`text-sm font-semibold ${edu.highlight ? "text-primary" : "text-slate-700 dark:text-slate-300"}`}>{edu.details}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-950/50">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Certifications</h2>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.09 }}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-l-4 border-l-violet-500 hover:shadow-md hover:shadow-violet-500/8 hover:border-violet-200 dark:hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/50 flex-shrink-0">
                        <Award className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <h3 className="font-bold text-[15px] leading-tight text-slate-900 dark:text-white">{cert.title}</h3>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 shrink-0">{cert.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary ml-8 mb-1.5">{cert.issuer}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 ml-8 leading-relaxed">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
