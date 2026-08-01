import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 relative overflow-hidden" data-testid="section-about">
      {/* Subtle blue background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Desktop: 3-column | Mobile: stacked ── */}
        <div className="grid lg:grid-cols-[260px_1fr_1fr] gap-10 lg:gap-12 items-start">

          {/* ── Column 1: Portrait Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-52 sm:w-60 lg:w-full" style={{ maxWidth: "260px" }}>
              {/* Subtle blue border frame */}
              <div
                className="absolute -inset-[2px] rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.3), transparent 50%, rgba(59,130,246,0.15))",
                }}
              />
              {/* Photo container — fixed size, no stretch */}
              <div
                className="relative rounded-2xl overflow-hidden bg-muted border border-primary/20 shadow-2xl shadow-black/20"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src="/profile-photo.png"
                  alt="Amina Maqsood"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    imageRendering: "auto",
                    display: "block",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.15]">
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
            <div className="glass-card p-7 md:p-8 rounded-3xl relative z-10">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-8">The Journey So Far</h3>
              <ul className="space-y-7">
                {[
                  {
                    value: "5",
                    label: "Current Semester",
                    sub: "Deep diving into advanced coursework and applied software engineering.",
                    bg: "bg-primary/10",
                    color: "text-primary",
                  },
                  {
                    value: "2",
                    label: "Internships Completed",
                    sub: "Applied theoretical knowledge in production environments.",
                    bg: "bg-foreground/8",
                    color: "text-foreground",
                  },
                  {
                    value: "15+",
                    label: "Projects Shipped",
                    sub: "From AI capstones to encrypted chat apps and enterprise networks.",
                    bg: "bg-primary/5",
                    color: "text-primary",
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
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center font-bold text-lg border border-primary/15`}>
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
            {/* Decorative blue gradient */}
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl -z-10 blur-2xl"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(29,78,216,0.05))" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
