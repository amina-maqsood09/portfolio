import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" data-testid="section-about">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65 } } }}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: 0.15 } } }}
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
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
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
            {/* Decorative gradient */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/15 to-secondary/15 rounded-3xl -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
