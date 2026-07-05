import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, Code2, Award, Briefcase } from "lucide-react";
import cvFile from "@assets/Amina_Maqsood_CV_2026_1782931472535.pdf";

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${className}`}
      animate={{
        y: [0, -28, 0],
        x: [0, 12, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function FloatingOrbSlow({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${className}`}
      animate={{
        y: [0, 22, 0],
        x: [0, -16, 0],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
  );
}

function GridLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Grid texture */}
      <GridLines />

      {/* Animated gradient orbs */}
      <FloatingOrb className="top-[12%] left-[8%] w-[380px] h-[380px] bg-primary/25 blur-[90px] mix-blend-screen" />
      <FloatingOrbSlow className="bottom-[15%] right-[6%] w-[320px] h-[320px] bg-secondary/20 blur-[80px] mix-blend-screen" />
      <FloatingOrb className="top-[55%] left-[55%] w-[220px] h-[220px] bg-primary/10 blur-[70px] mix-blend-screen" />

      {/* Noise vignette for depth */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[at_50%_0%] from-transparent to-background/60" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8"
            data-testid="badge-availability"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Open for Internships &amp; Freelance Work
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.08] tracking-tight mb-6"
          >
            Hi, I'm Amina.{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
              Frontend Developer
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            A 2nd-year Software Engineering student at COMSATS University, building pixel-perfect interfaces and exploring the intersection of AI and frontend engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
              data-testid="btn-view-projects"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:bg-secondary/90 transition-all duration-300"
              data-testid="btn-download-cv"
            >
              Download CV
              <Download size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted hover:border-primary/40 transition-all duration-300"
              data-testid="btn-contact"
            >
              Get in Touch
              <Mail size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Projects Built", value: "10+", icon: <Code2 className="text-primary mb-2" size={20} /> },
              { label: "Current CGPA", value: "3.62", icon: <Terminal className="text-secondary mb-2" size={20} /> },
              { label: "Certifications", value: "5", icon: <Award className="text-primary mb-2" size={20} /> },
              { label: "Internships", value: "2", icon: <Briefcase className="text-secondary mb-2" size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-5 rounded-2xl flex flex-col justify-center cursor-default"
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
