import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-white" data-testid="page-home">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Amina Maqsood. Designed & Built with intent.
          </p>
        </div>
      </footer>
    </div>
  );
}
