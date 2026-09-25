"use client";
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/portfolio';

function ArchitectureDiagram({ modules, color }: { modules: string[]; color: string }) {
  return (
    <div
      style={{
        background: `${color}08`,
        borderRadius: '16px',
        border: `1px solid ${color}20`,
        padding: '1.5rem',
        marginBottom: '1.5rem',
      }}
      role="img"
      aria-label="Dataverse module architecture diagram"
    >
      <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: color, marginBottom: '1rem' }}>
        DATAVERSE ENTITIES &amp; MODULES
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        {modules.map((mod) => (
          <div
            key={mod}
            style={{
              background: '#FFFFFF',
              border: `1px solid ${color}25`,
              borderRadius: '8px',
              padding: '0.4rem 0.85rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#1A1A2E',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              boxShadow: '0 1px 4px rgba(26,26,46,0.04)',
            }}
          >
            <span
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: color }}
              aria-hidden="true"
            />
            <span>{mod}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStackDisplay({ techStack }: { techStack: Record<string, string[] | undefined> }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
      {Object.entries(techStack).map(([layer, items]) => (
        <div key={layer}>
          <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B9BB4', marginBottom: '0.4rem' }}>
            {layer}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {items && items.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#5C5C7A',
                  background: '#F4F5F7',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(26,26,46,0.08)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(26,26,46,0.07)',
        boxShadow: '0 4px 20px rgba(26,26,46,0.07)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card Header Strip */}
      <div
        style={{
          height: '4px',
          background: `linear-gradient(90deg, ${project.color}, ${project.color}66)`,
        }}
        aria-hidden="true"
      />

      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Type Badge + Numeric Watermark */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: project.color,
              background: `${project.color}12`,
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
            }}
          >
            {project.type}
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '2rem',
              fontWeight: 800,
              color: 'rgba(26,26,46,0.07)',
              letterSpacing: '-0.03em',
            }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#1A1A2E',
            letterSpacing: '-0.02em',
            marginBottom: '0.35rem',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: project.color, marginBottom: '0.85rem', fontWeight: 600 }}>
          {project.company} · {project.role}
        </p>

        <p style={{ fontSize: '0.9rem', color: '#5C5C7A', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Impact callout */}
        <div
          style={{
            background: `${project.color}08`,
            borderLeft: `3px solid ${project.color}`,
            borderRadius: '0 8px 8px 0',
            padding: '0.6rem 0.85rem',
            marginBottom: '1.25rem',
          }}
        >
          <p style={{ fontSize: '0.78rem', color: '#1A1A2E', fontWeight: 600 }}>
            Impact: <span style={{ color: project.color }}>{project.impact}</span>
          </p>
        </div>

        {/* Modules Diagram */}
        {project.modules && <ArchitectureDiagram modules={project.modules} color={project.color} />}

        {/* Expand/Collapse Tech Stack */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: project.color,
            fontFamily: 'inherit',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            padding: '0',
            marginBottom: expanded ? '1rem' : '0',
          }}
        >
          <span>{expanded ? '− Hide ' : '+ View '}Detailed Tech Stack</span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <TechStackDisplay techStack={project.techStack} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Pills at bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', borderTop: '1px solid rgba(26,26,46,0.05)', paddingTop: '1.25rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#5C5C7A',
                background: '#F4F5F7',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                border: '1px solid rgba(26,26,46,0.07)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-heading"
      style={{
        padding: '7rem 0',
        background: '#FFFFFF',
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
            03 / PROJECTS
          </span>
        </motion.div>

        <motion.h2
          id="projects-heading"
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
          Enterprise CRM projects delivered
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1rem', color: '#9B9BB4', marginBottom: '3.5rem', maxWidth: '560px' }}
        >
          Production solutions built on Microsoft Dynamics 365 CE, Dataverse, and Power Automate.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
