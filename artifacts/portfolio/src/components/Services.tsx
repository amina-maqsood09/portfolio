import React from "react";
import { motion } from "framer-motion";
import { Globe, Layout, User, Layers, Component } from "lucide-react";

const services = [
  { icon: <Globe size={26} />, title: "Responsive Websites", description: "Pixel-perfect, mobile-first websites that look and perform great on every screen size and device." },
  { icon: <Layout size={26} />, title: "Landing Pages", description: "High-converting landing pages with clean design, fast load times, and compelling calls to action." },
  { icon: <User size={26} />, title: "Portfolio Websites", description: "Distinctive personal portfolios that showcase your work, tell your story, and make a lasting impression." },
  { icon: <Layers size={26} />, title: "Frontend for Web Apps", description: "Clean, maintainable React frontends integrated with APIs, built with performance and scalability in mind." },
  { icon: <Component size={26} />, title: "UI Component Development", description: "Reusable, accessible UI components built with Tailwind CSS that slot into your existing design system." },
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white">What I Build</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            Whether you're a startup, a small business, or an individual — I can help you build a clean, modern web presence that works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="relative p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-slate-700 transition-all duration-200 group cursor-default overflow-hidden"
              data-testid={`card-service-${idx}`}
            >
              {/* Subtle gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-50 dark:from-amber-950/40 to-transparent rounded-bl-3xl pointer-events-none" />

              {/* Blue top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="mb-5 text-primary group-hover:scale-110 transition-transform duration-200 w-fit relative z-10">
                {service.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2.5 text-slate-900 dark:text-white relative z-10">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: services.length * 0.07 }}
            whileHover={{ y: -4 }}
            className="relative p-7 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-all duration-200 flex flex-col items-start justify-between group"
            data-testid="card-service-cta"
          >
            <div>
              <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-widest">Have a project?</p>
              <h3 className="text-lg font-display font-bold mb-3 text-slate-900 dark:text-white">Let's Work Together</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Tell me about your idea and I'll get back to you within 24 hours.</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
