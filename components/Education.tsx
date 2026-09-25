"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, Award } from "lucide-react";

const colors = ["#0078d4", "#742774", "#7c3aed"];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a1628]/30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 section-line" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Academic Background
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card rounded-xl p-6 border-t-2 hover:scale-[1.02] transition-transform duration-300"
              style={{ borderTopColor: colors[i] }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                style={{ background: `${colors[i]}18` }}
              >
                <GraduationCap size={20} style={{ color: colors[i] }} />
              </div>

              {/* Degree */}
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: colors[i] }}
              >
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-white font-medium text-sm mb-1">
                {edu.institution}
              </p>
              {edu.university && (
                <p className="text-white/40 text-xs mb-4">{edu.university}</p>
              )}

              {/* Meta */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/6">
                <div className="flex items-center gap-1.5 text-white/50 text-xs">
                  <Calendar size={12} />
                  {edu.year}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: colors[i] }}>
                  <Award size={12} />
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
