import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Shield, Wrench, Users } from "lucide-react";

type Skill = { name: string; level: number };

const skillCategories: { title: string; icon: React.ReactNode; proficiency: number; skills: Skill[] }[] = [
  {
    title: "Languages", icon: <Code2 className="w-5 h-5" />, proficiency: 82,
    skills: [
      { name: "JavaScript", level: 90 }, { name: "Python", level: 80 },
      { name: "Java", level: 72 }, { name: "C++", level: 65 },
      { name: "HTML5", level: 95 }, { name: "CSS3", level: 90 }, { name: "OOP", level: 80 },
    ],
  },
  {
    title: "Web Technologies", icon: <Layout className="w-5 h-5" />, proficiency: 85,
    skills: [
      { name: "React.js", level: 88 }, { name: "Tailwind CSS", level: 90 },
      { name: "DOM Manipulation", level: 85 }, { name: "CSS Grid", level: 88 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Data & Analytics", icon: <Database className="w-5 h-5" />, proficiency: 68,
    skills: [
      { name: "SQL", level: 75 }, { name: "MySQL", level: 72 },
      { name: "Tableau", level: 65 }, { name: "Excel", level: 70 },
      { name: "Data Structures", level: 78 },
    ],
  },
  {
    title: "Security & Networking", icon: <Shield className="w-5 h-5" />, proficiency: 62,
    skills: [
      { name: "AES-256", level: 70 }, { name: "RSA-2048", level: 68 },
      { name: "SHA-256", level: 68 }, { name: "VLANs", level: 65 },
      { name: "OSPF Routing", level: 60 },
    ],
  },
  {
    title: "Developer Tools", icon: <Wrench className="w-5 h-5" />, proficiency: 78,
    skills: [
      { name: "Git", level: 85 }, { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 }, { name: "Cisco Packet Tracer", level: 65 },
      { name: "Canva", level: 80 },
    ],
  },
  {
    title: "Soft Skills", icon: <Users className="w-5 h-5" />, proficiency: 90,
    skills: [
      { name: "Problem Solving", level: 92 }, { name: "Team Leadership", level: 85 },
      { name: "Communication", level: 90 }, { name: "Time Management", level: 88 },
    ],
  },
];

function ProficiencyBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="h-[3px] w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 bg-slate-50/70 dark:bg-muted/20" data-testid="section-skills">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A toolkit spanning low-level algorithms to high-level frontend interfaces — and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-slate-700 transition-all duration-200 cursor-default group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-primary group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-[15px] font-display font-bold text-slate-900 dark:text-white">{category.title}</h3>
                </div>
                <span className="text-xs font-bold font-mono text-primary">{category.proficiency}%</span>
              </div>

              {/* Category bar */}
              <div className="mb-5">
                <ProficiencyBar level={category.proficiency} delay={idx * 0.06 + 0.15} />
              </div>

              {/* Skill rows */}
              <div className="flex-grow space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.04 + sIdx * 0.035 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600 dark:text-slate-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors duration-150">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono opacity-0 group-hover/skill:opacity-100 transition-opacity duration-150">
                        {skill.level}%
                      </span>
                    </div>
                    <ProficiencyBar level={skill.level} delay={idx * 0.04 + sIdx * 0.035 + 0.25} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
