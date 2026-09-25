"use client";
import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { aboutHighlights, aboutExpertise } from '@/lib/portfolio';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      style={{
        padding: '7rem 0',
        background: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Top Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0078D4',
            }}
          >
            01 / ABOUT
          </span>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              id="about-heading"
              variants={item}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#1A1A2E',
                lineHeight: 1.15,
                marginBottom: '1.75rem',
              }}
            >
              Enterprise CRM engineering with a{' '}
              <span style={{ color: '#0078D4' }}>business-first</span> mindset.
            </motion.h2>

            <motion.p variants={item} style={bodyText}>
              I&apos;m a Microsoft Power Apps and Dynamics 365 CE Developer based in Guntur, Andhra Pradesh, India, with <strong>4+ years of hands-on experience</strong> at <strong>Starlite Infotech</strong> designing, building, configuring, and deploying enterprise-scale CRM platforms on Microsoft Dynamics 365 CE, Dataverse, and Power Automate.
            </motion.p>

            <motion.p variants={item} style={{ ...bodyText, marginTop: '1rem' }}>
              Working across mission-critical domains like energy management, global manufacturing sales operations, and child welfare case services, I specialize in the full lifecycle of CRM delivery. I develop synchronous and asynchronous C#.NET plugins, custom workflow activities, JavaScript form validations, Business Process Flows, and Power Automate automated workflows.
            </motion.p>

            <motion.p variants={item} style={{ ...bodyText, marginTop: '1rem' }}>
              I also build robust FetchXML aggregations, WebAPI integrations, SSRS reports, and support complex SSIS / CRM SDK data migrations with comprehensive post-migration data validation, role-based security configurations, and regression testing for seamless production cutovers.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              variants={item}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
              }}
            >
              {aboutHighlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    background: '#F4F5F7',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid rgba(26,26,46,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#0078D4',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {h.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1A2E', marginTop: '0.3rem' }}>
                    {h.label}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#9B9BB4', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.1rem' }}>
                    {h.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Core Expertise Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9B9BB4',
                marginBottom: '1.5rem',
              }}
            >
              Core Capabilities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {aboutExpertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.04, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: '#F4F5F7',
                    borderRadius: '10px',
                    border: '1px solid rgba(26,26,46,0.04)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#0078D4',
                      flexShrink: 0,
                      marginTop: '7px',
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: '0.875rem', color: '#1A1A2E', lineHeight: 1.5, fontWeight: 500 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const bodyText: React.CSSProperties = {
  fontSize: '1rem',
  color: '#5C5C7A',
  lineHeight: 1.75,
};
