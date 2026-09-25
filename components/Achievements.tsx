"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '@/lib/portfolio';

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="achievements"
      ref={ref}
      aria-labelledby="achievements-heading"
      style={{
        padding: '7rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(26,26,46,0.06)',
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
            DOCUMENTED IMPACT
          </span>
        </motion.div>

        <motion.h2
          id="achievements-heading"
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
          Key achievements &amp; metrics
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                background: '#F4F5F7',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                border: '1px solid rgba(26,26,46,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: ach.color,
                }}
                aria-hidden="true"
              />

              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: ach.color,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {ach.value}
              </div>

              <h3
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#1A1A2E',
                  marginBottom: '0.75rem',
                }}
              >
                {ach.label}
              </h3>

              <p style={{ fontSize: '0.85rem', color: '#5C5C7A', lineHeight: 1.55 }}>
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
