"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { CheckCircle2, ChevronRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65 }}
      className="glass rounded-2xl overflow-hidden border border-white/6 hover:border-white/12 transition-colors duration-300 card-hover"
    >
      {/* Top accent */}
      <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge" style={{ background: `${project.color}18`, border: `1px solid ${project.color}30`, color: project.color }}>
                {project.index}
              </span>
              <span className="badge" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(232,237,245,0.45)" }}>
                {project.domain}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-white/40 text-sm font-medium mb-1">{project.subtitle}</p>
            <p className="text-white/30 text-xs">Client: <span className="text-white/50 font-medium">{project.client}</span> · {project.role}</p>
          </div>

          {/* Impact metric */}
          <div className="shrink-0 text-center px-7 py-5 rounded-xl" style={{ background: `${project.color}10`, border: `1px solid ${project.color}25` }}>
            <div className="text-3xl font-bold mb-1" style={{ color: project.color }}>{project.impact.value}</div>
            <div className="text-white/45 text-xs max-w-[140px] leading-tight">{project.impact.label}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Flow */}
        <div className="mb-6">
          <div className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-semibold mb-3">Process Flow</div>
          <div className="flex flex-wrap items-center gap-2">
            {project.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="text-xs font-medium px-3 py-1.5 rounded-lg" style={{ background: `${project.color}12`, border: `1px solid ${project.color}25`, color: `${project.color}` }}>
                  {step}
                </div>
                {i < project.flow.length - 1 && <ChevronRight size={12} className="text-white/20" />}
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <div className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-semibold mb-3">Technologies</div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/4 border border-white/7 text-white/50">{t}</span>
            ))}
          </div>
        </div>

        {/* Key contributions */}
        <div>
          <div className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-semibold mb-3">Key Contributions</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/55 leading-snug">
                <CheckCircle2 size={12} className="mt-0.5 shrink-0" style={{ color: project.color }} />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f]/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Projects
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Enterprise Project Experience</h2>
          <p className="text-white/45 mt-3 max-w-lg mx-auto text-sm">Production CRM implementations delivered at Starlite Infotech.</p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
