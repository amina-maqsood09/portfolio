import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Terminal,
  Code2,
  Award,
  Briefcase,
} from "lucide-react";
import HeroIllustration from "./HeroIllustration";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeInOut" as const,
    },
  },
};

const stats = [
  {
    label: "Projects Built",
    value: "18+",
    icon: <Code2 size={16} />,
  },
  {
    label: "Current CGPA",
    value: "3.57",
    icon: <Terminal size={16} />,
  },
  {
    label: "Certifications",
    value: "5",
    icon: <Award size={16} />,
  },
  {
    label: "Internships",
    value: "3",
    icon: <Briefcase size={16} />,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-white dark:bg-background"
      data-testid="section-hero"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-100 dark:opacity-40" />

      {/* Ambient glow blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-green-500/8 dark:bg-green-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/6 dark:bg-orange-500/8 blur-[100px] pointer-events-none" />

      {/* Soft glow behind headline */}
      <div className="absolute top-[25%] left-[5%] w-[300px] h-[200px] rounded-full bg-green-400/10 dark:bg-green-400/12 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-800/60 text-green-700 dark:text-green-300 font-medium text-sm mb-7 lg:mb-8 shadow-sm"
              data-testid="badge-availability"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>

              Open for Internships &amp; Freelance Work
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight mb-5 lg:mb-6 text-foreground"
            >
              Hi, I'm Amina.
              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #16A34A 0%, #22C55E 40%, #22C55E 100%)",
                }}
              >
                Frontend Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 lg:mb-10 leading-relaxed"
            >
              A 3rd-year Software Engineering student at COMSATS University,
              building pixel-perfect interfaces and exploring the intersection
              of AI and frontend engineering.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 lg:mb-14"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#16A34A",
                  color: "#F6F3FC",
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-[15px] shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/30 hover:brightness-110 transition-all duration-200"
                data-testid="btn-view-projects"
              >
                View Projects
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-7 py-3 rounded-lg font-semibold text-[15px] hover:border-primary hover:text-primary hover:bg-green-50 dark:hover:bg-green-950/30 transition-all duration-200"
                data-testid="btn-contact"
              >
                Get in Touch
                <Mail size={17} />
              </motion.a>
            </motion.div>

            {/* =================================================
                MOBILE 3D
                IMPORTANT: NOW BEFORE STATS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.35,
              }}
              className="lg:hidden relative w-full h-[260px] sm:h-[300px] -mt-2 mb-4"
            >
              <HeroIllustration />
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 22,
                  }}
                  className="glass-card card-hover p-4 rounded-xl flex flex-col cursor-default"
                >
                  <span className="text-primary mb-2">
                    {stat.icon}
                  </span>

                  <h3 className="text-xl font-display font-bold text-foreground mb-0.5">
                    {stat.value}
                  </h3>

                  <p className="text-xs text-muted-foreground font-medium leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              DESKTOP 3D
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 36,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="hidden lg:flex relative h-[520px] items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}