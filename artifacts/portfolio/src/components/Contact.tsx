import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_b8m026x";
const EMAILJS_TEMPLATE_ID = "template_eoqv3r6";
const EMAILJS_PUBLIC_KEY = "zdt7U3xUzKIF-t8lP";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-border text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-[15px]";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const socialLinks = [
    { href: "https://linkedin.com/in/amina-maqsood09", label: "LinkedIn", icon: <Linkedin size={19} />, testId: "link-linkedin" },
    { href: "https://github.com/amina-maqsood09", label: "GitHub", icon: <Github size={19} />, testId: "link-github" },
    { href: "https://x.com/AmnaMaqsood09", label: "X (Twitter)", icon: <XIcon size={19} />, testId: "link-twitter" },
  ];

  return (
    <section id="contact" className="py-24 md:py-28 bg-slate-50/70 dark:bg-muted/20 border-t border-border scroll-mt-24" data-testid="section-contact">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-5 text-foreground">Let's build something great.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're a recruiter, a startup looking for a frontend developer, or someone with a project idea — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ── Left: info cards ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            className="space-y-3"
          >
            {/* Email */}
            <a
              href="mailto:amnamaqsood931@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-border hover:border-primary/50 hover:shadow-md hover:shadow-violet-500/8 transition-all duration-200 group"
              data-testid="link-email"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <Mail size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Email</p>
                <p className="font-semibold text-foreground truncate text-[15px]">amnamaqsood931@gmail.com</p>
              </div>
            </a>

            {/* Phone → WhatsApp */}
            <a
              href="https://wa.me/923414430561"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-border hover:border-primary/50 hover:shadow-md hover:shadow-violet-500/8 transition-all duration-200 group"
              data-testid="link-phone"
            >
              <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-violet-50 dark:group-hover:bg-violet-950/50 group-hover:text-primary group-hover:scale-110 transition-all duration-200 flex-shrink-0">
                <Phone size={19} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">WhatsApp</p>
                <p className="font-semibold text-foreground text-[15px]">+92 341 4430561</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-border">
              <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">Location</p>
                <p className="font-semibold text-foreground text-[15px]">Vehari, Punjab, Pakistan (Remote-Ready)</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-1">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.testId}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-border flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/50 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:shadow-sm transition-all duration-200"
                  data-testid={link.testId}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Response note */}
            <div className="p-4 rounded-xl bg-violet-50/80 dark:bg-violet-950/30 border border-violet-200/70 dark:border-violet-800/50">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Response time:</span> I typically reply within 24 hours. For urgent matters, reach me directly by email or WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            className="bg-white dark:bg-slate-900 border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col items-center justify-center text-center py-14 gap-4"
                  data-testid="form-success"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, delay: 0.1 }}
                  >
                    <CheckCircle size={52} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Message sent!</h3>
                  <p className="text-muted-foreground max-w-xs text-[15px]">I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" data-testid="input-name" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" data-testid="input-email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="Project enquiry / Internship / Just saying hi" data-testid="input-subject" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell me about your project, opportunity, or just say hi..." data-testid="input-message" />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 text-sm"
                      data-testid="form-error"
                    >
                      <AlertCircle size={15} className="flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-violet-700 shadow-sm shadow-violet-500/20 hover:shadow-md hover:shadow-violet-500/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-[15px]"
                    data-testid="btn-send-message"
                  >
                    {status === "sending" ? (
                      <><Loader size={15} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
