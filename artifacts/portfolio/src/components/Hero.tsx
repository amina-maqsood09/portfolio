import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, Code2, Award, Briefcase } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${className}`}
      animate={{ y: [0, -28, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FloatingOrbSlow({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${className}`}
      animate={{ y: [0, 22, 0], x: [0, -16, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  );
}

function GridLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
      data-testid="section-hero"
    >
      <GridLines />

      {/* Gold-tinted orbs for champagne warmth */}
      <FloatingOrb className="top-[12%] left-[8%] w-[400px] h-[400px] bg-amber-400/8 dark:bg-amber-500/10 blur-[100px]" />
      <FloatingOrbSlow className="bottom-[15%] right-[6%] w-[340px] h-[340px] bg-yellow-300/6 dark:bg-yellow-400/8 blur-[90px]" />
      <FloatingOrb className="top-[55%] left-[45%] w-[240px] h-[240px] bg-amber-300/5 dark:bg-amber-400/6 blur-[80px]" />

      <div className="absolute inset-0 pointer-events-none bg-radial-[at_50%_0%] from-transparent to-background/60" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-12">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary font-medium text-sm mb-8"
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
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight mb-6"
            >
              Hi, I'm Amina.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #C9A66B 0%, #E8C88A 45%, #A8854A 100%)" }}
              >
                Frontend Developer
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              A 3rd-year Software Engineering student at COMSATS University, building pixel-perfect interfaces and exploring the intersection of AI and frontend engineering.
            </motion.p>

            {/* CTAs — two balanced buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:brightness-110 transition-all duration-300"
                data-testid="btn-view-projects"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-7 py-3.5 rounded-lg font-semibold hover:bg-muted hover:border-primary/50 transition-all duration-300"
                data-testid="btn-contact"
              >
                Get in Touch <Mail size={18} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3"
            >
              {[
                { label: "Projects Built", value: "15+", icon: <Code2 size={18} /> },
                { label: "Current CGPA", value: "3.57", icon: <Terminal size={18} /> },
                { label: "Certifications", value: "5", icon: <Award size={18} /> },
                { label: "Internships", value: "2", icon: <Briefcase size={18} /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card p-4 rounded-2xl flex flex-col justify-center cursor-default"
                >
                  <span className="text-primary mb-2">{stat.icon}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-0.5">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:flex relative h-[520px] items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Mobile illustration */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:hidden relative h-[300px] mt-12"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
