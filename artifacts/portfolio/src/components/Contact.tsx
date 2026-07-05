import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_b8m026x";
const EMAILJS_TEMPLATE_ID = "template_eoqv3r6";
const EMAILJS_PUBLIC_KEY = "zdt7U3xUzKIF-t8lP";

type FormStatus = "idle" | "sending" | "success" | "error";

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
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-28 bg-muted/30 border-t border-border" data-testid="section-contact">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something great.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're a recruiter, a startup looking for a frontend developer, or someone with a project idea — I'd love to hear from you. Let's make something worth being proud of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
            className="space-y-4"
          >
            <a
              href="mailto:amnamaqsood931@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              data-testid="link-email"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <p className="font-semibold truncate">amnamaqsood931@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Phone</p>
                <p className="font-semibold">+92 341 4430561</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Location</p>
                <p className="font-semibold">Islamabad, Pakistan (Remote-Ready)</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/amina-maqsood09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/amina-maqsood09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                data-testid="link-github"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Response time:</span> I typically reply within 24 hours. For urgent matters, reach me directly by email or phone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
            className="glass-card p-6 md:p-8 rounded-2xl"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 gap-4"
                  data-testid="form-success"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={56} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold">Message sent!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-medium text-primary hover:underline"
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
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your name"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Project enquiry / Internship / Just saying hi"
                      data-testid="input-subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      data-testid="input-message"
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                      data-testid="form-error"
                    >
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    data-testid="btn-send-message"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
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
