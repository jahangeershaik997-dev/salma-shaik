"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-[#060d1f]/30" />
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Experience
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Professional Experience</h2>
          <p className="text-white/45 mt-3 max-w-lg mx-auto text-sm">Building enterprise CRM solutions across energy, manufacturing, and social services.</p>
        </motion.div>

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="hidden lg:flex absolute -left-6 top-8 w-12 h-12 rounded-full glass border-2 border-[#0078d4]/30 items-center justify-center">
              <Briefcase size={18} className="text-[#0078d4]" />
            </div>

            <div className="glass rounded-2xl p-8 lg:ml-8 border border-white/6 hover:border-[#0078d4]/20 transition-colors duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="badge badge-blue flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-[#5ea6f5] font-semibold text-base">{exp.company}</div>
                  <div className="text-white/35 text-xs mt-1">{exp.domain}</div>
                </div>
                <div className="shrink-0 glass px-4 py-2 rounded-xl text-[#5ea6f5] text-sm font-medium text-center">
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="grid sm:grid-cols-2 gap-3">
                {exp.responsibilities.map((r, ri) => (
                  <motion.div
                    key={ri}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + ri * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-white/60 leading-snug"
                  >
                    <CheckCircle2 size={13} className="text-[#0078d4] mt-0.5 shrink-0" />
                    {r}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
