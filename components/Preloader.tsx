"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { profile } from '@/lib/portfolio';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Elegant boot sequence
    const steps = [0, 25, 48, 72, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, 160);
    return () => clearInterval(interval);
  }, [onComplete]);

  const line: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0F121C',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            gap: '2rem',
          }}
        >
          {/* Boot label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0078D4',
              fontWeight: 600,
            }}
          >
            // SYSTEM BOOT SEQUENCE
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            {profile.name.toUpperCase()}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 500,
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            MICROSOFT POWER APPS &amp; DYNAMICS 365 CE DEVELOPER
          </motion.p>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ width: 'min(320px, 80vw)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {/* Track */}
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #0078D4, #5EA6F5)',
                  borderRadius: '2px',
                  transition: 'width 0.25s ease',
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Percentage */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
                INITIALIZING DATAVERSE
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: '#5EA6F5',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={line}
            initial="hidden"
            animate="visible"
            style={{ width: 'min(320px, 80vw)', height: '1px', background: 'rgba(0,120,212,0.3)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
