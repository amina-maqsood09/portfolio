import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 relative overflow-hidden" data-testid="section-about">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[260px_1fr_1fr] gap-10 lg:gap-12 items-start">

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-52 sm:w-60 lg:w-full" style={{ maxWidth: "260px" }}>
              {/* Subtle border frame */}
              <div
                className="absolute -inset-[2px] rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.25), transparent 55%, rgba(37,99,235,0.12))" }}
              />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-muted border border-border shadow-lg" style={{ aspectRatio: "3/4" }}>
                <img
                  src="/profile-photo.png"
                  alt="Amina Maqsood"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", imageRendering: "auto", display: "block" }}
                />
              </div>
              {/* Name card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="mt-4 glass-card px-4 py-3 rounded-xl text-center border border-border"
              >
                <p className="font-display font-bold text-foreground text-sm">Amina Maqsood</p>
                <p className="text-xs text-primary font-medium mt-0.5">Frontend Developer · AI Enthusiast</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Heading + copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.12] text-foreground">
              Engineering with{" "}
              <span className="text-primary">intent.</span>
            </h2>
            <div className="space-y-5 text-base md:text-[17px] text-muted-foreground leading-relaxed">
              <p>
                I'm a third-year Bachelor of Software Engineering student at COMSATS University Islamabad. What started as curiosity about how the web works has grown into a disciplined pursuit of software architecture, AI-powered interfaces, and frontend engineering — backed by two internships and a growing body of real-world projects.
              </p>
              <p>
                I'm actively building at the intersection of frontend development and Artificial Intelligence — integrating AI capabilities into production-grade web applications that are fast, accessible, and genuinely useful.
              </p>
              <p>
                When I'm not writing code, I'm analysing algorithms, designing scalable databases, or exploring network security. I build things to learn, and I learn to build better things.
              </p>
            </div>
          </motion.div>

          {/* ── Journey card ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-7 md:p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-display font-bold mb-7 text-foreground">The Journey So Far</h3>
              <ul className="space-y-7">
                {[
                  { value: "5", label: "Current Semester", sub: "Deep diving into advanced coursework and applied software engineering." },
                  { value: "2", label: "Internships Completed", sub: "Applied theoretical knowledge in production environments." },
                  { value: "15+", label: "Projects Shipped", sub: "From AI capstones to encrypted chat apps and enterprise networks." },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.09 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-950/50 border border-violet-200 dark:border-violet-800/60 text-primary flex items-center justify-center font-bold text-base font-display">
                      {item.value}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-[15px] leading-tight">{item.label}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-snug">{item.sub}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
