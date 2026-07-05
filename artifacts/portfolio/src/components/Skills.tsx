import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Shield, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    skills: ["Python", "Java", "C++", "JavaScript", "HTML5", "CSS3", "OOP"],
  },
  {
    title: "Web Technologies",
    icon: <Layout className="w-5 h-5" />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    skills: ["React.js", "DOM Manipulation", "Tailwind CSS", "CSS Grid", "Responsive Design"],
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    skills: ["SQL", "MySQL", "Tableau", "Excel", "Data Structures"],
  },
  {
    title: "Security & Networking",
    icon: <Shield className="w-5 h-5" />,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    skills: ["AES-256", "RSA-2048", "SHA-256", "VLANs", "OSPF Routing"],
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    skills: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer", "Canva"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    skills: ["Problem Solving", "Team Leadership", "Communication", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-muted/30" data-testid="section-skills">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A toolkit spanning low-level algorithms to high-level frontend interfaces — and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl group cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${category.bg} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-background text-foreground border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
