import React from "react";
import { motion } from "framer-motion";
import { Globe, Layout, User, Layers, Component } from "lucide-react";

const services = [
  {
    icon: <Globe size={28} />,
    title: "Responsive Websites",
    description: "Pixel-perfect, mobile-first websites that look and perform great on every screen size and device.",
    accent: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/40",
    iconColor: "text-violet-400",
  },
  {
    icon: <Layout size={28} />,
    title: "Landing Pages",
    description: "High-converting landing pages with clean design, fast load times, and compelling calls to action.",
    accent: "from-cyan-500/20 to-teal-500/10",
    border: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    icon: <User size={28} />,
    title: "Portfolio Websites",
    description: "Distinctive personal portfolios that showcase your work, tell your story, and make a lasting impression.",
    accent: "from-emerald-500/20 to-green-500/10",
    border: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
  {
    icon: <Layers size={28} />,
    title: "Frontend for Web Apps",
    description: "Clean, maintainable React frontends integrated with APIs, built with performance and scalability in mind.",
    accent: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-500/40",
    iconColor: "text-orange-400",
  },
  {
    icon: <Component size={28} />,
    title: "UI Component Development",
    description: "Reusable, accessible UI components built with Tailwind CSS that slot into your existing design system.",
    accent: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/40",
    iconColor: "text-pink-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" data-testid="section-services">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What I Build</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Whether you're a startup, a small business, or an individual — I can help you build a clean, modern web presence that works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative p-7 rounded-2xl bg-gradient-to-br ${service.accent} border border-border ${service.border} transition-all duration-300 group cursor-default`}
              data-testid={`card-service-${idx}`}
            >
              <div className={`mb-5 ${service.iconColor} transition-transform duration-300 group-hover:scale-110 w-fit`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: services.length * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative p-7 rounded-2xl border border-dashed border-primary/40 hover:border-primary transition-all duration-300 flex flex-col items-start justify-between group"
            data-testid="card-service-cta"
          >
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-widest">Have a project?</p>
              <h3 className="text-xl font-display font-bold mb-3">Let's Work Together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Tell me about your idea and I'll get back to you within 24 hours.</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
