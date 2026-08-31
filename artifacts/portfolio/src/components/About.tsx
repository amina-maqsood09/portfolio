import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const journey = [
    {
      value: "5",
      label: "Current Semester",
      sub: "Building stronger foundations in software engineering, AI and modern web development.",
    },
    {
      value: "3",
      label: "Internships",
      sub: "Hands-on experience across frontend development, AI/ML and software projects.",
    },
    {
      value: "18+",
      label: "Projects Built",
      sub: "From AI-powered applications to frontend interfaces and academic software systems.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-28 scroll-mt-24"
      data-testid="section-about"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-green-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-display font-bold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              Engineering with{" "}
              <span className="text-primary">intent.</span>
            </h2>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
              Building thoughtful interfaces where frontend engineering meets
              Artificial Intelligence.
            </p>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_390px]">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[280px]">
              <div className="group relative">

                {/* Glow frame */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-green-500/50 via-transparent to-green-500/10 opacity-70 blur-[1px]" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
                  <div className="aspect-[3/4]">
                    <img
                      src="/profile-photo.png"
                      alt="Amina Maqsood"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="mt-4 rounded-xl border border-border bg-card/70 px-4 py-4 text-center backdrop-blur-md">
                <p className="font-display text-sm font-bold text-foreground">
                  Amina Maqsood
                </p>

                <p className="mt-1 text-xs font-medium text-primary">
                  Frontend Developer · AI Enthusiast
                </p>
              </div>
            </div>
          </motion.div>

          {/* About copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-muted-foreground md:text-[17px]">
                I'm a third-year Bachelor of Software Engineering student at
                COMSATS University Islamabad, passionate about building
                modern web experiences and exploring the intersection of
                frontend development and Artificial Intelligence.
              </p>

              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-[17px]">
                I enjoy turning ideas into practical, user-focused
                applications — combining clean interfaces, thoughtful
                engineering, and AI-powered capabilities to create experiences
                that are both useful and engaging.
              </p>

              <p className="mt-6 text-base leading-8 text-muted-foreground md:text-[17px]">
                Beyond frontend development, I explore algorithms, databases,
                software architecture, and network security. Every project is
                an opportunity to learn something new and build something
                better.
              </p>
            </div>

            {/* Small focus tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Frontend Development",
                "Artificial Intelligence",
                "React",
                "Software Engineering",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-md md:p-7">

              <div className="mb-7 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground">
                  The Journey So Far
                </h3>

                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
              </div>

              <div className="space-y-6">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="group"
                  >
                    <div className="flex gap-4">

                      {/* Number */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/5 font-display text-sm font-bold text-primary transition-all duration-300 group-hover:border-green-500/40 group-hover:bg-green-500/10">
                        {item.value}
                      </div>

                      {/* Text */}
                      <div className="pt-0.5">
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.label}
                        </h4>

                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    {index !== journey.length - 1 && (
                      <div className="ml-6 mt-5 h-px bg-border" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom mini stat */}
              <div className="mt-7 rounded-xl border border-border bg-background/40 px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  Currently focused on
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Frontend × AI Engineering
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 border-t border-border pt-8"
        >
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-foreground md:text-xl">
            I build to learn, and I learn to build{" "}
            <span className="text-primary">better things.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}