import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative" data-testid="section-about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Engineering with <span className="text-primary">intent.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I am a second-year Bachelor of Software Engineering student at COMSATS University Islamabad, Vehari Campus. What started as curiosity about how the web works has evolved into a disciplined pursuit of software architecture and frontend engineering.
              </p>
              <p>
                Currently, I am expanding my horizons into Artificial Intelligence. I believe the future of software isn't just about rendering data on a screen—it's about creating intelligent systems that understand user intent.
              </p>
              <p>
                When I'm not writing code, I'm analyzing algorithms, designing scalable databases, or exploring network security concepts. I build things to learn, and I learn to build better things.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl relative z-10">
              <h3 className="text-2xl font-display font-bold mb-6">The Journey So Far</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">4</div>
                  <div>
                    <h4 className="font-bold text-foreground">Current Semester</h4>
                    <p className="text-sm text-muted-foreground mt-1">Deep diving into Advanced Data Structures and OOP.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">2</div>
                  <div>
                    <h4 className="font-bold text-foreground">Internships Completed</h4>
                    <p className="text-sm text-muted-foreground mt-1">Applied theoretical knowledge to production environments.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="font-bold text-foreground">Singular Focus</h4>
                    <p className="text-sm text-muted-foreground mt-1">Building world-class software that solves real problems.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl -z-10 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
