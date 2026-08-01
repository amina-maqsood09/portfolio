import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" data-testid="section-about">
      {/* Warm gold background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Desktop: 3-column | Mobile: stacked ── */}
        <div className="grid lg:grid-cols-[300px_1fr_1fr] gap-10 lg:gap-12 items-start">

          {/* ── Column 1: Editorial Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 lg:w-full max-w-[300px]">
              {/* Gold accent border frame */}
              <div
                className="absolute -inset-[3px] rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #C9A66B40, transparent 50%, #C9A66B30)",
                }}
              />
              {/* Subtle shadow glow */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{ background: "rgba(201,166,107,0.08)" }}
              />
              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-muted border border-primary/20 shadow-2xl shadow-black/20">
                <img
                  src="/profile-photo.png"
                  alt="Amina Maqsood"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gold vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 60%, rgba(201,166,107,0.08) 100%)",
                  }}
                />
              </div>

              {/* Name card below photo */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 glass-card px-4 py-3 rounded-2xl text-center"
              >
                <p className="font-display font-bold text-foreground text-sm">Amina Maqsood</p>
                <p className="text-xs text-primary font-medium mt-0.5">Frontend Developer · AI Enthusiast</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Column 2: Heading + Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.15]">
              Engineering with{" "}
              <span className="text-primary">intent.</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
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

          {/* ── Column 3: Journey Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl relative z-10">
              <h3 className="text-2xl font-display font-bold mb-8">The Journey So Far</h3>
              <ul className="space-y-7">
                {[
                  {
                    value: "5",
                    label: "Current Semester",
                    sub: "Deep diving into advanced coursework and applied software engineering.",
                    color: "bg-primary/10 text-primary",
                  },
                  {
                    value: "2",
                    label: "Internships Completed",
                    sub: "Applied theoretical knowledge in production environments.",
                    color: "bg-secondary/10 text-secondary",
                  },
                  {
                    value: "15+",
                    label: "Projects Shipped",
                    sub: "From AI capstones to encrypted chat apps and enterprise networks.",
                    color: "bg-accent text-accent-foreground",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${item.color} flex items-center justify-center font-bold text-lg`}>
                      {item.value}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground leading-tight">{item.label}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Decorative gold gradient */}
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl -z-10 blur-2xl"
              style={{ background: "linear-gradient(135deg, rgba(201,166,107,0.12), rgba(168,133,74,0.08))" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
