import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Building2, Trophy } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "BS Software Engineering",
      institution: "COMSATS University Islamabad, Vehari Campus",
      period: "Aug 2024 – Present",
      details: "CGPA: 3.57 / 4.00 | Semester 5 | 3rd Year BSE",
      highlight: true,
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      degree: "Intermediate ICS (Physics)",
      institution: "Superior College",
      period: "2022 – 2024",
      details: "Percentage: 75%",
      highlight: false,
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      degree: "Matriculation",
      institution: "Dawn School System",
      period: "2020 – 2022",
      details: "Percentage: 80%",
      highlight: false,
      icon: <Building2 className="w-4 h-4" />,
    },
  ];

  const certifications = [
    {
      title: "Advanced Software Engineering",
      issuer: "Walmart Global Tech",
      date: "Jun 2026",
      desc: "Advanced Data Structures, Software Architecture (UML, SOLID), Relational DB Design.",
      color: "border-l-violet-500",
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/10",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      date: "Jun 2026",
      desc: "Machine telemetry analysis with Tableau, data classification using Excel.",
      color: "border-l-cyan-500",
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
    {
      title: "AI Professional Development",
      issuer: "Anthropic",
      date: "2026",
      desc: "Completed Anthropic AI courses as part of ongoing professional development.",
      color: "border-l-orange-500",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Build an AI That Sees",
      issuer: "DevTown × Google Developers Group",
      date: "Aug 2025",
      desc: "Image Recognition and AI fundamentals.",
      color: "border-l-emerald-500",
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="education" className="py-28 relative" data-testid="section-education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
            </motion.div>

            <div className="relative space-y-6 pl-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[27px] top-5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-background shadow-md transition-colors ${edu.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {edu.icon}
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${edu.highlight ? "border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-sm shadow-primary/10" : "border-border bg-card hover:border-border/80 hover:shadow-sm"}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-bold text-lg leading-tight">{edu.degree}</h3>
                      <span className="font-mono text-xs px-2 py-1 bg-muted rounded text-muted-foreground shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{edu.institution}</p>
                    <p className={`text-sm font-semibold ${edu.highlight ? "text-primary" : "text-foreground"}`}>{edu.details}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div id="certifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-xl bg-secondary/10">
                <Trophy className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Certifications</h2>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-2xl border border-border border-l-4 ${cert.color} bg-card hover:shadow-md hover:shadow-black/8 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 p-1.5 rounded-lg ${cert.bgColor} flex-shrink-0`}>
                        <Award className={`w-3.5 h-3.5 ${cert.iconColor}`} />
                      </div>
                      <h3 className="font-bold text-base leading-tight">{cert.title}</h3>
                    </div>
                    <span className="font-mono text-xs px-2 py-1 bg-muted rounded text-muted-foreground shrink-0">{cert.date}</span>
                  </div>
                  <p className={`text-sm font-semibold ${cert.iconColor} mb-2 ml-8`}>{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground ml-8 leading-relaxed">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
