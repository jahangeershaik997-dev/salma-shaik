"use client";
import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Download, ArrowRight, ChevronDown, Briefcase } from 'lucide-react';
import { profile, heroStats } from '@/lib/portfolio';

export default function Hero() {
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle parallax on background watermark text
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgTextRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgTextRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #F4F5F7 0%, #EBF0F7 100%)',
      }}
    >
      {/* Background decorative watermark typography */}
      <div
        ref={bgTextRef}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          lineHeight: 0.85,
          color: 'rgba(0,120,212,0.035)',
          fontSize: 'clamp(7rem, 14vw, 13rem)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          textAlign: 'right',
          transition: 'transform 0.3s ease',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        DYNAMICS<br />365<br />POWER APPS
      </div>

      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(26,26,46,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,46,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      {/* Left accent vertical gradient bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          width: '3px',
          height: '35%',
          background: 'linear-gradient(180deg, transparent, #0078D4, transparent)',
          transformOrigin: 'top',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Main content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
        }}
        className="hero-content"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(0,120,212,0.08)',
              border: '1px solid rgba(0,120,212,0.2)',
              color: '#0078D4',
              padding: '0.4rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: '#16A34A',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(22,163,74,0.6)',
              }}
            />
            Available for enterprise opportunities
          </span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1A1A2E',
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7vw, 5.2rem)',
            }}
          >
            {profile.name}
          </span>
        </motion.h1>

        {/* Role Subtitle */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
            color: '#0078D4',
            letterSpacing: '0.01em',
            marginBottom: '1.5rem',
            lineHeight: 1.3,
          }}
        >
          Microsoft Power Apps &amp;<br />Dynamics 365 CE Developer
        </motion.h2>

        {/* First Person Tagline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#1A1A2E',
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: '680px',
            marginBottom: '1rem',
          }}
        >
          I&apos;m a Microsoft Power Apps and Dynamics 365 CE Developer with <strong style={{ color: '#0078D4' }}>4+ years of experience</strong> building and supporting enterprise CRM solutions.
        </motion.p>

        {/* Sub Copy */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '0.92rem',
            color: '#5C5C7A',
            lineHeight: 1.7,
            maxWidth: '640px',
            marginBottom: '2.5rem',
          }}
        >
          At <strong>Starlite Infotech</strong>, I specialize in Dataverse modeling, C#.NET plugins, custom workflow activities, JavaScript form scripts, Business Process Flows, and Power Automate workflows for global enterprises.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '16px',
            border: '1px solid rgba(26,26,46,0.06)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: '#0078D4',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#1A1A2E', fontWeight: 700, marginTop: '0.3rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#9B9BB4', fontWeight: 500, marginTop: '0.1rem' }}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location Info */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#5C5C7A',
            fontSize: '0.88rem',
            marginBottom: '2.5rem',
          }}
        >
          <MapPin size={15} style={{ color: '#0078D4' }} />
          <span>{profile.location}</span>
          <span style={{ color: '#9B9BB4', margin: '0 0.4rem' }}>•</span>
          <Briefcase size={14} style={{ color: '#0078D4' }} />
          <span>{profile.company}</span>
        </motion.div>

        {/* Hero CTAs */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            style={primaryBtn}
          >
            View Projects <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo('#experience')}
            style={outlineBtn}
          >
            View Experience
          </button>
          <a
            href={profile.resumeDocx}
            download="Salma_Shaik_Resume.docx"
            aria-label="Download Salma Shaik's resume"
            style={{ ...outlineBtn, gap: '0.4rem' }}
          >
            <Download size={15} /> Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#9B9BB4',
          zIndex: 2,
          cursor: 'pointer',
        }}
        onClick={() => scrollTo('#about')}
        aria-hidden="true"
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 1.75rem',
  background: '#0078D4',
  color: 'white',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  letterSpacing: '0.01em',
  boxShadow: '0 4px 14px rgba(0,120,212,0.25)',
};

const outlineBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 1.75rem',
  background: 'rgba(255,255,255,0.85)',
  color: '#1A1A2E',
  borderRadius: '999px',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  border: '1px solid rgba(26,26,46,0.12)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backdropFilter: 'blur(8px)',
};
