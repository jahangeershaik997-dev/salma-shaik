"use client";
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Skip preloader for users who prefer reduced motion
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <a
            href="#about"
            style={{
              position: 'absolute',
              top: '-100px',
              left: 0,
              background: '#0078D4',
              color: 'white',
              padding: '0.5rem 1rem',
              zIndex: 9999,
              borderRadius: '0 0 8px 0',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
            onFocus={(e) => (e.currentTarget.style.top = '0')}
            onBlur={(e) => (e.currentTarget.style.top = '-100px')}
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            <Hero />
            <Marquee />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Achievements />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
