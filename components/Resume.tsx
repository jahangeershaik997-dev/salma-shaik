"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import { profile } from '@/lib/portfolio';

const coreExpertise = [
  'Dynamics 365 CE',
  'Microsoft Dataverse',
  'Power Apps (Model-Driven & Canvas)',
  'Power Automate',
  'C#.NET Plugins (Sync & Async)',
  'Custom Workflow Activities',
  'JavaScript Form Scripting',
  'Business Process Flows',
  'Ribbon Workbench',
  'FetchXML',
  'WebAPI & REST',
  'SSIS Migration',
  'CRM SDK',
  'SSRS Reporting',
  'Security Roles & User Admin',
  'Solution Management',
];

export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="resume"
      ref={ref}
      aria-labelledby="resume-heading"
      style={{
        padding: '7rem 0',
        background: '#F4F5F7',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section Label */}
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
            06 / RESUME
          </span>
        </motion.div>

        <motion.h2
          id="resume-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#1A1A2E',
            marginBottom: '0.75rem',
            lineHeight: 1.15,
          }}
        >
          Professional resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1rem', color: '#9B9BB4', marginBottom: '3.5rem', maxWidth: '560px' }}
        >
          Download or view my full resume for a complete overview of my Dynamics 365 CE, Power Apps, and enterprise CRM experience.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="resume-grid"
        >
          {/* LEFT Column — Profile Card + Experience Snapshot + Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Profile Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              {/* Accent top strip */}
              <div
                style={{ height: '4px', background: 'linear-gradient(90deg, #0078D4, #742774)' }}
                aria-hidden="true"
              />
              <div style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9B9BB4', marginBottom: '0.5rem' }}>
                    Professional Profile
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#1A1A2E',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {profile.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#0078D4', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {profile.title}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={statChip}>
                      <span style={{ color: '#0078D4', fontWeight: 700 }}>4+</span> Years Experience
                    </span>
                    <span style={statChip}>
                      📍 {profile.location}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={profile.resumeDocx}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Salma Shaik's resume document"
                    style={primaryCTA}
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    View Resume
                  </a>
                  <a
                    href={profile.resumeDocx}
                    download="Salma_Shaik_Resume.docx"
                    aria-label="Download Salma Shaik's resume as Word document"
                    style={outlineCTA}
                  >
                    <Download size={15} aria-hidden="true" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Experience Snapshot */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Briefcase size={16} style={{ color: '#0078D4' }} aria-hidden="true" />
                <h3 style={sectionHead}>Experience Snapshot</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  style={{
                    borderLeft: '2px solid #0078D4',
                    paddingLeft: '1rem',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-5px',
                      top: '4px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#0078D4',
                      border: '2px solid #FFFFFF',
                    }}
                    aria-hidden="true"
                  />
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.72rem', color: '#0078D4', fontWeight: 600 }}>
                      August 2022 – Present
                    </span>
                    <span
                      style={{
                        fontSize: '0.58rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#0078D4',
                        background: 'rgba(0,120,212,0.1)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                      }}
                    >
                      Current
                    </span>
                  </div>
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.15rem' }}>
                    Starlite Infotech
                  </p>
                  <p style={{ fontSize: '0.82rem', color: '#0078D4', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Power Apps Developer
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#5C5C7A' }}>
                    · Energy Financials (Microsoft Cloud Operations)
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#5C5C7A' }}>
                    · Coats Group PLC (Dynamics 365 Sales Implementation)
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#5C5C7A' }}>
                    · Avutox Child Safety &amp; Family Services CRM Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Education Snapshot */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={16} style={{ color: '#0078D4' }} aria-hidden="true" />
                <h3 style={sectionHead}>Education</h3>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1A1A2E' }}>B.Sc. (MPCS) · 80%</p>
                <p style={{ fontSize: '0.82rem', color: '#5C5C7A' }}>ASN Degree College, Tenali · Acharya Nagarjuna University (2022)</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT Column — Core Expertise + Outcomes + Dark CTA Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Core Expertise Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <h3 style={{ ...sectionHead, marginBottom: '1.25rem' }}>Core Technical Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {coreExpertise.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                    style={skillTag}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Highlight Metric Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(26,26,46,0.07)',
                boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Award size={16} style={{ color: '#0078D4' }} aria-hidden="true" />
                <h3 style={sectionHead}>Key Achievements</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem 1rem', background: '#F4F5F7', borderRadius: '10px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0078D4', fontFamily: "'Space Grotesk', sans-serif" }}>85%</span>
                  <span style={{ fontSize: '0.82rem', color: '#1A1A2E', fontWeight: 600 }}>Manual data-entry reduction for Microsoft Cloud Operations</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem 1rem', background: '#F4F5F7', borderRadius: '10px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#742774', fontFamily: "'Space Grotesk', sans-serif" }}>500+</span>
                  <span style={{ fontSize: '0.82rem', color: '#1A1A2E', fontWeight: 600 }}>Regional sales users across 8 regions for Coats Group PLC</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem 1rem', background: '#F4F5F7', borderRadius: '10px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#005A9E', fontFamily: "'Space Grotesk', sans-serif" }}>5,000+</span>
                  <span style={{ fontSize: '0.82rem', color: '#1A1A2E', fontWeight: 600 }}>Active cases supported on Avutox social welfare platform</span>
                </div>
              </div>
            </motion.div>

            {/* Dark CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                background: '#1A1A2E',
                borderRadius: '20px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                Ready to collaborate?
              </p>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.45 }}>
                Get the full resume with complete project details and technical responsibilities.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={profile.resumeDocx}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume in new tab"
                  style={{ ...primaryCTA, background: '#0078D4' }}
                >
                  <ExternalLink size={15} aria-hidden="true" />
                  View Resume
                </a>
                <a
                  href={profile.resumeDocx}
                  download="Salma_Shaik_Resume.docx"
                  aria-label="Download resume as Word document"
                  style={{
                    ...outlineCTA,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                  }}
                >
                  <Download size={15} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Shared styles ─── */
const statChip: React.CSSProperties = {
  fontSize: '0.78rem',
  color: '#5C5C7A',
  background: '#F4F5F7',
  border: '1px solid rgba(26,26,46,0.07)',
  padding: '0.3rem 0.75rem',
  borderRadius: '999px',
  fontWeight: 500,
};

const primaryCTA: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
  padding: '0.75rem 1.4rem',
  background: '#0078D4',
  color: '#FFFFFF',
  borderRadius: '10px',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  letterSpacing: '0.01em',
};

const outlineCTA: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.45rem',
  padding: '0.75rem 1.4rem',
  background: '#F4F5F7',
  color: '#1A1A2E',
  borderRadius: '10px',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  border: '1px solid rgba(26,26,46,0.1)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};

const sectionHead: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '0.92rem',
  fontWeight: 700,
  color: '#1A1A2E',
  margin: 0,
};

const skillTag: React.CSSProperties = {
  fontSize: '0.775rem',
  fontWeight: 600,
  color: '#1A1A2E',
  background: '#F4F5F7',
  border: '1px solid rgba(26,26,46,0.07)',
  padding: '0.3rem 0.75rem',
  borderRadius: '8px',
  letterSpacing: '0.01em',
  display: 'inline-block',
};
