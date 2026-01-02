import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative z-0 bg-gradient-to-br from-slate-950 to-blue-950 text-white">
      <CustomCursor />
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <div id="skills" className="py-20">
            <Skills />
        </div>
        <div id="experience" className="py-20">
            <Experience />
        </div>
        <div id="projects" className="py-20">
            <Projects />
        </div>
        <div id="education" className="py-20">
            <Education />
        </div>
        <div id="achievements" className="py-20">
            <Achievements />
        </div>
        <div id="contact" className="py-20">
            <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;