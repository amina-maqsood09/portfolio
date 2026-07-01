import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Shield, Wrench, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["Python", "Java", "C++", "JavaScript", "HTML5", "CSS3", "OOP"]
    },
    {
      title: "Web Technologies",
      icon: <Layout className="w-6 h-6 text-secondary" />,
      skills: ["React.js", "DOM Manipulation", "Tailwind CSS", "CSS Grid", "Responsive Design"]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["SQL", "MySQL", "Tableau", "Excel", "Data Structures"]
    },
    {
      title: "Security & Networking",
      icon: <Shield className="w-6 h-6 text-secondary" />,
      skills: ["AES-256", "RSA-2048", "SHA-256", "VLANs", "OSPF Routing"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Cisco Packet Tracer", "Canva"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-secondary" />,
      skills: ["Problem Solving", "Team Leadership", "Communication", "Time Management"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30" data-testid="section-skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning from low-level algorithms to high-level frontend interfaces.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-background rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-background text-foreground border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
