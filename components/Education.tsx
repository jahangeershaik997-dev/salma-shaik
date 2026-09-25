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
    <section id="education" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060d1f]/30 to-transparent" />
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="section-label justify-center mb-12">
          Education
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass rounded-2xl p-6 border-t-2 card-hover"
              style={{ borderTopColor: colors[i] }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${colors[i]}15` }}>
                <GraduationCap size={20} style={{ color: colors[i] }} />
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: colors[i] }}>{edu.degree}</h3>
              <p className="text-white font-medium text-sm mb-1 leading-snug">{edu.institution}</p>
              {edu.university && <p className="text-white/35 text-xs mb-4 leading-snug">{edu.university}</p>}

              <div className="mt-auto pt-4 border-t border-white/6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar size={11} /> {edu.year}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: colors[i] }}>
                  <Award size={11} /> {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
