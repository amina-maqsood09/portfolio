import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "BS Software Engineering",
      institution: "COMSATS University Islamabad, Vehari Campus",
      period: "Aug 2024 – Present",
      details: "CGPA: 3.62 / 4.00 | Semester 4 | 2nd Year BSE",
      highlight: true
    },
    {
      degree: "Intermediate ICS (Physics)",
      institution: "Superior College",
      period: "2022 – 2024",
      details: "Percentage: 75%",
      highlight: false
    },
    {
      degree: "Matriculation",
      institution: "Dawn School System",
      period: "2020 – 2022",
      details: "Percentage: 80%",
      highlight: false
    }
  ];

  const certifications = [
    {
      title: "Advanced Software Engineering",
      issuer: "Walmart Global Tech",
      date: "Jun 2026",
      desc: "Advanced Data Structures, Software Architecture (UML, SOLID), Relational DB Design."
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      date: "Jun 2026",
      desc: "Machine telemetry analysis with Tableau, data classification using Excel."
    },
    {
      title: "Build an AI That Sees",
      issuer: "DevTown × Google Developers Group",
      date: "Aug 2025",
      desc: "Image Recognition and AI fundamentals."
    }
  ];

  return (
    <section id="education" className="py-24 relative" data-testid="section-education">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/20 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                    <div className={`w-2 h-2 rounded-full ${edu.highlight ? 'bg-primary' : 'bg-muted-foreground'}`} />
                  </div>
                  
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border ${edu.highlight ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'}`}>
                    <div className="font-mono text-xs text-primary mb-1">{edu.period}</div>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-foreground">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div id="certifications">
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-xl border border-border bg-card hover:border-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg pr-4">{cert.title}</h3>
                    <span className="font-mono text-xs px-2 py-1 bg-muted rounded text-muted-foreground shrink-0">{cert.date}</span>
                  </div>
                  <p className="text-sm font-medium text-secondary mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
