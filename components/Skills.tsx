"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import {
  Settings,
  Zap,
  Code2,
  ArrowLeftRight,
  Database,
  Wrench,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  dynamics: <Settings size={18} />,
  power: <Zap size={18} />,
  code: <Code2 size={18} />,
  integration: <ArrowLeftRight size={18} />,
  data: <Database size={18} />,
  tools: <Wrench size={18} />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c1a] to-[#0a1628]/40" />

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
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Expertise
          </h2>
          <p className="mt-3 text-white/50 max-w-xl">
            Deep specialization in Microsoft Power Platform and Dynamics 365 CE
            ecosystem.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.08 }}
              className="glass-card rounded-xl p-6 hover:border-white/15 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${group.color}20`,
                    color: group.color,
                  }}
                >
                  {icons[group.icon]}
                </div>
                <h3 className="text-white font-semibold text-sm">
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + gi * 0.06 + si * 0.03 }}
                    className="skill-badge px-2.5 py-1 rounded-md text-xs text-white/70 font-medium"
                    style={{
                      borderColor: `${group.color}25`,
                      background: `${group.color}0d`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
