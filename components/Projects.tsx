"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FlowDiagram({
  steps,
  color,
}: {
  steps: string[];
  color: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-white border"
            style={{
              borderColor: `${color}40`,
              background: `${color}15`,
            }}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ChevronRight size={12} className="opacity-30 text-white shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

type Project = typeof projects[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card rounded-2xl overflow-hidden"
      style={{ borderColor: `${project.color}20` }}
    >
      {/* Project header bar */}
      <div
        className="h-1"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  color: project.color,
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {project.domain}
              </span>
              <span className="text-xs text-white/30 border border-white/10 px-2.5 py-1 rounded-full">
                {project.role}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
              {"subtitle" in project && (
                <span className="text-white/40 font-normal text-lg">
                  {" "}
                  — {project.subtitle}
                </span>
              )}
            </h3>
            <div className="text-white/40 text-sm">
              Client:{" "}
              <span className="text-white/60 font-medium">{project.client}</span>
            </div>
          </div>

          {/* Metric(s) */}
          <div className="flex gap-4 shrink-0">
            {"metric" in project && project.metric && (
              <div
                className="px-5 py-4 rounded-xl text-center"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: project.color }}
                >
                  {project.metric.value}
                </div>
                <div className="text-white/50 text-xs mt-1 max-w-[120px]">
                  {project.metric.label}
                </div>
              </div>
            )}
            {"metrics" in project && project.metrics &&
              project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-5 py-4 rounded-xl text-center"
                  style={{
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: project.color }}
                  >
                    {m.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1 max-w-[100px]">
                    {m.label}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Flow diagram */}
        <div className="mb-6">
          <div className="text-white/30 text-xs uppercase tracking-widest mb-2">
            Process Flow
          </div>
          <FlowDiagram steps={project.flow} color={project.color} />
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <div className="text-white/30 text-xs uppercase tracking-widest mb-3">
            Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs text-white/60 border border-white/8 bg-white/3"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <div className="text-white/30 text-xs uppercase tracking-widest mb-3">
            Key Contributions
          </div>
          <div
            className={`grid md:grid-cols-2 gap-2 ${
              isEven ? "" : "lg:grid-flow-row-dense"
            }`}
          >
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-white/55 leading-relaxed"
              >
                <CheckCircle
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: project.color }}
                />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 to-[#050c1a]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 section-line" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Enterprise Project Experience
          </h2>
          <p className="mt-3 text-white/50 max-w-xl">
            Production CRM implementations delivered during tenure at Starlite
            Infotech.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
