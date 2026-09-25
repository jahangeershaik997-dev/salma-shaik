"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { Briefcase, CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a1628]/30" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 section-line" />
            <span className="text-[#0078d4] text-sm font-medium tracking-widest uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line opacity-30 hidden lg:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="relative lg:pl-16"
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#0078d4]/20 border border-[#0078d4]/40 items-center justify-center">
                <Briefcase size={18} className="text-[#0078d4]" />
              </div>

              <div className="glass-card rounded-2xl p-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-[#0078d4] font-semibold">
                      {exp.company}
                    </div>
                    <div className="text-white/40 text-sm mt-1">{exp.domain}</div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0078d4]/10 border border-[#0078d4]/20 text-[#0078d4] text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#0078d4] rounded-full animate-pulse" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, ri) => (
                    <motion.div
                      key={ri}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + ri * 0.05 }}
                      className="flex items-start gap-3 text-white/65 text-sm leading-relaxed"
                    >
                      <CheckCircle
                        size={15}
                        className="text-[#0078d4] mt-0.5 shrink-0"
                      />
                      {resp}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
