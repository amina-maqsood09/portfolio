import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Shield, Wrench, Users } from "lucide-react";

type Skill = { name: string; level: number };

const skillCategories: {
  title: string;
  icon: React.ReactNode;
  proficiency: number;
  skills: Skill[];
}[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    proficiency: 82,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 72 },
      { name: "C++", level: 65 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "OOP", level: 80 },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Layout className="w-5 h-5" />,
    proficiency: 85,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "DOM Manipulation", level: 85 },
      { name: "CSS Grid", level: 88 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-5 h-5" />,
    proficiency: 68,
    skills: [
      { name: "SQL", level: 75 },
      { name: "MySQL", level: 72 },
      { name: "Tableau", level: 65 },
      { name: "Excel", level: 70 },
      { name: "Data Structures", level: 78 },
    ],
  },
  {
    title: "Security & Networking",
    icon: <Shield className="w-5 h-5" />,
    proficiency: 62,
    skills: [
      { name: "AES-256", level: 70 },
      { name: "RSA-2048", level: 68 },
      { name: "SHA-256", level: 68 },
      { name: "VLANs", level: 65 },
      { name: "OSPF Routing", level: 60 },
    ],
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-5 h-5" />,
    proficiency: 78,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Cisco Packet Tracer", level: 65 },
      { name: "Canva", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    proficiency: 90,
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Team Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Time Management", level: 88 },
    ],
  },
];

function ProficiencyBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="h-1 w-full bg-border/60 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 bg-muted/30" data-testid="section-skills">
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
              className="glass-card p-6 rounded-2xl group cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold">{category.title}</h3>
                </div>
                <span className="text-xs font-bold font-mono text-primary opacity-80">
                  {category.proficiency}%
                </span>
              </div>

              {/* Category proficiency bar */}
              <div className="mb-5">
                <ProficiencyBar level={category.proficiency} delay={idx * 0.07 + 0.2} />
              </div>

              {/* Skill pills with individual bars */}
              <div className="flex-grow space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + sIdx * 0.04 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono opacity-0 group-hover/skill:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    <ProficiencyBar
                      level={skill.level}
                      delay={idx * 0.05 + sIdx * 0.04 + 0.3}
                    />
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
