import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border" data-testid="section-contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something great.</h2>
          <p className="text-lg text-muted-foreground">
            I'm currently looking for internship opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="mailto:amnamaqsood931@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <p className="font-semibold">amnamaqsood931@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Phone</p>
                <p className="font-semibold">+92 341 4430561</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Location</p>
                <p className="font-semibold">Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/amina-maqsood09" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/amina-maqsood09" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-2xl"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
