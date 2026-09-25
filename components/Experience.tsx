"use client";
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/lib/portfolio';

const categoryColors: Record<string, string> = {
  customization: '#0078D4',
  development: '#005A9E',
  automation: '#107C41',
  integration: '#742774',
  reporting: '#E3008C',
  security: '#004B87',
};

const categoryLabels: Record<string, string> = {
  customization: 'CUSTOMIZATION & FORMS',
  development: 'C#.NET & JAVASCRIPT DEVELOPMENT',
  automation: 'PROCESS AUTOMATION & FLOWS',
  integration: 'INTEGRATION & DATA MIGRATION',
  reporting: 'REPORTING & DASHBOARDS',
  security: 'SECURITY & SOLUTION MANAGEMENT',
};

function CategorySection({ catKey, items }: { catKey: string; items: string[] }) {
  const [open, setOpen] = useState(true);
  const color = categoryColors[catKey] || '#0078D4';

  return (
    <div
      style={{
        background: '#F4F5F7',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(26,26,46,0.06)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.875rem 1.25rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: '#1A1A2E',
          fontFamily: 'inherit',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: color,
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {categoryLabels[catKey] || catKey.toUpperCase()}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} style={{ color: '#9B9BB4' }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    fontSize: '0.85rem',
                    color: '#5C5C7A',
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: color, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExperienceCard({ exp, index }: { exp: typeof experience[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3px 1.4fr',
        gap: '0 2.5rem',
        marginBottom: '3rem',
        alignItems: 'start',
      }}
      className="exp-card"
    >
      {/* Left Meta */}
      <div style={{ textAlign: 'right', paddingTop: '0.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {exp.current && (
            <span
              style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#0078D4',
                background: 'rgba(0,120,212,0.1)',
                padding: '0.25rem 0.65rem',
                borderRadius: '999px',
              }}
            >
              CURRENT POSITION
            </span>
          )}
        </div>
        <p style={{ fontSize: '0.82rem', color: '#0078D4', fontWeight: 600, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
          <Calendar size={13} />
          {exp.period}
        </p>
        <p style={{ fontSize: '0.95rem', color: '#1A1A2E', fontWeight: 700, marginBottom: '0.25rem' }}>
          {exp.company}
        </p>
        <p style={{ fontSize: '0.8rem', color: '#9B9BB4' }}>
          Hyderabad / Client Onsite
        </p>
      </div>

      {/* Timeline Line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#0078D4',
            border: '2px solid #FFFFFF',
            boxShadow: '0 0 0 2px #0078D4',
            flexShrink: 0,
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: '2px',
            flex: 1,
            minHeight: '120px',
            background: 'linear-gradient(180deg, #0078D4, rgba(0,120,212,0.15))',
            marginTop: '6px',
          }}
        />
      </div>

      {/* Right Content Card */}
      <div>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(26,26,46,0.07)',
            boxShadow: '0 2px 16px rgba(26,26,46,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Briefcase size={18} style={{ color: '#0078D4' }} />
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#1A1A2E',
                letterSpacing: '-0.01em',
              }}
            >
              {exp.role}
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#0078D4', marginBottom: '1rem', fontWeight: 600 }}>
            {exp.company}
          </p>

          <p style={{ fontSize: '0.9rem', color: '#5C5C7A', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {exp.summary}
          </p>

          {/* Categorized Responsibilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {Object.entries(exp.categories).map(([key, items]) => (
              <CategorySection key={key} catKey={key} items={items} />
            ))}
          </div>

          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem', borderTop: '1px solid rgba(26,26,46,0.05)', paddingTop: '1.25rem' }}>
            {exp.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#5C5C7A',
                  background: '#F4F5F7',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(26,26,46,0.08)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-heading"
      style={{
        padding: '7rem 0',
        background: '#F4F5F7',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '1rem' }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0078D4',
            }}
          >
            02 / EXPERIENCE
          </span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1A2E',
            marginBottom: '3.5rem',
            lineHeight: 1.15,
          }}
        >
          Professional experience
        </motion.h2>

        <div>
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-card {
            grid-template-columns: 3px 1fr !important;
            gap: 0 1.5rem !important;
          }
          .exp-card > div:first-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
