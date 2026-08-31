import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, Code2, Award, Briefcase } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeInOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-white dark:bg-background"
      data-testid="section-hero"
    >
      {/* ── Dot grid ── */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-100 dark:opacity-40" />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-500/8 dark:bg-violet-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/6 dark:bg-orange-500/8 blur-[100px] pointer-events-none" />
      {/* Soft glow behind the headline */}
      <div className="absolute top-[25%] left-[5%] w-[300px] h-[200px] rounded-full bg-violet-400/10 dark:bg-violet-400/12 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 font-medium text-sm mb-8 shadow-sm"
              data-testid="badge-availability"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Open for Internships &amp; Freelance Work
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight mb-6 text-foreground"
            >
              Hi, I'm Amina.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #A855F7 40%, #A855F7 100%)" }}
              >
                Frontend Developer
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              A 3rd-year Software Engineering student at COMSATS University, building pixel-perfect interfaces and exploring the intersection of AI and frontend engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-14"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{ backgroundColor: "#7C3AED", color: "#F6F3FC" }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-[15px] shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/30 hover:brightness-110 transition-all duration-200"
                data-testid="btn-view-projects"
              >
                View Projects <ArrowRight size={17} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-7 py-3 rounded-lg font-semibold text-[15px] hover:border-primary hover:text-primary hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200"
                data-testid="btn-contact"
              >
                Get in Touch <Mail size={17} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3"
            >
              {[
                { label: "Projects Built", value: "18+", icon: <Code2 size={16} /> },
                { label: "Current CGPA", value: "3.57", icon: <Terminal size={16} /> },
                { label: "Certifications", value: "5", icon: <Award size={16} /> },
                { label: "Internships", value: "3", icon: <Briefcase size={16} /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="glass-card card-hover p-4 rounded-xl flex flex-col cursor-default"
                >
                  <span className="text-primary mb-2">{stat.icon}</span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-0.5">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: illustration (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex relative h-[520px] items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Mobile illustration */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="lg:hidden relative min-h-[400px] mt-14"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
