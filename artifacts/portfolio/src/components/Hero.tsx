import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, Code2, Award, Briefcase } from "lucide-react";
import cvFile from "@assets/Amina_Maqsood_CV_2026_1782931472535.pdf";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Internships
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Hi, I'm Amina. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            A 2nd-year Software Engineering student at COMSATS University passionate about building pixel-perfect, intelligent web applications. Aspiring AI engineer combining design intuition with robust architecture.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-16">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="btn-view-projects"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href={cvFile} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              data-testid="btn-download-cv"
            >
              Download CV
              <Download size={18} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              data-testid="btn-contact"
            >
              Get in Touch
              <Mail size={18} />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Projects Built", value: "10+", icon: <Code2 className="text-primary mb-2" /> },
              { label: "Current CGPA", value: "3.62", icon: <Terminal className="text-secondary mb-2" /> },
              { label: "Certifications", value: "5", icon: <Award className="text-primary mb-2" /> },
              { label: "Internships", value: "2", icon: <Briefcase className="text-secondary mb-2" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="glass-card p-5 rounded-2xl flex flex-col justify-center"
              >
                {stat.icon}
                <h3 className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
